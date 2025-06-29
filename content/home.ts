interface HomeContent {
  seo: {
    title: string;
    description: string;
    url: string;
  };
  schema: {
    page: {
      type: string;
      name: string;
      description: string;
      url: string;
    };
    organization: {
      type: string;
      name: string;
      description: string;
    };
  };
  hero: {
    greeting: string;
  };
  about: {
    companyIntro: string;
    services: string;
    callToAction: string;
  };
}

export const homeContent: HomeContent = {
  seo: {
    title: "Welcome to Excellence - Veeville.",
    description: "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
    url: "https://yourwebsite.com",
  },
  schema: {
    page: {
      type: "WebPage",
      name: "Welcome to Excellence - Veeville.",
      description: "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
      url: "https://yourwebsite.com",
    },
    organization: {
      type: "Organization",
      name: "Veeville.",
      description: "Excellence in innovation and business solutions",
    },
  },
  hero: {
    greeting: "Namaskara!",
  },
  about: {
    companyIntro: "Veeville is a global integrated marketing company that offers an assortment of marketing services to organisations across a multitude of sectors including information technology, retail, healthcare, FMCG, hospitality, food & beverage, manufacturing and more.",
    services: "Our solutions include brand strategy, creative development, campaign planning and execution, on-ground experience design, digital marketing and custom technology design. We also provide services like public relations, media planning & buying, and performance tracking & optimisation through our partner organisations for our clients across the globe.",
    callToAction: "Explore this site and discover some of our recent work.",
  },
}; 