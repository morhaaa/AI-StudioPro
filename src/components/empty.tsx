import Image from "next/image";

interface Props {
  label: string;
}

export const Empty: React.FC<Props> = ({ label }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
