import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HoverImage({
  className,
  link,
  ...props
}: React.ComponentProps<"img"> & { link: string }) {
  const Slot = window.innerWidth < 768 ? "a" : "div";
  return (
    <Slot
      className={`hover-image relative hover:[&>.hover-effect]:opacity-100 ${className}`}
      href={window.innerWidth < 768 ? link : ""}
    >
      <div className="hover-effect bg-secondary/50 absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center opacity-0">
        <a
          className="hover:[&_*]:text-primary hover:border-primary bg-primary flex h-20 w-20 items-center justify-center rounded-full text-white hover:bg-white"
          href={link}
        >
          <FontAwesomeIcon className="text-xl" icon={faPlay} />
        </a>
      </div>
      <img className="aspect-[inherit] h-full w-full object-cover" {...props} />
    </Slot>
  );
}
