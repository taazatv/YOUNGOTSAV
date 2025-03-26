import video from "@/assets/video.mp4";

export default function Carousel() {
  return (
    <section
      id="carousel"
      // className="bg-secondary flex w-screen flex-col items-center gap-8 bg-[url(https://picsum.photos/1600/900)] p-8 py-44 bg-blend-multiply md:py-56"
      className="relative flex w-screen flex-col items-center gap-8 overflow-hidden px-8 py-44 md:py-56"
    >
      <div className="bg-secondary absolute top-0 -z-10 h-full w-full mix-blend-multiply" />
      <video
        autoPlay
        muted
        loop
        playsInline
        src={video}
        className="bg-secondary absolute top-0 -z-20 h-full w-full object-cover bg-blend-multiply"
      />
      <div className="text-primary max-w-full text-center text-3xl font-medium capitalize">
        Enjoy your life with joy & party
      </div>
      <div className="text-center text-9xl font-extrabold text-white max-md:text-6xl">
        Trance Party
      </div>
    </section>
  );
}
