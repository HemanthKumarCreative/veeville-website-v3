"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Zap, Clock, Shuffle } from "lucide-react";

interface FlipImage {
  image: string;
  alt: string;
}

interface ImageVersions {
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
  seven?: {
    version1: {
      u1: FlipImage;
      u2: FlipImage;
      m1: FlipImage;
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      m2: FlipImage;
      r1: FlipImage;
      r2: FlipImage;
      r3: FlipImage;
    };
    version2: {
      u1: FlipImage;
      u2: FlipImage;
      m1: FlipImage;
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      m2: FlipImage;
      r1: FlipImage;
      r2: FlipImage;
      r3: FlipImage;
    };
  };
}

interface ImageFlipperProps {
  aboutUsFlipImages: ImageVersions;
  className?: string;
}

type AnimationType = 'sequential' | 'simultaneous' | 'random' | 'wave' | 'spiral';

const animationConfigs = {
  sequential: {
    icon: Clock,
    name: 'Sequential',
    description: 'Images flip one after another',
    interval: 500,
  },
  simultaneous: {
    icon: Zap,
    name: 'Simultaneous',
    description: 'All images flip at once',
    interval: 0,
  },
  random: {
    icon: Shuffle,
    name: 'Random',
    description: 'Images flip in random order',
    interval: 300,
  },
  wave: {
    icon: RotateCcw,
    name: 'Wave',
    description: 'Wave-like animation pattern',
    interval: 200,
  },
  spiral: {
    icon: RotateCcw,
    name: 'Spiral',
    description: 'Spiral animation pattern',
    interval: 150,
  },
};

function URegionalFlipper({
  u,
  className = "",
  animationType,
  isPlaying,
  animationTrigger,
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
  animationType: AnimationType;
  isPlaying: boolean;
  animationTrigger: number;
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
            animationType={animationType}
            isPlaying={isPlaying}
            animationTrigger={animationTrigger}
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
            animationType={animationType}
            isPlaying={isPlaying}
            animationTrigger={animationTrigger}
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
            animationType={animationType}
            isPlaying={isPlaying}
            animationTrigger={animationTrigger}
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
  animationType,
  isPlaying,
  animationTrigger,
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
  animationType: AnimationType;
  isPlaying: boolean;
  animationTrigger: number;
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
            animationType={animationType}
            isPlaying={isPlaying}
            animationTrigger={animationTrigger}
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
          animationType={animationType}
          isPlaying={isPlaying}
          animationTrigger={animationTrigger}
          cellIndex={cells[3].index}
        />
        <div className="flex flex-row w-full">
          <GridCell
            key="m2"
            version1Image={cells[4].version1}
            version2Image={cells[4].version2}
            className="w-[49%]"
            animationType={animationType}
            isPlaying={isPlaying}
            animationTrigger={animationTrigger}
            cellIndex={cells[4].index}
          />
          <GridCell
            key="m3"
            version1Image={cells[5].version1}
            version2Image={cells[5].version2}
            className="w-[51%]"
            animationType={animationType}
            isPlaying={isPlaying}
            animationTrigger={animationTrigger}
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
            animationType={animationType}
            isPlaying={isPlaying}
            animationTrigger={animationTrigger}
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
  animationType,
  isPlaying,
  animationTrigger,
}: {
  seven: {
    version1: {
      u1: FlipImage;
      u2: FlipImage;
      m1: FlipImage;
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      m2: FlipImage;
      r1: FlipImage;
      r2: FlipImage;
      r3: FlipImage;
    };
    version2: {
      u1: FlipImage;
      u2: FlipImage;
      m1: FlipImage;
      l1: FlipImage;
      l2: FlipImage;
      l3: FlipImage;
      m2: FlipImage;
      r1: FlipImage;
      r2: FlipImage;
      r3: FlipImage;
    };
  };
  className?: string;
  animationType: AnimationType;
  isPlaying: boolean;
  animationTrigger: number;
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
              animationType={animationType}
              isPlaying={isPlaying}
              animationTrigger={animationTrigger}
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
          animationType={animationType}
          isPlaying={isPlaying}
          animationTrigger={animationTrigger}
          cellIndex={cells[2].index}
        />
      </div>
    </div>
  );
}

