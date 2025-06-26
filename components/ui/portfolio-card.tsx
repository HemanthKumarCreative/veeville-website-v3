import React, { useEffect, useState } from "react";
import { PortfolioItem } from "@/app/work/types";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface PortfolioCardProps {
  item: PortfolioItem;
  className?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Reset visibility state when route changes
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Set visible when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      className={cn(
        "group relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 20 
      }}
      exit={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          // Handle navigation if needed
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            // Handle navigation
          }
        }}
        className="relative h-full w-full cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-lg"
        aria-label={`View details of ${item.title}`}
      >
        <motion.img
          src={item.imageUrl}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          initial={false}
          loading="lazy"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 text-center text-white opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 sm:p-6 md:p-8">
          <h3 className="mb-2 text-xl font-semibold tracking-tight transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0 sm:mb-3 sm:text-2xl md:text-3xl">
            {item.title}
          </h3>

          <p className="text-xs text-gray-200 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0 sm:text-sm md:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;