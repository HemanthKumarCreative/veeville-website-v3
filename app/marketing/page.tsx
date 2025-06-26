import Image from "next/image";
import {
  marketingContent,
  marketingServices,
  caseStudies,
} from "@/content/marketing";
import { Card } from "@/components/ui/card";

export default function MarketingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Banner Section */}
      <section className="w-full relative">
        <Image
          src={marketingContent.banner.image}
          alt={marketingContent.banner.alt}
          width={1920}
          height={600}
          className="w-full h-[60vh] object-cover"
          priority
        />
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {marketingContent.intro.heading}
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          {marketingContent.intro.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-600 text-center">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {marketingContent.services.heading}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {marketingContent.services.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {marketingContent.caseStudies.heading}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          {marketingContent.caseStudies.description}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={study.image}
                alt={study.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{study.title}</h3>
                <p className="text-[#f05847] font-medium mb-4">
                  {study.client}
                </p>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg mb-2">Key Results:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-gray-600">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
