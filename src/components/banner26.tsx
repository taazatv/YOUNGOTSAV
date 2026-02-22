'use client';

export default function TSKVideoPage() {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/youngotsav.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}