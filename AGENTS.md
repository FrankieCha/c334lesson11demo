# AGENTS.md: JS-SEZ Starter site

Instructions for any coding agent (GitHub Copilot, Claude Code, Codex) working in this repository.

## Goal

A one-page static website that introduces the Johor–Singapore Special Economic Zone (JS-SEZ) to
Singapore manufacturers, with an AI advisor chat that opens from a button at the bottom right.

## Audience

Owners and managers of Singapore manufacturing SMEs. Plain English, short sentences, UK spelling.

## Content source

Only use facts from the SMF JS-SEZ Playbook. Do not invent rates, dates, names or statistics.
If a fact is time-sensitive (salary thresholds, tax rates), say that readers should check the current figure.

Sections, in this order:
1. Hero: one-line value proposition and the Singapore–Johor dual-base workforce model
2. Zones: the nine zones and their targeted activities, plus the 11 sectors
3. SETUP framework: Select, Evaluate, Take, Utilise, Prepare
4. Tax and money: key incentives and the main watch-outs (permanent establishment, transfer pricing,
   commuting staff, bank account timelines)
5. People: Employment Pass, Professional Visit Pass, Investor Pass
6. Ask the advisor: what the chatbot does, with example questions
7. Footer: class-demo disclaimer (not affiliated with SMF, Enterprise Singapore or MIDA) and the SMF JS-SEZ Desk contact

## Chat widget

- Use n8n's official widget `@n8n/chat`, pinned to version 1.46.5, loaded from jsDelivr.
- `mode: 'window'` gives the round toggle button at the bottom right that opens the chat window.
- `webhookUrl` is the production URL of the Chat Trigger in the "JS-SEZ WebChatBot" n8n workflow.
  That trigger must be set to **Make Chat Publicly Available**, **Mode: Embedded Chat**, and its
  **Allowed Origins (CORS)** must include this site's domain.
- Keep all widget settings in `chat.js`. Theme the widget with the `--chat--*` CSS variables in `styles.css`.

## Technical constraints

- Plain HTML, CSS and JavaScript. No framework, no build step, no npm.
- Files: `index.html`, `styles.css`, `chat.js`. Hosted on GitHub Pages from the `main` branch root.
- Must work at 360 px wide with no horizontal scrolling.
- Accessible: semantic headings, visible keyboard focus, sufficient colour contrast, `prefers-reduced-motion` respected.
- No tracking scripts, no cookies, no external assets other than Google Fonts and jsDelivr.

## Definition of done

- The page loads on GitHub Pages with no console errors.
- The chat toggle appears at the bottom right, opens the window, and a question such as
  "Which zone suits an aerospace parts maker?" gets an answer that cites the playbook.
- Every fact on the page can be traced to the playbook.
