import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Veeville - Our Story & Services | Global Marketing Company",
  description:
    "Learn about Veeville, a global integrated marketing company offering services across IT, retail, healthcare, FMCG, and more sectors. Discover our comprehensive marketing solutions and creative expertise.",
  openGraph: {
    title: "About Veeville - Our Story & Services | Global Marketing Company",
    description:
      "Learn about Veeville, a global integrated marketing company offering services across IT, retail, healthcare, FMCG, and more sectors. Discover our comprehensive marketing solutions and creative expertise.",
    url: "https://veeville.com/about",
  },
  alternates: {
    canonical: "https://veeville.com/about",
  },
};

export interface TeamMember {
  name: string;
  location: string;
  image: string;
}

export interface Service {
  name: string;
  image: string;
}

export interface AboutContent {
  banner: {
    image: string;
    alt: string;
  };
  intro: {
    heading: string;
    paragraphs: string[];
    badge: {
      image: string;
      alt: string;
    };
  };
  services: {
    heading: string;
  };
  team: {
    heading: string;
  };
}

export const aboutContent: AboutContent = {
  banner: {
    image: "https://veeville-website.s3.ap-south-1.amazonaws.com/Images/About+Images/About+Us+Banner_Website_25Jun25_Ish.webp",
    alt: "Banner Image"
  },
  intro: {
    heading: "Namaskara!",
    paragraphs: [
      "Veeville is a global integrated marketing company that offers an assortment of marketing services to organisations across a multitude of sectors including information technology, retail, healthcare, FMCG, hospitality, food & beverage, manufacturing and more.",
      "Our solutions include brand strategy, creative development, campaign planning and execution, on-ground experience design, digital marketing and custom technology design. We also provide services like public relations, media planning & buying, and performance tracking & optimisation through our partner organisations for our clients across the globe.",
      "Explore this site and discover some of our recent work."
    ],
    badge: {
      image: "https://veeville.com/wp-content/uploads/2023/05/Tagline.png",
      alt: "Badge"
    }
  },
  services: {
    heading: "What We Do"
  },
  team: {
    heading: "Team Members"
  }
};

export const teamMembers: TeamMember[] = [
  {
    name: "Arun Kumar",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/08/Arun-Kumar.jpg",
  },
  {
    name: "Brijesh",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/08/Brijesh.jpg",
  },
  {
    name: "Ishita Sharma",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/08/Ishita-Sharma.jpg",
  },
  {
    name: "Karthik Ramesh",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/07/Karthik-Ramesh.jpg",
  },
  {
    name: "Mahesh Vorkady",
    location: "Bengaluru",
    image: `https://veeville-website.s3.ap-south-1.amazonaws.com/Images/About+Images/Mahesh.webp`,
  },
  {
    name: "Rajesh Vorkady",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/07/Rajesh-Vorkady.jpg",
  },
  {
    name: "Methun James",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/07/Methun-James.jpg",
  },
  {
    name: "Srividhya A R",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/07/Srividhya-A-R.jpg",
  },
  {
    name: "Bharat Ramanath",
    location: "Bengaluru",
    image: `https://veeville-website.s3.ap-south-1.amazonaws.com/Images/About+Images/Bharath.webp`,
  },
];

export const services: Service[] = [
  {
    name: "Brand Identity",
    image: "https://veeville.com/wp-content/uploads/2023/05/Brand-identity.png",
  },
  {
    name: "Book Design",
    image: "https://veeville.com/wp-content/uploads/2023/05/Book-Design.png",
  },
  {
    name: "Communication Design",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Communication-Design.png",
  },
  {
    name: "Digital Design",
    image: "https://veeville.com/wp-content/uploads/2023/05/Digital-Design.png",
  },
  {
    name: "Employee Engagement",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Employee-engagement.png",
  },
  {
    name: "Environment Graphics",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Environment-Graphics.png",
  },
  {
    name: "Exhibition Design",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Exhibition-Design.png",
  },
  {
    name: "Film & Motion Graphics",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Film-and-Motion-Graphics.png",
  },
  {
    name: "Learning & Development",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Learning-and-Development.png",
  },
  {
    name: "Package Design",
    image: "https://veeville.com/wp-content/uploads/2023/05/Package-Design.png",
  },
  {
    name: "Sound Design",
    image: "https://veeville.com/wp-content/uploads/2023/05/Sound-Design.png",
  },
  {
    name: "Technology Design",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Technology-Design.png",
  },
  {
    name: "Experience Design",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Experience-Design.png",
  },
  {
    name: "Human Capital Management",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Human-Capital-Management.png",
  },
  {
    name: "Design Consulting",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Design-Consulting.png",
  },
];

