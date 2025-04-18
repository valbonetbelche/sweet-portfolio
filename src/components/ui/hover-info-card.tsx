"use client";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { ReactNode } from "react";

type HoverInfoCardProps = {
  children: ReactNode;
  info: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
};

export const HoverInfoCard = ({
  children,
  info,
  side = "right",
  align = "center",
}: HoverInfoCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent
        side={side}
        align={align}
        className="w-80 text-sm text-muted-foreground"
      >
        {info}
      </HoverCardContent>
    </HoverCard>
  );
};
