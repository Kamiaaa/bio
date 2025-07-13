'use client'
import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function ManagingDirectorProfile() {
    const profile = {
        name: "Architect Md. Mamunur Rahman (Munim)",
        title: "Managing Director",
        image: "/img/bod-01.png",
        bio: [
            [
                { text: "Our managing director ", normal: true },
                { text: "Architect Md Mamunur Rahman (Munim)", highlight: true, bold: true },
                { text: " plays a pivotal role as an organizer at ", normal: true },
                { text: "BIO", highlight: true, color: "#7AA859", bold: true, },
                { text: "BUILD Development Ltd", normal: true},
                { text: ", leveraging his vast experience in steering the company towards greater heights. His dynamic approach and unwavering efficiency have been instrumental in shining a spotlight on our projects and operations.", normal: true }
            ],
            [
                { text: "His sharp intelligence and commitment to timely delivery set him apart as the cornerstone of our management team. He consistently brings new dimensions to our strategies and execution, ensuring that we stay ahead in the competitive ", normal: true },
                { text: "Real Estate Development Industry",},
                { text: ".", normal: true }
            ],
            [
                { text: "His leadership at ", normal: true },
                { text: "BIO", highlight: true, color: "#7AA859", bold: true, },
                { text: "BUILD Development Ltd",},
                { text: " continues to thrive and innovate, always pushing the boundaries of what is possible in real estate development.", normal: true }
            ]
        ],
        contact: {
            phone: "+880 1234 567890",
            email: "munim@biobuild.com",
            address: "BIOBUILD Headquarters, 123 Green Avenue, Gulshan, Dhaka 1212"
        },
        social: {
            linkedin: "https://linkedin.com/in/mamunur-rahman",
            twitter: "https://twitter.com/mamunur_rahman",
            facebook: "https://facebook.com/mamunur.rahman",
            instagram: "https://instagram.com/mamunur.arch"
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-[#7AA859] to-[#5d8a3f] text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('/img/architect-pattern.png')] bg-repeat"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3 flex justify-center">
                            <div className="relative">
                                <img 
                                    src={profile.image} 
                                    alt={profile.name}
                                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-white border-opacity-30 shadow-2xl"
                                />
                                <div className="absolute -bottom-4 right-4 bg-white text-[#7AA859] px-4 py-2 rounded-full shadow-md font-medium">
                                    {profile.title}
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/3 text-center md:text-left">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">{profile.name}</h1>
                            <p className="text-xl text-white mb-6 opacity-90">Visionary Leader | Sustainable Architect | Urban Developer</p>
                            
                            <div className="flex justify-center md:justify-start gap-4">
                                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[[#7AA859]]bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all">
                                    <FaLinkedin className="text-xl" />
                                </a>
                                <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="text-[[#7AA859]]bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all">
                                    <FaTwitter className="text-xl" />
                                </a>
                                <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[[#7AA859]]bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all">
                                    <FaFacebook className="text-xl" />
                                </a>
                                <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[[#7AA859]]bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all">
                                    <FaInstagram className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column */}
                    <div className="lg:w-2/3">
                        {/* Biography */}
                        <section className="mb-16">
                            <div className="space-y-4">
                                {profile.bio.map((paragraph, index) => (
                                    <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {paragraph.map((part, i) => (
                                            <span 
                                                key={i}
                                                style={{
                                                    color: part.highlight ? part.color : undefined,
                                                    fontWeight: part.bold ? '600' : 'normal'
                                                }}
                                            >
                                                {part.text}
                                            </span>
                                        ))}
                                    </p>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/3">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sticky top-4">
                            {/* Contact Information */}
                            <div className="mb-8">
                                <h3 className="text-xl dark:text-white font-semibold mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <FaPhone className="text-[#7AA859] mt-1" />
                                        <span>{profile.contact.phone}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaEnvelope className="text-[#7AA859] mt-1" />
                                        <span>{profile.contact.email}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaMapMarkerAlt className="text-[#7AA859] mt-1" />
                                        <span>{profile.contact.address}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Schedule Meeting */}
                            <div className="mb-8">
                                <h3 className="text-xl dark:text-white font-semibold mb-4">Schedule a Meeting</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Available for consultations and speaking engagements.
                                </p>
                                <button className="w-full py-3 bg-[#7AA859] hover:bg-[#6a974f] text-white rounded-lg font-medium transition-colors duration-300">
                                    Request Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}