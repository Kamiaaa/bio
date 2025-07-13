'use client'

import { Home, Eye, Target } from 'lucide-react'
import { FaBuilding } from "react-icons/fa6";
export default function MissionVision() {
    return (
        <main className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 px-4 md:px-16 py-12 space-y-16">
            {/* Hero Section */}
            <section className="text-center space-y-4">
                <h2 className='text-center py-10'>
                    <span className="relative inline-block text-gray-800 dark:text-gray-50">
                        Mission & Vision
                        {/* Before and after lines with rings and a building in the center */}
                        <span className="absolute inset-x-0 -bottom-10 flex items-center justify-center z-10">
                            {/* Left Line and Ring */}
                            <div className="relative flex items-center">
                                <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
                                <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                            </div>
                            {/* Center Icon */}
                            <span className="z-20 bg-gray-50 dark:bg-gray-800 px-1">
                                <FaBuilding className="w-6 h-6 sm:w-8 sm:h-8 text-[#7AA859]" />
                            </span>
                            {/* Right Line and Ring */}
                            <div className="relative flex items-center">
                                <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                                <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
                            </div>
                        </span>
                    </span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    At Horizon Developments, we build more than properties—we create communities and shape skylines with vision and integrity.
                </p>
            </section>

            {/* Mission & Vision Cards */}
            <section className="grid md:grid-cols-2 gap-8">
                {/* Mission */}
                <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-4">
                        <Home className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                        <h2 className="dark:text-gray-50">Our Mission</h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                        To transform urban landscapes through innovative design, sustainable construction, and community-focused development. We're committed to delivering exceptional properties that stand the test of time while enhancing quality of life.
                    </p>
                </div>

                {/* Vision */}
                <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-4">
                        <Eye className="w-10 h-10 text-green-600 dark:text-green-400" />
                        <h2 className="dark:text-gray-50">Our Vision</h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                        To be the most trusted name in real estate development, pioneering sustainable urban growth and setting new standards for architectural excellence across global markets.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="space-y-8">
                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2 dark:text-gray-50">Core Values</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        The foundation of every project we undertake.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: 'Sustainability', icon: <Target className="text-green-500 dark:text-green-400" /> },
                        { title: 'Innovation', icon: <Target className="text-blue-500 dark:text-blue-400" /> },
                        { title: 'Community', icon: <Target className="text-orange-500 dark:text-orange-400" /> },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h4 className="text-xl font-semibold">{item.title}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}