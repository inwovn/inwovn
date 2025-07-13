import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import statueVr from "../assets/vr2.png";
import heroBg from "../assets/bg.jpg";
import serviceBg from "../assets/bg-home.jpg";
import banner from "../assets/bg-banner.png";
import Marquee from "react-fast-marquee";

const INWOVNHomepage = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

    const handleSubscribe = async () => {
  const endpoint = "https://script.google.com/macros/s/AKfycbx6cjr26ziFX6_cVOTyQGknKe01K8oYp2pyaUuTIgT2HSPs7l-rmA0EpOGjmfAwqTUm/exec"; // use your actual script URL

  const payload = {
      subscribed: isSubscribed,
      email: email,
  };

  try {
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors", // to prevent CORS error (limits response)
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    alert("Subscribed successfully!");
    setEmail("");
    setIsSubscribed(false);
  } catch (err) {
    alert("Something went wrong. Please try again.");
    console.error(err);
  }
};

  

  const services = [
    {
      title: "Web Development",
      description: "Build or upgrade your website with professional services tailored to your needs.",
    },
    {
      title: "Brand Identity",
      description: "Elevate your business with expert branding solutions that define your presence.",
    },
    {
      title: "Hosting Setup",
      description: "Secure servers and scalable infrastructure for your growing business.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            IN<span className="text-green-400">WOVN</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
            We deliver world-class digital solutions to help your business thrive.
          </p>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-black py-4">
        <Marquee
          gradient
          gradientColor={[0, 0, 0]}
          gradientWidth={80}
          speed={60}
          pauseOnHover
          className="text-2xl font-bold text-green-400"
        >
          {[...Array(12)].map((_, i) => (
            <span key={i} className="mx-6">
              <span className="text-white">MAKE IT HAPPEN</span> <span className="text-green-400">!!!</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Service Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={serviceBg} alt="Service Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/90" />
        </div>

        {/* Banner */}
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
          <div className="bg-gradient-to-r from-green-700/90 to-green-500/90 shadow-xl rounded-2xl mt-8 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <img src={banner} alt="banner" className="w-16 h-16 object-contain rounded-full shadow-lg" />
            <div className="text-center sm:text-right">
              <h1 className="text-2xl font-bold text-white">INWOVN Store</h1>
              <p className="text-green-100 text-sm">(Coming Soon...)</p>
            </div>
          </div>
        </div> */}

        <div className="relative z-10 container mx-auto px-4 lg:px-8 mt-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our <span className="text-green-400">Services</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => navigate("/service")}
                className="group bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-md cursor-pointer hover:border-green-400 hover:scale-105 transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-green-400 group-hover:text-green-300 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-200 group-hover:text-white">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="relative bg-green-400 py-20 md:py-28 overflow-hidden">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* LEFT: Subscription Form */}
      <div className="z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Subscribe</h2>
        <p className="text-black/90 mb-6 leading-relaxed text-sm sm:text-base">
          A better online experience is on the way. <br />
          Enjoy exciting updates and a fresh new look, coming soon. <br />
          Subscribe to our newsletter for launch updates and exclusive sneak peeks!
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubscribe();
          }}
          className="space-y-6"
        >
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-black font-medium mb-1">
              Email* 
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border-b-2 border-black bg-transparent text-black placeholder-black focus:outline-none"
              required
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="newsletter"
              checked={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
              className="w-4 h-4 accent-black"
            />
            <label htmlFor="newsletter" className="text-black text-sm cursor-pointer">
              Yes, subscribe for the newsletter.*
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* RIGHT: Statue Image Floating */}
      <div className="relative flex justify-center z-0 perspective-1000">
  <img
    src={statueVr}
    alt="VR Statue"
    className="w-[300px] sm:w-[380px] lg:w-[500px] object-contain drop-shadow-2xl
               animate-rotate3D hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(0,255,0,0.5)]
               transition-transform duration-700 ease-in-out"
  />
</div>

    </div>
  </div>
</section>

    </div>
  );
};

export default INWOVNHomepage;
