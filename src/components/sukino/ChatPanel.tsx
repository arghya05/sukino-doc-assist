import { useEffect, useRef, useState } from "react";
import { Send, MessageCircleHeart, Paperclip, X } from "lucide-react";
import { LogoBadge } from "./Header";
import type { UploadedDoc } from "./DocumentsPanel";

export type ChatMessage = { id: string; role: "user" | "assistant"; content: string };

export const DOC_DRAG_TYPE = "application/x-sukino-doc";

function ThinkingDots() {
  return (
    <span className="flex items-center gap-1.5 px-1 py-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-1.5 animate-dot rounded-full bg-muted-foreground"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
      <span className="ml-1.5 text-xs text-muted-foreground">thinking…</span>
    </span>
  );
}

export function ChatPanel({
  messages,
  thinking,
  disabled,
  onSend,
  attachedDoc,
  onAttachDoc,
  onRemoveAttachment,
}: {
  messages: ChatMessage[];
  thinking: boolean;
  disabled: boolean;
  onSend: (text: string) => void;
  attachedDoc: UploadedDoc | null;
  onAttachDoc: (id: string) => void;
  onRemoveAttachment: () => void;
}) {
  const [value, setValue] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const submit = () => {
    const text = value.trim();
    if (!text || disabled) return;
    onSend(text);
    setValue("");
  };

  return (
    <section
      className={`relative flex h-full min-h-0 flex-col rounded-3xl border bg-card shadow-soft transition-colors ${
        dragOver ? "border-primary ring-2 ring-ring/30" : "border-border"
      }`}
      onDragOver={(e) => {
        if (e.dataTransfer.types.includes(DOC_DRAG_TYPE)) {
          e.preventDefault();
          setDragOver(true);
        }
      }}
      onDragLeave={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setDragOver(false);
      }}
      onDrop={(e) => {
        const id = e.dataTransfer.getData(DOC_DRAG_TYPE);
        if (id) {
          e.preventDefault();
          onAttachDoc(id);
        }
        setDragOver(false);
      }}
    >
      {dragOver && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-3xl bg-secondary/70">
          <p className="flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold shadow-soft">
            <Paperclip className="size-4 text-primary" />
            Drop to attach this document
          </p>
        </div>
      )}
      <div className="flex-1 space-y-4 overflow-y-auto p-5">
        {messages.length === 0 && !thinking ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
              <MessageCircleHeart className="size-6" />
            </span>
            <p className="max-w-xs text-sm font-semibold">
              Upload a prescription or document, then ask a question about it.
            </p>
            <p className="rounded-full bg-muted px-3.5 py-1.5 text-xs text-muted-foreground">
              “What is my dosage for Metformin?”
            </p>
          </div>
        ) : (
          messages.map((m) =>
            m.role === "user" ? (
              <div key={m.id} className="flex justify-end">
                <p className="bubble-user max-w-[80%] whitespace-pre-wrap rounded-2xl rounded-br-md px-4 py-2.5 text-sm leading-relaxed shadow-soft">
                  {m.content}
                </p>
              </div>
            ) : (
              <div key={m.id} className="flex items-start gap-2.5">
                <LogoBadge className="mt-0.5 size-7 shrink-0 rounded-full text-xs" />
                <p className="max-w-[80%] whitespace-pre-wrap rounded-2xl rounded-tl-md border border-border bg-background px-4 py-2.5 text-sm leading-relaxed text-foreground shadow-soft">
                  {m.content}
                </p>
              </div>
            ),
          )
        )}

        {thinking && (
          <div className="flex items-start gap-2.5">
            <LogoBadge className="mt-0.5 size-7 shrink-0 rounded-full text-xs" />
            <div className="rounded-2xl rounded-tl-md border border-border bg-background px-3 py-2 shadow-soft">
              <ThinkingDots />
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="border-t border-border p-4">
        <div className="flex items-end gap-2">
          <input
            value={value}
            disabled={disabled}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            placeholder={disabled ? "Connecting…" : "Ask about your document…"}
            aria-label="Message"
            className="h-11 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25 disabled:opacity-60"
          />
          <button
            type="button"
            onClick={submit}
            disabled={disabled || !value.trim()}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            <Send className="size-4" />
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
