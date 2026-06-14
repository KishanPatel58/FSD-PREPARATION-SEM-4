import { Copy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock =({ code,title }) => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);
      setShowToast(true);

      setTimeout(() => {
        setCopied(false);
        setShowToast(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative codebase overflow-y-hidden">
      {/* Toast */}
      {showToast && (
        <div className="absolute -top-9  right-5 z-50 rounded-lg bg-black text-white !px-4 !py-2 shadow-lg animate-pulse">
          Code copied to clipboard!
        </div>
      )}
      
        {/* File Title */}
        <h1 className="absolute left-3 top-3 text-slate-500 select-none">{title}</h1>
      {/* Copy Button */}
      <button
        onClick={copyCode}
        className={`absolute right-3 top-4 z-10 rounded-md !p-2 text-sm font-medium transition-all
          ${
            copied
              ? "bg-green-600 text-white"
              : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
      >
        {copied ? "✓ Copied" : <Copy size={20} />}
      </button>

      {/* Code Block */}
      <SyntaxHighlighter
        language="javascript"
        style={oneDark}
        customStyle={{
          borderRadius: "12px",
          paddingTop: "50px",
          cursor: "auto"
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock