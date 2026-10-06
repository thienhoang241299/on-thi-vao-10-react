import React, { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

export default function KaTeXRenderer({ html, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set HTML content
    containerRef.current.innerHTML = html || "";

    // Replace $...$ and $$...$$ with rendered KaTeX
    const renderNode = (element) => {
      // Find text nodes
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );

      const textNodes = [];
      let currentNode;
      while ((currentNode = walker.nextNode())) {
        // Không biến đổi các text node nằm bên trong thẻ SVG để giữ nguyên nhãn vẽ hình
        if (currentNode.parentElement && currentNode.parentElement.closest("svg")) {
          continue;
        }
        textNodes.push(currentNode);
      }

      textNodes.forEach((node) => {
        const text = node.nodeValue;
        if (!text || (!text.includes("$") && !text.includes("\\("))) return;

        // Render $$...$$ first, then $...$
        const regex = /(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g;
        if (!regex.test(text)) return;

        const fragment = document.createDocumentFragment();
        let lastIndex = 0;
        let match;

        // Reset regex
        regex.lastIndex = 0;

        while ((match = regex.exec(text)) !== null) {
          const matchStart = match.index;
          const matchEnd = regex.lastIndex;

          // Plain text before match
          if (matchStart > lastIndex) {
            fragment.appendChild(
              document.createTextNode(text.substring(lastIndex, matchStart))
            );
          }

          const rawFormula = match[0];
          const isDisplay = rawFormula.startsWith("$$");
          const formula = isDisplay
            ? rawFormula.slice(2, -2).trim()
            : rawFormula.slice(1, -1).trim();

          const span = document.createElement("span");
          try {
            katex.render(formula, span, {
              displayMode: isDisplay,
              throwOnError: false,
              strict: false
            });
            fragment.appendChild(span);
          } catch {
            fragment.appendChild(document.createTextNode(rawFormula));
          }

          lastIndex = matchEnd;
        }

        if (lastIndex < text.length) {
          fragment.appendChild(
            document.createTextNode(text.substring(lastIndex))
          );
        }

        if (node.parentNode) {
          node.parentNode.replaceChild(fragment, node);
        }
      });
    };

    renderNode(containerRef.current);
  }, [html]);

  return <div ref={containerRef} className={className} />;
}
