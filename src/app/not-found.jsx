import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-4xl font-bold text-[#0147AD] mb-4">
        404
      </h1>

      <p className="text-[var(--heading-text)] mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-[#0147AD] text-white rounded-md"
      >
        Go Back Home
      </Link>
    </div>
  );
}