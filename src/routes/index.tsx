import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header, type Role } from "@/components/sukino/Header";
import { DocumentsPanel, type UploadedDoc } from "@/components/sukino/DocumentsPanel";
import { ChatPanel, type ChatMessage } from "@/components/sukino/ChatPanel";
import { createSession, sendChat, uploadFile } from "@/lib/api";

export const Route = createFileRoute("/")({
  component: Index,
});

const uid = () => Math.random().toString(36).slice(2);

function Index() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [sessionError, setSessionError] = useState<string | null>(null);
  const [role, setRole] = useState<Role>("Nurse");
  const [docs, setDocs] = useState<UploadedDoc[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [thinking, setThinking] = useState(false);

  useEffect(() => {
    let cancelled = false;
    createSession()
      .then((id) => {
        if (!cancelled) setSessionId(id);
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setSessionError(
            e instanceof Error ? e.message : "Could not start a session with the backend.",
          );
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleFiles = async (files: File[]) => {
    if (!sessionId) return;
    setUploadError(null);
    setUploading(true);
    for (const file of files) {
      try {
        const result = await uploadFile(sessionId, file);
        setDocs((prev) => [...prev, { ...result, id: uid() }]);
      } catch (e) {
        setUploadError(e instanceof Error ? e.message : `Could not upload ${file.name}.`);
      }
    }
    setUploading(false);
  };

  const handleSend = async (text: string) => {
    if (!sessionId) return;
    setMessages((prev) => [...prev, { id: uid(), role: "user", content: text }]);
    setThinking(true);
    try {
      const reply = await sendChat(sessionId, text);
      setMessages((prev) => [...prev, { id: uid(), role: "assistant", content: reply }]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "assistant",
          content: e instanceof Error ? e.message : "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setThinking(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header role={role} onRoleChange={setRole} />

      <main className="mx-auto grid w-full max-w-7xl flex-1 gap-5 px-5 py-5 lg:grid-cols-[minmax(300px,360px)_1fr]">
        {sessionError && (
          <div className="rounded-2xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive lg:col-span-2">
            Couldn’t reach the assistant backend ({sessionError}). Check that the API is running
            and that VITE_API_BASE_URL points to it.
          </div>
        )}

        <div className="lg:h-[calc(100vh-8.5rem)]">
          <DocumentsPanel
            docs={docs}
            uploading={uploading}
            error={uploadError}
            onFiles={handleFiles}
            disabled={!sessionId}
          />
        </div>
        <div className="h-[70vh] lg:h-[calc(100vh-8.5rem)]">
          <ChatPanel
            messages={messages}
            thinking={thinking}
            disabled={!sessionId}
            onSend={handleSend}
          />
        </div>
      </main>
    </div>
  );
}
