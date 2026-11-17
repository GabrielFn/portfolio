"use client";

import { useState } from "react";

export function CopyEmail({ email, copy, copied: copiedLabel }: { email: string; copy: string; copied: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="copy"
      onClick={async () => {
        try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
      }}
    >
      <span aria-live="polite">{copied ? copiedLabel : copy}</span>
    </button>
  );
}
