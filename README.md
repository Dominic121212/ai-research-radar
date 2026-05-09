# AI Research Radar

AI Research Radar is a front-end research intelligence dashboard for people who follow AI papers, model launches, implementation risks, and product opportunities. It turns a messy stream of AI news into a structured decision surface: what matters, why it matters, what to test next, and which risks deserve attention.

## What It Demonstrates

- A polished React and TypeScript interface suitable for a GitHub portfolio.
- AI product thinking around research triage, model evaluation, risk mapping, and implementation planning.
- A realistic workflow that can later connect to arXiv, Hugging Face, GitHub trending repositories, RSS feeds, or a large-model summarization API.
- Clean static sample data so the project runs immediately without API keys.

## Core Workflows

- **Research triage:** rank AI papers and launches by novelty, implementation value, and risk.
- **Opportunity radar:** map ideas into product, infrastructure, evaluation, and safety categories.
- **Experiment queue:** convert interesting findings into testable engineering experiments.
- **Executive brief:** generate a concise weekly AI briefing from the selected items.

## Quick Start

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:5174
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Future API Integrations

The first version is intentionally local and key-free. Good next integrations:

- arXiv API for new AI papers.
- Hugging Face Hub API for model releases.
- GitHub search API for AI repositories.
- LLM summary endpoint for daily research digests.
- SQLite or Supabase for saved briefs and experiment history.

## Project Pitch

AI Research Radar helps builders avoid chasing every AI headline. It scores research and releases against practical engineering criteria, then turns the highest-signal items into experiments, product hypotheses, and weekly briefings.

## License

MIT
