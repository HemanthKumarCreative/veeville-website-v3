import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Veeville - Get in Touch | Global Marketing Company",
  description:
    "Connect with Veeville's global marketing team. Reach out for partnerships, business inquiries, or to discuss your marketing needs. We're here to help transform your brand.",
  openGraph: {
    title: "Contact Veeville - Get in Touch | Global Marketing Company",
    description:
      "Connect with Veeville's global marketing team. Reach out for partnerships, business inquiries, or to discuss your marketing needs.",
    url: "https://veeville.com/contact",
  },
  alternates: {
    canonical: "https://veeville.com/contact",
  },
};

export interface ContactContent {
  seo: {
    title: string;
    description: string;
    url: string;
  };
  banner: {
    image: string;
    alt: string;
  };
  hero: {
    title: string;
    description: string;
  };
  location: {
    city: string;
    email: string;
    phone: string;
    address: string[];
    mapUrl: string;
    visitUsText: string;
  };
  connect: {
    title: string;
    description: string;
    email: string;
  };
  form: {
    fields: {
      firstName: {
        label: string;
        placeholder: string;
      };
      lastName: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      company: {
        label: string;
        placeholder: string;
      };
      message: {
        label: string;
        placeholder: string;
      };
    };
    submitButton: string;
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
      contactPoint: {
        type: string;
        telephone: string;
        contactType: string;
        email: string;
        availableLanguage: string;
      };
    };
  };
}

export const contactContent: ContactContent = {
  seo: {
    title: "Contact Veeville - Get in Touch | Global Marketing Company",
    description: "Connect with Veeville's global marketing team. Reach out for partnerships, business inquiries, or to discuss your marketing needs.",
    url: "https://veeville.com/contact",
  },
  banner: {
    image: "https://veeville-website.s3.ap-south-1.amazonaws.com/Project-Images/thumbnails/Contact+Banner.webp",
    alt: "Contact Banner",
  },
  hero: {
    title: "Connect with Us",
    description: "We'd love to hear from you. Reach out for partnerships, business inquiries, or just say hello!",
  },
  location: {
    city: "Bengaluru",
    email: "getpersonal@veeville.com",
    phone: "080 2354 2582",
    address: [
      "Veeville Consulting Private Limited #300,",
      "3rd Floor, 1st Block, 3rd Main, RT Nagar,",
      "Bangalore 560032"
    ],
    mapUrl: "https://www.google.com/maps/place/Veeville+Consulting+%5BP%5D+Ltd./@13.020155,77.594268,15z/data=!4m6!3m5!1s0x3bae17f80fffffff:0x77dcef18685169d1!8m2!3d13.0201546!4d77.5942678!16s%2Fg%2F1vlqnnj7?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D",
    visitUsText: "Visit Us"
  },
  connect: {
    title: "Connect with Us!",
    description: "We'd love to hear from you. Reach out for partnerships, business inquiries, or just say hello!",
    email: "getpersonal@veeville.com"
  },
  form: {
    fields: {
      firstName: {
        label: "First Name *",
        placeholder: "John"
      },
      lastName: {
        label: "Last Name *",
        placeholder: "Doe"
      },
      email: {
        label: "Email *",
        placeholder: "john@example.com"
      },
      company: {
        label: "Company",
        placeholder: "Your Company Name"
      },
      message: {
        label: "Message *",
        placeholder: "Tell us about your project..."
      }
    },
    submitButton: "Send Message"
  },
  schema: {
    page: {
      type: "ContactPage",
      name: "Contact Veeville - Get in Touch",
      description: "Connect with Veeville's global marketing team. Reach out for partnerships, business inquiries, or to discuss your marketing needs.",
      url: "https://veeville.com/contact",
    },
    organization: {
      type: "Organization",
      name: "Veeville",
      contactPoint: {
        type: "ContactPoint",
        telephone: "080 2354 2582",
        contactType: "customer service",
        email: "getpersonal@veeville.com",
        availableLanguage: "English",
      },
    },
  },
}; 