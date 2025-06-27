import React from "react";

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
  return (
    <section className="text-center py-5 w-full overflow-x-auto">
      <div className="flex flex-wrap justify-center gap-3 min-w-fit mx-auto px-4 sm:px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2.5 rounded border-none text-sm transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TabFilter;
