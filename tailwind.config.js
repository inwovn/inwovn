/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        rotate3D: 'spin3d 18s linear infinite',
          showroomModel: 'spinBounce 8s ease-in-out infinite',
      },
      keyframes: {
        
      },
    },
  },
  plugins: [],
}