function LinearFlip({
  linear,
  className = "",
  animationType,
  isPlaying,
  animationTrigger,
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
  animationType: AnimationType;
  isPlaying: boolean;
  animationTrigger: number;
}) {
  const cells = [
    { key: 'l1', version1: linear.version1.l1, version2: linear.version2.l1, index: 20 },
    { key: 'l2', version1: linear.version1.l2, version2: linear.version2.l2, index: 21 },
    { key: 'l3', version1: linear.version1.l3, version2: linear.version2.l3, index: 22 },
    { key: 'l4', version1: linear.version1.l4, version2: linear.version2.l4, index: 23 },
    { key: 'l5', version1: linear.version1.l5, version2: linear.version2.l5, index: 24 },
    { key: 'l6', version1: linear.version1.l6, version2: linear.version2.l6, index: 25 },
    { key: 'l7', version1: linear.version1.l7, version2: linear.version2.l7, index: 26 },
    { key: 'l8', version1: linear.version1.l8, version2: linear.version2.l8, index: 27 },
  ];

  return (
    <div className={`flex flex-col w-full relative ${className}`}>
      <div className="flex flex-col sm:flex-row w-full gap-0">
        {cells.map((cell, idx) => (
          <div key={cell.key} className="w-[10.2%] aspect-[3/4]" style={{ width: idx === 1 || idx === 4 ? '18.9%' : idx === 4 ? '20.2%' : '10.2%' }}>
            <GridCell
              version1Image={cell.version1}
              version2Image={cell.version2}
              animationType={animationType}
              isPlaying={isPlaying}
              animationTrigger={animationTrigger}
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
  const [animationType, setAnimationType] = useState<AnimationType>('sequential');
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(0);

  const startAnimation = () => {
    setIsPlaying(true);
    setAnimationTrigger(prev => prev + 1);
  };

  const stopAnimation = () => {
    setIsPlaying(false);
  };

  const resetAnimation = () => {
    setIsPlaying(false);
    setAnimationTrigger(prev => prev + 1);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setAnimationTrigger(prev => prev + 1);
      }, 3000); // Repeat every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <>
      {/* Animation Controls */}
      <div className="w-full bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-4">
            {/* Control Buttons */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={startAnimation}
                disabled={isPlaying}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Play className="w-4 h-4" />
                <span>Play</span>
              </button>
              
              <button
                onClick={stopAnimation}
                disabled={!isPlaying}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Pause className="w-4 h-4" />
                <span>Pause</span>
              </button>
              
              <button
                onClick={resetAnimation}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            </div>

            {/* Animation Type Selector */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-sm font-medium text-gray-700 mr-2">Animation Style:</span>
              {Object.entries(animationConfigs).map(([type, config]) => {
                const IconComponent = config.icon;
                return (
                  <button
                    key={type}
                    onClick={() => setAnimationType(type as AnimationType)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all ${
                      animationType === type
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                    title={config.description}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm">{config.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Status Indicator */}
            <div className="text-center">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                isPlaying 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {isPlaying ? 'Playing' : 'Stopped'} - {animationConfigs[animationType].name}
              </span>
            </div>
          </div>
        </div>
      </div>

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
          animationType={animationType}
          isPlaying={isPlaying}
          animationTrigger={animationTrigger}
          cellIndex={0}
        />
      </div>

      {/* Desktop View (≥ 1024px) */}
      <div className="hidden lg:block">
        <div className={`flex flex-col lg:flex-row w-full relative -space-y-[1px] lg:-space-x-[1px] lg:space-y-0 ${className}`}>
          <URegionalFlipper 
            u={u1} 
            className="w-full lg:w-[40%] h-auto" 
            animationType={animationType}
            isPlaying={isPlaying}
            animationTrigger={animationTrigger}
          />
          {seven && (
            <Tflip 
              seven={seven} 
              className="w-full lg:w-[20.9%] h-auto" 
              animationType={animationType}
              isPlaying={isPlaying}
              animationTrigger={animationTrigger}
            />
          )}
          <MURegionalFlipper 
            u={u2} 
            className="w-full lg:w-[42%] h-auto" 
            animationType={animationType}
            isPlaying={isPlaying}
            animationTrigger={animationTrigger}
          />
        </div>
        <LinearFlip
          linear={linear}
          className="w-full lg:w-[100%] h-auto mt-[-7px]"
          animationType={animationType}
          isPlaying={isPlaying}
          animationTrigger={animationTrigger}
        />
      </div>
    </>
  );
}

interface GridCellProps {
  version1Image: FlipImage;
  version2Image: FlipImage;
  className?: string;
  animationType: AnimationType;
  isPlaying: boolean;
  animationTrigger: number;
  cellIndex: number;
}

function GridCell({
  version1Image,
  version2Image,
  className = "",
  animationType,
  isPlaying,
  animationTrigger,
  cellIndex,
}: GridCellProps) {
  const [showVersion2, setShowVersion2] = useState(false);

  const getAnimationDelay = () => {
    const config = animationConfigs[animationType];
    
    switch (animationType) {
      case 'sequential':
        return cellIndex * config.interval;
      case 'simultaneous':
        return 0;
      case 'random':
        return Math.random() * 1000;
      case 'wave':
        return (cellIndex % 8) * config.interval;
      case 'spiral':
        // Create a spiral pattern based on position
        const spiralOrder = [0, 1, 2, 5, 8, 7, 6, 3, 4];
        const spiralIndex = spiralOrder.indexOf(cellIndex % 9);
        return spiralIndex !== -1 ? spiralIndex * config.interval : cellIndex * config.interval;
      default:
        return cellIndex * 200;
    }
  };

  useEffect(() => {
    if (animationTrigger > 0) {
      const delay = getAnimationDelay();
      
      const timer = setTimeout(() => {
        setShowVersion2(prev => !prev);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [animationTrigger, animationType, cellIndex]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <motion.img
        src={showVersion2 ? version2Image.image : version1Image.image}
        alt={showVersion2 ? version2Image.alt : version1Image.alt}
        className="w-full object-contain"
        initial={false}
        animate={{
          opacity: 1,
          scale: showVersion2 ? [0.95, 1] : [1, 0.95, 1],
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}