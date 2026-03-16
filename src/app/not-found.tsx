import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <img
          src="/images/logo.png"
          alt="Magic Brush Ltd"
          className="mx-auto mt-20 w-40 h-40 object-contain"
        />
      </div>
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-7xl font-black mb-4 tracking-tight text-orange-500 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight">
          Page Not Found
        </h2>
        <p className="mb-8 text-slate-200 text-lg max-w-xl text-center">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg transition-all"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
