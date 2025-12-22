import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-[#0F172A] rounded-md hover:bg-[#1E293B] transition-colors z-10"
        aria-label="Copy code"
      >
        {copied ? <Check className="w-4 h-4 text-[#0EA5A4]" /> : <Copy className="w-4 h-4 text-[#94A3B8]" />}
      </button>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          borderRadius: '0.5rem',
          padding: '1.5rem',
          backgroundColor: '#0F172A',
          fontFamily: "'Source Code Pro', monospace",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
