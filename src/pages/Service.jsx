import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from '../assets/service-bg4.jpg'
import section from '../assets/service-bg2.png';
import web from '../assets/service-bg1.png';
import Cloud from '../assets/service-bg3.png';
import brand from '../assets/service-bg2.png';



export default function InwovnServices() {

  return (
    <div className="min-h-screen bg-black text-white mt-10">
     
      {/* Hero Section */}
      <section className="bg-black text-center py-8 md:py-12 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Our <span className="text-green-400">Services</span>
        </h1>
      </section>

      {/* Large Hero Image */}
       <section className="relative">
        {/* Background Image */}
        <div className="h-[60vh] md:h-[80vh] w-full relative">
          <img
            src={Hero}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight px-4">
              Building <span className="text-green-400">Brands.</span>
              <br />
              Engineering <span className="text-green-400">Experiences.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* What is INWOVN Section */}
     <section className="bg-black text-gray-300 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
  <div className="max-w-5xl mx-auto">
    <p className="mb-6 text-lg sm:text-xl leading-relaxed">
      <span className="text-white font-semibold">INWOVN</span> is a
      creative-tech studio dedicated to building meaningful digital
      experiences that are{" "}
      <span className="text-green-400 font-semibold">
        smart, simple, and solid
      </span>
      . We bring together a diverse team of designers, developers, and
      thinkers who care deeply about the people behind the screens.
      Whether it's an intuitive website, immersive AR experience,
      scalable cloud solution, or bold brand identity — we craft
      technology with purpose.
    </p>
    <p className="text-lg sm:text-xl leading-relaxed">
      Our mission is to make digital transformation accessible, not just
      for enterprises, but for every startup, community, and creator
      ready to make a lasting impact. At INWOVN, we don’t just build
      projects —{" "}
      <span className="text-green-400 font-semibold">
        we build progress
      </span>{" "}
      through design, code, and collaboration.
    </p>
  </div>
</section>


      {/* Web Development Section */}
      <section className="bg-black px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Web Development</h2>
              <p className="text-green-400 mb-6 text-lg">Build Experiences That Converts</p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                At INWOVN, web development is digital craftsmanship — clean code, 
                smart design, and scalable architecture.
              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                We build fast, responsive, and SEO-optimized websites and web apps 
                that are mobile-friendly and user-focused.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Whether you're launching an MVP or scaling an enterprise solution, our 
                full-stack team delivers growth-ready results with modern tools and clean, 
                purposeful code.
              </p>
            </div>
            <div className="flex items-center order-1 lg:order-2">
              <div className="aspect-square rounded-lg overflow-hidden w-full max-w-md mx-auto">
                <img 
                  src={web} 
                  alt="Web Development" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity Section */}
      <section className="bg-black px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="flex items-center">
              <div className="aspect-square rounded-lg overflow-hidden w-full max-w-md mx-auto">
                <img 
                  src={brand} 
                  alt="Brand Identity" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Brand Identity</h2>
              <p className="text-green-400 mb-6 text-lg">Design That Speaks</p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your brand is more than a logo — it's a living story that deserves to be told 
                with clarity, consistency, and confidence. At INWOVN, we craft brand 
                identities that resonate, connect, and endure.
              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                We dive deep into your vision to create distinctive logos, visual systems, 
                and design languages that reflect who you are and what you stand for.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                From typography and color palettes to motion and messaging, every 
                element is strategically curated to strengthen your brand. We keep it 
                stunning but also communicates effectively across all platforms.
              </p>
              
              <p className="text-gray-300 mt-4 leading-relaxed">
                Our approach combines aesthetic precision with emotional intelligence — 
                building brand identities that don't just represent brands, but build relationships 
                with real people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting & Cloud Services Section */}
      <section className="bg-black px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Hosting & Cloud Services</h2>
          <p className="text-green-400 mb-8 text-lg">Solid Infrastructure. Seamless Delivery.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Behind every great digital experience is a reliable, high-performance infrastructure — 
                and that's exactly what we deliver. At INWOVN, our hosting and cloud services are designed to 
                keep your platforms running fast, safe, and uninterrupted.
              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                We manage everything from domain setup to server configuration, ensuring secure, scalable 
                environments powered by trusted providers like AWS, DigitalOcean, and Vercel. Whether you're hosting a 
                lightweight landing page or a global SaaS product, we provide enterprise-grade stability with startup-
                friendly flexibility.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                You don't have to worry about the backend — we'll handle the uptime, security, and optimization while 
                you stay focused on what matters most.
              </p>
            </div>
            <div className="flex items-center">
              <div className="aspect-square rounded-lg overflow-hidden w-full max-w-md mx-auto">
                <img 
                  src={Cloud}
                  alt="Cloud Services" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-wrap justify-center items-center gap-2 text-lg md:text-xl">
            <span className="text-white">MAKE IT HAPPEN</span>
            <span className="text-green-400">!!!</span>
            <span className="text-white">MAKE IT HAPPEN</span>
            <span className="text-green-400">!!!</span>
            <span className="text-white">MAKE IT HAPPEN</span>
            <span className="text-green-400">!!!</span>
            <span className="text-white">MAKE IT HAPPEN</span>
            <span className="text-green-400">!!!</span>
            <span className="text-white">MAKE IT HAPPEN</span>
            <span className="text-green-400">!!!</span>
            <span className="text-white">MAKE IT HAPPEN</span>
          </div>
        </div>
      </section>
    </div>
  );
}
