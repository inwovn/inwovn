import React from "react";
import heroBg from "../assets/herobg.png"; // Import your hero background image

export default function About() {
  const teamMembers = [
    {
      name: "Sharan",
      role: "CEO and Creative Director",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Vevin",
      role: "COO and Product Director",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Brundha",
      role: "CTO and President of Architecture",
      image: "/api/placeholder/300/300",
    },
    {
      name: "J.R.A.C.I.A.",
      role: "Chief Emotional Support Officer",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Lejon",
      role: "Lead Software Engineer and Solution Analyst",
      image: "/api/placeholder/300/300",
    },
    // {
    //   name: "Tamizh",
    //   role: "UI/UX Designer and Front-End Developer",
    //   image: "/api/placeholder/300/300",
    // },
  ];

  return (
    <div className="min-h-screen bg-black text-white mt-10">
      {/* Hero Section */}
      <section className="relative bg-black text-white h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center px-4 md:px-6 lg:px-12 overflow-hidden">
  {/* Background Image */}
  <img src={heroBg} alt="Hero background" className="absolute inset-0 w-full h-full object-cover opacity-20" />


  {/* Hero Content */}  
  <div className="relative z-10 text-center px-4">
    <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 mt-10">
      We believe innovation should be inclusive, and we strive to build
      tools, services, and experiences that simplify tech for all.
    </p>

    {/* Mission and Vision Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
      {/* Mission */}
      <div className="bg-black/80 p-6 rounded-lg border border-gray-700 backdrop-blur-md hover:scale-105 transition-transform">
        <h2 className="text-green-400 text-xl md:text-2xl font-bold mb-3">
          OUR MISSION
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          To make technology accessible, understandable, and empowering
          for everyone, regardless of background, scale, or industry.
        </p>
        <p className="text-gray-400 italic text-sm mt-2">
          - Sharan Vikaas
        </p>
      </div>

      {/* Vision */}
      <div className="bg-black/80 p-6 rounded-lg border border-gray-700 backdrop-blur-md hover:scale-105 transition-transform">
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
      <section className="bg-black text-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Team
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group rounded-lg bg-gray-500/80 p-4 hover:bg-gray-800 transition-colors"
              >
                <div className="aspect-square bg-gray-300 mb-4 rounded-lg overflow-hidden flex items-center justify-center">
                  {/* Placeholder for team member image */}
                  <div
                    aria-label={`${member.name} photo`}
                    className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl md:text-2xl font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
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
