"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
  return (
    <div
      className={`flex flex-col sm:flex-row md:flex-col lg:flex-row w-full relative ${className}`}
    >
      {/* Left Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[26.5%]">
        <GridCell version1Image={u.version1.l1} version2Image={u.version2.l1} />
        <GridCell version1Image={u.version1.l2} version2Image={u.version2.l2} />
        <GridCell version1Image={u.version1.l3} version2Image={u.version2.l3} />
      </div>

      {/* Middle Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[48.5%]">
        <GridCell version1Image={u.version1.m1} version2Image={u.version2.m1} />

        <GridCell version1Image={u.version1.m2} version2Image={u.version2.m2} />
      </div>

      {/* Right Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[26.5%]">
        <GridCell version1Image={u.version1.r1} version2Image={u.version2.r1} />
        <GridCell version1Image={u.version1.r2} version2Image={u.version2.r2} />
        <GridCell version1Image={u.version1.r3} version2Image={u.version2.r3} />
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
  return (
    <div
      className={`flex flex-col sm:flex-row md:flex-col lg:flex-row w-full relative ${className}`}
    >
      {/* Left Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[25%]">
        <GridCell version1Image={u.version1.l1} version2Image={u.version2.l1} />
        <GridCell version1Image={u.version1.l2} version2Image={u.version2.l2} />
        <GridCell version1Image={u.version1.l3} version2Image={u.version2.l3} />
      </div>

      {/* Middle Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[50%]">
        <GridCell version1Image={u.version1.m1} version2Image={u.version2.m1} />
        <div className="flex flex-row w-full">
          <GridCell
            version1Image={u.version1.m2}
            version2Image={u.version2.m2}
            className="w-[49%]"
          />
          <GridCell
            version1Image={u.version1.m3}
            version2Image={u.version2.m3}
            className="w-[51%]"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[25%]">
        <GridCell version1Image={u.version1.r1} version2Image={u.version2.r1} />
        <GridCell version1Image={u.version1.r2} version2Image={u.version2.r2} />
        <GridCell version1Image={u.version1.r3} version2Image={u.version2.r3} />
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
}) {
  return (
    <div className={`flex flex-col w-full relative ${className}`}>
      {/* First row with 2 images */}
      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-full sm:w-1/2 md:w-[50%]">
          <GridCell
            version1Image={seven.version1.u1}
            version2Image={seven.version2.u1}
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-[50%]">
          <GridCell
            version1Image={seven.version1.u2}
            version2Image={seven.version2.u2}
          />
        </div>
      </div>
      {/* Second row with 1 full-width image */}
      <div className="w-full h-auto md:w-[100%]">
        <GridCell
          version1Image={seven.version1.m1}
          version2Image={seven.version2.m1}
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
  return (
    <div className={`flex flex-col w-full relative ${className}`}>
      <div className="flex flex-col sm:flex-row w-full gap-0">
        <div className="w-[10.2%] aspect-[3/4]">
          <GridCell
            version1Image={linear.version1.l1}
            version2Image={linear.version2.l1}
          />
        </div>
        <div className="w-[18.9%] aspect-[3/4]">
          <GridCell
            version1Image={linear.version1.l2}
            version2Image={linear.version2.l2}
          />
        </div>
        <div className="w-[10.2%] aspect-[3/4]">
          <GridCell
            version1Image={linear.version1.l3}
            version2Image={linear.version2.l3}
          />
        </div>
        <div className="w-[10.2%] aspect-[3/4]">
          <GridCell
            version1Image={linear.version1.l4}
            version2Image={linear.version2.l4}
          />
        </div>
        <div className="w-[20.2%] aspect-[3/4]">
          <GridCell
            version1Image={linear.version1.l5}
            version2Image={linear.version2.l5}
          />
        </div>
        <div className="w-[10.2%] aspect-[3/4]">
          <GridCell
            version1Image={linear.version1.l6}
            version2Image={linear.version2.l6}
          />
        </div>
        <div className="w-[10.2%] aspect-[3/4]">
          <GridCell
            version1Image={linear.version1.l7}
            version2Image={linear.version2.l7}
          />
        </div>
        <div className="w-[10.2%] aspect-[3/4]">
          <GridCell
            version1Image={linear.version1.l8}
            version2Image={linear.version2.l8}
          />
        </div>
      </div>
    </div>
  );
}

export function ImageFlipper({
  aboutUsFlipImages,
  className = "",
}: ImageFlipperProps) {
  const { u1, u2, seven, linear } = aboutUsFlipImages;
  return (
    <>
      {/* Mobile View (< 1024px) */}
      <div className="block lg:hidden w-full">
        <GridCell
          version1Image={{
            image:
              "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/14_Ver+1.webp",
            alt: "About Us Banner",
          }}
          version2Image={{
            image:
              "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/14_Ver+2.webp",
            alt: "About Us Banner Version 2",
          }}
          className="w-full h-auto"
        />
      </div>
      {/* Desktop View (≥ 1024px) */}
      <div className="hidden lg:block">
        <div
          className={`flex flex-col lg:flex-row w-full relative -space-y-[1px] lg:-space-x-[1px] lg:space-y-0 ${className}`}
        >
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
}

function GridCell({
  version1Image,
  version2Image,
  className = "",
}: GridCellProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const randomDelay = useRef(Math.random() * 10000); // Random delay between 0-10s

  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true);
      // Reset after animation completes
      setTimeout(() => {
        setIsAnimating(false);
        // Set next random delay
        randomDelay.current = Math.random() * 10000;
      }, 3000); // Animation duration
    };

    const interval = setInterval(() => {
      setTimeout(startAnimation, randomDelay.current);
    }, 15000); // Base cycle duration

    // Initial animation with random delay
    const initialTimeout = setTimeout(startAnimation, randomDelay.current);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Base image for layout */}
      <img
        src={version1Image.image}
        alt={version1Image.alt}
        className="w-full object-contain invisible"
      />

      {/* Animation container */}
      <div className="absolute inset-0 w-[200%] -left-0">
        {/* Version 1 Image */}
        <motion.div
          className="absolute w-1/2 left-0"
          animate={{
            x: isAnimating ? "100%" : "0%",
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <img
            src={version1Image.image}
            alt={version1Image.alt}
            className="w-full object-contain"
          />
        </motion.div>

        {/* Version 2 Image */}
        <motion.div
          className="absolute w-1/2 left-0"
          initial={{ x: "-100%" }}
          animate={{
            x: isAnimating ? "0%" : "-100%",
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <img
            src={version2Image.image}
            alt={version2Image.alt}
            className="w-full object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
