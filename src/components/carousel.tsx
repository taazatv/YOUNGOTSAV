import topVideo from "@/assets/youngotsav.mp4";
import mainVideo from "@/assets/video.mp4";

export default function Carousel() {
  return (
    <section className="w-screen flex flex-col items-center bg-black">
      
      <video
        autoPlay
        muted
        loop
        playsInline
        src={topVideo}
        className="w-full max-w-[1200px] h-[30vh] md:h-[35vh] object-contain"
      />

      {/* Responsive Gap */}
      <div className="h-2 md:h-6" />

      <video
        autoPlay
        muted
        loop
        playsInline
        src={mainVideo}
        className="w-full h-[45vh] md:h-[80vh] object-cover"
      />

    </section>
  );
}