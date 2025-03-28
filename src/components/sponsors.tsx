import Card from "./card";

export default function Sponsors() {
  return (
    <section className="bg-accent flex w-screen flex-col items-center gap-8 px-8 py-4 md:py-24">
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
          title="Priya Gold Snakker Audition Stage"
          description="Every performer had to prove their mettle here before stepping onto the grand main stage!"
        />

        <Card
          logoUrl={"/sponsors/sah.jpg"}
          title="Emami Smart & Handsome Hunt"
          description="The search for Mr. Smart & Handsome introduced an exciting Instagram voting frenzy, making digital footprints count!"
        />

        <Card
          logoUrl={"/sponsors/oshea-herbals.png"}
          title="Oshea Beauty Zone "
          description="A stylish corner where students got introduced to exclusive flaunting confidence with premium skincare range and a voting of the best female performer! "
        />

        <Card
          logoUrl={"/sponsors/royal-enfield.jpg"}
          title="Royal Enfield Test Rides"
          description="Adrenaline-pumped students experienced the thrill of riding, with interactive games for future  Royal Riders! Tug-of-war by Royal Enfield signified toughness."
        />

        <Card
          logoUrl={"/sponsors/win-pens.png"}
          title="Win Pens Game Zone "
          description="The craziest 1-min games featuring Win Pens, where students had a blast with thrilling speed and accuracy challenges!"
        />

        <Card
          logoUrl={"/sponsors/wild-stone.png"}
          title="Wild Stone Fitness Battles"
          description="With the slogan Wild Hai Bro!, extreme fitness challenges and epic stage showdowns pushed students beyond limits!"
        />

        <Card
          logoUrl={"/sponsors/bhagwati.png"}
          title="Bhagwati Biscuits Cookie Challenge"
          description="Face-off cookie games and a fun Never Have I Ever challenge left students craving for more!"
        />
        <Card
          logoUrl={"/sponsors/impakto.png"}
          title="Impakto Underground Battles "
          description="Hip-hop dance-offs and rap star contests crowned the ultimate street performers, winning cool Impakto sneakers!"
        />
        <Card
          logoUrl={"/sponsors/nicco-park.jpg"}
          title="Nicco Park Thrill Experience "
          description="The ultimate adventure partner, inviting students to experience adrenaline-fueled rides at Kolkata’s favorite theme park!"
        />
      </div>
    </section>
  );
}
