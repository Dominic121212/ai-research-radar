import type { Experiment, ResearchSignal } from './types';

export const researchSignals: ResearchSignal[] = [
  {
    id: 1,
    title: 'Long-context agents need memory discipline',
    source: 'Paper cluster',
    category: 'Paper',
    novelty: 82,
    usefulness: 94,
    risk: 42,
    summary:
      'New agent papers show that long context alone does not solve task drift. Structured memory and compact state transfer matter more than raw window size.',
    experiment:
      'Build a prompt harness that compares raw transcript context against compressed task-state memory.'
  },
  {
    id: 2,
    title: 'Small multimodal models become product QA assistants',
    source: 'Model release watch',
    category: 'Model',
    novelty: 76,
    usefulness: 88,
    risk: 36,
    summary:
      'Smaller vision-language models are now good enough to identify layout defects, missing states, and screenshot inconsistencies in product reviews.',
    experiment:
      'Create a screenshot review pipeline that returns issue severity, affected viewport, and repro notes.'
  },
  {
    id: 3,
    title: 'Evaluation data is becoming a moat',
    source: 'Infra trend',
    category: 'Infra',
    novelty: 69,
    usefulness: 91,
    risk: 57,
    summary:
      'Teams are shifting from generic benchmarks to private task suites that mirror customer workflows and deployment constraints.',
    experiment:
      'Design a 30-task evaluation suite for coding-agent changes with pass/fail and human-review scoring.'
  },
  {
    id: 4,
    title: 'Prompt injection remains a workflow risk',
    source: 'Safety review',
    category: 'Safety',
    novelty: 61,
    usefulness: 84,
    risk: 79,
    summary:
      'External content ingestion keeps exposing agents to malicious instructions. Reliable isolation and content labeling are still required.',
    experiment:
      'Add an untrusted-content boundary and red-team test set to a browser research agent.'
  }
];

export const experiments: Experiment[] = [
  { name: 'Agent memory compression harness', owner: 'Platform', status: 'Ready', impact: 94 },
  { name: 'Screenshot QA classifier', owner: 'Product', status: 'Running', impact: 88 },
  { name: 'Private coding eval suite', owner: 'Research', status: 'Queued', impact: 91 },
  { name: 'Prompt-injection test corpus', owner: 'Security', status: 'Ready', impact: 86 }
];
