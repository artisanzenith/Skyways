"use client";

export default function GlobalError({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Error</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">Something went wrong</h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">
            The Skyways application could not render properly. Please refresh and try again.
          </p>
          <button
            onClick={() => reset()}
            className="mt-8 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
