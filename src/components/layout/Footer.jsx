import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { solutions } from "@/data/solutions";
import services from "@/data/services";
import { socialLinks } from "@/data/socialLinks";

const Footer = () => {
  return (
    // <footer className="bg-[var(--color-dark)] text-gray-300 pt-12 sm:pt-16 pb-8 px-4  sm:px-6">
    <footer className="bg-[var(--color-dark)] text-white/90 pt-12 pb-8 px-8 md:px-19 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 md:gap-10 text-center lg:text-left">
        {/* LEFT BLOCK */}
        <div className="col-span-12 lg:col-span-4 flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-left">
          <div className="px-4">
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
          </div>

          {/* ADDRESS */}
          <div className="w-full space-y-4 iems-center">
            <h4 className="text-[color:var(--color-primary)] font-semibold text-sm sm:text-base tracking-wide">
              ADDRESS
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 break-words">
              {/* Corporate */}
              <div className="text-white/80 leading-relaxed">
                <p className="text-[color:var(--color-primary)]  font-medium text-sm sm:text-sm md:text-base mb-1">
                  Corporate Office
                </p>

                <p className="text-sm sm:text-sm md:text-base leading-relaxed">
                  Plot no : 61, Jayaram Bhavan, Ground Floor,
                  <br />
                  Road no : 1, Green Park Avenue,
                  <br />
                  Behind Chennai Shopping Mall,
                  <br />
                  Suchitra Circle, Hyderabad, Telangana - 500067.
                </p>

                <p className="mt-2 text-sm sm:text-sm md:text-base">
                  <a
                    href="tel:+917981123366"
                    className="
                    inline-flex items-center
                    min-h-[44px] px-3 py-2
                    text-white/90
                    hover:text-[#00A3E0]
                    transitionblo
                    break-all
                  "
                  >
                    📞 <span>+91-7981123366</span>
                  </a>
                  <br />
                  <a
                    href="tel:+919553753337"
                    className="
                    inline-flex items-center
                    min-h-[44px] px-3 py-2
                    text-white/90
                    hover:text-[#00A3E0]
                    transition
                    break-all
                  "
                  >
                    📞 <span>+91-9553753337</span>
                  </a>
                </p>

                <p className="text-[color:var(--color-primary)] text-sm sm:text-sm md:text-base mt-1 break-all">
                  <a
                    href="mailto:info@hyalineenviro.com"
                    className="hover:underline"
                  >
                    info@hyalineenviro.com
                  </a>
                </p>
              </div>

              {/* Factory */}
              <div className="text-white/80 leading-relaxed">
                <p className="font-medium text-[color:var(--color-primary)]  text-sm sm:text-sm md:text-base mb-1">
                  Factory Address
                </p>

                <p className="text-sm sm:text-sm md:text-base leading-relaxed">
                  Survey No: 737/2, Near MSR Convention Garden,
                  <br />
                  Devar Yamjal (V), Shamirpet (M) <br />
                  Medchal-Malkajgiri (District), Telangana - 500078.
                </p>

                <p className="mt-2 text-sm sm:text-sm md:text-base">
                  <a
                    href="tel:+919347605167"
                    className="
                    inline-flex items-center
                    min-h-[44px] px-3 py-2
                    text-white/90
                    hover:text-[#00A3E0]
                    transition
                    break-all
                  "
                  >
                    📞 <span>+91-9347605167</span>
                  </a>
                  <br />
                </p>

                <p className="text-[color:var(--color-primary)] text-sm sm:text-sm md:text-base mt-1 break-all">
                  <a
                    href="mailto:sales@hyalineenviro.com"
                    className="hover:underline"
                  >
                    sales@hyalineenviro.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-[var(--color-primary)] transition-all duration-300 cursor-pointer"
              >
                <Icon className="text-gray-300 hover:text-white text-sm sm:text-base" />
              </a>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <div className="col-span-12 md:col-span-6 lg:col-span-2 text-left">
          <h4 className="text-[color:var(--color-primary)] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
            ABOUT
          </h4>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-sm md:text-base">
            {[
              "about",
              "solutions",
              "fabrication",
              "products",
              "services",
              "careers",
              "contact",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item}`}
                  className="hover:text-[var(--color-primary)] transition hover:translate-x-1 inline-block"
                >
                  {item.replace("-", " ").toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 text-left space-y-6">
          {/* SOLUTIONS */}
          <div>
            <h4 className="text-[color:var(--color-primary)] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              SOLUTIONS
            </h4>

            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-sm md:text-base">
              {solutions?.slice(0, 5).map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/solutions/${item.slug}`}
                    className="hover:text-[var(--color-primary)] transition hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-[color:var(--color-primary)] font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
              SERVICES
            </h4>

            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-sm md:text-base">
              {services.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="hover:text-[var(--color-primary)] transition hover:translate-x-1 inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3 text-left">
          <h4 className="text-[color:var(--color-primary)] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
            PRODUCTS
          </h4>

          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-sm md:text-base break-words">
            {products?.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/products/${item.slug}`}
                  className="hover:text-[var(--color-primary)] transition hover:translate-x-1 inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-10 sm:mt-12 pt-5 sm:pt-6 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-3 text-center md:text-left">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Hyaline Enviro Engineers Pvt. Ltd. All
            Rights Reserved.
          </p>

          {/* <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-[var(--color-primary)] transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[var(--color-primary)] transition"
            >
              Terms & Conditions
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
