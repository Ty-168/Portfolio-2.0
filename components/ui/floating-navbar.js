"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export const FloatingNav = ({ navItems, className }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-1/4 left-4 z-[5000] flex flex-col space-y-4 backdrop-opacity-50 bg-transparent border rounded-xl shadow-lg p-4 dark:border-white/[0.2]",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "group flex items-center py-2 text-lg text-neutral-700 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
            )}
          >
            <span>{navItem.icon}</span>
        <span
        className={cn(
            "ml-2 overflow-hidden max-w-0 group-hover:max-w-[200px] whitespace-nowrap opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-500 ease-out"
        )}
        >
        {navItem.name}
        </span>


          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
