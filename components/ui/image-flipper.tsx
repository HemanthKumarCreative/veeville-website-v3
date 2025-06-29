"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Zap, Clock, Shuffle, Rotate3D as RotateX, Settings } from "lucide-react";

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

type AnimationType = 'sequential' | 'simultaneous' | 'random' | 'wave' | 'spiral' | 'flip' | 'cascade' | 'ripple';

const animationConfigs = {
  sequential: {
    icon: Clock,
    name: 'Sequential',
    description: 'Images flip one after another in order',
    interval: 200,
    color: 'bg-blue-500',
  },
  simultaneous: {
    icon: Zap,
    name: 'Simultaneous',
    description: 'All images flip at the same time',
    interval: 0,
    color: 'bg-green-500',
  },
  random: {
    icon: Shuffle,
    name: 'Random',
    description: 'Images flip in completely random order',
    interval: 150,
    color: 'bg-purple-500',
  },
  wave: {
    icon: RotateCcw,
    name: 'Wave',
    description: 'Wave-like animation pattern from left to right',
    interval: 100,
    color: 'bg-cyan-500',
  },
  spiral: {
    icon: RotateCcw,
    name: 'Spiral',
    description: 'Spiral animation pattern from outside to center',
    interval: 120,
    color: 'bg-orange-500',
  },
  flip: {
    icon: RotateX,
    name: '3D Flip',
    description: '3D flip animation with depth effect',
    interval: 180,
    color: 'bg-red-500',
  },
  cascade: {
    icon: Settings,
    name: 'Cascade',
    description: 'Cascading effect from top to bottom',
    interval: 100,
    color: 'bg-indigo-500',
  },
  ripple: {
    icon: RotateCcw,
    name: 'Ripple',
    description: 'Ripple effect from center outward',
    interval: 80,
    color: 'bg-pink-500',
  },
};

