import { HorizontalTicker } from "@/components/horizontal-ticker";

export default function Tickers() {
  const colleges = [
    "College 1",
    "College 2",
    "College 3",
    "College 4",
    "College 5",
    "College 6",
    "College 7",
    "College 8",
    "College 9",
  ];
  const sponsors = [
    "Sponsor 1",
    "Sponsor 2",
    "Sponsor 3",
    "Sponsor 4",
    "Sponsor 5",
    "Sponsor 6",
    "Sponsor 7",
    "Sponsor 8",
    "Sponsor 9",
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
            {college}
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
            {sponsor}
          </div>
        ))}
      </HorizontalTicker>
    </section>
  );
}