export const aboutUsFlipImages = {
  u1: {
    version1: {
      l1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/01_Ver+1.webp",
        alt: "Version 1 - 01"
      },
      l2: {
          image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/02_Ver+1.webp",
          alt: "Version 1 - 02"
      },
      l3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/03_Ver+1.webp",
        alt: "Version 1 - 03"
      },
      m1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/05_Ver+1.webp",
        alt: "Version 1 - 05"
      },
      m2: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/06_Ver+1.webp",
        alt: "Version 1 - 06"
      },
      m3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/06_Ver+1.webp",
        alt: "Version 1 - 06"
      },
      r1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/08_Ver+1.webp",
        alt: "Version 1 - 08"
      },
      r2: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/09_Ver+1.webp",
        alt: "Version 1 - 09"
      },
      r3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/10_Ver+1.webp",
        alt: "Version 1 - 10"
      }
    },
    version2: {
      l1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/1_Ver+2.webp",
        alt: "Version 2 - 01"
      },
      l2: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/2_Ver+2.webp",
        alt: "Version 2 - 02"
      },
      l3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/3_Ver+2.webp",
        alt: "Version 2 - 03"
      },
      m1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/5_Ver+2.webp",
        alt: "Version 2 - 05"
      },
      m2: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/6_Ver+2.webp",
        alt: "Version 2 - 06"
      },
      m3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/6_Ver+2.webp",
        alt: "Version 2 - 06"
      },
      r1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/8_Ver+2.webp",
        alt: "Version 2 - 08"
      },
      r2: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/9_Ver+2.webp",
        alt: "Version 2 - 09"
      },
      r3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/10_Ver+2.webp",
        alt: "Version 2 - 10"
      }
    }
  },
  u2: {
    version1: {
      l1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/16_Ver+1.webp",
        alt: "Version 1 - 01"
      },
      l2: {
          image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/17_Ver+1.webp",
          alt: "Version 1 - 02"
      },
      l3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/18_Ver+1.webp",
        alt: "Version 1 - 03"
      },
      m1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/20_Ver+1.webp",
        alt: "Version 1 - 05"
      },
      m2: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/21_Ver+1.webp",
        alt: "Version 1 - 06"
      },
      m3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/23_Ver+1.webp",
        alt: "Version 1 - 06"
      },
      r1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/25_Ver+1.webp",
        alt: "Version 1 - 08"
      },
      r2: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/26_Ver+1.webp",
        alt: "Version 1 - 09"
      },
      r3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/27_Ver+1.webp",
        alt: "Version 1 - 10"
      }
    },
    version2: {
      l1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/16_Ver+2.webp",
        alt: "Version 2 - 01"
      },
      l2: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/17_Ver+2.webp",
        alt: "Version 2 - 02"
      },
      l3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/18_Ver+2.webp",
        alt: "Version 2 - 03"
      },
      m1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/20_Ver+2.webp",
        alt: "Version 2 - 05"
      },
      m2: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/21_Ver+2.webp",
        alt: "Version 2 - 06"
      },
      m3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/23_Ver+2.webp",
        alt: "Version 2 - 06"
      },
      r1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/25_Ver+2.webp",
        alt: "Version 2 - 08"
      },
      r2: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/26_Ver+2.webp",
        alt: "Version 2 - 09"
      },
      r3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/27_Ver+2.webp",
        alt: "Version 2 - 10"
      }
    }
  },
  seven: {
    version1: {
      u1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/12_Ver+1.webp",
        alt: "Version 1 - 01"
      },
      u2: {
          image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/13_Ver+1.webp",
          alt: "Version 1 - 02"
      },
      m1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/14_Ver+1.webp",
        alt: "Version 1 - 08"
      },
    },
    version2: {
      u1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/12_Ver+2.webp",
        alt: "Version 2 - 01"
      },
      u2: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/13_Ver+2.webp",
        alt: "Version 2 - 02"
      },
      m1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/14_Ver+2.webp",
        alt: "Version 2 - 08"
      },
    }
  },
  linear: {
    version1: {
      l1: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/04_Ver+1.webp",
        alt: "Version 1 - 01"
      },
      l2: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/07_Ver+1.webp",
        alt: "Version 2 - 02"
      },
      l3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/11_Ver+1.webp",
        alt: "Version 2 - 03"
      },
      l4: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/15_Ver+1.webp",
        alt: "Version 2 - 04"
      },
      l5: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/19_Ver+1.webp",
        alt: "Version 2 - 05"
      },
      l6: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/22_Ver+1.webp",
        alt: "Version 2 - 06"
      },
      l7: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/24_Ver+1.webp",
        alt: "Version 2 - 07"
      },
      l8: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/28_Ver+1.webp",
        alt: "Version 2 - 08"
      }
    },
    version2: {
      l1: {   
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/4_Ver+2.webp",
        alt: "Version 2 - 01"
      },
      l2: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/7_Ver+2.webp",
        alt: "Version 2 - 02"   
      },
      l3: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/11_Ver+2.webp",
        alt: "Version 2 - 03"
      },
      l4: { 
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/15_Ver+2.webp",
        alt: "Version 2 - 04"
      },
      l5: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/19_Ver+2.webp",
        alt: "Version 2 - 05" 
      },
      l6: {
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/22_Ver+2.webp",
        alt: "Version 2 - 06"
      },
      l7: { 
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/24_Ver+2.webp",
        alt: "Version 2 - 07"
      },
      l8: { 
        image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/28_Ver+2.webp",
        alt: "Version 2 - 08"
      }
    }
  }
}




