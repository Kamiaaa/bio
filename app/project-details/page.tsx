'use client'
import React, { useState } from 'react';
import { FaBuilding, FaCity, FaHome, FaHotel, FaSearch } from 'react-icons/fa';

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const projects = [
        {
            id: 1,
            title: "Green Valley Residences",
            location: "Dhaka, Bangladesh",
            type: "residential",
            status: "completed",
            image: "/img/projects/project1.jpg",
            description: "Luxury apartments with sustainable design features and premium amenities.",
            features: ["Swimming Pool", "Gym", "24/7 Security", "Park"],
            units: 120,
            size: "5.2 acres"
        },
        {
            id: 2,
            title: "Urban Business Hub",
            location: "Chittagong, Bangladesh",
            type: "commercial",
            status: "ongoing",
            image: "/img/projects/project2.jpg",
            description: "State-of-the-art commercial complex with smart office solutions.",
            features: ["High-Speed Elevators", "Conference Halls", "Underground Parking", "Food Court"],
            units: 85,
            size: "3.8 acres"
        },
        {
            id: 3,
            title: "Lakeview Villas",
            location: "Sylhet, Bangladesh",
            type: "residential",
            status: "upcoming",
            image: "/img/projects/project3.jpg",
            description: "Exclusive waterfront villas with private docks and panoramic views.",
            features: ["Private Beach", "Boating Facility", "Landscaped Gardens", "Community Center"],
            units: 25,
            size: "8.1 acres"
        },
        {
            id: 4,
            title: "Platinum Towers",
            location: "Dhaka, Bangladesh",
            type: "mixed",
            status: "completed",
            image: "/img/projects/project4.jpg",
            description: "Mixed-use development with retail, office, and residential spaces.",
            features: ["Shopping Mall", "Office Spaces", "Residential Floors", "Sky Lounge"],
            units: 200,
            size: "6.5 acres"
        },
        {
            id: 5,
            title: "The Executive Suites",
            location: "Dhaka, Bangladesh",
            type: "hospitality",
            status: "ongoing",
            image: "/img/projects/project5.jpg",
            description: "Five-star serviced apartments for business travelers and expatriates.",
            features: ["Concierge Service", "Spa", "Business Center", "Fine Dining"],
            units: 60,
            size: "2.3 acres"
        },
        {
            id: 6,
            title: "Gardenia Heights",
            location: "Khulna, Bangladesh",
            type: "residential",
            status: "upcoming",
            image: "/img/projects/project6.jpg",
            description: "Eco-friendly apartment complex with vertical gardens and solar panels.",
            features: ["Solar Power", "Rainwater Harvesting", "Children's Play Area", "Jogging Track"],
            units: 80,
            size: "4.7 acres"
        },
    ];

    const projectTypes = [
        { id: 'all', name: 'All Projects', icon: <FaBuilding className="mr-2" /> },
        { id: 'residential', name: 'Residential', icon: <FaHome className="mr-2" /> },
        { id: 'commercial', name: 'Commercial', icon: <FaCity className="mr-2" /> },
        { id: 'mixed', name: 'Mixed Use', icon: <FaBuilding className="mr-2" /> },
        { id: 'hospitality', name: 'Hospitality', icon: <FaHotel className="mr-2" /> },
    ];

    const projectStatuses = ['all', 'completed', 'ongoing', 'upcoming'];

    const filteredProjects = projects.filter(project => {
        const matchesFilter = activeFilter === 'all' || 
                             project.type === activeFilter || 
                             project.status === activeFilter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             project.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Hero Section */}
            <section className="px-4 py-20 text-center bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/project-bg.jpg')] bg-cover bg-center opacity-20 dark:opacity-10"></div>
                <div className="relative max-w-4xl mx-auto">
                    <h2 className='text-center py-10'>
                        <span className="relative inline-block text-gray-900 dark:text-gray-50">
                            Our Projects
                            <span className="absolute inset-x-0 -bottom-10 flex items-center justify-center z-10">
                                <div className="relative flex items-center">
                                    <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
                                    <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                                </div>
                                <span className="z-20 bg-gray-50 dark:bg-gray-800 px-1">
                                    <FaBuilding className="w-6 h-6 sm:w-8 sm:h-8 text-[#7AA859]" />
                                </span>
                                <div className="relative flex items-center">
                                    <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                                    <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
                                </div>
                            </span>
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
                        Explore our portfolio of exceptional developments that redefine urban living and commercial spaces.
                    </p>
                </div>
            </section>

            {/* Filter and Search Section */}
            <section className="px-4 py-8 sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Search Bar */}
                        <div className="relative w-full md:w-96">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search projects..."
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#7AA859] focus:border-[#7AA859] dark:bg-gray-800 dark:text-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-2 justify-center">
                            {projectTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setActiveFilter(type.id)}
                                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === type.id
                                        ? 'bg-[#7AA859] text-white'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    {type.icon}
                                    {type.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Status Filters */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {projectStatuses.map((status) => (
                            <button
                                key={status}
                                onClick={() => setActiveFilter(status)}
                                className={`px-3 py-1 text-xs rounded-full capitalize ${activeFilter === status
                                    ? 'bg-[#7AA859] text-white'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {status === 'all' ? 'All Status' : status}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-4 py-12">
                {filteredProjects.length > 0 ? (
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                            >
                                {/* Project Image with Status Badge */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold ${project.status === 'completed'
                                        ? 'bg-green-100 text-green-800'
                                        : project.status === 'ongoing'
                                            ? 'bg-blue-100 text-blue-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                        }`}
                                    >
                                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                                    </span>
                                </div>

                                {/* Project Details */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-[#7AA859] transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#7AA859] text-white">
                                            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        {project.location}
                                    </p>

                                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Project Features */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                            Key Features:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.features.slice(0, 3).map((feature, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                            {project.features.length > 3 && (
                                                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                                                    +{project.features.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Project Stats */}
                                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
                                        <div>
                                            <span className="font-medium text-gray-900 dark:text-white">{project.units}</span> Units
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-900 dark:text-white">{project.size}</span> Area
                                        </div>
                                    </div>

                                    {/* View Button */}
                                    <button className="mt-4 w-full py-2 bg-[#7AA859] hover:bg-[#6a974f] text-white rounded-lg transition-colors duration-300 flex items-center justify-center">
                                        View Project Details
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 ml-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="max-w-7xl mx-auto text-center py-12">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 mx-auto text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                            No projects found
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Try adjusting your search or filter to find what you're looking for.
                        </p>
                    </div>
                )}
            </section>

            {/* Stats Section */}
            <section className="px-4 py-16 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="p-6">
                        <div className="text-4xl font-bold text-[#7AA859] mb-2">25+</div>
                        <div className="text-gray-700 dark:text-gray-300">Completed Projects</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl font-bold text-[#7AA859] mb-2">1.2M</div>
                        <div className="text-gray-700 dark:text-gray-300">Square Feet Developed</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl font-bold text-[#7AA859] mb-2">5</div>
                        <div className="text-gray-700 dark:text-gray-300">Cities Operated In</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl font-bold text-[#7AA859] mb-2">500+</div>
                        <div className="text-gray-700 dark:text-gray-300">Happy Clients</div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-16 bg-[#7AA859] text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Have a Project in Mind?</h2>
                    <p className="mb-8 text-lg">
                        Our team of experts is ready to bring your vision to life with innovative solutions and exceptional craftsmanship.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-6 py-3 bg-white text-[#7AA859] hover:bg-gray-100 rounded-lg font-medium transition-colors duration-300 shadow-md">
                            Request a Consultation
                        </button>
                        <button className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-[#7AA859] rounded-lg font-medium transition-colors duration-300">
                            View Our Brochure
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}