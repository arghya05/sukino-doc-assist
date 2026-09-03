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

  useEffect(() => {
    return () => {
      docs.forEach((d) => URL.revokeObjectURL(d.url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [attachedDocId, setAttachedDocId] = useState<string | null>(null);
  const attachedDoc = docs.find((d) => d.id === attachedDocId) ?? null;

  const handleFiles = async (files: File[]) => {
    setUploadError(null);
    setUploading(true);
    for (const file of files) {
      const url = URL.createObjectURL(file);
      try {
        if (!sessionId) throw new Error("no session");
        const result = await uploadFile(sessionId, file);
        setDocs((prev) => [...prev, { ...result, id: uid(), url }]);
      } catch (e) {
        // Backend unavailable — still add the document locally so it can be viewed.
        setDocs((prev) => [
          ...prev,
          {
            id: uid(),
            url,
            filename: file.name,
            type: file.type || "document",
            chunks: 0,
            preview:
              "Saved locally for viewing. The assistant backend is unreachable, so Q&A on this file will work once it reconnects.",
          },
        ]);
        setUploadError(
          sessionId
            ? e instanceof Error
              ? e.message
              : `Could not upload ${file.name} to the backend — saved locally for viewing.`
            : "Backend offline — documents are saved locally and can still be viewed.",
        );
      }
    }
    setUploading(false);
  };

  const handleSend = async (text: string) => {
    if (!sessionId) return;
    const doc = attachedDoc;
    setAttachedDocId(null);
    const content = doc ? `📎 ${doc.filename}\n\n${text}` : text;
    setMessages((prev) => [...prev, { id: uid(), role: "user", content }]);
    setThinking(true);
    try {
      const wireText = doc
        ? `Regarding the uploaded document "${doc.filename}": ${text}`
        : text;
      const reply = await sendChat(sessionId, wireText);
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
