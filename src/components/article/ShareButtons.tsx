"use client";

import { useState } from "react";

type Props = {
  title: string;
  slug: string;
};

export function ShareButtons({ title, slug }: Props) {
  const [copied, setCopied] = useState(false);
  const url = `https://neos-esports.com/news/${slug}`;

  const xShareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <a
        href={xShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sub-text hover:text-white transition-colors text-sm border border-border px-4 py-2 rounded-sm"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        Share
      </a>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-sub-text hover:text-white transition-colors text-sm border border-border px-4 py-2 rounded-sm"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        {copied ? "Copied!" : "Copy URL"}
      </button>
    </div>
  );
}
