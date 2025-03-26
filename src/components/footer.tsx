import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <section
      id="footer"
      className="flex w-screen flex-col items-center gap-8 bg-neutral-950 p-20"
    >
      <img src={logo} className="w-sm" />
    </section>
  );
}
