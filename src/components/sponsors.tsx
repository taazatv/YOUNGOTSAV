import { faChessPawn } from "@fortawesome/free-regular-svg-icons";
import Card from "./card";

export default function Sponsors() {
  return (
    <section className="bg-secondary flex w-screen flex-col items-center gap-8 px-8 py-24">
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
          icon={faChessPawn}
          title="Almight Pawn"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />
        <Card
          icon={faChessPawn}
          title="Almight Pawn"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />
        <Card
          icon={faChessPawn}
          title="Almight Pawn"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />
        <Card
          icon={faChessPawn}
          title="Almight Pawn"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />
        <Card
          icon={faChessPawn}
          title="Almight Pawn"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />
        <Card
          icon={faChessPawn}
          title="Almight Pawn"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />
        <Card
          icon={faChessPawn}
          title="Almight Pawn"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />
        <Card
          icon={faChessPawn}
          title="Almight Pawn"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />
        <Card
          icon={faChessPawn}
          title="Almight Pawn"
          description="Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudantium totam rem aperiamse"
        />
      </div>
    </section>
  );
}
