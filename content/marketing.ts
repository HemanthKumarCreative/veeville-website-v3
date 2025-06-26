import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Services - Veeville | Integrated Marketing Solutions",
  description:
    "Explore Veeville's comprehensive marketing services including digital marketing, brand strategy, campaign execution, and more. Transform your brand with our innovative marketing solutions.",
  openGraph: {
    title: "Marketing Services - Veeville | Integrated Marketing Solutions",
    description:
      "Explore Veeville's comprehensive marketing services including digital marketing, brand strategy, campaign execution, and more. Transform your brand with our innovative marketing solutions.",
    url: "https://veeville.com/marketing",
  },
  alternates: {
    canonical: "https://veeville.com/marketing",
  },
};

export interface MarketingService {
  title: string;
  description: string;
  image: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  description: string;
  image: string;
  results: string[];
}

export interface MarketingContent {
  banner: {
    image: string;
    alt: string;
  };
  intro: {
    heading: string;
    paragraphs: string[];
  };
  services: {
    heading: string;
    description: string;
  };
  caseStudies: {
    heading: string;
    description: string;
  };
}

export const marketingContent: MarketingContent = {
  banner: {
    image: "/placeholder.jpg", // Replace with actual marketing banner image
    alt: "Marketing Services Banner"
  },
  intro: {
    heading: "Transform Your Brand with Veeville",
    paragraphs: [
      "At Veeville, we deliver integrated marketing solutions that drive real business results. Our comprehensive approach combines strategic thinking, creative excellence, and data-driven insights to help your brand stand out in today's competitive landscape.",
      "From digital marketing and brand strategy to campaign execution and performance tracking, we offer end-to-end marketing services tailored to your unique business needs.",
      "Partner with us to elevate your brand and achieve your marketing objectives."
    ]
  },
  services: {
    heading: "Our Marketing Services",
    description: "Discover our comprehensive range of marketing services designed to help your business grow and succeed in the digital age."
  },
  caseStudies: {
    heading: "Success Stories",
    description: "Explore how we've helped businesses achieve their marketing goals through innovative strategies and execution."
  }
};

export const marketingServices: MarketingService[] = [
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions including SEO, SEM, social media marketing, and content strategy.",
    image: "/placeholder.jpg"
  },
  {
    title: "Brand Strategy",
    description: "Strategic brand development, positioning, and identity creation to help you stand out in your market.",
    image: "/placeholder.jpg"
  },
  {
    title: "Content Marketing",
    description: "Engaging content creation and distribution strategies that connect with your target audience.",
    image: "/placeholder.jpg"
  },
  {
    title: "Social Media Management",
    description: "Strategic social media presence management and community engagement across platforms.",
    image: "/placeholder.jpg"
  },
  {
    title: "Campaign Planning",
    description: "End-to-end campaign planning, execution, and optimization for maximum impact.",
    image: "/placeholder.jpg"
  },
  {
    title: "Performance Marketing",
    description: "Data-driven performance marketing strategies to maximize ROI and achieve business objectives.",
    image: "/placeholder.jpg"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Digital Transformation Campaign",
    client: "Tech Innovation Corp",
    description: "Led a comprehensive digital transformation campaign that revolutionized the client's online presence.",
    image: "/placeholder.jpg",
    results: [
      "200% increase in online engagement",
      "150% growth in qualified leads",
      "45% improvement in conversion rates"
    ]
  },
  {
    title: "Brand Revitalization Project",
    client: "Global Retail Chain",
    description: "Successfully revitalized and repositioned a traditional retail brand for the digital age.",
    image: "/placeholder.jpg",
    results: [
      "300% increase in brand awareness",
      "175% growth in social media following",
      "80% improvement in customer engagement"
    ]
  }
]; 