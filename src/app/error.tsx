"use client";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900">
        <h1 className="text-4xl font-black mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="mb-2">
          An unexpected error occurred. Please try again or contact support.
        </p>
        <button
          className="mt-4 px-6 py-2 bg-orange-500 text-white rounded font-bold hover:bg-orange-600"
          onClick={() => reset()}
        >
          Try Again
        </button>
        <pre className="bg-slate-100 p-4 rounded text-red-600 text-xs max-w-xl overflow-auto mt-6">
          {error.message}
        </pre>
      </div>
    </ErrorBoundary>
  );
}
