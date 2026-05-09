# AI Research Radar

GitHub repository: <https://github.com/Dominic121212/ai-research-radar>

AI Research Radar is an AI-powered research intelligence dashboard for tracking AI papers, model releases, GitHub trends, technical risks, and implementation opportunities. The goal is to help developers turn fast-moving AI information into practical engineering decisions: what is worth reading, what is worth testing, and what should be added to the product roadmap.

This repository is actively developed as a portfolio and application proof project for the Xiaomi MiMo 100T creator plan.

## Project Overview

AI developers often face too much information: new papers, model launches, agent frameworks, open-source repositories, evaluation reports, and safety discussions appear every day. AI Research Radar organizes those signals into a structured dashboard with scoring, summaries, and experiment recommendations.

The current version is a React and TypeScript front-end prototype with realistic sample data. It demonstrates the intended product experience before connecting live data sources and model APIs.

## How This Project Uses Large Models

The planned core model is **MiMo V2.5**, used as the reasoning and long-context analysis layer for the research radar.

MiMo V2.5 can be used in this project for:

- **Paper summary extraction:** parse long AI papers and produce concise summaries, core contributions, limitations, and implementation notes.
- **AI trend tracking:** analyze one week of AI news, papers, model releases, and GitHub repositories to identify repeated themes and emerging technical directions.
- **Technology stack analysis:** compare tools such as agent frameworks, vector databases, evaluation libraries, model APIs, and deployment platforms.
- **Risk classification:** label each research signal by adoption risk, safety concern, technical uncertainty, and implementation difficulty.
- **Experiment generation:** convert important research findings into testable engineering tasks, such as evaluation suites, prompt harnesses, or prototype features.
- **Weekly brief generation:** produce a structured report for developers, including what changed, why it matters, and what to build next.

In a future version, MiMo V2.5 will receive long text from papers, README files, release notes, and trend feeds, then return normalized records for the dashboard.

Example normalized output:

```json
{
  "title": "Long-context agents need memory discipline",
  "category": "Paper",
  "summary": "Long context alone does not prevent agent drift. Structured memory and state compression improve reliability.",
  "novelty": 82,
  "usefulness": 94,
  "risk": 42,
  "recommendedExperiment": "Compare raw transcript context against compressed task-state memory."
}
```

## AgentOps Integration Plan

This project also plans to integrate an **AgentOps-style workflow** for observing and improving AI agent runs.

Planned AgentOps features:

- Track each model call used for paper summarization, trend analysis, and technical stack comparison.
- Record prompt version, model name, latency, token usage, and output quality score.
- Compare different prompts for the same research task.
- Save failed or low-quality outputs for later prompt improvement.
- Build a small evaluation dashboard showing which prompts and models produce the most reliable research summaries.

This makes the project more than a static dashboard. It becomes a system for running, measuring, and improving AI research agents over time.

## Core Workflows

- **Research triage:** rank AI papers and launches by novelty, implementation value, and risk.
- **Opportunity radar:** map AI ideas into product, infrastructure, evaluation, and safety categories.
- **Experiment queue:** convert interesting findings into testable engineering experiments.
- **Technical stack analysis:** compare tools and frameworks before choosing what to build with.
- **Weekly AI brief:** generate a concise report from selected papers, repos, and trend signals.

## Current Features

- React + TypeScript + Vite front-end.
- Research signal dashboard with category filtering.
- Radar-style visual overview.
- Novelty, usefulness, and risk scoring.
- Recommended experiment for each research signal.
- Experiment queue for turning research into development work.
- Static sample data so the project runs without API keys.

## 100T Application Link

When submitting the Xiaomi MiMo 100T plan application, use this repository URL in the **project link** or **code repository** field:

```text
https://github.com/Dominic121212/ai-research-radar
```

This shows that the applicant is an active developer building a real AI project, not only requesting tokens without a development plan.

## Suggested 100T Application Description

```text
AI Research Radar is an AI-powered research intelligence dashboard that uses large models such as MiMo V2.5 to analyze AI papers, model releases, GitHub trends, and technical stack changes. The project will use MiMo's high-token quota for long-text analysis, weekly AI trend tracking, paper summary extraction, risk classification, and experiment generation. I also plan to add AgentOps-style monitoring to track model calls, prompt versions, token usage, and output quality, so the project can continuously improve its AI research workflow.
```

## Future PHP + CSS Web Version

Because the developer has experience with PHP and CSS, a practical next step is to build a simple database-backed web version:

1. Use MiMo's high token quota to analyze long text from recent AI papers, GitHub trending projects, and AI news.
2. Store normalized results in a database such as MySQL or SQLite.
3. Build a PHP page that reads the database and displays the weekly radar.
4. Use CSS to create a clean research dashboard with filters for paper, model, infrastructure, and safety.
5. Add a detail page for each research signal with summary, source link, risk score, and suggested experiment.

Possible PHP data model:

```sql
CREATE TABLE research_signals (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  source_url TEXT,
  category TEXT NOT NULL,
  summary TEXT NOT NULL,
  novelty INTEGER,
  usefulness INTEGER,
  risk INTEGER,
  recommended_experiment TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

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

- arXiv API for new AI papers.
- Hugging Face Hub API for model releases.
- GitHub search API for AI repositories.
- RSS feeds for AI news and lab announcements.
- MiMo V2.5 API for long-text summarization and trend extraction.
- SQLite, MySQL, or Supabase for saved research signals and weekly briefs.

## Roadmap

- Add live import from arXiv and GitHub trending.
- Add MiMo V2.5 summarization endpoint.
- Add AgentOps-style model-call logging.
- Add saved weekly brief export.
- Add PHP + MySQL version for database-backed publishing.
- Add screenshots and a short demo video for the 100T application.

## License

MIT
