// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { navigation } from "@/config/navigation";
// import { Menu, X, ChevronDown } from "lucide-react";

// export default function MobileMenu() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const toggleSubmenu = (name) => {
//     setActiveMenu(activeMenu === name ? null : name);
//   };

//   //Lock background scroll
//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "auto";
//   }, [mobileOpen]);

//   return (
//     <>
//       <div className="lg:hidden">
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="p-2 relative z-[10001]"
//         >
//           {mobileOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* ❗ ONLY MENU SHOULD BE CONDITIONAL */}
//       {mobileOpen && (
//         <div className="fixed inset-0 z-[10000]">
//           {/* 🔥 BACKDROP */}
//           <div
//             onClick={() => setMobileOpen(false)}
//             className={`
//           fixed inset-0 z-[10000]
//           bg-black/40 backdrop-blur-sm
//           transition-opacity duration-300
//           ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}
//         `}
//           />

//           {/* 🔥 SLIDE PANEL */}
//           <div
//             className={`
//           fixed top-0 right-0 left-auto h-screen w-[85%] max-w-[340px]
//           bg-white z-[10001]
//           shadow-2xl
//           transform transition-transform duration-300 ease-in-out
//           ${mobileOpen ? "translate-x-0" : "translate-x-full"}
//           flex flex-col
//         `}
//           >
//             {/* HEADER */}
//             <div className="px-6 py-5 border-b border-gray-100">
//               <h2 className="text-lg font-semibold tracking-wide text-gray-900">
//                 Menu
//               </h2>
//             </div>

//             {/* MENU ITEMS */}
//             <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
//               {navigation.map((item) => (
//                 <div key={item.name}>
//                   {item.children ? (
//                     <>
//                       {/* PARENT */}
//                       <button
//                         onClick={() => toggleSubmenu(item.name)}
//                         className="w-full flex justify-between items-center py-2 font-medium text-left"
//                       >
//                         {item.name}
//                         <ChevronDown
//                           className={`transition-transform duration-300 ${
//                             activeMenu === item.name ? "rotate-180" : ""
//                           }`}
//                         />
//                       </button>

//                       {/* CHILDREN */}
//                       <div
//                         className={`
//                       overflow-hidden transition-all duration-300
//                       ${
//                         activeMenu === item.name
//                           ? "max-h-96 opacity-100 mt-2"
//                           : "max-h-0 opacity-0"
//                       }
//                     `}
//                       >
//                         <div className="pl-4 flex flex-col gap-2">
//                           {item.children.map((sub) => (
//                             <Link
//                               key={sub.name}
//                               href={sub.href}
//                               onClick={() => setMobileOpen(false)}
//                               className="text-sm text-gray-600 hover:text-[var(--color-primary)] transition"
//                             >
//                               {sub.name}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     </>
//                   ) : (
//                     <Link
//                       href={item.href}
//                       onClick={() => setMobileOpen(false)}
//                       className="block py-2 font-medium hover:text-[var(--color-primary)] transition"
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </div>
//               ))}

//               {/* CTA */}
//               <Link
//                 href="/contact"
//                 onClick={() => setMobileOpen(false)}
//                 className="
//               mt-5 block text-center
//               bg-[var(--color-primary)]
//               text-white py-2 rounded-md
//               font-medium
//               hover:bg-[var(--color-accent)]
//               transition
//             "
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// premium look menu bar

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const pathname = usePathname();

  const toggleSubmenu = (name) => {
    setActiveMenu(activeMenu === name ? null : name);
  };

  //Lock scroll
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
    }
  }, [mobileOpen]);

  return (
    <>
      {/* 🔥 MENU BUTTON */}
      <div className="lg:hidden">
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 relative z-[10001] transition-transform active:scale-90"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 🔥 MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-[10000]
          transition-all duration-300
          ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        />

        {/* PANEL */}
        <div
          className={`
          fixed top-0 right-0
          h-screen w-[88%] max-w-[380px]
          bg-white/95 backdrop-blur-xl
          transform transition-transform duration-500
          ${mobileOpen ? "translate-x-0" : "translate-x-[100vw]"}
          flex flex-col
        `}
        >
          {/* HEADER */}
          <div className="px-6 py-5 border-b border-gray-100/80">
            <h2 className="text-lg font-semibold tracking-wide text-gray-900">
              Menu
            </h2>
          </div>

          {/* MENU */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
            {navigation.filter(
                (item) =>
                  item.name !== "Blog" &&
                  item.name !== "Contact",
              ).map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      {/* PARENT */}
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className={`
                          w-full flex justify-between items-center
                          px-4 py-3 rounded-xl
                          text-[15px] font-medium
                          transition-all duration-300
                          ${
                            activeMenu === item.name
                              ? "bg-gray-100 text-[var(--color-primary)]"
                              : "text-gray-700 hover:bg-gray-100"
                          }
                        `}
                      >
                        {item.name}

                        <ChevronDown
                          size={18}
                          className={`
                            transition-transform duration-500
                            ${
                              activeMenu === item.name
                                ? "rotate-180 text-[var(--color-primary)]"
                                : ""
                            }
                          `}
                        />
                      </button>

                      {/* CHILDREN */}
                      <div
                        className={`
                          overflow-hidden transition-all duration-500
                          ${
                            activeMenu === item.name
                              ? "max-h-96 opacity-100 mt-2"
                              : "max-h-0 opacity-0"
                          }
                        `}
                      >
                        <div className="ml-3 pl-4 border-l border-gray-200 space-y-1">
                          {item.children.map((sub) => {
                            const isSubActive = pathname === sub.href;

                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className={`
                                  block px-3 py-2 rounded-lg text-sm
                                  transition-all duration-200
                                  ${
                                    isSubActive
                                      ? "bg-gray-100 text-[var(--color-primary)] font-medium"
                                      : "text-gray-600 hover:bg-gray-100 hover:text-[var(--color-primary)]"
                                  }
                                `}
                              >
                                {sub.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        block px-4 py-3 rounded-xl text-[15px] font-medium
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-gray-100 text-[var(--color-primary)]"
                            : "text-gray-700 hover:bg-gray-100 hover:text-[var(--color-primary)]"
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="
                mt-6 mx-2 block text-center
                bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]
                text-white py-3.5 rounded-xl
                font-semibold tracking-wide
                shadow-md
                transition-all duration-300
                hover:scale-[1.02] hover:shadow-lg
              "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
