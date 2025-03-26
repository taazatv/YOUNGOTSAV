export default function Description() {
  return (
    <section
      id="description"
      className="flex w-screen items-center justify-between px-4 pt-24 max-md:flex-col md:pl-48"
    >
      <div className="left-content flex flex-col gap-8">
        <hr className="border-primary w-16 border-t-4" />
        <div className="line max-w-md text-4xl/tight font-extrabold text-neutral-900 md:text-6xl/tight">
          We are permanently anondho club members
        </div>
        <div className="max-w-[44ch] text-lg/loose">
          Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium
          doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo
          inven- tore veritatis et quasi architecto beatae
        </div>
      </div>
      <div className="right-content self-end">
        <img src="http://shtheme.info/demosd/anondho/wp-content/uploads/2019/11/about.png" />
      </div>
    </section>
  );
}
