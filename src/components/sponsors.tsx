import Card from "./card";

export default function Sponsors() {
  return (
    <section className="bg-accent flex w-screen flex-col items-center gap-8 px-8 py-24">
      <hr className="w-20 border-t-4 border-white" />

      <div className="flex justify-center">
        {/* <div className="absolute -translate-y-4 text-9xl font-extrabold text-[#2e42ae] max-md:text-6xl">
      Sponsors
    </div> */}

        <div className="relative z-10 max-w-4xl text-center text-6xl/tight font-extrabold text-white max-md:text-5xl/tight">
          Sponsors
        </div>
      </div>
      <div className=".no-scrollbar flex w-full items-center gap-8 overflow-auto py-8">
        <Card
          logoUrl={"/sponsors/snakker.png"}
          title="Snakker"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />

        <Card
          logoUrl={"/sponsors/sah.jpg"}
          title="Smart And Handsome"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />

        <Card
          logoUrl={"/sponsors/oshea-herbals.png"}
          title="Oshea Herbals"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />

        <Card
          logoUrl={"/sponsors/royal-enfield.jpg"}
          title="Royal Enfield"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />

        <Card
          logoUrl={"/sponsors/win-pens.png"}
          title="Win Pens"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />

        <Card
          logoUrl={"/sponsors/wild-stone.png"}
          title="Wild Stone"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />

        <Card
          logoUrl={"/sponsors/bhagwati.png"}
          title="Bhagwati"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />
        <Card
          logoUrl={"/sponsors/impakto.png"}
          title="Impakto"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />
        <Card
          logoUrl={"/sponsors/nicco-park.jpg"}
          title="Nicco Park"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />
      </div>
    </section>
  );
}
