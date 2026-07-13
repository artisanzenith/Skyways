import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-slate-950">Page not found</h1>
      <p className="mt-4 max-w-xl text-lg text-slate-600">
        The page you are looking for may have moved or no longer exists.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">
        Return home
      </Link>
    </main>
  );
}
