import React from 'react'
import { FaHandshake } from "react-icons/fa";

export default function OurClientsPage() {
    const clients = [
        { name: "SKS Foundation", logo: "/img/clients/2-2.jpg" },
        { name: "BURO Bangladesh", logo: "/img/clients/1-1.jpg" },
        { name: "JAKAS", logo: "/img/clients/7-1.jpg" },
        { name: "HA-MEEM Group", logo: "/img/clients/4-1.jpg" },
        { name: "AKIJ FOOTWEAR LIMITED", logo: "/img/clients/5.jpg" },
        { name: "DABI", logo: "/img/clients/6-2.jpg" },
        { name: "Bashundhara", logo: "/img/clients/12.jpg" },
        { name: "POPI Foundation", logo: "/img/clients/3-1.jpg" },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Hero Section */}
            <section className="px-4 py-20 text-center bg-gray-100 dark:bg-gray-800">
                <h2 className='text-center py-10'>
                    <span className="relative inline-block text-gray-900 dark:text-gray-50">
                        Our Valued Clients
                        {/* Before and after lines with rings and a handshake in the center */}
                        <span className="absolute inset-x-0 -bottom-10 flex items-center justify-center z-10">
                            {/* Left Line and Ring */}
                            <div className="relative flex items-center">
                                <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
                                <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                            </div>
                            {/* Center Icon */}
                            <span className="z-20 bg-gray-50 dark:bg-gray-800 px-1">
                                <FaHandshake className="w-6 h-6 sm:w-8 sm:h-8 text-[#7AA859]" />
                            </span>
                            {/* Right Line and Ring */}
                            <div className="relative flex items-center">
                                <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                                <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
                            </div>
                        </span>
                    </span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
                    We're proud to collaborate with industry leaders and valued partners who trust our vision.
                </p>
            </section>

            {/* Clients Grid */}
            <section className="px-4 py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center shadow hover:shadow-lg transition-all duration-300 h-40 flex items-center justify-center"
                            >
                                {/* Client Logo */}
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-16 max-w-[120px] md:max-h-32 md:max-w-[240px] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                
                                {/* Cool Hover Effect */}
                                <div className="absolute inset-0 overflow-hidden rounded-xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#7AA859] to-[#5d8a3f] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                    <div className="absolute top-0 left-0 w-full h-0.5 bg-[#7AA859] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                    <div className="absolute top-0 right-0 w-0.5 h-full bg-[#7AA859] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 delay-100"></div>
                                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#7AA859] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 delay-200"></div>
                                    <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#7AA859] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 delay-300"></div>
                                </div>
                                
                                {/* Client Name on Hover */}
                                <div className="absolute bottom-0 left-0 right-0 bg-[#7AA859] text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl">
                                    <span className="text-sm font-medium">{client.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            {/* <section className="px-4 py-16 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-8">What Our Clients Say</h2>
                    <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#7AA859] text-white p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>
                        <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                            "Working with this company has been an exceptional experience. Their attention to detail and commitment to quality is unmatched in the industry. We've partnered on multiple projects and each one has exceeded our expectations."
                        </blockquote>
                        <div className="flex items-center justify-center">
                            <img src="/img/clients/client1.png" alt="Testimonial author" className="w-12 h-12 rounded-full object-cover mr-4" />
                            <div className="text-left">
                                <p className="font-semibold text-gray-900 dark:text-gray-100">John Smith</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">CEO, ABC Corporation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Partnership CTA */}
            <section className="px-4 py-16 bg-[#7AA859] text-white text-center">
                <h2 className="text-2xl text-white md:text-3xl font-semibold mb-4">Become Our Partner</h2>
                <p className="max-w-2xl mx-auto mb-6 text-gray-50">
                    Interested in working with us? Let's build something great together.
                </p>
                <button className="px-6 py-3 bg-white text-[#7AA859] hover:bg-gray-100 rounded-lg font-medium transition-colors duration-300 shadow-md">
                    Contact Our Partnership Team
                </button>
            </section>
        </div>
    );
}