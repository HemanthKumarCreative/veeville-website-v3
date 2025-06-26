import React from "react";
import { PortfolioItem } from "@/app/work/types";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  item: PortfolioItem;
  className?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, className }) => {
  return (
    <motion.div
      className={cn(
        "group relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => {}}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            // Handle navigation
          }
        }}
        className="relative h-full w-full cursor-pointer overflow-hidden"
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
