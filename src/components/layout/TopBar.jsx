import Link from "next/link";
import {
  Mail,
  Phone,
} from "lucide-react";
import { socialLinks } from "@/data/socialLinks";

export default function TopBar() {
  return (
    <div className="hidden lg:block w-full bg-[linear-gradient(297deg,#00A3E0_65%,#FFFFFF_35%)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-11">
        
        {/* LEFT MESSAGE */}
        <p className="text-base text-[var(--color-accent)] font-bold tracking-wide">
          Welcome to Hyaline Enviro Engineers Pvt. Ltd.
        </p>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4 text-white text-sm">

          {/* EMAIL */}
          <a
            href="mailto:info@hyalineenviro.com"
            className="flex items-center font-semibold gap-2 hover:text-gray-800 transition duration-300"
          >
            <Mail size={16} />
            <span>info@hyalineenviro.com</span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+919347605167"
            className="flex items-center font-semibold gap-2 hover:text-gray-800 transition duration-300"
          >
            <Phone size={14} />
            <span>+91 9347605167</span>
          </a>

          {/* SOCIAL */}
          <div className="flex items-center gap-3 ml-2">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-800 transition duration-300"
                >
                  {typeof Icon === "string" ? (
                    <span className="text-xs font-semibold">S</span>
                  ) : (
                    <Icon size={18} />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}