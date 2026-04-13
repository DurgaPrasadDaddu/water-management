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
      console.log(document.scrollingElement)
    };
  }, []);
 

  return (
    <header className="sticky top-0 z-50 w-full">
      <TopBar />
      <Navbar />
    </header>
  );
}

// export default function Test() {
//   return (
//     <>
//       <header className="sticky top-0 bg-red-500 z-50">
//         STICKY TEST
//       </header>

//       <div style={{ height: "2000px" }}></div>
//     </>
//   );
// }