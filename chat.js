// JS-SEZ advisor: n8n's embeddable chat widget.
// The widget adds a round toggle button at the bottom right; clicking it opens the chat window.
// It talks to the public Chat Trigger of the "JS-SEZ WebChatBot" workflow (Embedded Chat mode).
import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

const WEBHOOK_URL =
  'https://agenticflows.tokencraze.org/webhook/bfed4281-9a12-4a3d-93b4-e76021d22524/chat';

createChat({
  webhookUrl: WEBHOOK_URL,
  mode: 'window',
  showWelcomeScreen: false,
  loadPreviousSession: false, // the workflow keeps its own memory per session
  initialMessages: [
    'Hello. I answer questions about the Johor–Singapore Special Economic Zone using the SMF JS-SEZ Playbook.',
    'Ask about zones, incentives, licences, banking, tax or bringing staff across.',
  ],
  i18n: {
    en: {
      title: 'JS-SEZ advisor',
      subtitle: 'Answers from the SMF JS-SEZ Playbook',
      footer: '',
      getStarted: 'New conversation',
      inputPlaceholder: 'Ask about the JS-SEZ…',
    },
  },
});

// "Ask the advisor" buttons on the page open the same chat window.
function openChat() {
  const toggle = document.querySelector('.chat-window-toggle');
  const win = document.querySelector('.chat-window');
  const isOpen = win && win.offsetParent !== null && getComputedStyle(win).display !== 'none';
  if (toggle && !isOpen) toggle.click();
  setTimeout(() => document.querySelector('.chat-input textarea')?.focus(), 250);
}

document.querySelectorAll('[data-open-chat]').forEach((btn) => btn.addEventListener('click', openChat));
