import Image from "next/image";

interface Props {
  label: string;
}

export const Empty: React.FC<Props> = ({ label }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="relative h-28 w-28">
        <Image alt="Empty" fill src="/empty.png" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
