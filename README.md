# JS-SEZ Starter (C334 Lesson 11 demo)

A one-page static site about the Johor–Singapore Special Economic Zone for Singapore manufacturers,
with an AI advisor that opens from the chat button at the bottom right.

**Live site:** https://frankiecha.github.io/c334lesson11demo/

## How it works

- `index.html`, `styles.css`: the page. Content is summarised from the SMF JS-SEZ Playbook.
- `chat.js`: loads n8n's chat widget (`@n8n/chat`) and points it at the public Chat Trigger of the
  **JS-SEZ WebChatBot** n8n workflow from C334 Lesson 10 (agentic RAG over the playbook in Qdrant).
- `AGENTS.md`: the spec a coding agent follows when changing this site.

## Run it locally

Open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. If the chat does not answer locally, add `http://localhost:8000`
to the Chat Trigger's **Allowed Origins (CORS)**.

## Disclaimer

Class exercise for C334 Agentic AI Systems, Republic Polytechnic. Not affiliated with SMF,
Enterprise Singapore or MIDA. Confirm details with official sources before acting.
