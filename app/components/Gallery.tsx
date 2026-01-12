'use client';

import CircularGallery from './CircularGallery';

function Gallery() {
    const portraitImages = [
        { image: '/portrait/IMG-20250816-WA0002.jpg' },
        { image: '/portrait/IMG-20250816-WA0028.jpg' },
        { image: '/portrait/IMG-20251116-WA0020.jpg' },
        { image: '/portrait/IMG-20251116-WA0060.jpg' },
        { image: '/portrait/IMG-20251116-WA0091.jpg' },
        { image: '/portrait/IMG_20251214_204333.jpg' },
        { image: '/portrait/IMG_20251214_210611.jpg' },
    ];

    return (
        <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery
                items={portraitImages}
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
            />
        </div>
    )
}

export default Gallery
