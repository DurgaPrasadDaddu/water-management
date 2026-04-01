"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function MegaMenu({ item }) {
  return (
    <div className="group relative z-90">
      {/* MENU TITLE */}
      <button className="flex items-center gap-1 font-bold font-medium text-[var(--color-dark)] hover:text-[#00A3E0] transition">
        {item.name}
        <ChevronDown
          size={16}
          className="transition-transform duration-300 group-hover:rotate-180"
        />
      </button>

      {/* DROPDOWN */}
      <div
        className="
        absolute left-1/2 -translate-x-1/2 top-full mt-5
        invisible opacity-0 translate-y-2
        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-300
        w-[420px]
        bg-white
        rounded-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        border border-slate-100
        p-4
      "
      >
        {/* Accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#00A3E0] via-[#0077b6] to-[#04b112] rounded-full mb-3" />

        {/* Grid */}
        <div className="grid grid-cols-2 gap-2">
          {item.children.map((child, index) => (
            <Link
              key={child.name}
              href={child.href}
              className="
                flex items-center gap-3
                px-3 py-3
                rounded-xl
                transition-all duration-200
                hover:bg-[#f0f9ff]
                hover:text-[#00A3E0]
                group/item
              "
            >
              {/* Number badge */}
              <span className="w-6 h-6 flex items-center justify-center text-[11px] font-bold bg-slate-100 text-slate-400 rounded-md group-hover/item:bg-[#00A3E0] group-hover/item:text-white transition">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Text */}
              <span className="text-sm font-medium text-slate-700 group-hover/item:text-[#00A3E0]">
                {child.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
