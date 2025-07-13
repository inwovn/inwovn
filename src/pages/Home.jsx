import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import statueVr from "../assets/test1.png";
import heroBg from "../assets/bg.jpg";
import serviceBg from "../assets/bg-home.jpg";
import banner from "../assets/bg-banner.png"; // Replace with your PNG path
import Marquee from "react-fast-marquee";

const INWOVNHomepage = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }
    if (!isSubscribed) {
      alert("Please check the subscription box.");
      return;
    }
    alert(`Subscribed with: ${email}`);
    setEmail("");
    setIsSubscribed(false);
  };

  const services = [
    {
      title: "Web Development",
      description:
        "Build or upgrade your website with professional services tailored to your needs.",
    },
    {
      title: "Brand Identity",
      description:
        "Elevate your business with expert branding solutions that define your presence.",
    },
    {
      title: "Hosting Setup",
      description:
        "Secure servers and scalable infrastructure for your growing business.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* ===== Hero Section ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          role="img"
          aria-label="Home Background"
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-white mb-6 ">
            IN<span className="text-green-400">WOVN</span>
          </h1>
          <p className="text-gray-200 text-[clamp(1rem,2vw,1.5rem)] max-w-2xl mx-auto">
            We deliver world-class digital solutions to help your business thrive.
          </p>
        </div>
      </section>

      {/* INFINITE MARQUEE */}
           <div className="bg-black py-4">
      <Marquee
        gradient={true}
        gradientColor={[0, 0, 0]} // black gradient to blend with bg
        gradientWidth={80}
        speed={60}
        pauseOnHover={true}
        direction="left"
        className="text-[clamp(1.5rem,2vw,2rem)] font-bold text-green-400"
      >
        {[...Array(12)].map((_, i) => (
          <span key={i} className="mx-6">
            <span className="text-white">MAKE IT HAPPEN</span>{" "}
            <span className="text-green-400">!!!</span>
          </span>
        ))}
      </Marquee>
    </div>


      {/* ===== Service Section ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={serviceBg}
            alt="Our Services Background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/90" />
        </div>

        {/* Floating Banner */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 mt-5">
          {/* <div className="flex justify-center mb-4">
            <button
              type="button"
              className="bg-green-400 text-black px-6 py-2 rounded-full shadow-lg transform transition duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              ✨ Explore Our Services
            </button>
          </div> */}

         <div className="bg-gradient-to-r from-green-700/90 to-green-500/90 shadow-xl rounded-2xl mt-5 sm:p-8">
  <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6 px-0">
    {/* Left: PNG Image */}
    <div className="w-20 h-20 sm:w-20 sm:h-20  flex items-center justify-center ">
      <img
        src={banner} // <- replace with your PNG path
        alt="banner"
        className="w-full h-full object-contain rounded-full shadow-lg"
      />
    </div>

    {/* Right: Text */}
    <div className="text-center sm:text-right">
      <h1 className="text-xl sm:text-2xl font-bold text-white">
        INWOVN Store
      </h1>
      <p className="text-green-100 text-sm sm:text-base">
        (Coming Soon...)
      </p>
    </div>
  </div>
</div>
        </div>

        {/* Services */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 mt-32">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Our <span className="text-green-400">Services</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => navigate("/service")}
                className="relative group aspect-[4/3] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:border-green-400 shadow-lg hover:shadow-green-400/20"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/10 transition-colors duration-500" />
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 group-hover:text-white text-base leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                {/* Glow Circle */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-400 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Subscribe Section ===== */}
<section className="relative bg-green-400 py-20 md:py-28">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Subscribe Form */}
      <div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-6">
          Stay Connected
        </h2>
        <p className="text-black/80 text-lg sm:text-xl mb-8 leading-relaxed">
          Subscribe to get exclusive updates, insights, and news delivered
          straight to your inbox.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!email.trim()) {
              alert("Please enter your email address.");
              return;
            }
            if (!isSubscribed) {
              alert("Please agree to receive the newsletter.");
              return;
            }
            alert(`Subscribed with: ${email}`);
            setEmail("");
            setIsSubscribed(false);
          }}
          className="space-y-6"
        >
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-black font-medium mb-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-5 py-3 rounded-xl bg-white/90 border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-black/40 transition"
              required
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="newsletter"
              checked={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
              className="w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-black/50"
            />
            <label
              htmlFor="newsletter"
              className="text-black text-sm sm:text-base cursor-pointer select-none"
            >
              Yes, I agree to receive the newsletter.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-black/50 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={statueVr}
          alt="Person using Virtual Reality"
          className="w-10 max-w-md lg:max-w-lg "
        />
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default INWOVNHomepage;
