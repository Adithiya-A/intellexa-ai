## Intellexa Multi-Agent RAG (Fast Demo)

Production-style **multi-agent RAG** you can demo quickly:

```
User
 ↓
[Planner] → [Retriever] → [Analyzer] → [Validator] → [Responder]
 ↓
Answer + Confidence + Sources + Retrieved Chunks
```

### Features
- **Upload & index**: PDF, Word (`.docx`), JSON, TXT/MD
- **Local Vector DB**: FAISS (persisted under `data/`)
- **Gemini**:
  - Embeddings: auto-picks a working `embedContent` model (default: `models/gemini-embedding-001`)
  - Generation: auto-picks a working `generateContent` model (default: `models/gemini-flash-latest`)
- **UI demo**: Answer, confidence, retrieved chunks, sources, and agent trace

---

### Project structure
```
intellexa-ai/
├── app.py
├── agents/
├── rag/
├── static/            # simple demo UI
├── data/              # FAISS index (gitignored)
├── utils/
├── requirements.txt
└── README.md
```

---

### Requirements
- Python 3.11+
- A Gemini API key

---

### Setup
1) Install dependencies:

```bash
python3 -m pip install --user -r requirements.txt --break-system-packages
```

2) Create `.env` (or edit the existing one):

```env
API_KEY=YOUR_GEMINI_KEY

# Optional overrides
GEMINI_MODEL=models/gemini-flash-latest
GEMINI_EMBED_MODEL=models/gemini-embedding-001
TOP_K=3
CHUNK_SIZE=500
CHUNK_OVERLAP=50
```

> `.env` is gitignored; `.env.example` is safe to commit/share.

---

### Run
```bash
python3 -m uvicorn app:app --host 0.0.0.0 --port 8000
```

Open:
- **UI**: `http://localhost:8000/`
- **API docs**: `http://localhost:8000/docs`

---

### Demo flow (what to show)
1) Upload a document (PDF/DOCX/JSON)
2) Ask a question
3) Show:
   - Answer
   - Confidence
   - Retrieved chunks
   - Sources (metadata)
   - Agent trace

---

### API
- `POST /upload` (multipart form-data)
  - field: `file`
  - returns: `{ ok, chunks_added, filetype }`

- `POST /ask` (JSON)
  - body: `{ "query": "...", "top_k": 3 }`
  - returns: `{ answer, confidence, warning, sources, retrieved_chunks, agent_flow, agent_trace }`

---

### Troubleshooting
- **Upload fails with “model not found”**
  - Your Gemini account may expose different model names.
  - This project auto-selects a compatible model, but you can also set:
    - `GEMINI_MODEL` to a model that supports `generateContent`
    - `GEMINI_EMBED_MODEL` to a model that supports `embedContent`

- **“Vector store is empty”**
  - Upload at least one document first.

- **WSL / pip issues**
  - This project uses `--break-system-packages` because some WSL images ship Python as an externally-managed environment (PEP 668).

