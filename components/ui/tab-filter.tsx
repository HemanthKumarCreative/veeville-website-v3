import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

interface Tab {
  id: string;
  label: string;
}

interface TabFilterProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabFilter: React.FC<TabFilterProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  const pathname = usePathname();

  // Reset to first tab when route changes
  useEffect(() => {
    if (tabs.length > 0) {
      onTabChange(tabs[0].id);
    }
  }, [pathname, tabs, onTabChange]);

  return (
    <section className="text-center py-5 w-full overflow-x-auto">
      <div className="flex flex-wrap justify-center gap-3 min-w-fit mx-auto px-4 sm:px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2.5 rounded border-none text-sm transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeTab === tab.id
                ? "bg-black text-white focus:ring-black"
                : "bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400"
            }`}
            onClick={() => onTabChange(tab.id)}
            aria-pressed={activeTab === tab.id}
            aria-label={`Filter by ${tab.label}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TabFilter;