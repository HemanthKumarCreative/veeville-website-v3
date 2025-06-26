import React from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
      <div className="flex-1">
        <h2 className="text-[32px] font-[600] text-[#333333]">{title}</h2>
      </div>
      {description && (
        <div className="flex-1">
          <p className="text-base text-[#333333]">{description}</p>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
