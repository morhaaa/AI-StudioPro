"use client";
import { tools } from "@/constants";
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";

const Heading: React.FC = ({}) => {
  const pathName = usePathname();
  const value = pathName.substring(1); // remove '/' from pathName

  return tools.map((header, index) =>
    header.id === value ? (
      <div key={index} className="border-b-2 drop-shadow-md">
        <div className="px-4 lg:px-8 flex items-center gap-x-3 py-4">
          <div className={cn("p-2 w-fit rounded-md", header.bgColor)}>
            {header.icon}
          </div>
          <div>
            <h2 className="md:text-3xl font-bold">{header.title}</h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              {header.description}
            </p>
          </div>
        </div>
      </div>
    ) : (
      ""
    )
  );
};

export default Heading;
