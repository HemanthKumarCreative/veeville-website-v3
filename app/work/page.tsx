import type { Metadata } from "next";
import { workContent } from "@/content/work";

export const metadata: Metadata = {
  title: workContent.seo.title,
  description: workContent.seo.description,
  openGraph: {
    title: workContent.seo.title,
    description: workContent.seo.description,
    url: workContent.seo.url,
  },
  alternates: {
    canonical: workContent.seo.url,
  },
};

export default function WorkPage() {
  return (
    <div className="w-full">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": workContent.schema.page.type,
            name: workContent.schema.page.name,
            description: workContent.schema.page.description,
            url: workContent.schema.page.url,
            mainEntity: {
              "@type": workContent.schema.organization.type,
              name: workContent.schema.organization.name,
              description: workContent.schema.organization.description,
            },
          }),
        }}
      />

      {/* Portfolio Section */}
      <section className="w-full py-16">
        <div className="max-w-[1400px] mx-auto px-5">
          <h1 className="text-4xl font-bold mb-6">
            {workContent.portfolio.title}
          </h1>
          <p className="text-lg text-gray-700 mb-12">
            {workContent.portfolio.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workContent.portfolio.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
