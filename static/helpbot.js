// ============================================
// INTELLAXA.AI — RULE-BASED HELP CHATBOT
// ============================================

// ============================================
// ALL QUESTIONS AND ANSWERS (Add/Edit here)
// ============================================
const helpBotData = {
  // GREETING
  greeting: {
    message: "👋 Hi! I'm Intellaxa Assistant. How can I help you today?",
    options: [
      "What is Intellaxa.AI?",
      "How to get started?",
      "How to upload documents?",
      "How to ask questions?",
      "What file types are supported?",
      "Is my data safe?",
      "How does RAG pipeline work?",
      "What are the key features?",
      "How to delete a document?",
      "Who built this?",
      "Contact support",
    ],
  },

  // ALL Q&A PAIRS
  questions: {
    "What is Intellaxa.AI?": {
      answer:
        "🧠 <strong>Intellaxa.AI</strong> is a Multi-Agent Autonomous AI System for Enterprise Knowledge Intelligence.<br><br>It uses <strong>Retrieval-Augmented Generation (RAG)</strong> pipeline to:<br>• Ingest your enterprise documents (PDF, DOCX, TXT, CSV)<br>• Build a searchable vector knowledge base<br>• Answer your questions with <strong>accurate, grounded responses</strong><br>• Provide <strong>source citations</strong> for every answer<br>• Ensure <strong>zero hallucination</strong> by only using your documents<br><br>Think of it as your company's private AI brain! 🚀",
      followUp: [
        "How to get started?",
        "What are the key features?",
        "How does RAG pipeline work?",
      ],
    },

    "How to get started?": {
      answer:
        "🚀 Getting started is easy! Follow these steps:<br><br><strong>Step 1:</strong> Click 'Get Started Free' or 'Sign Up'<br><strong>Step 2:</strong> Enter your name, email, and password<br><strong>Step 3:</strong> Check your email and click 'Confirm My Email'<br><strong>Step 4:</strong> Come back and Sign In<br><strong>Step 5:</strong> You're in the Dashboard!<br><strong>Step 6:</strong> Upload your documents<br><strong>Step 7:</strong> Start asking questions<br><br>You can also sign in with <strong>Google</strong> for instant access! ⚡",
      followUp: [
        "How to upload documents?",
        "How to ask questions?",
        "What file types are supported?",
      ],
    },

    "How to upload documents?": {
      answer:
        "📤 To upload documents:<br><br><strong>Step 1:</strong> Sign in to your dashboard<br><strong>Step 2:</strong> Click the '📁 Docs' tab in the sidebar<br><strong>Step 3:</strong> Click '📤 Upload Document' button<br><strong>Step 4:</strong> Select your file (PDF, DOCX, TXT, CSV, etc.)<br><strong>Step 5:</strong> Wait for upload to complete<br><strong>Step 6:</strong> Document card appears with file details<br><strong>Step 7:</strong> System automatically processes and indexes your document<br><br>You can upload <strong>multiple documents</strong> and the AI will search across ALL of them! 📚",
      followUp: [
        "What file types are supported?",
        "How to delete a document?",
        "How to ask questions?",
      ],
    },

    "How to ask questions?": {
      answer:
        "💬 To ask questions about your documents:<br><br><strong>Step 1:</strong> Make sure you have uploaded at least one document<br><strong>Step 2:</strong> Click '+ New Chat' button in the sidebar<br><strong>Step 3:</strong> Type your question in the chat input box<br><strong>Step 4:</strong> Press 'Send' or hit Enter<br><strong>Step 5:</strong> Wait for AI to analyze your documents<br><strong>Step 6:</strong> Get accurate answer with source citations<br><br><strong>Example questions you can ask:</strong><br>• 'What is the company leave policy?'<br>• 'Summarize the financial report'<br>• 'What are the safety guidelines?'<br><br>The AI only answers from YOUR documents — no hallucination! ✅",
      followUp: [
        "How to view chat history?",
        "How does RAG pipeline work?",
        "Is my data safe?",
      ],
    },

    "What file types are supported?": {
      answer:
        "📎 Intellaxa.AI supports these file formats:<br><br>📕 <strong>PDF</strong> — Reports, manuals, policies<br>📘 <strong>DOCX</strong> — Word documents<br>📄 <strong>TXT</strong> — Plain text files<br>📊 <strong>CSV</strong> — Spreadsheets and data files<br>📗 <strong>XLSX</strong> — Excel files<br>📙 <strong>PPTX</strong> — PowerPoint presentations<br>📋 <strong>JSON</strong> — Structured data files<br>📝 <strong>MD</strong> — Markdown files<br><br><strong>Maximum file size:</strong> 50MB per file<br><strong>Multiple uploads:</strong> Yes, upload as many as you want! 📚",
      followUp: [
        "How to upload documents?",
        "How to delete a document?",
        "How to ask questions?",
      ],
    },

    "Is my data safe?": {
      answer:
        "🔒 Yes! Your data is completely safe:<br><br>✅ <strong>Private Storage:</strong> Documents stored in secure Supabase cloud storage<br>✅ <strong>User Isolation:</strong> Each user can only see their OWN documents<br>✅ <strong>Row Level Security:</strong> Database enforces strict access control<br>✅ <strong>Encrypted Transfer:</strong> All data encrypted during transfer (HTTPS)<br>✅ <strong>No Sharing:</strong> Your documents are never shared with other users<br>✅ <strong>Delete Anytime:</strong> You can delete your documents at any time<br>✅ <strong>Authenticated Access:</strong> Email confirmation required for every account<br><br>Your enterprise data stays YOUR data! 🛡️",
      followUp: [
        "How does RAG pipeline work?",
        "What are the key features?",
        "How to get started?",
      ],
    },

    "How does RAG pipeline work?": {
      answer:
        "⚙️ Our RAG (Retrieval-Augmented Generation) pipeline works in 7 steps:<br><br><strong>Step 1 — Document Ingestion:</strong><br>Your uploaded files are loaded and text is extracted<br><br><strong>Step 2 — Chunking:</strong><br>Text is split into 1000-token chunks with 200-token overlap<br><br><strong>Step 3 — Embedding:</strong><br>Each chunk is converted into a 1536-dimensional vector using AI<br><br><strong>Step 4 — Vector Storage:</strong><br>Vectors stored in ChromaDB vector database<br><br><strong>Step 5 — Query Processing:</strong><br>Your question is converted to the same vector space<br><br><strong>Step 6 — Semantic Retrieval:</strong><br>Top 5 most relevant chunks are found using cosine similarity<br><br><strong>Step 7 — Grounded Generation:</strong><br>LLM generates answer ONLY from retrieved chunks with source citations<br><br>This ensures <strong>zero hallucination</strong> — every answer is backed by your documents! 🎯",
      followUp: [
        "What is Intellaxa.AI?",
        "What are the key features?",
        "How to ask questions?",
      ],
    },

    "What are the key features?": {
      answer:
        "🌟 Intellaxa.AI has 55+ features including:<br><br>📥 <strong>Multi-Format Upload</strong> — PDF, DOCX, TXT, CSV, XLSX<br>🤖 <strong>5 AI Agents</strong> — Orchestrator, Ingestion, Retrieval, Reasoning, Generation<br>🔍 <strong>Semantic Search</strong> — Search by meaning, not keywords<br>📎 <strong>Source Citations</strong> — Every answer cites its source<br>🚫 <strong>Zero Hallucination</strong> — Answers only from your documents<br>💬 <strong>Chat History</strong> — All conversations saved<br>🔒 <strong>Privacy First</strong> — Your data stays private<br>📊 <strong>Analytics Dashboard</strong> — Track usage and stats<br>🔐 <strong>Google Sign In</strong> — Quick authentication<br>📧 <strong>Email Confirmation</strong> — Secure account verification<br>🗑️ <strong>Document Management</strong> — Upload, view, delete documents<br>⚡ <strong>Real-Time Processing</strong> — Instant answers<br><br>And many more! 🚀",
      followUp: [
        "How to get started?",
        "How does RAG pipeline work?",
        "Is my data safe?",
      ],
    },

    "How to delete a document?": {
      answer:
        "🗑️ To delete a document:<br><br><strong>Step 1:</strong> Go to your dashboard<br><strong>Step 2:</strong> Click '📁 Docs' tab in the sidebar<br><strong>Step 3:</strong> Find the document you want to delete<br><strong>Step 4:</strong> Click the '🗑️ Delete' button on the document card<br><strong>Step 5:</strong> Click 'OK' to confirm deletion<br><strong>Step 6:</strong> Document is removed immediately<br><br><strong>Note:</strong><br>• Deleted documents are removed from your knowledge base<br>• The AI will no longer use deleted documents for answers<br>• This action cannot be undone<br>• You can always re-upload the document later",
      followUp: [
        "How to upload documents?",
        "How to ask questions?",
        "What file types are supported?",
      ],
    },

    "Who built this?": {
      answer:
        "👨‍💻 <strong>Intellaxa.AI</strong> was built by a team of 3 CSE Students.<br>Built with ❤️ and lots of ☕",
      followUp: [
        "What is Intellaxa.AI?",
        "What are the key features?",
        "Contact support",
      ],
    },

    "Contact support": {
      answer:
        "📞 Need help? Contact us:<br><br>📧 <strong>Email:</strong> support@intellaxa.ai<br>💬 <strong>Chat:</strong> Use this help bot anytime<br>🐛 <strong>Report Bug:</strong> Email us with screenshots<br><br><strong>Common issues:</strong><br>• Can't sign in → Make sure you confirmed your email<br>• Upload failing → Check file size is under 50MB<br>• No AI response → Make sure backend server is running<br>• Google login not working → Try email login instead<br><br>We're here to help! 🙌",
      followUp: [
        "How to get started?",
        "Is my data safe?",
        "What is Intellaxa.AI?",
      ],
    },
  },
};

