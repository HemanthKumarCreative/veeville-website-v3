"use client";

import React, { useEffect, useState, useRef } from "react";

interface LoadingProgressProps {
  isLoading: boolean;
}

const LoadingProgress: React.FC<LoadingProgressProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isLoading) {
      // Start progress from 0
      setProgress(0);

      // Slowly increase to 50% over 800ms
      let currentProgress = 0;
      progressInterval.current = setInterval(() => {
        currentProgress += 1;
        if (currentProgress <= 50) {
          setProgress(currentProgress);
        } else {
          if (progressInterval.current) {
            clearInterval(progressInterval.current);
          }
        }
      }, 16); // ~60fps for smooth animation
    } else {
      // Clear interval when loading stops
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
      setProgress(0);
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isLoading]);

  if (!isLoading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-gray-200 z-50">
      <div
        className="h-full bg-[#f05847]"
        style={{
          width: `${progress}%`,
          transition: "width 640ms linear",
        }}
      />
    </div>
  );
};

export default LoadingProgress;
