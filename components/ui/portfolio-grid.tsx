import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PortfolioCard from "./portfolio-card";
import { PortfolioItem } from "@/app/work/types";

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items }) => {
  const [displayItems, setDisplayItems] = useState<PortfolioItem[]>([]);
  const pathname = usePathname();

  // Reset and update items when items prop changes or route changes
  useEffect(() => {
    setDisplayItems(items || []);
  }, [items, pathname]);

  // Clean animation states when component unmounts
  useEffect(() => {
    return () => {
      setDisplayItems([]);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 p-10 max-w-7xl mx-auto">
      {displayItems.map((item, index) => (
        <PortfolioCard 
          key={`${item.id || item.title}-${index}`} 
          item={item} 
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;