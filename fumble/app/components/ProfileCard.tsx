import Image from "next/image";

interface ProfileCardProps {
  name: string;
  imageSrc: string;
  tags: string[];
}

export default function ProfileCard({ name, imageSrc, tags }: ProfileCardProps) {
  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-200">
      <Image
        src={imageSrc}
        alt={name}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-white tracking-tight">{name}</h1>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r from-pink-500/80 to-purple-500/80 backdrop-blur-sm border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
