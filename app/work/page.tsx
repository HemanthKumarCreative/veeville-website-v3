"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import DesignCarousel from "@/components/ui/design-carousel";
import TabFilter from "@/components/ui/tab-filter";
import PortfolioGrid from "@/components/ui/portfolio-grid";

// Import your data
import { slides, tabs, portfolioItems } from "./data";

export default function WorkPage() {
  // State - Always start with first tab
  const [activeTab, setActiveTab] = useState("Spotlighted");
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const pathname = usePathname();

  // Initialize page state on mount (page load)
  useEffect(() => {
    setActiveTab("Spotlighted");
    setIsPageLoaded(true);
  }, []);

  // Reset state when route changes
  useEffect(() => {
    setActiveTab("Spotlighted");
  }, [pathname]);

  // Event handlers
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Clean up any intervals or timeouts when component unmounts
  useEffect(() => {
    return () => {
      // Cleanup function to ensure no memory leaks
      setActiveTab("Spotlighted");
      setIsPageLoaded(false);
    };
  }, []);

  // Don't render until page is properly loaded and initialized
  if (!isPageLoaded) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Carousel - Will always start from first slide */}
      <DesignCarousel slides={slides} key={`carousel-${pathname}`} />

      {/* Tab Filter - Will always start with first tab */}
      <TabFilter
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabClick}
        key={`tabs-${pathname}`}
      />

      {/* Portfolio Section */}
      <section className="container mx-auto px-4 py-10">
        <PortfolioGrid 
          items={portfolioItems[activeTab] || []} 
          key={`portfolio-${activeTab}-${pathname}`}
        />
      </section>
    </main>
  );
}