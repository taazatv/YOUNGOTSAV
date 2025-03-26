export default function Gallery() {
  const randomImg = () => `https://picsum.photos/1200/1200/?${Math.random()}`;
  return (
    <section
      id="gallery"
      className="flex w-screen flex-col items-center p-8 md:p-16"
    >
      <hr className="border-secondary mb-8 w-16 border-t-4" />
      <div className="mb-12 text-6xl font-bold">Gallery</div>
      <div className="flex w-full max-md:flex-col">
        <img className="h-full md:w-2/4" src={randomImg()} />
        <div className="flex flex-col md:w-1/4">
          <img src={randomImg()} className="aspect-square w-full" />
          <img src={randomImg()} className="aspect-square w-full" />
        </div>
        <img src={randomImg()} className="aspect-[1/2] md:w-1/4" />
      </div>
      <div className="flex w-full max-md:flex-col">
        <div className="flex flex-col md:w-2/5">
          <img src={randomImg()} className="aspect-[3/2] w-full" />
          <img src={randomImg()} className="aspect-[3/2] w-full" />
        </div>
        <img className="aspect-[5/4] md:w-3/5" src={randomImg()} />
      </div>
    </section>
  );
}
