import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-heading text-8xl text-neos-red mb-4">404</h1>
        <p className="text-sub-text text-lg mb-8">
          ページが見つかりませんでした
        </p>
        <Link
          href="/"
          className="inline-block font-heading text-sm tracking-widest text-neos-red hover:text-neos-red-bright transition-colors border border-neos-red/30 hover:border-neos-red px-8 py-3"
        >
          TOP PAGE →
        </Link>
      </div>
    </div>
  );
}
