export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Section {
  heading: string;
  description: string;
  items: {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }[];
}

export interface Sections {
  gallery: Section;
  creative: Section;
  inspire: Section;
  vision: Section;
  identity: Section;
  essence: Section;
  product: Section;
}

export interface SectionTitles {
  PORTFOLIO: {
    main: string;
    description: string;
  };
}

export interface SectionMap {
  [key: string]: string[];
} 