import Image from "next/image";

interface PhotoCardProps {
  imageSrc?: string;
  alt?: string;
}

export default function PhotoCard({ imageSrc, alt = "Profile Photo" }: PhotoCardProps) {
  return (
    <div className="relative w-full aspect-square bg-zinc-200 rounded-xl overflow-hidden flex items-center justify-center">
      {imageSrc ? (
        <Image src={imageSrc} alt={alt} fill className="object-cover" />
      ) : (
        <div className="text-zinc-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
      )}
    </div>
  );
}
