'use client';

import React from 'react';

export default function TSKVideoPage() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Full-screen video - no text, no overlay, nothing else */}
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls={false} // Set to true if you want subtle controls on hover
      >
        <source src="youngotsav.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}