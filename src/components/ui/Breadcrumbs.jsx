import Link from "next/link";

export default function Breadcrumbs({ items = [] }) {
  return (
    <div className="bg-gray-100 py-3 border-b">
      <div className="max-w-7xl mx-auto px-6 text-sm text-gray-600 flex flex-wrap items-center gap-1">
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <span key={index} className="flex items-center gap-1">
              
              {/* LINK OR TEXT */}
              {!isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#00A3E0] transition"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-800 font-medium">
                  {item.label}
                </span>
              )}

              {/* SEPARATOR */}
              {!isLast && <span className="mx-1 text-gray-400">/</span>}
            </span>
          );
        })}

      </div>
    </div>
  );
}