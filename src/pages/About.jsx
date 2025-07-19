import React from "react";
import heroBg from "../assets/herobg.png"; // Hero background
import team2 from "../assets/img/team2.jpeg"; // Example team image
import team1 from "../assets/img/team1.jpeg";
import team3 from "../assets/img/team3.jpeg"; 
import team4 from "../assets/img/team4.jpeg";

export default function About() {
  const teamMembers = [
    {
      name: "Sharan",
      role: "CEO and Creative Director",
      image: team2, // ✅ No {} here
    },
    {
      name: "Vevin",
      role: "COO and Product Director",
      image: team3, // ✅ Imported image
    },
    {
      name: "Brundha",
      role: "CTO and President of Architecture",
      image: team4, // ✅ Imported image
    },
    {
      name: "Lejon",
      role: "Lead Software Engineer and Solution Analyst",
      image: team1, // ✅ Imported image
    },
    {
      name: "J.R.A.C.I.A.",
      role: "Chief Emotional Support Officer",
      image: null, // 👈 fallback to initial
    },
  ];


  return (
    <div className="min-h-screen bg-black text-white pt-10">
      {/* Hero Section */}
      <section className="relative bg-black text-white min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-12 overflow-hidden">
        <img
          src={heroBg}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />
        <div className="relative z-10 text-center w-full">
          <p className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 mt-8 sm:mt-12 px-2">
            We believe innovation should be inclusive, and we strive to build
            tools, services, and experiences that simplify tech for all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 sm:px-0 mt-8 sm:mt-10">
            <div className="bg-black/80 p-6 rounded-lg border border-gray-700 backdrop-blur-md hover:scale-[1.03] transition-transform">
              <h2 className="text-green-400 text-xl md:text-2xl font-bold mb-3">
                OUR MISSION
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                To make technology accessible, understandable, and empowering
                for everyone, regardless of background, scale, or industry.
              </p>
              <p className="text-gray-400 italic text-sm mt-2">- Sharan Vikaas</p>
            </div>

            <div className="bg-black/80 p-6 rounded-lg border border-gray-700 backdrop-blur-md hover:scale-[1.03] transition-transform">
              <h2 className="text-green-400 text-xl md:text-2xl font-bold mb-3">
                OUR VISION
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                To lead a new wave of inclusive digital transformation—built by
                creatives, coders, and changemakers who care.
              </p>
              <p className="text-gray-400 italic text-sm mt-2">
                - Vevin Raja Kumar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-black text-white pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-14 text-center">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white/10 backdrop-blur-md p-6 border border-white/10 hover:border-green-400 transition-all duration-300 shadow-md hover:shadow-green-400/20 cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-square mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-500/20 to-gray-800/20">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Name & Role */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 text-green-300 group-hover:text-green-200 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
