import Image from "next/image";
import {
  metadata,
  teamMembers,
  services,
  aboutContent,
  aboutUsFlipImages,
} from "@/content/about";
import { ImageFlipper } from "@/components/ui/image-flipper";

export { metadata };

export default function AboutPage() {
  return (
    <>
      <div className="w-full">
        <div className="max-w-full">
          <ImageFlipper
            aboutUsFlipImages={aboutUsFlipImages}
            className="w-full"
          />
        </div>
      </div>

      <section className="py-16 px-5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4 text-gray-600">
            <h1 className="text-4xl font-medium text-gray-600">
              {aboutContent.intro.heading}
            </h1>
            {aboutContent.intro.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src={aboutContent.intro.badge.image}
              alt={aboutContent.intro.badge.alt}
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-5 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-normal text-gray-600 mb-12">
            {aboutContent.services.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center max-w-[150px]"
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={64}
                  height={64}
                  className="mb-3"
                />
                <p className="text-sm text-gray-700">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 bg-gray-50/40">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {aboutContent.team.heading}
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="mt-2">{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
