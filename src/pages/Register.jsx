// File: src/pages/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import bgImage from '../assets/riot-bg.png'; // Update path as needed

export default function Register() {
  const [form, setForm] = useState({ email: '' });
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form);
    // Proceed to next step or registration logic
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-xl m-4">
        {/* Step Dots */}
        <div className="flex justify-center space-x-2 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                step === i ? 'bg-red-500' : 'bg-gray-200'
              }`}
            ></span>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1 - Email */}
          {step === 1 && (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                What's your email?
              </h2>
              <p className="text-gray-500 mb-4 text-sm">
                Don't worry we won't tell anyone.
              </p>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mb-3 px-4 py-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <label className="flex items-center text-sm text-gray-600 mb-4">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Yes, Riot may send me info about new releases and updates.
              </label>

              <p className="text-sm text-gray-500 mb-3">You can also create an account with</p>

              <div className="flex justify-between gap-2 mb-6">
                <button type="button" className="bg-blue-600 w-full p-2 rounded text-white">f</button>
                <button type="button" className="bg-white border w-full p-2 rounded">G</button>
                <button type="button" className="bg-black w-full p-2 rounded text-white"></button>
                <button type="button" className="bg-green-600 w-full p-2 rounded text-white">X</button>
                <button type="button" className="bg-blue-900 w-full p-2 rounded text-white">PS</button>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-500 p-3 rounded-full text-white text-xl hover:bg-red-600 transition"
                >
                  →
                </button>
              </div>
            </>
          )}
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/signin" className="text-red-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
