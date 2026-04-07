import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/config/navigation";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    // <header className="relative z-[999] bg-white border-b border-gray-100">
    <header className="sticky top-0 z-[9999] bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-[70px] xl:h-[85px] mb-1">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="Hyaline Enviro Engineers"
              width={180}
              height={70}
              priority
              sizes="(max-width: 768px) 140px, (max-width: 1200px) 160px, 180px"
              className="object-contain w-auto h-[70px] md:h-[80px] lg:h-[90px]"
            />
          </Link>

          {/* NAV LINKS (UNCHANGED STRUCTURE) */}
          <nav className="hidden lg:flex items-center justify-center flex-wrap lg:max-w-[600px] xl:max-w-none gap-x-5 gap-y-2 xl:flex-nowrap xl:gap-7">
            {navigation
              .filter((item) => item.name.toLowerCase() !== "contact")
              .map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <MegaMenu item={item} />
                  ) : (
                    <Link
                      href={item.href}
                      className="
                        relative
                        text-[15px] xl:text-[16px]
                        font-medium tracking-wide
                        text-[var(--color-dark)]
                        transition-all duration-300
                        hover:text-[var(--color-primary)]
                        
                        after:absolute after:left-0 after:-bottom-1
                        after:w-0 after:h-[2px]
                        after:bg-[var(--color-secondary)]
                        after:transition-all after:duration-300
                        hover:after:w-full
                      "
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
          </nav>

          {/* CTA (UNCHANGED SPACING) */}
          <div className="flex items-center gap-2 lg:ml-3 xl:ml-6">
            <Link
              href="/contact"
              className="
                hidden lg:inline-flex items-center gap-1.5
                bg-[var(--color-primary)]
                text-white
                px-4 lg:px-5 py-1.5 lg:py-2
                rounded-md
                text-sm lg:text-[15px]
                font-medium tracking-wide
                transition-all duration-300
                hover:bg-[var(--color-accent)]
                hover:shadow-md
              "
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
