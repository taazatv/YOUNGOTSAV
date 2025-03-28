import { HorizontalTicker } from "@/components/horizontal-ticker";

export default function Tickers() {
  const colleges = [
    "/colleges/ADAMAS.png",
    "/colleges/GNIT-D.png",
    "/colleges/GNIT-H.png",
    "/colleges/GNIT-P.png",
    "/colleges/GNIT.png",
    "/colleges/iem.png",
    "/colleges/NARULA.png",
    "/colleges/surtech.png",
    "/colleges/BHAWANI.png",
    "/colleges/HERITAGE.png",
    "/colleges/MCKVIE.jpg",
    "/colleges/SNU.png",
    "/colleges/TECHNO.jpg",
    "/colleges/THK.png",
  ];
  const sponsors = [
    "/sponsors/bhagwati.png",
    "/sponsors/impakto.png",
    "/sponsors/nicco-park.jpg",
    "/sponsors/oshea-herbals.png",
    "/sponsors/royal-enfield.jpg",
    "/sponsors/sah.jpg",
    "/sponsors/snakker.png",
    "/sponsors/wild-stone.png",
    "/sponsors/win-pens.png",
  ];
  return (
    <section id="tickers" className="flex w-screen flex-col gap-4 py-4">
      <HorizontalTicker
        duration={24000}
        easing={"linear"}
        delay={0}
        reverse={false}
        className="bg-secondary cutout-right relative w-11/12 py-2 md:w-5/6"
      >
        {colleges.map((college, i) => (
          <div key={i} className="w-max px-4 font-bold text-white">
            <img src={college} className="h-12" />
          </div>
        ))}
      </HorizontalTicker>

      <HorizontalTicker
        duration={24000}
        easing={"linear"}
        delay={0}
        reverse={true}
        className="bg-primary cutout-left relative w-11/12 self-end py-2 md:w-5/6"
      >
        {sponsors.map((sponsor, i) => (
          <div key={i} className="w-max px-4 font-bold text-black">
            <img className="h-12" src={sponsor} />
          </div>
        ))}
      </HorizontalTicker>
    </section>
  );
}
