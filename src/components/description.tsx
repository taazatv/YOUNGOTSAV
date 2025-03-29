export default function Description() {
  return (
    <section
      id="description"
      className="flex w-screen items-center justify-between px-4 pt-4 max-md:flex-col md:pl-48"
    >
      <div className="left-content flex flex-col gap-8">
        <hr className="border-primary w-16 border-t-4" />
        <div className="line w-full text-4xl/tight font-extrabold text-neutral-900 md:text-6xl/tight">
          East India’s Biggest College Activation
        </div>
        <div className="w-full max-w-2xl text-lg/loose">
          ✅ 17 Top Colleges | ✅ 1Lakh+ Students Reached | ✅ Unmatched
          Branding.
          <br /> <br />
          Youngotsav 2025 united 1,00,000+ students across 17 colleges in
          Kolkata. From electrifying talent hunts to thrilling interactive brand
          experiences, it showcased the vibrant youth culture like never before!
          Televised on Taaza TV, this one-of-a-kind festival gave students a
          national platform to shine.
        </div>
      </div>
      <div className="right-content flex w-full justify-center self-end">
        <img className="w-full max-w-2xl" src="/ph-2.png" />
      </div>
    </section>
  );
}
