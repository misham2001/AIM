"use client";

import {
    ContainerStagger,
    ContainerAnimated,
    GalleryGrid,
    GalleryGridCell,
} from "@/components/blocks/cta-section-with-gallery";
import Image from "next/image";

const images = [
    { src: "/ministry.jpg", alt: "Bastar Ministry" },
    { src: "/Outreach.jpg", alt: "Outreach Program" },
    { src: "/OurChurch.jpg", alt: "Our Church" },
    { src: "/Scroll1.jpg", alt: "Community Service" },
];

export function BasarMinistrySection() {
    return (
        <div className="container mx-auto px-4 py-16">
            <ContainerStagger className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text content on left side */}
                <ContainerAnimated>
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                            Bastar Ministry
                        </h2>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Our Bastar Ministry works tirelessly to bring education, healthcare,
                            and community development to remote areas. We are committed to serving
                            the underserved communities and making a lasting impact through faith and action.
                        </p>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Together, we aim to create lasting change and build strong foundations
                            for future generations through our outreach programs.
                        </p>
                        <div className="pt-4">
                            <a href="/bastar-ministry" className="inline-block bg-neutral-900 text-white hover:bg-neutral-800 h-10 px-8 rounded-md text-sm font-medium transition-colors leading-10">
                                Learn More
                            </a>
                        </div>
                    </div>
                </ContainerAnimated>

                {/* Gallery on right side */}
                <GalleryGrid>
                    {images.map((image, index) => (
                        <GalleryGridCell key={index} index={index}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </GalleryGridCell>
                    ))}
                </GalleryGrid>
            </ContainerStagger>
        </div>
    );
}
