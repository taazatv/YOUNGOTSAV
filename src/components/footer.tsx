export default function Footer() {
  return (
    <section
      id="footer"
      className="flex w-screen flex-col items-center gap-0 bg-neutral-950 p-20"
    >
      <div className="flex w-full items-center justify-center gap-16">
        <img src={"/youngotsav.png"} className="w-sm" />
        {/* <img src="/taaza-tv.png" className="w-[12rem]" /> */}
      </div>
      <div className="text-neutral-400">@Copyright</div>
    </section>
  );
}
