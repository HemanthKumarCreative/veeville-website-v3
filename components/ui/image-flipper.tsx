"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlipImage {
  image: string;
  alt: string;
}

interface ImageVersions {
  u1: {
    version1: {
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      m1: FlipImage;
      m2: FlipImage;
      r1: FlipImage;
      r2: FlipImage;
      r3: FlipImage;
    };
    version2: {
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      m1: FlipImage;
      m2: FlipImage;
      r1: FlipImage;
      r2: FlipImage;
      r3: FlipImage;
    };
  };
  u2: {
    version1: {
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      m1: FlipImage;
      m2: FlipImage;
      m3: FlipImage;
      r1: FlipImage;
      r2: FlipImage;
      r3: FlipImage;
    };
    version2: {
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      m1: FlipImage;
      m2: FlipImage;
      m3: FlipImage;
      r1: FlipImage;
      r2: FlipImage;
      r3: FlipImage;
    };
  };
  seven?: {
    version1: {
      u1: FlipImage;
      u2: FlipImage;
      m1: FlipImage;
    };
    version2: {
      u1: FlipImage;
      u2: FlipImage;
      m1: FlipImage;
    };
  };
  linear: {
    version1: {
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      l4: FlipImage;
      l5: FlipImage;
      l6: FlipImage;
      l7: FlipImage;
      l8: FlipImage;
    };
    version2: {
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      l4: FlipImage;
      l5: FlipImage;
      l6: FlipImage;
      l7: FlipImage;
      l8: FlipImage;
    };
  };
}

interface ImageFlipperProps {
  aboutUsFlipImages: ImageVersions;
  className?: string;
}

// Global animation state management
class AnimationManager {
  private static instance: AnimationManager;
  private animationTrigger = 0;
  private listeners: Set<(trigger: number) => void> = new Set();
  private intervalId: NodeJS.Timeout | null = null;

  static getInstance(): AnimationManager {
    if (!AnimationManager.instance) {
      AnimationManager.instance = new AnimationManager();
    }
    return AnimationManager.instance;
  }

  subscribe(callback: (trigger: number) => void) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  triggerAnimation() {
    this.animationTrigger++;
    this.listeners.forEach(callback => callback(this.animationTrigger));
  }

