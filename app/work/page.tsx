"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import DesignCarousel from "@/components/ui/design-carousel";
import TabFilter from "@/components/ui/tab-filter";
import PortfolioGrid from "@/components/ui/portfolio-grid";

// Import your data
import { slides, tabs, portfolioItems } from "./data";

export default function WorkPage() {
  // State
  const [activeTab, setActiveTab] = useState("Spotlighted");
  const pathname = usePathname();

  // Reset state when component mounts or route changes
  useEffect(() => {
    setActiveTab("Spotlighted");
  }, [pathname]);

  // Event handlers
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Clean up any intervals or timeouts when component unmounts
  useEffect(() => {
    return () => {
      // Cleanup function to ensure no memory leaks
      setActiveTab("Spotlighted");
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Carousel */}
      <DesignCarousel slides={slides} />

      {/* Tab Filter */}
      <TabFilter
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabClick}
      />

      {/* Portfolio Section */}
      <section className="container mx-auto px-4 py-10">
        <PortfolioGrid items={portfolioItems[activeTab] || []} />
      </section>
    </main>
  );
}