import React from 'react'
import { FaBuilding } from "react-icons/fa6";
export default function CareerPage() {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Hero Section */}
            <section className="px-4 py-20 text-center bg-gray-100 dark:bg-gray-800">
                <h2 className='text-center py-10'>
                    <span className="relative inline-block text-gray-900 dark:text-gray-50">
                        Join Our Real Estate Team
                        {/* Before and after lines with rings and a building in the center */}
                        <span className="absolute inset-x-0 -bottom-10 flex items-center justify-center z-10">
                            {/* Left Line and Ring */}
                            <div className="relative flex items-center">
                                <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-gray-100 dark:bg-gray-800"></span>
                                <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                            </div>
                            {/* Center Icon */}
                            <span className="z-20 bg-gray-100 dark:bg-gray-800 px-1">
                                <FaBuilding className="w-6 h-6 sm:w-8 sm:h-8 text-[#7AA859]" />
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
                    Build your career with a leading real estate development company creating exceptional properties and communities.
                </p>
            </section>

            {/* Why Work With Us */}
            <section className="px-4 py-16 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="dark:text-gray-50 text-center mb-12">
                        Why Join Our Team?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow p-6">
                            <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">🏗️</div>
                            <h3 className="dark:text-gray-50 mb-2">Innovative Projects</h3>
                            <p className='dark:text-gray-50'>
                                Work on cutting-edge developments that transform skylines and communities.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow p-6">
                            <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">📈</div>
                            <h3 className="dark:text-gray-50 mb-2">Growth Opportunities</h3>
                            <p className='dark:text-gray-50'>
                                Advance your career with our commitment to professional development and training.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow p-6">
                            <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">🤝</div>
                            <h3 className="dark:text-gray-50 mb-2">Collaborative Culture</h3>
                            <p className='dark:text-gray-50'>
                                Join a team of passionate professionals working together to create exceptional properties.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="px-4 py-16 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-5xl mx-auto">
                    <h2 className="dark:text-gray-50 text-center mb-10">
                        Current Opportunities
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow">
                            <h3 className="dark:text-gray-50 mb-2">Real Estate Sales Agent</h3>
                            <p className="mb-3 text-gray-600 dark:text-gray-400">
                                Sell premium properties to discerning clients. License required with proven sales record.
                            </p>
                            <button className="bg-[#7AA859] text-white px-5 py-2 rounded-full hover:bg-[#7aa859e3] transition">
                                Apply Now
                            </button>
                        </div>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow">
                            <h3 className="dark:text-gray-50 mb-2">Project Manager</h3>
                            <p className="mb-3 text-gray-600 dark:text-gray-400">
                                Oversee development projects from conception to completion. 5+ years experience required.
                            </p>
                            <button className="bg-[#7AA859] text-white px-5 py-2 rounded-full hover:bg-[#7aa859e3] transition">
                                Apply Now
                            </button>
                        </div>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow">
                            <h3 className="dark:text-gray-50 mb-2">Architectural Designer</h3>
                            <p className="mb-3 text-gray-600 dark:text-gray-400">
                                Create innovative designs for residential and commercial properties. Portfolio required.
                            </p>
                            <button className="bg-[#7AA859] text-white px-5 py-2 rounded-full hover:bg-[#7aa859e3] transition">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-4 py-16 bg-[#7AA859] dark:bg-[#7aa859e3] text-white text-center">
                <h2 className="text-gray-50 mb-4">Build Your Future With Us</h2>
                <p className="max-w-2xl mx-auto mb-6 text-gray-50">
                    We're looking for talented professionals to help shape the future of real estate. Join our team of innovators and creators.
                </p>
                <button className="bg-white text-[#7AA859] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                    View All Positions
                </button>
            </section>
        </div>
    );
}