import React, { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "../styles/App.css"
const TiptapEditor = ({ setContent }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Paste your content here...</p>",
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor) {
      editor.commands.focus(); // Auto-focus when loaded
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="editor-container">
      <EditorContent editor={editor} className="editor" />
    </div>
  );
};

export default TiptapEditor;
