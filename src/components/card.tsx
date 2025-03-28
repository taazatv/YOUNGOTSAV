export interface CardProps {
  logoUrl: string;
  title: string;
  description: string;
}

export default function Card({ logoUrl, title, description }: CardProps) {
  return (
    <div className="flex h-[26rem] w-fit max-w-sm flex-col items-center gap-4 border-b-4 bg-white px-8 py-8 text-transparent transition-all duration-500 ease-in-out hover:text-emerald-500">
      <img src={logoUrl} className="h-20" />
      <div className="text-center text-2xl font-extrabold text-neutral-950">
        {title}
      </div>
      <div className="w-48 text-center text-neutral-800">{description}</div>
    </div>
  );
}
