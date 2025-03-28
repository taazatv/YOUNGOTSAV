import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faBars,
  faPhone,
  faRocket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <section
      id="navbar"
      className="flex w-screen items-center justify-around gap-16 bg-neutral-900 px-8 py-0 text-white"
    >
      <div className="flex gap-4 text-3xl font-bold">
        {/* <FontAwesomeIcon icon={faChessQueen} className="text-primary" />
        <div>Youngotsav</div> */}
        <img src={"/youngotsav.png"} className="h-24" />
      </div>

      <div className="[&*]:hover:text-primary flex items-center gap-8 text-xl font-semibold [&*]:not-hover:text-white [&>a]:max-md:hidden">
        <a href="#gallery">Gallery</a>
        <Drawer>
          <DrawerTrigger className="cursor-pointer text-white">
            <FontAwesomeIcon icon={faBars} />
          </DrawerTrigger>
          <DrawerContent
            data-vaul-drawer-direction="right"
            className="dark space-y-4 p-8 text-white"
          >
            <DrawerHeader className="border-b-2">
              <DrawerClose className="absolute top-4 right-4">
                <Button variant={"ghost"}>
                  <FontAwesomeIcon icon={faXmark} className="text-white" />
                </Button>
              </DrawerClose>
              <img src={"/youngotsav.png"} className="-mb-4 w-full" />
            </DrawerHeader>
            <div className="text-xl font-bold">About Us</div>
            <div>
              We must explain to you how all seds this mistakens idea off
              denouncing pleasures and praising pain was born and I will give
              you a completed accounts of the system and expound.
            </div>
            <div className="text-xl font-bold">Contacts</div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faRocket} className="text-primary" />
              Address Here
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faPhone} className="text-primary" />
              Phone No. Here
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faAt} className="text-primary" />
              Email Address Here
            </div>
            <div className="flex w-full justify-center gap-2 text-white">
              <a
                href="#"
                className="hover:bg-primary flex h-12 w-12 items-center justify-center rounded-full not-hover:[&*]:text-white hover:[&*]:text-black"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </DrawerContent>
        </Drawer>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <img className="h-12 max-md:hidden" src="/taaza-tv.png" />
      </div>
    </section>
  );
}
