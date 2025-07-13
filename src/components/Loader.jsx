import React from 'react';
import loaderVideo from '../assets/loader.mp4'; // Make sure the path is correct

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <video
        src={loaderVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain"
      />
    </div>
  );
}
