import React, { useState, useEffect } from "react";
import TiptapEditor from "./components/TiptapEditor";
import slugify from "slugify";
import "./styles/App.css";

const App = () => {
  const [content, setContent] = useState("");
  const [tocHTML, setTocHTML] = useState("");
  const [renderedHTML, setRenderedHTML] = useState("");

  // Generate TOC and update content when it changes
  useEffect(() => {
    const { tocHTML, modifiedHTML } = generateTOC(content);
    setTocHTML(tocHTML);
    setRenderedHTML(modifiedHTML); // Update rendered HTML with IDs
  }, [content]);

  // Generate TOC and return modified HTML with IDs
  const generateTOC = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const headings = doc.querySelectorAll("h1, h2, h3");

    let tocHTML = `
      <div class="table-of-contents">
        <h2 class="h2-2"><strong>Table of Contents</strong></h2>
        <ul class="ul-3">
    `;

    Array.from(headings).forEach((heading) => {
      const text = heading.innerText.trim();
      const id = slugify(text, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
      });

      // Add ID to the heading if not present
      if (!heading.id) {
        heading.id = id;
      }

      tocHTML += `
        <li class="li-4">
          <a class="a-5" href="#${id}">${text}</a>
        </li>
      `;
    });

    tocHTML += "</ul></div>";

    // Return modified HTML content with IDs
    return {
      tocHTML,
      modifiedHTML: doc.body.innerHTML,
    };
  };

  return (
    <div className="editor-container">
      {/* Tiptap Editor on the left */}
      <TiptapEditor setContent={setContent} />

      {/* TOC in the middle */}
      <div
        className="toc-container"
        dangerouslySetInnerHTML={{ __html: tocHTML }}
      />

      

      {/* Raw HTML Code on the extreme right */}
      <div className="raw-html-container">
        <h2></h2>
        <pre className="html-code">{renderedHTML}</pre>
      </div>
    </div>
  );
};

export default App;
