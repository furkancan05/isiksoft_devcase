"use client";

import { AppNavigation } from "@/config/AppNavigation.config";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {AppNavigation.map((nav, i) => {
        return (
          <ul key={i} className="flex flex-col">
            <p className="hidden md:block text-secondary font-bold mb-2">
              {nav.sectionTitle}
            </p>

            {nav.children.map((child, i) => {
              if (child.subPaths && child.subPaths.length > 0) {
                return (
                  <div key={i} className="flex flex-col">
                    {/* Hidden checkbox */}
                    <input
                      type="checkbox"
                      id={`dropdown-${child.name}`}
                      className="peer absolute opacity-0 w-0 h-0"
                      defaultChecked={child.subPaths.some(
                        (c) => c.path === pathname
                      )}
                    />

                    <label
                      htmlFor={`dropdown-${child.name}`}
                      className={`w-full flex items-center justify-start gap-2 rounded-md px-2 py-2 md:py-4 transition-colors cursor-pointer ${
                        child.subPaths.some((c) => c.path === pathname)
                          ? "bg-accent text-white"
                          : "text-secondary hover:bg-accent/50 hover:text-foreground"
                      }`}
                    >
                      <span
                        className={`${
                          child.subPaths.some((c) => c.path === pathname)
                            ? "text-accent-secondary"
                            : ""
                        }`}
                      >
                        {child.icon}
                      </span>

                      <span className="hidden md:inline">{child.name}</span>

                      <ChevronDown className="ml-auto" />
                    </label>

                    {/* Submenu shown when checkbox is checked */}
                    <ul className="h-0 peer-checked:h-[140px] flex flex-col items-center md:items-start mt-1 bg-secondary/50 gap-2 rounded-md shadow overflow-hidden transition-all font-semibold">
                      {child.subPaths.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={sub.path}
                            className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm transition-colors ${
                              sub.path === pathname
                                ? "text-accent"
                                : "text-secondary hover:text-accent/50"
                            }`}
                          >
                            {sub.icon}
                            <span className="hidden md:inline text-base">
                              {sub.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              return (
                <Link
                  key={i}
                  href={child.path}
                  className={`flex items-center justify-center md:justify-start gap-2 rounded-md hover:bg-accent/50 hover:text-foreground px-2 py-2 md:py-4 transition-colors ${
                    child.path === pathname
                      ? "text-white bg-accent"
                      : "text-secondary"
                  }`}
                >
                  <span
                    className={`${
                      child.path === pathname ? "text-accent-secondary" : ""
                    }`}
                  >
                    {child.icon}
                  </span>

                  <span className="hidden md:inline">{child.name}</span>

                  {child.notifications ? (
                    <div className="ml-auto hidden md:block">
                      <div className="w-6 aspect-square flex items-center justify-center rounded-full bg-accent-secondary">
                        <small className="text-black font-bold">
                          {child.notifications}
                        </small>
                      </div>
                    </div>
                  ) : null}
                </Link>
              );
            })}

            <div className="block md:hidden w-full h-[1px] bg-secondary mt-4" />
          </ul>
        );
      })}
    </>
  );
}
