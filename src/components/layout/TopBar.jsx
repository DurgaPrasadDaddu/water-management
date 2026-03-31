// "use client";

// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaFacebookF, FaLinkedinIn, FaTwitter, FaSkype } from "react-icons/fa6";
// import { AiFillInstagram } from "react-icons/ai";
// import Link from "next/link";

// export default function TopBar() {
//   return (

//     /* Hide on mobile + tablet */
//     <div className="hidden lg:block w-full bg-[linear-gradient(297deg,#00A3E0_65%,#FFFFFF_35%)]">

//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-10">

//         {/* LEFT MESSAGE */}

//         <p className="text-md text-[#00A3E0] font-semibold">
//           Welcome to Hyaline Enviro Engineers Pvt. Ltd.
//         </p>

//         {/* RIGHT CONTACT */}

//         <div className="flex items-center gap-6 text-white text-sm">

//           <div className="flex items-center gap-2 font-bold">
//             <Link href="/blog">BLOG</Link>
//           </div>
//           <div className="flex items-center gap-2 font-bold">
//             <Link href="/blog">CARRERS</Link>
//           </div>

//           <div className="flex items-center gap-2 font-semibold">
//             <MdEmail size={16} />
//             <span>info@hyalineenviro.com</span>
//           </div>

//           <div className="flex items-center gap-2 font-semibold">
//             <FaPhoneAlt size={16} />
//             <span>+91 9390701234</span>
//           </div>

//           {/* SOCIAL */}

//           <div className="flex items-center gap-3">
//             <FaFacebookF size={16} />
//             <FaLinkedinIn size={17} />
//             <FaTwitter size={17} />
//             <FaSkype size={17} />
//             <AiFillInstagram size={18} />
//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

"use client";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaSkype } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="hidden lg:block w-full bg-[linear-gradient(297deg,#00A3E0_65%,#FFFFFF_35%)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-11">
        {/* LEFT MESSAGE */}
        <p className="text-sm text-[var(--heading-tag)] font-medium font-bold tracking-wide">
          Welcome to Hyaline Enviro Engineers Pvt. Ltd.
        </p>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4 text-white text-sm">
          {/* LINKS */}
          {/* <Link
            href="/blog"
            className="font-medium hover:text-gray-800 transition duration-300"
          >
            Blog
          </Link> */}

          <Link
            href="/careers"
            className="font-medium hover:text-gray-800 transition duration-300"
          >
            Careers
          </Link>

          {/* EMAIL */}
          <a
            href="mailto:info@hyalineenviro.com"
            className="flex items-center font-semibold gap-2 hover:text-gray-800 transition duration-300"
          >
            <MdEmail size={16} />
            <span>info@hyalineenviro.com</span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+919390701234"
            className="flex items-center font-semibold gap-2 hover:text-gray-800 transition duration-300"
          >
            <FaPhoneAlt size={14} />
            <span>+91 9390701234</span>
          </a>

          {/* SOCIAL */}
          <div className="flex items-center gap-3 ml-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-800 transition duration-300"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-800 transition duration-300"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-gray-800 transition duration-300"
            >
              <FaTwitter size={14} />
            </a>

            <a
              href="https://skype.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Skype"
              className="hover:text-gray-800 transition duration-300"
            >
              <FaSkype size={14} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-800 transition duration-300"
            >
              <AiFillInstagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
