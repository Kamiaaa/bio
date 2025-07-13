"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const images = [
    "/img/slide/slide-01.avif",
    "/img/slide/slide-02.webp",
    "/img/slide/slide-03.png",
];

const intervalTime = 4000;

const ZoomCarousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, intervalTime);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-screen max-h-[100vh] overflow-hidden shadow-lg">
            {/* Background Image with Zoom-Out */}
            <motion.div
                key={current}
                className="absolute w-full h-full"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
            >
                <Image
                    src={images[current]}
                    alt={`Slide ${current}`}
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Overlay content */}
            <div className="absolute inset-0 flex items-center px-8 z-10">
                <div className="text-white max-w-xl">
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                        Elevate Your Lifestyle
                    </h2>
                    <p className="text-white text-base md:text-lg drop-shadow-md">
                        Luxury apartments and modern commercial spaces designed to inspire.
                    </p>
                </div>
            </div>

            {/* Bouncing Down Arrow */}
      <motion.div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown size={28} strokeWidth={2.5} />
      </motion.div>
    </div>
        
    );
};

export default ZoomCarousel;
