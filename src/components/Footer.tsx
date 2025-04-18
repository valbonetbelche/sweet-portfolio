"use client";

import { GitBranch } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 px-6 py-8 text-sm text-muted-foreground flex flex-col items-center gap-2 border-t border-border">
      <p>
        &copy; {new Date().getFullYear()} John Douglas. All rights reserved.
      </p>
      {/* Show the clone link only below 1000px (md:flex, lg:hidden) */}
      <a
        href="https://github.com/valbonetbelche/sweet-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors lg:hidden"
      >
        <GitBranch className="w-4 h-4" />
        Clone this profile page ❤️
      </a>
    </footer>
  );
}
