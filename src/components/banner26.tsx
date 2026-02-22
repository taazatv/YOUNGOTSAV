'use client';

export default function TSKVideoPage() {
  return (
    <div className="w-full bg-black">
      <div className="relative w-full aspect-video">
        <video
          className="absolute inset-0 w-full h-full object-contain"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/youngotsav.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}