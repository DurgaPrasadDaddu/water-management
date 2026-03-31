// "use client";

// import { useEffect, useState } from "react";
// import TopBar from "./TopBar";
// import Navbar from "./Navbar";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`sticky top-0 z-999 transition-all duration-300 pb-4
//       ${scrolled ? "bg-white shadow-lg" : "bg-white"}`}
//     >
//       <TopBar />
//       <Navbar />
//     </header>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";



export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let isMounted = true; //FIX

    const handleScroll = () => {
      if (isMounted) {
        setScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      isMounted = false; //prevent state update after unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-[999] transition-all duration-300
  ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"}`}
    >
      <TopBar />
      <Navbar />
    </header>
  );
}
