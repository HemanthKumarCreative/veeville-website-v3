import type { Metadata } from "next";
import { contactContent } from "@/content/contact";
import { aboutContent } from "@/content/about";
import EnquiryForm from "@/components/ui/enquiry-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: contactContent.seo.title,
  description: contactContent.seo.description,
  openGraph: {
    title: contactContent.seo.title,
    description: contactContent.seo.description,
    url: contactContent.seo.url,
  },
  alternates: {
    canonical: contactContent.seo.url,
  },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": contactContent.schema.page.type,
            name: contactContent.schema.page.name,
            description: contactContent.schema.page.description,
            url: contactContent.schema.page.url,
            mainEntity: {
              "@type": contactContent.schema.organization.type,
              name: contactContent.schema.organization.name,
              contactPoint: contactContent.schema.organization.contactPoint,
            },
          }),
        }}
      />

      <div className="w-full">
        <Image
          src={aboutContent.banner.image}
          alt={aboutContent.banner.alt}
          className="object-contain w-full h-auto"
          width={100}
          height={100}
          priority
        />
      </div>
      {/* Locations Section */}
      <section className="w-full">
        <div className="flex flex-wrap max-w-[1400px] mx-auto p-5 justify-between">
          {/* Left Side */}
          <div className="flex-1 p-5 min-w-[280px] text-black">
            <h2 className="text-2xl mb-2.5">Bengaluru</h2>
            <div className="font-bold mb-2.5 text-left text-lg text-gray-700">
              {new Date().toLocaleTimeString("en-US", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <p>
              Contact Us:{" "}
              <a
                href="mailto:getpersonal@veeville.com"
                className="text-[#b52a2a] font-bold no-underline"
              >
                getpersonal@veeville.com
              </a>
            </p>
            <p>080 2354 2582</p>
            <p>
              Veeville Consulting Private Limited #300,
              <br />
              3rd Floor, 1st Block, 3rd Main, RT Nagar,
              <br />
              Bangalore 560032
              <br />
              <a
                href="https://www.google.com/maps/place/Veeville+Consulting+%5BP%5D+Ltd./@13.020155,77.594268,15z/data=!4m6!3m5!1s0x3bae17f80fffffff:0x77dcef18685169d1!8m2!3d13.0201546!4d77.5942678!16s%2Fg%2F1vlqnnj7?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b52a2a] font-bold no-underline"
              >
                Visit Us
              </a>
            </p>
          </div>

          {/* Right Side */}
          <div className="flex-1 p-5 min-w-[280px] text-black">
            <h3 className="text-xl mb-2.5">Connect with Us!</h3>
            <p className="mb-2.5">
              We'd love to hear from you. Reach out for partnerships, business
              inquiries, or just say hello!
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:getpersonal@veeville.com"
                className="text-[#b52a2a] font-bold no-underline"
              >
                getpersonal@veeville.com
              </a>
            </p>
            <div className="mt-6">
              {/* Contact Form Section */}
              <EnquiryForm content={contactContent} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
