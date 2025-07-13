import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";

export default function PrimeLocationsPage() {
    const locations = [
        { name: "Gulshan Prime", image: "/img/locations/gulshan.jpg", description: "Premium commercial and residential spaces in the heart of Dhaka's most prestigious neighborhood." },
        { name: "Banani High Street", image: "/img/locations/banani.jpg", description: "Modern mixed-use development along the vibrant Banani commercial corridor." },
        { name: "Baridhara Diplomatic Zone", image: "/img/locations/baridhara.jpg", description: "Exclusive properties adjacent to the diplomatic enclave with premium amenities." },
        { name: "Uttara CBD", image: "/img/locations/uttara.jpg", description: "Strategic commercial developments in Uttara's emerging central business district." },
        { name: "Bashundhara R/A", image: "/img/locations/bashundhara.jpeg", description: "High-value residential projects in Dhaka's fastest growing residential area." },
        { name: "Purbachal New Town", image: "/img/locations/purbachal.jpeg", description: "Future-forward developments in Dhaka's most ambitious planned city project." },
        { name: "Mirpur DOHS", image: "/img/locations/mirpur.jpg", description: "Industrial and commercial properties in Bangladesh's premier economic zone." },
        { name: "Dhanmondi", image: "/img/locations/dhanmondi.webp", description: "Luxury beachfront developments in Bangladesh's premier tourist destination." },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Hero Section */}
            <section className="px-4 py-20 text-center bg-gray-100 dark:bg-gray-800">
                <h2 className='text-center py-10'>
                    <span className="relative inline-block text-gray-900 dark:text-gray-50">
                        BIOBUILD Prime Locations
                        {/* Before and after lines with rings and a map marker in the center */}
                        <span className="absolute inset-x-0 -bottom-10 flex items-center justify-center z-10">
                            {/* Left Line and Ring */}
                            <div className="relative flex items-center">
                                <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-gray-100 dark:bg-gray-800"></span>
                                <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                            </div>
                            {/* Center Icon */}
                            <span className="z-20 bg-gray-100 dark:bg-gray-800 px-1">
                                <FaMapMarkerAlt className="w-6 h-6 sm:w-8 sm:h-8 text-[#7AA859]" />
                            </span>
                            {/* Right Line and Ring */}
                            <div className="relative flex items-center">
                                <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                                <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-gray-100 dark:bg-gray-800"></span>
                            </div>
                        </span>
                    </span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
                    Discover BIOBUILD's premium properties in Dhaka's most sought-after locations and beyond.
                </p>
            </section>

            {/* Locations Grid */}
            <section className="px-4 py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {locations.map((location, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
                            >
                                {/* Location Image */}
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={location.image}
                                        alt={location.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                
                                {/* Location Info */}
                                <div className="p-6">
                                    <h3 className="text-xl text-gray-900 dark:text-white font-semibold mb-2">{location.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{location.description}</p>
                                    
                                    {/* Cool Hover Effect */}
                                    <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#7AA859] to-[#5d8a3f] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                                        <div className="absolute top-0 left-0 w-full h-0.5 bg-[#7AA859] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                        <div className="absolute top-0 right-0 w-0.5 h-full bg-[#7AA859] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 delay-100"></div>
                                        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#7AA859] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 delay-200"></div>
                                        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#7AA859] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 delay-300"></div>
                                    </div>
                                    
                                    {/* Explore Button on Hover */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-[#7AA859] text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-full group-hover:translate-y-0">
                                        <button className="w-full text-center font-medium">
                                            Explore Opportunities
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investment CTA */}
            <section className="px-4 py-16 bg-[#7AA859] text-white text-center">
                <h2 className="text-2xl text-white md:text-3xl font-semibold mb-4">Invest in Prime Real Estate</h2>
                <p className="max-w-2xl mx-auto mb-6 text-gray-50">
                    Partner with BIOBUILD to secure your investment in Bangladesh's most promising locations.
                </p>
                <button className="px-6 py-3 bg-white text-[#7AA859] hover:bg-gray-100 rounded-lg font-medium transition-colors duration-300 shadow-md">
                    Contact Our Investment Team
                </button>
            </section>
        </div>
    );
}