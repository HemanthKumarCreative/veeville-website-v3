"use client";

import { useState } from "react";
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
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[30%]">
        <GridCell version1Image={u.version1.l1} version2Image={u.version2.l1} />
        <GridCell version1Image={u.version1.l2} version2Image={u.version2.l2} />
        <GridCell version1Image={u.version1.l3} version2Image={u.version2.l3} />
      </div>

      {/* Middle Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[54.7%]">
        <GridCell version1Image={u.version1.m1} version2Image={u.version2.m1} />
        <GridCell version1Image={u.version1.m2} version2Image={u.version2.m2} />
      </div>

      {/* Right Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[30%]">
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
      {/* First row with 2 images */}
      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-[14.8%]">
          <GridCell
            version1Image={linear.version1.l1}
            version2Image={linear.version2.l1}
          />
        </div>
        <div className="w-[26.8%]">
          <GridCell
            version1Image={linear.version1.l2}
            version2Image={linear.version2.l2}
          />
        </div>
        <div className="w-[14.8%]">
          <GridCell
            version1Image={linear.version1.l3}
            version2Image={linear.version2.l3}
          />
        </div>
        <div className="w-[14.8%]">
          <GridCell
            version1Image={linear.version1.l4}
            version2Image={linear.version2.l4}
          />
        </div>
        <div className="w-[26.8%]">
          <GridCell
            version1Image={linear.version1.l5}
            version2Image={linear.version2.l5}
          />
        </div>
        <div className="w-[14.8%]">
          <GridCell
            version1Image={linear.version1.l6}
            version2Image={linear.version2.l6}
          />
        </div>
        <div className="w-[14.8%]">
          <GridCell
            version1Image={linear.version1.l7}
            version2Image={linear.version2.l7}
          />
        </div>
        <div className="w-[14.8%]">
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
      <div
        className={`flex flex-col lg:flex-row w-full relative -space-y-[1px] lg:-space-x-[1px] lg:space-y-0 ${className}`}
      >
        <URegionalFlipper u={u1} className="w-full lg:w-[40%] h-auto" />
        {seven && (
          <Tflip seven={seven} className="w-full lg:w-[20.9%] h-auto" />
        )}
        <URegionalFlipper u={u2} className="w-full lg:w-[40%] h-auto" />
      </div>
      <LinearFlip linear={linear} className="w-full lg:w-[100%] h-auto" />
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
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.img
        src={isHovering ? version2Image.image : version1Image.image}
        alt={isHovering ? version2Image.alt : version1Image.alt}
        className="w-full object-contain"
        initial={false}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
