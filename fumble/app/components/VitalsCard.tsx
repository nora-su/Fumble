interface VitalsCardProps {
  age: number;
  height: string;
  profession: string;
  location: string;
  relationshipType: string;
}

export default function VitalsCard({
  age,
  height,
  profession,
  location,
  relationshipType,
}: VitalsCardProps) {
  return (
    <div className="w-full bg-zinc-200/50 p-6 rounded-xl flex flex-col gap-3 text-sm font-medium text-zinc-800">
      <div className="flex gap-4">
        <span>{age}</span>
        <span>{height}</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span>{profession}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{relationshipType}</span>
        </div>
      </div>
    </div>
  );
}
