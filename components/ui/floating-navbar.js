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
          "fixed sm:top-1/4 sm:left-4 bottom-0 left-1/2 transform -translate-x-1/2 sm:-translate-x-0 sm:transform-none z-[5000] flex flex-row justify-around gap-4 sm:flex-col sm:space-y-4 sm:space-x-0 backdrop-opacity-50 sm:bg-transparent h-fit w-full sm:w-fit border rounded-t-xl sm:rounded-xl shadow-lg p-4 dark:border bg-[#033860]",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "group flex flex-col sm:flex-row items-center py-2 text-lg text-neutral-700 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
            )}
          >
            <span>{navItem.icon}</span>
            <span
            className={cn(
                "sm:ml-2 overflow-hidden w-fit sm:max-w-0 group-hover:max-w-[200px] whitespace-nowrap opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-500 ease-out"
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
