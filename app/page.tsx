import SimpleEditor from "@/components/tiptap/simple";

export default function Home() {
  return (
    <div className="w-full h-[100dvh]">
      <div className="container p-4 w-full mx-auto h-full flex items-center flex-col gap-4">
        <h1 className="text-4xl font-medium font-mono">Exploring Tiptap Editor</h1>
        <SimpleEditor />
      </div>
    </div>
  )
}
