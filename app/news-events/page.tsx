import React from 'react'
import { FaCalendarAlt, FaNewspaper } from "react-icons/fa";

export default function NewsAndEventsPage() {
    const news = [
        { 
            title: "Company Wins Sustainability Award", 
            date: "May 15, 2023",
            summary: "Our company has been recognized for our outstanding contributions to environmental sustainability in the manufacturing sector.",
            image: "/img/news/news-01.png"
        },
        { 
            title: "New Product Line Launch", 
            date: "April 2, 2023",
            summary: "We're excited to announce our new eco-friendly product line that reduces carbon footprint by 40% compared to traditional alternatives.",
            image: "/img/news/news-03.jpg"
        },
        { 
            title: "Partnership with Green Initiative", 
            date: "March 10, 2023",
            summary: "We've formed a strategic partnership with Green Earth Initiative to plant 10,000 trees across our operational regions.",
            image: "/img/news/news-02.jpg"
        },
    ];

    const events = [
        { 
            title: "Annual Sustainability Conference", 
            date: "June 20-22, 2023",
            location: "Dhaka, Bangladesh",
            summary: "Join us for our flagship event featuring industry leaders discussing sustainable business practices.",
            image: "/img/news/news-01.png"
        },
        { 
            title: "Community Cleanup Day", 
            date: "July 15, 2023",
            location: "Chittagong, Bangladesh",
            summary: "Volunteer with our team as we clean up local beaches and educate communities about waste management.",
            image: "/img/news/news-02.jpg"
        },
        { 
            title: "Innovation Workshop", 
            date: "August 5, 2023",
            location: "Online",
            summary: "Learn about cutting-edge sustainable technologies in our free virtual workshop series.",
            image: "/img/news/news-03.jpg"
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Hero Section */}
            <section className="px-4 py-20 text-center bg-gray-100 dark:bg-gray-800">
                <h2 className='text-center py-10'>
                    <span className="relative inline-block text-gray-900 dark:text-gray-50">
                        News & Events
                        {/* Before and after lines with rings and icons in the center */}
                        <span className="absolute inset-x-0 -bottom-10 flex items-center justify-center z-10">
                            {/* Left Line and Ring */}
                            <div className="relative flex items-center">
                                <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-gray-100 dark:bg-gray-800"></span>
                                <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                            </div>
                            {/* Center Icons */}
                            <span className="z-20 bg-gray-100 dark:bg-gray-800 px-1 flex gap-2">
                                <FaNewspaper className="w-6 h-6 sm:w-8 sm:h-8 text-[#5f8048]" />
                                {/* <FaCalendarAlt className="w-6 h-6 sm:w-8 sm:h-8 text-[#7AA859]" /> */}
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
                    Stay updated with our latest news and upcoming events in our journey towards sustainable excellence.
                </p>
            </section>

            {/* News Section */}
            <section className="px-4 py-16">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-gray-50 font-semibold mb-8 flex items-center">
                        <FaNewspaper className="mr-3 text-[#7AA859]" />
                        Latest News
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item, index) => (
                            <div
                                key={`news-${index}`}
                                className="group relative bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
                            >
                                {/* News Image */}
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                
                                {/* News Content */}
                                <div className="p-6">
                                    <span className="text-sm text-[#7AA859]">{item.date}</span>
                                    <h4 className="text-xl font-semibold my-2 group-hover:text-[#7AA859] transition-colors duration-300">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {item.summary}
                                    </p>
                                    
                                    {/* Cool Hover Effect */}
                                    <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#7AA859] to-[#5d8a3f] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                                        <div className="absolute top-0 left-0 w-full h-0.5 bg-[#7AA859] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                        <div className="absolute top-0 right-0 w-0.5 h-full bg-[#7AA859] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 delay-100"></div>
                                        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#7AA859] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 delay-200"></div>
                                        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#7AA859] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 delay-300"></div>
                                    </div>
                                </div>
                                
                                {/* Read More Button */}
                                <div className="px-6 pb-6">
                                    <button className="text-[#7AA859] font-medium hover:underline">
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="px-4 py-16 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-gray-50 font-semibold mb-8 flex items-center">
                        <FaCalendarAlt className="mr-3 text-[#7AA859]" />
                        Upcoming Events
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((item, index) => (
                            <div
                                key={`event-${index}`}
                                className="group relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
                            >
                                {/* Event Image */}
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Date Badge */}
                                    <div className="absolute top-4 right-4 bg-[#7AA859] text-white px-3 py-1 rounded-lg text-sm font-medium">
                                        {item.date.split(',')[0]}
                                    </div>
                                </div>
                                
                                {/* Event Content */}
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {item.location}
                                    </div>
                                    <h4 className="text-xl font-semibold my-2 group-hover:text-[#7AA859] transition-colors duration-300">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {item.summary}
                                    </p>
                                    
                                    {/* Cool Hover Effect */}
                                    <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#7AA859] to-[#5d8a3f] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                                        <div className="absolute top-0 left-0 w-full h-0.5 bg-[#7AA859] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                                        <div className="absolute top-0 right-0 w-0.5 h-full bg-[#7AA859] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 delay-100"></div>
                                        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#7AA859] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 delay-200"></div>
                                        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#7AA859] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 delay-300"></div>
                                    </div>
                                </div>
                                
                                {/* Register Button */}
                                <div className="px-6 pb-6">
                                    <button className="px-4 py-2 bg-[#7AA859] text-white rounded-lg hover:bg-[#5d8a3f] transition-colors duration-300">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="px-4 py-16 bg-[#7AA859] text-white text-center">
                <h2 className="text-2xl text-white md:text-3xl font-semibold mb-4">Stay Updated</h2>
                <p className="max-w-2xl mx-auto mb-6 text-gray-50">
                    Subscribe to our newsletter to receive the latest news and event invitations directly to your inbox.
                </p>
                <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="px-4 py-3 flex-grow rounded-lg text-gray-50 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button className="px-6 py-3 bg-white text-[#7AA859] hover:bg-gray-100 rounded-lg font-medium transition-colors duration-300 shadow-md">
                        Subscribe
                    </button>
                </div>
            </section>
        </div>
    );
}