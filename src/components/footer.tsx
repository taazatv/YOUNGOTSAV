import logo from "@/assets/logo.png";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <section
      id="footer"
      className="flex w-screen flex-col items-center gap-8 bg-neutral-950 p-20"
    >
      <img src={logo} className="w-sm" />
      <div className="flex gap-2 text-white">
        <a
          href="#"
          className="hover:bg-primary flex h-12 w-12 items-center justify-center rounded-full not-hover:[&_*]:text-white hover:[&_*]:text-black"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="#"
          className="hover:bg-primary flex h-12 w-12 items-center justify-center rounded-full not-hover:[&_*]:text-white hover:[&_*]:text-black"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="#"
          className="hover:bg-primary flex h-12 w-12 items-center justify-center rounded-full not-hover:[&_*]:text-white hover:[&_*]:text-black"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </section>
  );
}
