"use client";

import React from "react";
import Link from 'next/link';

import {
  Building,
  Wrench,
  Smartphone,
  Signal,
  Plus,
  Landmark,
} from "lucide-react";
import { link } from "fs";

export default function HomePage() {
  const quickServices = [
    {
      title: "Device Configuration",
      description:
        "Download automated configuration profiles for your devices. Supports Windows, macOS, Linux, Android, and iOS.",
      icon: "📱",
          link: "/configurationPage", // <-- Set your actual route

      
    },
    {
      title: "Institution Directory",
      description:
        "Find participating educational institutions across India. Search by state, city, or institution type.",
      icon: "🏛️",
      link  : "/institutions", // <-- Set your actual route
    },
    {
      title: "Join eduroam",
      description:
        "Information for institutions looking to become part of the eduroam India network.",
      icon: "➕",
      link: "/request", // <-- Set your actual route
    },
    // {
    //   title: "Technical Support",
    //   description:
    //     "Get help with connectivity issues, configuration problems, and technical documentation.",
    //   icon: "🛠️",
    // },
    // {
    //   title: "Network Status",
    //   description:
    //     "Real-time network monitoring and service status across all participating institutions.",
    //   icon: "📶",
    // },
    
    // {
    //   title: "Mobile App",
    //   description:
    //     "Download the official eduroam CAT app for automatic configuration and network discovery.",
    //   icon: "📲",
    // }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Connecting India's Academic Community
            </h1>
            <p className="text-lg mb-6">
              Secure, seamless wireless network access across educational
              institutions nationwide. Part of India’s Digital Education
              initiative under Government of India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/configurationPage">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded">
                  Configure Your Device
                </button>
              </Link>
              <Link href={"/institutions"}>
              <button className="border border-white hover:bg-white hover:text-blue-900 font-semibold py-2 px-5 rounded transition">
                Find Participating Institutions
              </button>
              </Link>
            </div>
          </div>

          {/* Stats Box */}
          <div className="grid grid-cols-2 gap-4">
            {[
              ["200+", "Institutions Connected"],
              ["500K+", "Active Users"],
              ["28", "States & UTs Covered"],
              ["99.8%", "Network Uptime"],
            ].map(([num, label], index) => (
              <div
                key={index}
                className="bg-white/10 p-5 rounded-xl text-center"
              >
                <p className="text-orange-400 text-2xl font-bold">{num}</p>
                <p className="text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="w-full bg-white text-blue-900 py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-4">Quick Services</h2>
        <p className="text-center text-gray-600 mb-10">
          Access essential eduroam services and resources
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickServices.map((service, index) => {
  const cardContent = (
    <div className="border border-blue-900 rounded-xl p-6 hover:shadow-md transition h-full">
      <div className="flex justify-center mb-4">
        <div className="bg-blue-900 text-white p-4 rounded-full text-2xl">
          {service.icon}
        </div>
      </div>
      <h3 className="text-center text-lg font-semibold mb-2">
        {service.title}
      </h3>
      <p className="text-center text-sm text-gray-600">
        {service.description}
      </p>
    </div>
  );

  return service.link ? (
    <Link href={service.link} key={index} className="h-full block">
      {cardContent}
    </Link>
  ) : (
    <div key={index} className="h-full">
      {cardContent}
    </div>
  );
})}

        </div>
      </section>
    </div>
  );
}
