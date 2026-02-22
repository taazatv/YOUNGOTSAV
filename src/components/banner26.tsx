'use client';

export default function TSKVideoPage() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
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
    </section>
  );
}