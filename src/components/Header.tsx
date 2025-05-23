import React from "react";
import {
  Bell,
  ChevronDown,
  Globe,
  Mail,
  Menu,
  SlidersVertical,
} from "lucide-react";

export default function Header() {
  return (
    <header className="w-full p-5 sm:p-[30px] rounded-lg bg-white flex justify-between">
      {/* Left side */}
      <div>
        <p className="text-2xl font-bold">Products</p>
        <span className="text-secondary">Manage your products</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6 text-secondary">
        {/* Buttons */}
        <div className="hidden items-center gap-10 h-full lg:flex">
          <span>Theme</span>

          <div className="w-[1px] h-full bg-secondary" />

          <Globe className="cursor-pointer" />

          <div className="relative">
            <Bell className="cursor-pointer" />

            <div className="w-6 aspect-square flex items-center justify-center rounded-full absolute -top-3 -right-3 bg-accent-secondary">
              <small className="text-black font-bold">12</small>
            </div>
          </div>

          <Mail className="cursor-pointer" />
          <SlidersVertical className="cursor-pointer" />
        </div>

        {/* Profile */}
        <div className="hidden md:flex items-center gap-3 cursor-pointer">
          <div className="w-12 aspect-square rounded-full bg-secondary" />

          <div>
            <p className="font-bold text-black">Patricia Peter</p>
            <small className="text-sm">Super Admin</small>
          </div>

          <ChevronDown />
        </div>

        <Menu className="text-black block lg:hidden" />
      </div>
    </header>
  );
}
