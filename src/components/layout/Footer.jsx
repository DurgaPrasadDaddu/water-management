"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { solutions } from "@/data/solutions";
import services from "@/data/services";
import { socialLinks } from "@/data/socialLinks";

const Footer = () => {
  return (
    // <footer className="bg-[var(--color-dark)] text-gray-300 pt-12 sm:pt-16 pb-8 px-4 sm:px-6">
    <footer className="bg-[var(--color-dark)] text-gray-300 pt-12 sm:pt-16 pb-8 pl-16 pr-4 sm:pl-18 sm:pr-10">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 md:gap-10 text-center lg:text-left">
        {/* LEFT BLOCK */}
        <div className="col-span-12 lg:col-span-4 flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-left">
          <div className="px-4">
            <Image
              src="/logos/logo.webp"
              alt="Hyaline Enviro Engineers"
              width={160}
              height={50}
              className="mx-auto lg:mx-0"
            />
          </div>

          {/* ADDRESS */}
          <div className="w-full space-y-4 iems-center">
            <h4 className="text-[color:var(--color-primary)] font-semibold text-sm sm:text-base tracking-wide">
              ADDRESS
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 break-words">
              {/* Corporate */}
              <div>
                <p className="text-white font-medium text-sm sm:text-sm md:text-base mb-1">
                  Corporate Office
                </p>

                <p className="text-gray-300 text-sm sm:text-sm md:text-base leading-relaxed">
                  Plot no : 61, Jayaram Bhavan, Ground Floor,
                  <br />
                  Road no : 1, Green Park Avenue,
                  <br />
                  Behind Chennai Shopping Mall,
                  <br />
                  Suchitra Circle, Hyderabad - 500067.
                </p>

                <p className="mt-2 text-gray-300 text-sm sm:text-sm md:text-base">
                  <a
                    href="tel:+917981123366"
                    className="hover:text-[color:var(--color-primary)] transition break-all"
                  >
                    +91-7981123366
                  </a>
                  <br />
                  <a
                    href="tel:+919553753337"
                    className="hover:text-[color:var(--color-primary)] transition break-all"
                  >
                    +91-9553753337
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
              <div>
                <p className="text-white font-medium text-sm sm:text-sm md:text-base mb-1">
                  Factory Address
                </p>

                <p className="text-gray-300 text-sm sm:text-sm md:text-base leading-relaxed">
                  Plot No: 02, Survey No: 11, Pipeline Road,
                  <br />
                  Beside MYUR Bar & Restaurant,
                  <br />
                  Jeedimetla (V), Hyderabad - 500067.
                </p>

                <p className="mt-2 text-gray-300 text-sm sm:text-sm md:text-base">
                  <a
                    href="tel:+919390701234"
                    className="hover:text-[color:var(--color-primary)] transition break-all"
                  >
                    +91-93907 01234
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
              "projects",
              "fabrication",
              "products",
              "services",
              "solutions",
              "blog",
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

        {/* SERVICES */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3 text-left space-y-6">
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
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-10 sm:mt-12 pt-5 sm:pt-6 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Hyaline Enviro Engineers Pvt. Ltd. All
            Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
