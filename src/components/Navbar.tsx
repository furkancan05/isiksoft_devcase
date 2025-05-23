import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LogOut, Menu, Search, SlidersVertical } from "lucide-react";
import Navigation from "./navbar/Navigation";

export default async function Navbar() {
  return (
    <nav className="hidden w-full max-w-[130px] md:max-w-[345px] bg-white sm:flex flex-col gap-8 px-8 py-4">
      {/* Logo */}
      <div className="flex items-center justify-between py-4 border-b-[1px] border-secondary/50">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Isiksoft"
            width={140}
            height={56}
            className="hidden md:block"
          />
          <Image
            src="/logo_sm.webp"
            alt="Isiksoft"
            width={56}
            height={56}
            className="block md:hidden mx-auto"
          />
        </Link>

        <Menu className="hidden md:block cursor-pointer" />
      </div>

      {/* Searchbar */}
      <div className="w-12 mx-auto md:w-full md:border border-secondary rounded-md pl-0 md:pl-8 relative flex items-center justify-center bg-secondary/50 md:bg-transparent aspect-square md:aspect-auto cursor-pointer md:cursor-default">
        <Search className="md:absolute md:left-2 md:top-1/2 md:-translate-y-1/2 md:text-secondary" />

        <input
          type="text"
          placeholder="Search here"
          className="hidden md:block p-2 focus:outline-none"
        />
      </div>

      <Navigation />

      {/* Settings */}
      <div className="flex flex-col">
        <p className="hidden md:block text-secondary font-bold mb-2">
          SETTINGS
        </p>

        <Link
          href="/settings"
          className="flex items-center justify-center md:justify-start gap-2 text-secondary rounded-md hover:bg-accent/50 hover:text-foreground px-2 py-2 md:py-4 transition-colors"
        >
          <SlidersVertical />

          <span className="hidden md:inline">Settings</span>
        </Link>

        <div className="flex items-center justify-center md:justify-start gap-2 text-secondary rounded-md hover:bg-accent/50 hover:text-foreground px-2 py-2 md:py-4 transition-colors cursor-pointer">
          <LogOut />

          <span className="hidden md:inline">Logout</span>
        </div>
      </div>
    </nav>
  );
}