// Global animation state management
class AnimationManager {
  private static instance: AnimationManager;
  private animationTrigger = 0;
  private listeners: Set<(trigger: number) => void> = new Set();
  private isPlaying = false;
  private animationType: AnimationType = 'random';
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
    this.isPlaying = true;
    this.intervalId = setInterval(() => {
      this.triggerAnimation();
    }, 4000);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isPlaying = false;
  }

  setAnimationType(type: AnimationType) {
    this.animationType = type;
  }

  getAnimationType() {
    return this.animationType;
  }

  getIsPlaying() {
    return this.isPlaying;
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
  const [animationType, setAnimationType] = useState<AnimationType>('random');
  const [isPlaying, setIsPlaying] = useState(false);
  const animationManager = AnimationManager.getInstance();

  useEffect(() => {
    animationManager.setAnimationType(animationType);
  }, [animationType, animationManager]);

  const startAnimation = () => {
    setIsPlaying(true);
    animationManager.startAutoPlay();
  };

  const stopAnimation = () => {
    setIsPlaying(false);
    animationManager.stopAutoPlay();
  };

  const triggerSingleAnimation = () => {
    animationManager.triggerAnimation();
  };

  const resetAnimation = () => {
    stopAnimation();
    // Reset all cells to version 1
    setTimeout(() => {
      animationManager.triggerAnimation();
    }, 100);
  };

  return (
    <>
      {/* Enhanced Animation Controls */}
      <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-6">
            {/* Header */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Image Animation</h3>
              <p className="text-sm text-gray-600">Experience dynamic image transitions with multiple animation styles</p>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-center space-x-4">
              <motion.button
                onClick={startAnimation}
                disabled={isPlaying}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4" />
                <span className="font-medium">Auto Play</span>
              </motion.button>
              
              <motion.button
                onClick={stopAnimation}
                disabled={!isPlaying}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Pause className="w-4 h-4" />
                <span className="font-medium">Pause</span>
              </motion.button>
              
              <motion.button
                onClick={triggerSingleAnimation}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-4 h-4" />
                <span className="font-medium">Trigger</span>
              </motion.button>
              
              <motion.button
                onClick={resetAnimation}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RotateCcw className="w-4 h-4" />
                <span className="font-medium">Reset</span>
              </motion.button>
            </div>

            {/* Animation Type Selector */}
            <div className="flex flex-col items-center space-y-4">
              <span className="text-sm font-medium text-gray-700">Animation Style</span>
              <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl">
                {Object.entries(animationConfigs).map(([type, config]) => {
                  const IconComponent = config.icon;
                  const isActive = animationType === type;
                  return (
                    <motion.button
                      key={type}
                      onClick={() => setAnimationType(type as AnimationType)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                        isActive
                          ? `${config.color} text-white border-transparent shadow-lg scale-105`
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                      }`}
                      title={config.description}
                      whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm font-medium">{config.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Status Indicator */}
            <div className="text-center">
              <motion.div
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  isPlaying 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-gray-100 text-gray-800 border border-gray-200'
                }`}
                animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
              >
                <div className={`w-2 h-2 rounded-full mr-2 ${isPlaying ? 'bg-green-500' : 'bg-gray-500'}`} />
                {isPlaying ? 'Playing' : 'Stopped'} - {animationConfigs[animationType].name}
              </motion.div>
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
  const [isAnimating, setIsAnimating] = useState(false);
  const animationManager = AnimationManager.getInstance();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getAnimationDelay = useCallback((animationType: AnimationType, index: number) => {
    const config = animationConfigs[animationType];
    
    switch (animationType) {
      case 'sequential':
        return index * config.interval;
      case 'simultaneous':
        return 0;
      case 'random':
        return Math.random() * 1500;
      case 'wave':
        return (index % 8) * config.interval;
      case 'spiral':
        const spiralOrder = [0, 1, 2, 5, 8, 7, 6, 3, 4];
        const spiralIndex = spiralOrder.indexOf(index % 9);
        return spiralIndex !== -1 ? spiralIndex * config.interval : index * config.interval;
      case 'flip':
        return index * config.interval;
      case 'cascade':
        const row = Math.floor(index / 8);
        const col = index % 8;
        return (row * 200) + (col * config.interval);
      case 'ripple':
        const centerX = 4;
        const centerY = 2;
        const x = index % 8;
        const y = Math.floor(index / 8);
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        return distance * config.interval;
      default:
        return index * 200;
    }
  }, []);

  useEffect(() => {
    const unsubscribe = animationManager.subscribe((trigger) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const animationType = animationManager.getAnimationType();
      const delay = getAnimationDelay(animationType, cellIndex);
      
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(true);
        
        if (animationType === 'flip') {
          // 3D flip animation
          setTimeout(() => {
            setShowVersion2(prev => !prev);
          }, 300);
          setTimeout(() => {
            setIsAnimating(false);
          }, 600);
        } else {
          // Regular flip
          setShowVersion2(prev => !prev);
          setTimeout(() => {
            setIsAnimating(false);
          }, 400);
        }
      }, delay);
    });

    return () => {
      unsubscribe();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [animationManager, cellIndex, getAnimationDelay]);

  const getAnimationVariants = () => {
    const animationType = animationManager.getAnimationType();
    
    if (animationType === 'flip') {
      return {
        initial: { rotateY: 0 },
        animate: { 
          rotateY: isAnimating ? [0, 180, 0] : 0,
          scale: isAnimating ? [1, 0.9, 1] : 1,
        },
        transition: { 
          duration: 0.6,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }
      };
    }

    return {
      initial: { scale: 1, opacity: 1 },
      animate: {
        scale: isAnimating ? [1, 0.95, 1.02, 1] : 1,
        opacity: isAnimating ? [1, 0.8, 1] : 1,
        rotateX: isAnimating ? [0, 5, -5, 0] : 0,
      },
      transition: { 
        duration: 0.4,
        ease: "easeInOut",
        times: [0, 0.3, 0.7, 1]
      }
    };
  };

  const variants = getAnimationVariants();

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ perspective: '1000px' }}>
      <motion.div
        className="relative w-full"
        initial={variants.initial}
        animate={variants.animate}
        transition={variants.transition}
      >
        <motion.img
          src={showVersion2 ? version2Image.image : version1Image.image}
          alt={showVersion2 ? version2Image.alt : version1Image.alt}
          className="w-full object-contain"
          initial={false}
          style={{ backfaceVisibility: 'hidden' }}
        />
        
        {/* Subtle glow effect during animation */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}