import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MobileCTA({ href, label = "Discover More" }) {
  return (
    <div className="flex flex-wrap gap-4 md:hidden mt-6">
      <Link
        href={href}
        className="
          inline-flex items-center gap-2
          px-6 py-3 rounded-xl
          bg-[color:var(--color-primary)]
          text-white/90 font-medium
          shadow-lg
          hover:bg-[color:var(--color-accent)]
          hover:shadow-xl
          transition duration-300
          mb-3
        "
      >
        {label}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}