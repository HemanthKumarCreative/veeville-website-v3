"use client";

import React, { useState, useEffect } from "react";
import DesignCarousel from "@/components/ui/design-carousel";
import TabFilter from "@/components/ui/tab-filter";
import PortfolioGrid from "@/components/ui/portfolio-grid";
// import SectionHeader from "@/components/ui/section-header";

// Import your data
import { slides, tabs, portfolioItems } from "./data";

export default function WorkPage() {
  // State
  const [activeTab, setActiveTab] = useState("Spotlighted");

  // Event handlers
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

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
        {/* <SectionHeader
          title={SECTION_TITLES.PORTFOLIO.main}
          description={SECTION_TITLES.PORTFOLIO.description}
        /> */}
        <PortfolioGrid items={portfolioItems[activeTab]} />
      </section>
    </main>
  );
}