//   version1: [
//   // Row 1
//     [
     
     
//       {
       
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/13_Ver+1.webp",
//         alt: "Version 1 - 13"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/17_Ver+1.webp",
//         alt: "Version 1 - 17"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/21_Ver+1.webp",
//         alt: "Version 1 - 21"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/25_Ver+1.webp",
//         alt: "Version 1 - 25"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/01_Ver+1.webp",
//         alt: "Version 1 - 01"
//       }
//     ],
//     // Row 2
//     [
     
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/06_Ver+1.webp",
//         alt: "Version 1 - 06"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/10_Ver+1.webp",
//         alt: "Version 1 - 10"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/14_Ver+1.webp",
//         alt: "Version 1 - 14"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/18_Ver+1.webp",
//         alt: "Version 1 - 18"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/22_Ver+1.webp",
//         alt: "Version 1 - 22"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/26_Ver+1.webp",
//         alt: "Version 1 - 26"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/02_Ver+1.webp",
//         alt: "Version 1 - 02"
//       }
//     ],
//     // Row 3
//     [
//       {
        
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/07_Ver+1.webp",
//         alt: "Version 1 - 07"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/11_Ver+1.webp",
//         alt: "Version 1 - 11"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/15_Ver+1.webp",
//         alt: "Version 1 - 15"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/19_Ver+1.webp",
//         alt: "Version 1 - 19"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/23_Ver+1.webp",
//         alt: "Version 1 - 23"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/27_Ver+1.webp",
//         alt: "Version 1 - 27"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/03_Ver+1.webp",
//         alt: "Version 1 - 03"
//       }
//     ],
//     // Row 4
//     [
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/04_Ver+1.webp",
//         alt: "Version 1 - 04"
//       },
//       {
       
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/12_Ver+1.webp",
//         alt: "Version 1 - 12"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/16_Ver+1.webp",
//         alt: "Version 1 - 16"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/20_Ver+1.webp",
//         alt: "Version 1 - 20"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/24_Ver+1.webp",
//         alt: "Version 1 - 24"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/28_Ver+1.webp",
//         alt: "Version 1 - 28"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+01/04_Ver+1.webp",
//         alt: "Version 1 - 04"
//       }
//     ]
//   ],
//   version2: [
//     // Row 1
//     [
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/1_Ver+2.webp",
//         alt: "Version 2 - 01"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/5_Ver+2.webp",
//         alt: "Version 2 - 05"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/9_Ver+2.webp",
//         alt: "Version 2 - 09"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/13_Ver+2.webp",
//         alt: "Version 2 - 13"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/17_Ver+2.webp",
//         alt: "Version 2 - 17"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/21_Ver+2.webp",
//         alt: "Version 2 - 21"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/25_Ver+2.webp",
//         alt: "Version 2 - 25"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/1_Ver+2.webp",
//         alt: "Version 2 - 01"
//       }
//     ],
//     // Row 2
//     [
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/2_Ver+2.webp",
//         alt: "Version 2 - 02"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/6_Ver+2.webp",
//         alt: "Version 2 - 06"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/10_Ver+2.webp",
//         alt: "Version 2 - 10"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/14_Ver+2.webp",
//         alt: "Version 2 - 14"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/18_Ver+2.webp",
//         alt: "Version 2 - 18"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/22_Ver+2.webp",
//         alt: "Version 2 - 22"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/26_Ver+2.webp",
//         alt: "Version 2 - 26"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/2_Ver+2.webp",
//         alt: "Version 2 - 02"
//       }
//     ],
//     // Row 3
//     [
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/3_Ver+2.webp",
//         alt: "Version 2 - 03"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/7_Ver+2.webp",
//         alt: "Version 2 - 07"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/11_Ver+2.webp",
//         alt: "Version 2 - 11"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/15_Ver+2.webp",
//         alt: "Version 2 - 15"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/19_Ver+2.webp",
//         alt: "Version 2 - 19"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/23_Ver+2.webp",
//         alt: "Version 2 - 23"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/27_Ver+2.webp",
//         alt: "Version 2 - 27"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/3_Ver+2.webp",
//         alt: "Version 2 - 03"
//       }
//     ],
//     // Row 4
//     [
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/4_Ver+2.webp",
//         alt: "Version 2 - 04"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/8_Ver+2.webp",
//         alt: "Version 2 - 08"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/12_Ver+2.webp",
//         alt: "Version 2 - 12"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/16_Ver+2.webp",
//         alt: "Version 2 - 16"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/20_Ver+2.webp",
//         alt: "Version 2 - 20"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/24_Ver+2.webp",
//         alt: "Version 2 - 24"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/28_Ver+2.webp",
//         alt: "Version 2 - 28"
//       },
//       {
//         image: "https://veeville-website.s3.ap-south-1.amazonaws.com/About+Us+Banner/Ver+02/4_Ver+2.webp",
//         alt: "Version 2 - 04"
//       }
//     ]
//   ]
// };