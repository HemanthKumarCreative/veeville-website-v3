import type { Metadata } from "next";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: homeContent.seo.title,
  description: homeContent.seo.description,
  openGraph: {
    title: homeContent.seo.title,
    description: homeContent.seo.description,
    url: homeContent.seo.url,
  },
  alternates: {
    canonical: homeContent.seo.url,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": homeContent.schema.page.type,
            name: homeContent.schema.page.name,
            description: homeContent.schema.page.description,
            url: homeContent.schema.page.url,
            mainEntity: {
              "@type": homeContent.schema.organization.type,
              name: homeContent.schema.organization.name,
              description: homeContent.schema.organization.description,
            },
          }),
        }}
      />

      <div className="flex flex-col mx-auto py-10 md:py-20">
        <div className="max-w-4xl w-full md:w-auto mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 md:mb-10 text-[#848688] tracking-tight">
            {homeContent.hero.greeting}
          </h1>

          <div className="space-y-6 sm:space-y-8">
            <p className="text-base sm:text-lg text-[#848688] leading-relaxed">
              {homeContent.about.companyIntro}
            </p>
            <p className="text-base sm:text-lg text-[#848688] leading-relaxed">
              {homeContent.about.services}
            </p>
            <p className="text-base sm:text-lg text-[#848688] leading-relaxed">
              {homeContent.about.callToAction}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
