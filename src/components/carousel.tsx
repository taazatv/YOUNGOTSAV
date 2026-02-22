import topVideo from "@/assets/youngotsav.mp4";
import mainVideo from "@/assets/video.mp4";

export default function Carousel() {
  return (
    <section
      id="carousel"
      className="relative flex w-screen flex-col items-center overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        src={topVideo}
        className="w-full h-[30vh] object-cover"
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        src={mainVideo}
        className="w-full h-[45vh] object-cover"
      />
    </section>
  );
}