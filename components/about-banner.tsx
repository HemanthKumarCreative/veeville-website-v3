// components/AboutBanner.tsx
import Image from "next/image";

const tiles = [
  {
    src: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/01_Ver+1.webp",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/02_Ver+1.webp",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/03_Ver+1.webp",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/04_Ver+1.webp",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    src: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/01_Ver+1.webp",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/02_Ver+1.webp",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/03_Ver+1.webp",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/04_Ver+1.webp",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    src: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/01_Ver+1.webp",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/02_Ver+1.webp",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/03_Ver+1.webp",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/04_Ver+1.webp",
    colSpan: 2,
    rowSpan: 1,
  },
];

export default function AboutBanner() {
  return (
    <div className="flex flex-wrap gap-0">
      {tiles.map((tile, index) => (
        <div
          key={index}
          className="relative group"
          style={{
            width: `${(tile.colSpan / 6) * 100}%`,
            aspectRatio: tile.colSpan / tile.rowSpan,
          }}
        >
          <Image
            src={tile.src}
            alt={`tile-${index}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
      ))}
    </div>
  );
}
