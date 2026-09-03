export const API_BASE_URL =
  (import.meta.env['VITE_API_BASE_URL'] as string | undefined) ?? "http://localhost:8000";

export type UploadResult = {
  filename: string;
  type: string;
  chunks: number;
  preview: string;
};

async function parseError(res: Response): Promise<string> {
  try {
    const data = (await res.json()) as { detail?: string };
    if (data?.detail) return data.detail;
  } catch {
    /* ignore */
  }
  return `Request failed (${res.status})`;
}

export async function createSession(): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/session`, { method: "POST" });
  if (!res.ok) throw new Error(await parseError(res));
  const data = (await res.json()) as { session_id: string };
  return data.session_id;
}

export async function uploadFile(sessionId: string, file: File): Promise<UploadResult> {
  const body = new FormData();
  body.append("file", file);
  const res = await fetch(
    `${API_BASE_URL}/upload?session_id=${encodeURIComponent(sessionId)}`,
    { method: "POST", body },
  );
  if (!res.ok) throw new Error(await parseError(res));
  return (await res.json()) as UploadResult;
}

export async function sendChat(threadId: string, message: string): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ thread_id: threadId, message }),
  });
  if (!res.ok) throw new Error(await parseError(res));
  const data = (await res.json()) as { status: string; reply: string; pending: null };
  return data.reply;
}
