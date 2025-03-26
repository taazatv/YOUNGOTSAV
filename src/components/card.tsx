import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface CardProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="flex h-full w-fit max-w-sm flex-col items-center gap-8 border-b-4 bg-white px-8 py-16 text-transparent transition-all duration-500 ease-in-out hover:text-emerald-500">
      <FontAwesomeIcon
        icon={icon}
        className="text-secondary rotate-12 text-8xl"
      />
      <div className="text-center text-2xl font-extrabold text-neutral-950">
        {title}
      </div>
      <div className="w-48 text-center text-neutral-800">{description}</div>
    </div>
  );
}
