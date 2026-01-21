"use client";


import {
    ContainerStagger,
    ContainerAnimated,
    GalleryGrid,
    GalleryGridCell,
} from "@/components/blocks/cta-section-with-gallery";
import Image from "next/image";

const images = [
    { src: "/Outreach.jpg", alt: "Outreach Program" },
    { src: "/ministry.jpg", alt: "Bastar Ministry" },
    { src: "/OurChurch.jpg", alt: "Our Church" },
    { src: "/Scroll.jpg", alt: "Community" },
];

export function MinistryGallery() {
    return (
        <div className="container mx-auto px-4 py-16">
            <ContainerStagger className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <ContainerAnimated>
                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                            Ministry in Action
                        </h2>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Experience the vibrant life of our church community through our various ministries.
                            From outreach programs to worship services, we are dedicated to making a difference
                            and spreading hope. Join us in our journey of faith and service.
                        </p>
                        <div className="pt-4">
                            <button className="bg-neutral-900 text-white hover:bg-neutral-800 h-10 px-8 rounded-md text-sm font-medium transition-colors">
                                View All Ministries
                            </button>
                        </div>
                    </div>
                </ContainerAnimated>

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