  startAutoPlay() {
    if (this.intervalId) return;
    // Auto-flip every 15 seconds
    this.intervalId = setInterval(() => {
      this.triggerAnimation();
    }, 15000);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

function URegionalFlipper({
  u,
  className = "",
}: {
  u: {
    version1: {
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      m1: FlipImage;
      m2: FlipImage;
      r1: FlipImage;
      r2: FlipImage;
      r3: FlipImage;
    };
    version2: {
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      m1: FlipImage;
      m2: FlipImage;
      r1: FlipImage;
      r2: FlipImage;
      r3: FlipImage;
    };
  };
  className?: string;
}) {
  const cells = [
    { key: 'l1', version1: u.version1.l1, version2: u.version2.l1, index: 0 },
    { key: 'l2', version1: u.version1.l2, version2: u.version2.l2, index: 1 },
    { key: 'l3', version1: u.version1.l3, version2: u.version2.l3, index: 2 },
    { key: 'm1', version1: u.version1.m1, version2: u.version2.m1, index: 3 },
    { key: 'm2', version1: u.version1.m2, version2: u.version2.m2, index: 4 },
    { key: 'r1', version1: u.version1.r1, version2: u.version2.r1, index: 5 },
    { key: 'r2', version1: u.version1.r2, version2: u.version2.r2, index: 6 },
    { key: 'r3', version1: u.version1.r3, version2: u.version2.r3, index: 7 },
  ];

  return (
    <div className={`flex flex-col sm:flex-row md:flex-col lg:flex-row w-full relative ${className}`}>
      {/* Left Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[26.5%]">
        {cells.slice(0, 3).map((cell) => (
          <GridCell
            key={cell.key}
            version1Image={cell.version1}
            version2Image={cell.version2}
            cellIndex={cell.index}
          />
        ))}
      </div>

      {/* Middle Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[48.5%]">
        {cells.slice(3, 5).map((cell) => (
          <GridCell
            key={cell.key}
            version1Image={cell.version1}
            version2Image={cell.version2}
            cellIndex={cell.index}
          />
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[26.5%]">
        {cells.slice(5, 8).map((cell) => (
          <GridCell
            key={cell.key}
            version1Image={cell.version1}
            version2Image={cell.version2}
            cellIndex={cell.index}
          />
        ))}
      </div>
    </div>
  );
}

function MURegionalFlipper({
  u,
  className = "",
}: {
  u: {
    version1: {
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      m1: FlipImage;
      m2: FlipImage;
      m3: FlipImage;
      r1: FlipImage;
      r2: FlipImage;
      r3: FlipImage;
    };
    version2: {
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      m1: FlipImage;
      m2: FlipImage;
      m3: FlipImage;
      r1: FlipImage;
      r2: FlipImage;
      r3: FlipImage;
    };
  };
  className?: string;
}) {
  const cells = [
    { key: 'l1', version1: u.version1.l1, version2: u.version2.l1, index: 8 },
    { key: 'l2', version1: u.version1.l2, version2: u.version2.l2, index: 9 },
    { key: 'l3', version1: u.version1.l3, version2: u.version2.l3, index: 10 },
    { key: 'm1', version1: u.version1.m1, version2: u.version2.m1, index: 11 },
    { key: 'm2', version1: u.version1.m2, version2: u.version2.m2, index: 12 },
    { key: 'm3', version1: u.version1.m3, version2: u.version2.m3, index: 13 },
    { key: 'r1', version1: u.version1.r1, version2: u.version2.r1, index: 14 },
    { key: 'r2', version1: u.version1.r2, version2: u.version2.r2, index: 15 },
    { key: 'r3', version1: u.version1.r3, version2: u.version2.r3, index: 16 },
  ];

  return (
    <div className={`flex flex-col sm:flex-row md:flex-col lg:flex-row w-full relative ${className}`}>
      {/* Left Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[25%]">
        {cells.slice(0, 3).map((cell) => (
          <GridCell
            key={cell.key}
            version1Image={cell.version1}
            version2Image={cell.version2}
            cellIndex={cell.index}
          />
        ))}
      </div>

      {/* Middle Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[50%]">
        <GridCell
          key="m1"
          version1Image={cells[3].version1}
          version2Image={cells[3].version2}
          cellIndex={cells[3].index}
        />
        <div className="flex flex-row w-full">
          <GridCell
            key="m2"
            version1Image={cells[4].version1}
            version2Image={cells[4].version2}
            className="w-[49%]"
            cellIndex={cells[4].index}
          />
          <GridCell
            key="m3"
            version1Image={cells[5].version1}
            version2Image={cells[5].version2}
            className="w-[51%]"
            cellIndex={cells[5].index}
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[25%]">
        {cells.slice(6, 9).map((cell) => (
          <GridCell
            key={cell.key}
            version1Image={cell.version1}
            version2Image={cell.version2}
            cellIndex={cell.index}
          />
        ))}
      </div>
    </div>
  );
}

function Tflip({
  seven,
  className = "",
}: {
  seven: {
    version1: {
      u1: FlipImage;
      u2: FlipImage;
      m1: FlipImage;
    };
    version2: {
      u1: FlipImage;
      u2: FlipImage;
      m1: FlipImage;
    };
  };
  className?: string;
}) {
  const cells = [
    { key: 'u1', version1: seven.version1.u1, version2: seven.version2.u1, index: 17 },
    { key: 'u2', version1: seven.version1.u2, version2: seven.version2.u2, index: 18 },
    { key: 'm1', version1: seven.version1.m1, version2: seven.version2.m1, index: 19 },
  ];

  return (
    <div className={`flex flex-col w-full relative ${className}`}>
      {/* First row with 2 images */}
      <div className="flex flex-col sm:flex-row w-full">
        {cells.slice(0, 2).map((cell, idx) => (
          <div key={cell.key} className="w-full sm:w-1/2 md:w-[50%]">
            <GridCell
              version1Image={cell.version1}
              version2Image={cell.version2}
              cellIndex={cell.index}
            />
          </div>
        ))}
      </div>
      {/* Second row with 1 full-width image */}
      <div className="w-full h-auto md:w-[100%]">
        <GridCell
          version1Image={cells[2].version1}
          version2Image={cells[2].version2}
          cellIndex={cells[2].index}
        />
      </div>
    </div>
  );
}

function LinearFlip({
  linear,
  className = "",
}: {
  linear: {
    version1: {
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      l4: FlipImage;
      l5: FlipImage;
      l6: FlipImage;
      l7: FlipImage;
      l8: FlipImage;
    };
    version2: {
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      l4: FlipImage;
      l5: FlipImage;
      l6: FlipImage;
      l7: FlipImage;
      l8: FlipImage;
    };
  };
  className?: string;
}) {
  const cells = [
    { key: 'l1', version1: linear.version1.l1, version2: linear.version2.l1, index: 20, width: '10.2%' },
    { key: 'l2', version1: linear.version1.l2, version2: linear.version2.l2, index: 21, width: '18.9%' },
    { key: 'l3', version1: linear.version1.l3, version2: linear.version2.l3, index: 22, width: '10.2%' },
    { key: 'l4', version1: linear.version1.l4, version2: linear.version2.l4, index: 23, width: '10.2%' },
    { key: 'l5', version1: linear.version1.l5, version2: linear.version2.l5, index: 24, width: '20.2%' },
    { key: 'l6', version1: linear.version1.l6, version2: linear.version2.l6, index: 25, width: '10.2%' },
    { key: 'l7', version1: linear.version1.l7, version2: linear.version2.l7, index: 26, width: '10.2%' },
    { key: 'l8', version1: linear.version1.l8, version2: linear.version2.l8, index: 27, width: '10.2%' },
  ];

  return (
    <div className={`flex flex-col w-full relative ${className}`}>
      <div className="flex flex-col sm:flex-row w-full gap-0">
        {cells.map((cell) => (
          <div key={cell.key} style={{ width: cell.width }}>
            <GridCell
              version1Image={cell.version1}
              version2Image={cell.version2}
              cellIndex={cell.index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImageFlipper({
  aboutUsFlipImages,
  className = "",
}: ImageFlipperProps) {
  const { u1, u2, seven, linear } = aboutUsFlipImages;
  const animationManager = AnimationManager.getInstance();

  // Start animation automatically when component mounts
  useEffect(() => {
    animationManager.startAutoPlay();
    
    // Cleanup on unmount
    return () => {
      animationManager.stopAutoPlay();
    };
  }, [animationManager]);

  return (
    <>
      {/* Mobile View (< 1024px) */}
      <div className="block lg:hidden w-full">
        <GridCell
          version1Image={{
            image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/14_Ver+1.webp",
            alt: "About Us Banner",
          }}
          version2Image={{
            image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/14_Ver+2.webp",
            alt: "About Us Banner Version 2",
          }}
          className="w-full h-auto"
          cellIndex={0}
        />
      </div>

      {/* Desktop View (≥ 1024px) */}
      <div className="hidden lg:block">
        <div className={`flex flex-col lg:flex-row w-full relative -space-y-[1px] lg:-space-x-[1px] lg:space-y-0 ${className}`}>
          <URegionalFlipper u={u1} className="w-full lg:w-[40%] h-auto" />
          {seven && (
            <Tflip seven={seven} className="w-full lg:w-[20.9%] h-auto" />
          )}
          <MURegionalFlipper u={u2} className="w-full lg:w-[42%] h-auto" />
        </div>
        <LinearFlip
          linear={linear}
          className="w-full lg:w-[100%] h-auto mt-[-7px]"
        />
      </div>
    </>
  );
}

interface GridCellProps {
  version1Image: FlipImage;
  version2Image: FlipImage;
  className?: string;
  cellIndex: number;
}

function GridCell({
  version1Image,
  version2Image,
  className = "",
  cellIndex,
}: GridCellProps) {
  const [showVersion2, setShowVersion2] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const animationManager = AnimationManager.getInstance();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Random delay for each cell to create natural staggered effect
  const getRandomDelay = useCallback(() => {
    return Math.random() * 2000; // 0-2 seconds random delay
  }, []);

  useEffect(() => {
    const unsubscribe = animationManager.subscribe(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const delay = getRandomDelay();
      
      timeoutRef.current = setTimeout(() => {
        setIsFlipping(true);
        
        // Change image halfway through the flip
        setTimeout(() => {
          setShowVersion2(prev => !prev);
        }, 800); // Halfway through 1.6s animation
        
        // End flip animation
        setTimeout(() => {
          setIsFlipping(false);
        }, 1600); // Total flip duration
      }, delay);
    });

    return () => {
      unsubscribe();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [animationManager, getRandomDelay]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ perspective: '1000px' }}>
      <motion.div
        className="relative w-full"
        animate={{
          rotateY: isFlipping ? [0, 90, 0] : 0,
        }}
        transition={{
          duration: 1.6,
          ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
          times: [0, 0.5, 1]
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.img
          src={showVersion2 ? version2Image.image : version1Image.image}
          alt={showVersion2 ? version2Image.alt : version1Image.alt}
          className="w-full object-contain"
          style={{ backfaceVisibility: 'hidden' }}
        />
      </motion.div>
    </div>
  );
}