// ============================================
// CHATBOT UI CREATION
// ============================================
const HELP_BOT_ICON_URL = "/baymax.png";

function isDarkModeActive() {
  return document.documentElement.classList.contains("dark");
}

function applyHelpBotTheme() {
  const container = document.getElementById("helpBotContainer");
  if (!container) return;
  container.classList.toggle("hb-dark", isDarkModeActive());
}

function createHelpBot() {
  if (document.getElementById("helpBotContainer")) return;

  const botHTML = `
    <!-- Floating Chat Button (acts as logo) -->
    <div id="helpBotButton" onclick="toggleHelpBot()" aria-label="Open help" title="Help Center">
      <img id="helpBotBtnIcon" alt="Help" src="${HELP_BOT_ICON_URL}">
      <span id="helpBotBtnClose" aria-hidden="true">✕</span>
    </div>

    <!-- Chat Window -->
    <div id="helpBotWindow">
      <div id="helpBotHeader">
        <div id="helpBotHeaderInfo">
          <img class="helpbot-avatar" alt="Intellaxa Assistant" src="${HELP_BOT_ICON_URL}">
          <div>
            <div class="helpbot-name">Intellaxa Assistant</div>
            <div class="helpbot-status">● Online — Help Center</div>
          </div>
        </div>
        <button id="helpBotClose" onclick="toggleHelpBot()">✕</button>
      </div>

      <div id="helpBotMessages"></div>

      <div id="helpBotInputArea">
        <input
          type="text"
          id="helpBotInput"
          placeholder="Type a question or click above..."
        >
        <button type="button" id="helpBotSendBtn">➤</button>
      </div>
    </div>
  `;

  const botCSS = `
    #helpBotContainer { position: relative; }

    #helpBotContainer {
      --hb-accent-a: #6366f1;
      --hb-accent-b: #8b5cf6;
      --hb-shadow: rgba(0, 0, 0, 0.22);

      /* Light defaults */
      --hb-panel: #ffffff;
      --hb-border: rgba(15, 23, 42, 0.12);
      --hb-text: #0f172a;
      --hb-muted: #475569;
      --hb-subtle: rgba(2, 6, 23, 0.04);
      --hb-subtle-border: rgba(15, 23, 42, 0.08);
      --hb-user-bg: rgba(99, 102, 241, 0.12);
      --hb-user-border: rgba(99, 102, 241, 0.25);
      --hb-user-text: #0f172a;
      --hb-input-bg: rgba(2, 6, 23, 0.03);
      --hb-input-border: rgba(15, 23, 42, 0.14);
      --hb-placeholder: #64748b;
    }

    #helpBotContainer.hb-dark {
      --hb-panel: #0f0a1a;
      --hb-border: rgba(99, 102, 241, 0.3);
      --hb-text: #e2e8f0;
      --hb-muted: #cbd5e1;
      --hb-subtle: rgba(255, 255, 255, 0.05);
      --hb-subtle-border: rgba(255, 255, 255, 0.08);
      --hb-user-bg: rgba(99, 102, 241, 0.2);
      --hb-user-border: rgba(99, 102, 241, 0.3);
      --hb-user-text: #e2e8f0;
      --hb-input-bg: rgba(255, 255, 255, 0.05);
      --hb-input-border: rgba(255, 255, 255, 0.12);
      --hb-placeholder: #475569;
    }

    #helpBotButton {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--hb-accent-a), var(--hb-accent-b));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 6px 25px rgba(99, 102, 241, 0.5);
      z-index: 9999;
      transition: all 0.3s ease;
      animation: helpBotPulse 2s infinite;
    }

    #helpBotButton:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 35px rgba(99, 102, 241, 0.6);
    }

    #helpBotBtnIcon {
      width: 38px;
      height: 38px;
      object-fit: contain;
      filter: drop-shadow(0 6px 10px rgba(0,0,0,0.18));
      transition: transform 0.25s ease;
      user-select: none;
      pointer-events: none;
    }

    #helpBotBtnClose {
      position: absolute;
      inset: 0;
      display: none;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 18px;
      font-weight: 800;
      text-shadow: 0 6px 16px rgba(0,0,0,0.28);
      user-select: none;
      pointer-events: none;
    }

    #helpBotButton.is-open #helpBotBtnIcon { transform: scale(0.98); opacity: 0.18; }
    #helpBotButton.is-open #helpBotBtnClose { display: flex; }

    @keyframes helpBotPulse {
      0% { box-shadow: 0 6px 25px rgba(99, 102, 241, 0.5); }
      50% { box-shadow: 0 6px 35px rgba(99, 102, 241, 0.7); }
      100% { box-shadow: 0 6px 25px rgba(99, 102, 241, 0.5); }
    }

    #helpBotWindow {
      position: fixed;
      bottom: 96px;
      right: 24px;
      width: 380px;
      height: 520px;
      background: var(--hb-panel);
      border: 1px solid var(--hb-border);
      border-radius: 16px;
      display: none;
      flex-direction: column;
      z-index: 9998;
      overflow: hidden;
      box-shadow: 0 20px 60px var(--hb-shadow);
      animation: helpBotSlideUp 0.3s ease;
    }

    #helpBotWindow.open {
      display: flex;
    }

    @keyframes helpBotSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    #helpBotHeader {
      background: linear-gradient(135deg, var(--hb-accent-a), var(--hb-accent-b));
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    #helpBotHeaderInfo {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .helpbot-avatar {
      width: 30px;
      height: 30px;
      border-radius: 10px;
      object-fit: contain;
      background: rgba(255,255,255,0.15);
      padding: 4px;
    }

    .helpbot-name {
      color: #ffffff;
      font-size: 15px;
      font-weight: 700;
    }

    .helpbot-status {
      color: #c7d2fe;
      font-size: 12px;
    }

    #helpBotClose {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: #ffffff;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      font-size: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }

    #helpBotClose:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    #helpBotMessages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      color: var(--hb-text);
    }

    .helpbot-msg-bot {
      display: flex;
      gap: 8px;
      align-items: flex-start;
    }

    .helpbot-msg-bot .helpbot-msg-avatar {
      font-size: 18px;
      flex-shrink: 0;
      margin-top: 4px;
    }

    .helpbot-msg-bot .helpbot-msg-bubble {
      background: var(--hb-subtle);
      border: 1px solid var(--hb-subtle-border);
      border-radius: 12px;
      border-top-left-radius: 4px;
      padding: 12px 16px;
      color: var(--hb-muted);
      font-size: 13px;
      line-height: 1.6;
      max-width: 85%;
    }

    .helpbot-msg-user {
      display: flex;
      justify-content: flex-end;
    }

    .helpbot-msg-user .helpbot-msg-bubble {
      background: var(--hb-user-bg);
      border: 1px solid var(--hb-user-border);
      border-radius: 12px;
      border-top-right-radius: 4px;
      padding: 10px 16px;
      color: var(--hb-user-text);
      font-size: 13px;
      max-width: 85%;
    }

    .helpbot-options {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-top: 8px;
    }

    .helpbot-option-btn {
      background: rgba(99, 102, 241, 0.10);
      border: 1px solid rgba(99, 102, 241, 0.22);
      border-radius: 8px;
      padding: 10px 14px;
      color: color-mix(in srgb, var(--hb-text) 28%, var(--hb-accent-a) 72%);
      font-size: 12px;
      cursor: pointer;
      text-align: left;
      transition: all 0.2s;
      font-family: inherit;
    }

    .helpbot-option-btn:hover {
      background: rgba(99, 102, 241, 0.2);
      border-color: rgba(99, 102, 241, 0.5);
      color: #c7d2fe;
      transform: translateX(4px);
    }

    #helpBotInputArea {
      padding: 12px 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      gap: 8px;
    }

    #helpBotInputArea input {
      flex: 1;
      padding: 10px 14px;
      background: var(--hb-input-bg);
      border: 1px solid var(--hb-input-border);
      border-radius: 8px;
      color: var(--hb-text);
      font-size: 13px;
      outline: none;
      font-family: inherit;
    }

    #helpBotInputArea input:focus {
      border-color: #6366f1;
    }

    #helpBotInputArea input::placeholder {
      color: var(--hb-placeholder);
    }

    #helpBotInputArea button {
      padding: 10px 16px;
      background: linear-gradient(135deg, var(--hb-accent-a), var(--hb-accent-b));
      border: none;
      border-radius: 8px;
      color: #ffffff;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
    }

    #helpBotInputArea button:hover {
      transform: scale(1.05);
    }

    #helpBotMessages::-webkit-scrollbar {
      width: 4px;
    }

    #helpBotMessages::-webkit-scrollbar-track {
      background: transparent;
    }

    #helpBotMessages::-webkit-scrollbar-thumb {
      background: rgba(99, 102, 241, 0.3);
      border-radius: 2px;
    }

    @media (max-width: 640px) {
      #helpBotWindow {
        width: calc(100vw - 32px);
        right: 16px;
        bottom: 88px;
        height: 70vh;
      }

      #helpBotButton {
        bottom: 16px;
        right: 16px;
        width: 52px;
        height: 52px;
      }
    }
  `;

  const styleTag = document.createElement("style");
  styleTag.textContent = botCSS;
  document.head.appendChild(styleTag);

  const botContainer = document.createElement("div");
  botContainer.id = "helpBotContainer";
  botContainer.innerHTML = botHTML;
  document.body.appendChild(botContainer);

  applyHelpBotTheme();
  // Sync theme if the page toggles the `dark` class later
  try {
    const obs = new MutationObserver(() => applyHelpBotTheme());
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  } catch {
    // ignore
  }

  setTimeout(() => {
    showGreeting();
  }, 800);

  const input = document.getElementById("helpBotInput");
  const sendBtn = document.getElementById("helpBotSendBtn");
  input?.addEventListener("keypress", handleHelpBotKeypress);
  sendBtn?.addEventListener("click", handleHelpBotCustomInput);
}

