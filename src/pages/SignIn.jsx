// File: src/pages/SignIn.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function SignIn() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', form);
    // Add auth logic here
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/assets/riot-bg.png')` }}
    >
      <div className="bg-white w-full max-w-sm rounded-md shadow-2xl p-8">
        <h2 className="text-2xl font-semibold text-center text-black mb-6">Sign in</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="USERNAME"
            value={form.username}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 text-sm border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 text-sm border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Third-party buttons */}
          <div className="flex justify-between items-center space-x-2 mb-4">
            <button type="button" className="flex-1 py-2 rounded bg-white border text-xs">
              <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="mx-auto" />
            </button>
            <button type="button" className="flex-1 py-2 rounded bg-black text-white text-xs font-bold">
              
            </button>
            <button type="button" className="flex-1 py-2 rounded bg-green-600 text-white text-xs font-bold">
              ⊞
            </button>
            <button type="button" className="flex-1 py-2 rounded bg-blue-600 text-white text-xs font-bold">
              ⧉
            </button>
          </div>

          {/* Stay signed in */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="staySignedIn"
              className="mr-2 accent-blue-600"
            />
            <label htmlFor="staySignedIn" className="text-xs text-gray-700">
              Stay signed in
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-full flex items-center justify-center transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {/* Bottom links */}
        <div className="text-center mt-4 text-xs text-gray-500">
          <p className="mb-1">
            <Link to="#" className="hover:underline">
              CAN’T SIGN IN?
            </Link>
          </p>
          <p>
            <Link to="/register" className="hover:underline">
              CREATE ACCOUNT
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
