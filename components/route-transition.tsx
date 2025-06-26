"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingProgress from "@/components/ui/loading-progress";

interface RouteTransitionProps {
  children: React.ReactNode;
}

const RouteTransition: React.FC<RouteTransitionProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentChildren, setCurrentChildren] = useState(children);
  const [nextChildren, setNextChildren] = useState<React.ReactNode>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Function to preload all images in a component
  const preloadImages = async (element: React.ReactNode): Promise<void> => {
    const imageSources: string[] = [];

    // Function to recursively find all image sources in the React element tree
    const findImages = (el: any) => {
      if (!el) return;

      // If it's an array or iterable, process each child
      if (
        Array.isArray(el) ||
        (el?.props?.children && typeof el.props.children !== "string")
      ) {
        React.Children.forEach(el.props?.children, findImages);
      }

      // Check for image sources in props
      if (el?.props) {
        if (el.props.src) imageSources.push(el.props.src);
        if (el.props.backgroundImage) {
          const url = el.props.backgroundImage.replace(
            /url\(['"](.+)['"]\)/,
            "$1"
          );
          imageSources.push(url);
        }
        // Check for inline styles with background-image
        if (el.props.style?.backgroundImage) {
          const url = el.props.style.backgroundImage.replace(
            /url\(['"](.+)['"]\)/,
            "$1"
          );
          imageSources.push(url);
        }
      }
    };

    findImages(element);

    // Preload all found images
    const preloadPromises = imageSources.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve; // Resolve even on error to not block transition
        img.src = src;
      });
    });

    await Promise.all(preloadPromises);
  };

  useEffect(() => {
    const loadNewPage = async () => {
      setIsLoading(true);

      // Store new children but don't show them yet
      setNextChildren(children);

      try {
        // Start preloading the new page content
        await preloadImages(children);

        // Wait minimum time for loader (800ms) while preloading happens
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Switch to new content only after everything is loaded
        setCurrentChildren(children);
      } catch (error) {
        console.error("Error preloading content:", error);
        // Still switch to new content even if preload fails
        setCurrentChildren(children);
      } finally {
        setIsLoading(false);
        setNextChildren(null);
      }
    };

    loadNewPage();
  }, [pathname, searchParams, children]);

  return (
    <>
      <LoadingProgress isLoading={isLoading} />
      {/* Keep next children hidden but rendered to trigger asset loading */}
      <div style={{ display: "none" }}>{nextChildren}</div>
      {/* Show current children */}
      {currentChildren}
    </>
  );
};

export default RouteTransition;
