"use client";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import {
  EditorContent,
  EditorContext,
  useCurrentEditor,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { Button } from "../ui/button";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="control-group">
      <div className="flex items-center gap-2 flex-wrap">
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          Bold
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          Italic
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          Strike
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        >
          Code
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
          Clear marks
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().clearNodes().run()}
        >
          Clear nodes
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          Paragraph
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          H1
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          H2
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          H3
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 }) ? "is-active" : ""
          }
        >
          H4
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 }) ? "is-active" : ""
          }
        >
          H5
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 }) ? "is-active" : ""
          }
        >
          H6
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          Bullet list
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          Ordered list
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          Code block
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          Blockquote
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          Horizontal rule
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          Hard break
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          Undo
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          Redo
        </Button>
        <Button
          variant="outline"
          onClick={() => editor.chain().focus().setColor("#958DF1").run()}
          className={
            editor.isActive("textStyle", { color: "#958DF1" })
              ? "is-active"
              : ""
          }
        >
          Purple
        </Button>
      </div>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

const content = `
<h1>Vercel AI SDK: Streamlining AI Application Development</h1>

<h2>Introduction to Vercel AI SDK</h2>
<p>Vercel AI SDK is a powerful, open-source library designed to help developers build cutting-edge AI-powered applications with ease. It provides a comprehensive set of tools and utilities for creating intelligent, responsive, and efficient AI-driven experiences across web and mobile platforms.</p>

<h2>Key Features and Capabilities</h2>
<h3>1. Unified AI Integration</h3>
<ul>
    <li><p>Seamless integration with multiple AI providers and large language models</p></li>
    <li><p>Support for popular AI platforms like OpenAI, Anthropic, and others</p></li>
    <li><p>Simplified API for handling AI interactions and responses</p></li>
</ul>

<h3>2. Streaming Capabilities</h3>
<ul>
    <li><p>Real-time AI response streaming</p></li>
    <li><p>Efficient handling of large language model outputs</p></li>
    <li><p>Reduced latency and improved user experience</p></li>
</ul>

<h2>Core Components</h2>
<h3>1. AI Hooks</h3>
<p>The SDK provides powerful React hooks for managing AI interactions:</p>
<ul>
    <li><p><code>useChat()</code>: Manages conversational interfaces</p></li>
    <li><p><code>useCompletion()</code>: Handles text completion tasks</p></li>
</ul>

<h3>2. Provider Abstraction</h3>
<p>Offers a flexible architecture that allows developers to:</p>
<ul>
    <li><p>Switch between different AI providers easily</p></li>
    <li><p>Implement custom AI provider integrations</p></li>
    <li><p>Maintain consistent interface across different AI services</p></li>
</ul>

<h2>Installation and Setup</h2>
<p>Install the Vercel AI SDK using npm or yarn:</p>
<pre><code>npm install ai
# or
yarn add ai</code></pre>

<h2>Basic Usage Example</h2>
<pre><code>import { useChat } from 'ai/react'

function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>{m.role}: {m.content}</div>
      ))}
      
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Send a message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}</code></pre>

<h2>Advanced Capabilities</h2>
<ul>
    <li><p>AI-powered text generation</p></li>
    <li><p>Conversational interfaces</p></li>
    <li><p>Content summarization</p></li>
    <li><p>Intelligent response generation</p></li>
</ul>

<h2>Benefits for Developers</h2>
<ul>
    <li><p>Rapid AI application development</p></li>
    <li><p>Reduced boilerplate code</p></li>
    <li><p>Cross-platform compatibility</p></li>
    <li><p>Performance-optimized AI interactions</p></li>
</ul>

<h2>Ecosystem and Integration</h2>
<p>The Vercel AI SDK is designed to work seamlessly with:</p>
<ul>
    <li><p>Next.js applications</p></li>
    <li><p>React frameworks</p></li>
    <li><p>Serverless environments</p></li>
    <li><p>Various AI model providers</p></li>
</ul>

<p>By providing a robust and flexible toolkit, Vercel AI SDK empowers developers to create sophisticated AI-driven applications with minimal complexity.<br class="ProseMirror-trailingBreak"></p>
`;

export default () => {
  const editor = useEditor({
    content,
    extensions,
  });
  return (
    <EditorContext.Provider value={{ editor }}>
        <MenuBar/>
      <EditorContent role="presentation" editor={editor} className="font-mono"></EditorContent>
    </EditorContext.Provider>
  );
};
