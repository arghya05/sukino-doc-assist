# Sukino Clinical Assistant

Build a clinical document assistant web app called "Sukino Healthcare" for

nurses and clinical staff in India. It's a two-pane chat interface:

LEFT PANEL — "Your documents"

- A drag-and-drop / click-to-upload zone (accepts PDF, PNG, JPG, JPEG, WEBP, TXT, MD)

- Below it, 3 "try a sample" quick-load buttons: "Metformin prescription",

  "Warfarin prescription", "Discharge summary" — clicking one uploads a

  pre-written sample file so users can try the app without their own files

- Below that, a list of uploaded documents, each showing: filename, a type

  badge ("Prescription / scan" or "Document"), and a short text preview

- Empty state: "No documents uploaded yet."

RIGHT PANEL — chat

- Message list: user messages right-aligned (dark bubble), assistant

  messages left-aligned with a small avatar (white "S" on a gradient

  circle), white/bordered bubble

- Empty state: "Upload a prescription or document, then ask a question

  about it." with example "What is my dosage for Metformin?"

- A "thinking…" indicator (animated dots) while waiting for a reply

- A composer at the bottom: text input + Send button, Enter to send,

  disabled until a session exists

HEADER

- Left: small gradient logo badge ("S") + "Sukino Healthcare" / "Clinical

  document assistant" subtitle

- Right: a "Viewing as" role dropdown (Nurse / Doctor / Patient / Caregiver,

  default Nurse), and a pill badge: "Not a substitute for professional

  medical advice"

DESIGN

- Clinical but warm, not sterile — off-white background, a teal primary

  accent, a coral/warm secondary accent used sparingly (badges, gradients).

  Rounded cards, soft shadows, generous spacing. Not a generic SaaS-purple

  gradient look — should feel like a real healthcare product.

API INTEGRATION — connect to my existing backend, do not build your own:

Base URL: http://localhost:8000 (I'll give you the real deployed URL later)

POST /session → { "session_id": string }

  Call once on page load, before anything else works.

POST /upload?session_id={session_id}

  multipart/form-data, field name "file"

  → { "filename": string, "type": string, "chunks": number, "preview": string }

  On error (400): { "detail": string } — show it as an inline error message

POST /chat

  Body: { "thread_id": string, "message": string }  — thread_id = session_id

  → { "status": "ok", "reply": string, "pending": null }

GET /health → { "status": "ok" }

Flow: call /session on load → /upload per file → /chat per message, reusing

the same session_id as thread_id for the whole conversation. Store the

backend base URL in an environment variable so it's easy to change later.

---

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ee5743a8-9759-42df-a112-5409fdf9bcf6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
