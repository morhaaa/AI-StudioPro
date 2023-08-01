import Image from "next/image";

export const Loader: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="loading" src="/logo.png" fill />
      </div>
      <p className="text-sm text-muted-foreground">I'm thinking...</p>
    </div>
  );
};
