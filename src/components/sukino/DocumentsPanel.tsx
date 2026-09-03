import { useEffect, useRef, useState } from "react";
import { FileText, Pill, Upload, Loader2, AlertCircle, Eye, X } from "lucide-react";
import { SAMPLES, sampleUrl } from "@/lib/samples";
import type { UploadResult } from "@/lib/api";

const ACCEPT = ".pdf,.png,.jpg,.jpeg,.webp,.txt,.md";

export type UploadedDoc = UploadResult & { id: string; url: string };

function viewerKind(url: string, filename: string) {
  const ext = filename.split(".").pop()?.toLowerCase() ?? "";
  if (ext === "pdf" || url.includes("application/pdf")) return "pdf" as const;
  if (["png", "jpg", "jpeg", "webp"].includes(ext)) return "image" as const;
  return "text" as const;
}

function DocumentViewer({ doc, onClose }: { doc: UploadedDoc; onClose: () => void }) {
  const kind = viewerKind(doc.url, doc.filename);
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (kind !== "text") return;
    let cancelled = false;
    fetch(doc.url)
      .then((r) => r.text())
      .then((t) => !cancelled && setText(t))
      .catch(() => !cancelled && setText("Could not load the document preview."));
    return () => {
      cancelled = true;
    };
  }, [doc.url, kind]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${doc.filename}`}
    >
      <div
        className="flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center gap-3 border-b border-border px-5 py-3">
          <FileText className="size-4 shrink-0 text-primary" />
          <p className="min-w-0 flex-1 truncate text-sm font-semibold">{doc.filename}</p>
          <a
            href={doc.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-secondary"
          >
            Open in new tab
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close viewer"
            className="flex size-8 items-center justify-center rounded-full border border-border hover:bg-secondary"
          >
            <X className="size-4" />
          </button>
        </header>
        <div className="flex-1 overflow-auto bg-muted/50">
          {kind === "pdf" && (
            <iframe title={doc.filename} src={doc.url} className="h-full w-full" />
          )}
          {kind === "image" && (
            <div className="flex min-h-full items-center justify-center p-6">
              <img src={doc.url} alt={doc.filename} className="max-h-full rounded-xl object-contain" />
            </div>
          )}
          {kind === "text" && (
            <pre className="whitespace-pre-wrap p-6 font-mono text-xs leading-relaxed text-foreground">
              {text ?? "Loading…"}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

function isScan(type: string) {
  const t = type.toLowerCase();
  return t.includes("prescription") || t.includes("scan") || t.includes("image");
}

export function DocumentsPanel({
  docs,
  uploading,
  error,
  onFiles,
  disabled,
}: {
  docs: UploadedDoc[];
  uploading: boolean;
  error: string | null;
  onFiles: (files: File[]) => void;
  disabled: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  return (
    <aside className="flex h-full flex-col gap-4 overflow-y-auto rounded-3xl border border-border bg-card p-5 shadow-soft">
      <h2 className="text-sm font-bold tracking-tight">Your documents</h2>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          const files = Array.from(e.dataTransfer.files);
          if (files.length) onFiles(files);
        }}
        disabled={disabled || uploading}
        className={`flex flex-col items-center gap-2 rounded-2xl border-2 border-dashed px-4 py-8 text-center transition-colors disabled:opacity-60 ${
          dragging
            ? "border-primary bg-secondary"
            : "border-border bg-muted/60 hover:border-primary/60 hover:bg-secondary/60"
        }`}
      >
        <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          {uploading ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            <Upload className="size-5" />
          )}
        </span>
        <span className="text-sm font-semibold">
          {uploading ? "Uploading…" : "Drop a file or click to upload"}
        </span>
        <span className="text-xs text-muted-foreground">PDF, PNG, JPG, JPEG, WEBP, TXT, MD</span>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT}
        multiple
        className="hidden"
        onChange={(e) => {
          const files = Array.from(e.target.files ?? []);
          if (files.length) onFiles(files);
          e.target.value = "";
        }}
      />

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Try a sample
        </p>
        <div className="flex flex-wrap gap-2">
          {SAMPLES.map((s) => (
            <button
              key={s.id}
              type="button"
              disabled={disabled || uploading}
              onClick={async () => {
                const res = await fetch(sampleUrl(s));
                const blob = await res.blob();
                onFiles([new File([blob], s.filename, { type: "application/pdf" })]);
              }}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-secondary disabled:opacity-50"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className="flex items-start gap-2 rounded-xl bg-destructive/10 px-3 py-2 text-xs font-medium text-destructive">
          <AlertCircle className="mt-px size-3.5 shrink-0" />
          {error}
        </p>
      )}

      <div className="flex-1 space-y-2.5">
        {docs.length === 0 ? (
          <p className="rounded-2xl bg-muted/70 px-4 py-6 text-center text-xs text-muted-foreground">
            No documents uploaded yet.
          </p>
        ) : (
          docs.map((doc) => {
            const scan = isScan(doc.type);
            return (
              <article
                key={doc.id}
                className="rounded-2xl border border-border bg-background p-3.5 transition-shadow hover:shadow-soft"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg ${
                      scan ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {scan ? <Pill className="size-4" /> : <FileText className="size-4" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{doc.filename}</p>
                    <span
                      className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                        scan
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {scan ? "Prescription / scan" : "Document"}
                    </span>
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                      {doc.preview}
                    </p>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </aside>
  );
}