// ============================================
// CHATBOT FUNCTIONS
// ============================================
function toggleHelpBot() {
  const win = document.getElementById("helpBotWindow");
  const btn = document.getElementById("helpBotButton");
  if (!win || !btn) return;

  const isOpen = win.classList.toggle("open");
  btn.classList.toggle("is-open", isOpen);
}

function showGreeting() {
  const messagesDiv = document.getElementById("helpBotMessages");
  if (!messagesDiv) return;
  messagesDiv.innerHTML = "";
  addBotMessage(helpBotData.greeting.message);
  addOptionButtons(helpBotData.greeting.options);
}

function addBotMessage(text) {
  const messagesDiv = document.getElementById("helpBotMessages");
  if (!messagesDiv) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = "helpbot-msg-bot";
  msgDiv.innerHTML = `
    <span class="helpbot-msg-avatar">🤖</span>
    <div class="helpbot-msg-bubble">${text}</div>
  `;
  messagesDiv.appendChild(msgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function addUserMessage(text) {
  const messagesDiv = document.getElementById("helpBotMessages");
  if (!messagesDiv) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = "helpbot-msg-user";
  msgDiv.innerHTML = `<div class="helpbot-msg-bubble">${text}</div>`;
  messagesDiv.appendChild(msgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function addOptionButtons(options) {
  const messagesDiv = document.getElementById("helpBotMessages");
  if (!messagesDiv) return;

  const optionsDiv = document.createElement("div");
  optionsDiv.className = "helpbot-options";

  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "helpbot-option-btn";
    btn.type = "button";
    btn.textContent = option;
    btn.onclick = () => handleQuestionClick(option);
    optionsDiv.appendChild(btn);
  });

  messagesDiv.appendChild(optionsDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function handleQuestionClick(question) {
  const oldOptions = document.querySelectorAll(".helpbot-options");
  oldOptions.forEach((opt) => opt.remove());

  addUserMessage(question);

  const qaData = helpBotData.questions[question];

  if (qaData) {
    setTimeout(() => {
      addBotMessage(qaData.answer);
      if (qaData.followUp && qaData.followUp.length > 0) {
        setTimeout(() => {
          addBotMessage("Would you like to know more? 👇");
          const allOptions = qaData.followUp.concat(["Show all questions"]);
          addOptionButtons(allOptions);
        }, 500);
      }
    }, 300);
  } else if (question === "Show all questions") {
    setTimeout(() => {
      addBotMessage(helpBotData.greeting.message);
      addOptionButtons(helpBotData.greeting.options);
    }, 300);
  } else {
    setTimeout(() => {
      addBotMessage(
        "I'm sorry, I don't have an answer for that specific question. Here are the topics I can help with: 👇"
      );
      addOptionButtons(helpBotData.greeting.options);
    }, 300);
  }
}

function handleHelpBotCustomInput() {
  const input = document.getElementById("helpBotInput");
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  input.value = "";

  const oldOptions = document.querySelectorAll(".helpbot-options");
  oldOptions.forEach((opt) => opt.remove());

  addUserMessage(text);

  const matchedQuestion = findMatchingQuestion(text);

  if (matchedQuestion) {
    handleQuestionClick(matchedQuestion);
  } else {
    setTimeout(() => {
      addBotMessage(
        "I don't have a specific answer for that. But here are the topics I can help with! 👇"
      );
      addOptionButtons(helpBotData.greeting.options);
    }, 300);
  }
}

function handleHelpBotKeypress(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleHelpBotCustomInput();
  }
}

function findMatchingQuestion(userInput) {
  const input = userInput.toLowerCase();

  const keywordMap = {
    "What is Intellaxa.AI?": [
      "what is",
      "about",
      "intellaxa",
      "explain",
      "tell me",
    ],
    "How to get started?": [
      "get started",
      "start",
      "begin",
      "how to use",
      "new user",
    ],
    "How to upload documents?": [
      "upload",
      "add document",
      "add file",
      "import",
    ],
    "How to ask questions?": [
      "ask",
      "question",
      "chat",
      "query",
      "how to ask",
    ],
    "What file types are supported?": [
      "file type",
      "format",
      "pdf",
      "docx",
      "supported",
      "accept",
    ],
    "Is my data safe?": [
      "safe",
      "secure",
      "privacy",
      "data",
      "protection",
      "security",
    ],
    "How does RAG pipeline work?": [
      "rag",
      "pipeline",
      "how it works",
      "how does it work",
      "technology",
      "behind",
    ],
    "What are the key features?": [
      "feature",
      "capabilities",
      "what can",
      "functions",
    ],
    "How to delete a document?": [
      "delete",
      "remove",
      "erase",
      "get rid",
    ],
    "Who built this?": [
      "who built",
      "who made",
      "team",
      "developer",
      "creator",
      "built by",
    ],
    "Contact support": [
      "contact",
      "support",
      "help",
      "issue",
      "problem",
      "bug",
      "error",
    ],
  };

  for (const question in keywordMap) {
    const keywords = keywordMap[question];
    for (let i = 0; i < keywords.length; i++) {
      if (input.includes(keywords[i])) {
        return question;
      }
    }
  }

  return null;
}

// ============================================
// INITIALIZE CHATBOT WHEN PAGE LOADS
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  try {
    createHelpBot();
  } catch {
    // ignore init errors
  }
});

