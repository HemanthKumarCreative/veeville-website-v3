import type { Metadata } from "next";
import { clientsContent } from "@/content/clients";

export const metadata: Metadata = {
  title: clientsContent.seo.title,
  description: clientsContent.seo.description,
  openGraph: {
    title: clientsContent.seo.title,
    description: clientsContent.seo.description,
    url: clientsContent.seo.url,
  },
  alternates: {
    canonical: clientsContent.seo.url,
  },
};

export default function ClientsPage() {
  return (
    <div className="w-full">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": clientsContent.schema.page.type,
            name: clientsContent.schema.page.name,
            description: clientsContent.schema.page.description,
            url: clientsContent.schema.page.url,
            mainEntity: {
              "@type": clientsContent.schema.organization.type,
              name: clientsContent.schema.organization.name,
              description: clientsContent.schema.organization.description,
            },
          }),
        }}
      />

      {/* Clients Section */}
      <section className="w-full py-16">
        <div className="max-w-[1400px] mx-auto px-5">
          <h1 className="text-4xl font-bold mb-6">
            {clientsContent.clients.title}
          </h1>
          <p className="text-lg text-gray-700 mb-12">
            {clientsContent.clients.description}
          </p>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {clientsContent.clients.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {clientsContent.clients.logos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-w-[200px] h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
