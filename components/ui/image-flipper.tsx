"use client";

import { useState, useEffect } from "react";
import PixelTransition from "./pixel-transition";

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
    { key: 'l1', version1: u.version1.l1, version2: u.version2.l1 },
    { key: 'l2', version1: u.version1.l2, version2: u.version2.l2 },
    { key: 'l3', version1: u.version1.l3, version2: u.version2.l3 },
    { key: 'm1', version1: u.version1.m1, version2: u.version2.m1 },
    { key: 'm2', version1: u.version1.m2, version2: u.version2.m2 },
    { key: 'r1', version1: u.version1.r1, version2: u.version2.r1 },
    { key: 'r2', version1: u.version1.r2, version2: u.version2.r2 },
    { key: 'r3', version1: u.version1.r3, version2: u.version2.r3 },
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
    { key: 'l1', version1: u.version1.l1, version2: u.version2.l1 },
    { key: 'l2', version1: u.version1.l2, version2: u.version2.l2 },
    { key: 'l3', version1: u.version1.l3, version2: u.version2.l3 },
    { key: 'm1', version1: u.version1.m1, version2: u.version2.m1 },
    { key: 'm2', version1: u.version1.m2, version2: u.version2.m2 },
    { key: 'm3', version1: u.version1.m3, version2: u.version2.m3 },
    { key: 'r1', version1: u.version1.r1, version2: u.version2.r1 },
    { key: 'r2', version1: u.version1.r2, version2: u.version2.r2 },
    { key: 'r3', version1: u.version1.r3, version2: u.version2.r3 },
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
          />
        ))}
      </div>

      {/* Middle Column */}
      <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col w-[50%]">
        <GridCell
          key="m1"
          version1Image={cells[3].version1}
          version2Image={cells[3].version2}
        />
        <div className="flex flex-row w-full">
          <GridCell
            key="m2"
            version1Image={cells[4].version1}
            version2Image={cells[4].version2}
            className="w-[49%]"
          />
          <GridCell
            key="m3"
            version1Image={cells[5].version1}
            version2Image={cells[5].version2}
            className="w-[51%]"
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
    { key: 'u1', version1: seven.version1.u1, version2: seven.version2.u1 },
    { key: 'u2', version1: seven.version1.u2, version2: seven.version2.u2 },
    { key: 'm1', version1: seven.version1.m1, version2: seven.version2.m1 },
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
            />
          </div>
        ))}
      </div>
      {/* Second row with 1 full-width image */}
      <div className="w-full h-auto md:w-[100%]">
        <GridCell
          version1Image={cells[2].version1}
          version2Image={cells[2].version2}
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
    { key: 'l1', version1: linear.version1.l1, version2: linear.version2.l1 },
    { key: 'l2', version1: linear.version1.l2, version2: linear.version2.l2 },
    { key: 'l3', version1: linear.version1.l3, version2: linear.version2.l3 },
    { key: 'l4', version1: linear.version1.l4, version2: linear.version2.l4 },
    { key: 'l5', version1: linear.version1.l5, version2: linear.version2.l5 },
    { key: 'l6', version1: linear.version1.l6, version2: linear.version2.l6 },
    { key: 'l7', version1: linear.version1.l7, version2: linear.version2.l7 },
    { key: 'l8', version1: linear.version1.l8, version2: linear.version2.l8 },
  ];

  return (
    <div className={`flex flex-col w-full relative ${className}`}>
      <div className="flex flex-col sm:flex-row w-full gap-0">
        {cells.map((cell, idx) => (
          <div key={cell.key} className="w-[10.2%] aspect-[3/4]" style={{ width: idx === 1 || idx === 4 ? '18.9%' : idx === 4 ? '20.2%' : '10.2%' }}>
            <GridCell
              version1Image={cell.version1}
              version2Image={cell.version2}
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
}

function GridCell({
  version1Image,
  version2Image,
  className = "",
}: GridCellProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <PixelTransition
        firstContent={
          <img
            src={version1Image.image}
            alt={version1Image.alt}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        }
        secondContent={
          <img
            src={version2Image.image}
            alt={version2Image.alt}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        }
        gridSize={8}
        pixelColor="#ffffff"
        animationStepDuration={0.3}
        autoPlay={true}
        interval={4000}
        className="w-full h-full"
      />
    </div>
  );
}