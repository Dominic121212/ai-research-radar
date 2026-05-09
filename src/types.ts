export type SignalCategory = 'Model' | 'Paper' | 'Infra' | 'Safety';

export type ResearchSignal = {
  id: number;
  title: string;
  source: string;
  category: SignalCategory;
  novelty: number;
  usefulness: number;
  risk: number;
  summary: string;
  experiment: string;
};

export type Experiment = {
  name: string;
  owner: string;
  status: 'Ready' | 'Running' | 'Queued';
  impact: number;
};
