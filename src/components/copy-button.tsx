'use client';

import { useState } from 'react';

export function CopyButton({
  text,
  label = 'Copy email',
}: {
  text: string;
  label?: string;
}) {
  const [message, setMessage] = useState('');
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setMessage('Copied');
    } catch {
      setMessage('Select the text to copy it manually.');
    }
  }
  return (
    <div className="copy-control">
      <button type="button" onClick={copy} className="copy-button">
        {label}
        <span aria-hidden="true"> ⧉</span>
      </button>
      <span className="caption" role="status">
        {message}
      </span>
    </div>
  );
}
