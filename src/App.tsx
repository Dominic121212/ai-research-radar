import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Atom,
  BrainCircuit,
  CheckCircle2,
  FlaskConical,
  Layers3,
  Newspaper,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { experiments, researchSignals } from './data';
import type { ResearchSignal, SignalCategory } from './types';

const categories: Array<SignalCategory | 'All'> = ['All', 'Model', 'Paper', 'Infra', 'Safety'];

export function App() {
  const [activeCategory, setActiveCategory] = useState<SignalCategory | 'All'>('All');
  const [selectedSignal, setSelectedSignal] = useState<ResearchSignal>(researchSignals[0]);

  const filteredSignals = useMemo(() => {
    if (activeCategory === 'All') {
      return researchSignals;
    }
    return researchSignals.filter((signal) => signal.category === activeCategory);
  }, [activeCategory]);

  const weeklyScore = Math.round(
    researchSignals.reduce((sum, signal) => sum + signal.novelty + signal.usefulness - signal.risk * 0.35, 0) /
      researchSignals.length
  );

  return (
    <main className="page">
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="hero-copy"
        >
          <span className="eyebrow">
            <Sparkles size={16} />
            AI signal intelligence
          </span>
          <h1>AI Research Radar</h1>
          <p>
            Track papers, model releases, infrastructure shifts, and safety risks as practical engineering decisions.
          </p>
        </motion.div>

        <motion.div
          className="radar"
          initial={{ opacity: 0, rotate: -4, scale: 0.96 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.75 }}
        >
          <div className="radar-grid" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          {researchSignals.map((signal, index) => (
            <button
              key={signal.id}
              className={`radar-dot dot-${index + 1}`}
              onClick={() => setSelectedSignal(signal)}
              aria-label={signal.title}
            >
              {signal.category.slice(0, 1)}
            </button>
          ))}
          <div className="radar-score">
            <span>Weekly signal</span>
            <strong>{weeklyScore}</strong>
          </div>
        </motion.div>
      </section>

      <section className="category-strip" aria-label="Research categories">
        {categories.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {categoryIcon(category)}
            {category}
          </button>
        ))}
      </section>

      <section className="dashboard">
        <div className="signal-list">
          {filteredSignals.map((signal) => (
            <button
              key={signal.id}
              className={signal.id === selectedSignal.id ? 'signal active' : 'signal'}
              onClick={() => setSelectedSignal(signal)}
            >
              <span>{signal.source}</span>
              <strong>{signal.title}</strong>
              <small>{signal.category}</small>
            </button>
          ))}
        </div>

        <article className="detail-panel">
          <div className="panel-heading">
            <span>{selectedSignal.category}</span>
            <ArrowUpRight size={20} />
          </div>
          <h2>{selectedSignal.title}</h2>
          <p>{selectedSignal.summary}</p>
          <div className="score-grid">
            <Score label="Novelty" value={selectedSignal.novelty} />
            <Score label="Usefulness" value={selectedSignal.usefulness} />
            <Score label="Risk" value={selectedSignal.risk} />
          </div>
          <div className="experiment-box">
            <FlaskConical size={20} />
            <div>
              <span>Recommended experiment</span>
              <p>{selectedSignal.experiment}</p>
            </div>
          </div>
        </article>
      </section>

      <section className="experiment-section">
        <div className="section-title">
          <h2>Experiment Queue</h2>
          <p>Convert research into tests that produce evidence.</p>
        </div>
        <div className="experiment-grid">
          {experiments.map((experiment) => (
            <article key={experiment.name} className="experiment-card">
              <div>
                <CheckCircle2 size={18} />
                <span>{experiment.status}</span>
              </div>
              <h3>{experiment.name}</h3>
              <p>{experiment.owner}</p>
              <meter min="0" max="100" value={experiment.impact} />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Score({ label, value }: { label: string; value: number }) {
  return (
    <div className="score-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <meter min="0" max="100" value={value} />
    </div>
  );
}

function categoryIcon(category: SignalCategory | 'All') {
  if (category === 'Model') return <BrainCircuit size={17} />;
  if (category === 'Paper') return <Newspaper size={17} />;
  if (category === 'Infra') return <Layers3 size={17} />;
  if (category === 'Safety') return <ShieldAlert size={17} />;
  return <Atom size={17} />;
}
