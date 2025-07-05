"use client";
import React from "react";

import { IconHome, IconMessage, IconUser, IconFolderOpen } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-8 w-8 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-8 w-8 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "#project",
      icon: <IconFolderOpen className="h-8 w-8 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-8 w-8 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};
