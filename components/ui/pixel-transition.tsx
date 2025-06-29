"use client";

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface PixelTransitionProps {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({
  firstContent,
  secondContent,
  gridSize = 12,
  pixelColor = '#ffffff',
  animationStepDuration = 0.4,
  className = '',
  autoPlay = false,
  interval = 3000,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pixelGridRef = useRef<HTMLDivElement>(null);
  const [isSecondContent, setIsSecondContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const createPixelGrid = () => {
    if (!pixelGridRef.current) return;

    // Clear existing pixels
    pixelGridRef.current.innerHTML = '';

    // Create pixel grid
    for (let i = 0; i < gridSize * gridSize; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.cssText = `
        position: absolute;
        background-color: ${pixelColor};
        transform: scale(0);
        width: ${100 / gridSize}%;
        height: ${100 / gridSize}%;
        left: ${(i % gridSize) * (100 / gridSize)}%;
        top: ${Math.floor(i / gridSize) * (100 / gridSize)}%;
      `;
      pixelGridRef.current.appendChild(pixel);
    }
  };

  const animateTransition = () => {
    if (!pixelGridRef.current || isAnimating) return;

    setIsAnimating(true);
    const pixels = pixelGridRef.current.querySelectorAll('.pixel');

    // Create GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      }
    });

    timelineRef.current = tl;

    // Animate pixels in with stagger
    tl.to(pixels, {
      scale: 1,
      duration: animationStepDuration,
      stagger: {
        amount: animationStepDuration * 2,
        from: "random"
      },
      ease: "power2.inOut"
    })
    // Switch content in the middle
    .call(() => {
      setIsSecondContent(!isSecondContent);
    })
    // Animate pixels out with stagger
    .to(pixels, {
      scale: 0,
      duration: animationStepDuration,
      stagger: {
        amount: animationStepDuration * 2,
        from: "random"
      },
      ease: "power2.inOut"
    });
  };

  const startAutoPlay = () => {
    if (autoPlay && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        animateTransition();
      }, interval);
    }
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    createPixelGrid();
    
    if (autoPlay) {
      startAutoPlay();
    }

    return () => {
      stopAutoPlay();
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [autoPlay, interval]);

  useEffect(() => {
    createPixelGrid();
  }, [gridSize, pixelColor]);

  const handleClick = () => {
    if (!autoPlay) {
      animateTransition();
    }
  };

  const handleMouseEnter = () => {
    if (autoPlay) {
      stopAutoPlay();
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      startAutoPlay();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden cursor-pointer ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Content Layer */}
      <div className="absolute inset-0 w-full h-full">
        {isSecondContent ? secondContent : firstContent}
      </div>

      {/* Pixel Grid Layer */}
      <div
        ref={pixelGridRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />
    </div>
  );
};

export default PixelTransition;