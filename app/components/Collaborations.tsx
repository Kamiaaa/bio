'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Brand {
  name: string;
  image: string;
  alt: string;
}

const Collaborations: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;

      const distanceFromTop = rect.top;
      const distanceScrolled = windowHeight - distanceFromTop;

      // Progress: how much the section is scrolled through
      const progress = distanceScrolled / (windowHeight + sectionHeight);

      if (rect.top < windowHeight && rect.bottom > 0) {
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      } else {
        setScrollProgress(0); // Reset when section is out of view
      }
    };

    handleScroll(); // on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brands: Brand[] = [
    {
      name: 'Roberto Cavalli',
      image: '/img/collab/collab-1.webp',
      alt: 'Roberto Cavalli',
    },
    {
      name: 'Mandarin Oriental',
      image: '/img/collab/collab-2.jpeg',
      alt: 'Mandarin Oriental',
    },
    {
      name: 'Versace',
      image: '/img/collab/collab-3.webp',
      alt: 'Versace',
    },
    {
      name: 'De Grisogono',
      image: '/img/collab/collab-4.webp',
      alt: 'de grisogno',
    },
    {
      name: 'Paramount',
      image: '/img/collab/collab-5.webp',
      alt: 'paramount hotels',
    },
    {
      name: 'Trump',
      image: '/img/collab/collab-6.webp',
      alt: 'Trump',
    },
    {
      name: 'Radisson',
      image: '/img/collab/collab-7.webp',
      alt: 'radisson',
    },
    {
      name: 'Rotana',
      image: '/img/collab/collab-8.webp',
      alt: 'rotana',
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-white dark:bg-gray-800 w-full mx-auto relative pt-20 px-4 md:min-h-screen"
    >
      <div className="text-center font-primary max-w-2xl mx-auto mb-12">
        <h2 className="text-gray-900 dark:text-white tracking-wider uppercase text-base md:text-xl leading-5">
          A new realm of curated collaborations
        </h2>
        <p className="text-base font-light text-gray-900 dark:text-white pt-6 pb-4 leading-6">
          DAMAC has worked closely with some of the world's most sought-after purveyors of luxury to create truly exquisite environments
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 gap-6 bg-white dark:bg-gray-900">
        {brands.map((brand, index) => {
          const isEffected = index % 4 === 0 || index % 4 === 2;
          const translateY = isEffected ? scrollProgress * 200 : 50;

          return (
            <div
              key={index}
              className="bg-white transition-transform duration-200"
              style={{ transform: `translateY(${translateY}px)` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collaborations;
