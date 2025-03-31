import HoverImage from "./hover-image";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="flex w-screen flex-col items-center p-8 md:p-16 [&_img]:object-cover"
    >
      <hr className="border-secondary mb-8 w-16 border-t-4" />
      <div className="mb-12 text-4xl font-bold md:text-6xl">Video Gallery</div>
      <div className="flex w-full max-md:flex-col">
        <HoverImage
          className="h-full md:w-2/4"
          src={"/gallery/1.png"}
          link=" https://www.youtube.com/watch?v=4B225E6CS5I"
        />
        <div className="flex flex-col md:w-1/4">
          <HoverImage
            src={"/gallery/2.png"}
            className="aspect-square w-full"
            link=" https://www.instagram.com/p/DG3OupJzBPE/"
          />
          <HoverImage
            src={"/gallery/3.png"}
            className="aspect-square w-full"
            link="https://www.instagram.com/p/DG7PthdtI98/"
          />
        </div>
        <HoverImage
          src={"/gallery/4.png"}
          className="aspect-[1/2] md:w-1/4"
          link=" https://www.instagram.com/p/DG3fbcgSOUJ/"
        />
      </div>
      <div className="flex w-full max-md:flex-col">
        <div className="flex flex-col md:w-2/5">
          <HoverImage
            src={"/gallery/5.png"}
            className="aspect-[3/2] w-full"
            link=" https://www.youtube.com/watch?v=hPlxb76XDdw"
          />
          <HoverImage
            src={"/gallery/6.png"}
            className="aspect-[3/2] w-full"
            link="https://www.instagram.com/p/DGyJ7JbSO1S/"
          />
        </div>
        <HoverImage
          className="aspect-[5/4] md:w-3/5"
          src={"/gallery/7.png"}
          link="https://www.instagram.com/p/DGxB1tpz54C/"
        />
      </div>
    </section>
  );
}
