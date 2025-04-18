"use client";

import { Badge } from "@/components/ui/badge";
import { GitBranch } from "lucide-react";

export default function FloatingBadge() {
  return (
    <a
      href="https://github.com/valbonetbelche/sweet-portfolio"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 hidden lg:block"
    >
      <Badge
        variant="secondary"
        className="flex items-center gap-2 px-3 py-2 text-xs bg-muted/80 backdrop-blur-sm border border-border shadow-sm hover:bg-muted transition-colors"
      >
        <GitBranch className="w-4 h-4" />
        Clone this profile page ❤️
      </Badge>
    </a>
  );
}
