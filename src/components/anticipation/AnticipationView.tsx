import React, { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { MatrixGrid } from './MatrixGrid';
import { TemplateInspector } from './TemplateInspector';
import { TemplateBuilder } from './TemplateBuilder';
import { Playground } from './Playground';
import { Shield, Sparkles, PlusCircle, CheckCircle2, AlertTriangle, Layers, Laptop, Star } from 'lucide-react';

export const AnticipationView: React.FC = () => {
  const { matrix, activeTemplate, selectTemplateById } = useApp();
  const [showBuilder, setShowBuilder] = useState(false);
  const [filterStarredOnly, setFilterStarredOnly] = useState(false);
  const playgroundRef = useRef<HTMLDivElement>(null);

  const scrollToPlayground = () => {
    playgroundRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const starredTemplates = matrix.filter((m) => m.starred);

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-6">
      {/* Top Metrics & Calm Protection Status */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase">Protection Level</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-lg font-black text-white font-mono">98.4%</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-1.5 py-0.2 rounded">
                HARDENED
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Laptop className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase">Protected Nodes</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-lg font-black text-white font-mono">142</span>
              <span className="text-[10px] font-mono text-slate-400">Terminals</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase">Blocked (24h)</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-lg font-black text-white font-mono">38</span>
              <span className="text-[10px] font-mono text-rose-400">Intercepts</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase">Active Profile</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-sm font-bold text-white font-mono truncate max-w-[120px]">
                {activeTemplate.id} ({activeTemplate.name})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Guide Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900/90 to-cyan-950/30 border border-emerald-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <h4 className="text-sm font-bold text-white">How Threat Anticipation Works</h4>
          </div>
          <p className="text-xs text-slate-300">
            1. Select a profile in the <strong>A1–C3 Matrix</strong> (or build a custom one) &nbsp;•&nbsp; 
            2. Inspect allowed binaries and ringfences &nbsp;•&nbsp; 
            3. Trigger simulated attacks in the <strong>Playground</strong>.
          </p>
        </div>

        <button
          onClick={() => setShowBuilder(true)}
          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shrink-0 shadow-lg shadow-emerald-600/20"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Create New Template</span>
        </button>
      </div>

      {/* Starred Templates Quick Ribbon */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
        <span className="text-slate-500 uppercase flex items-center gap-1 shrink-0">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Saved Profiles:
        </span>
        {starredTemplates.map((item) => (
          <button
            key={item.id}
            onClick={() => selectTemplateById(item.id)}
            className={`px-3 py-1 rounded-lg border transition-all flex items-center gap-1.5 shrink-0 ${
              activeTemplate.id === item.id
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
            }`}
          >
            <span className="font-bold text-white">{item.id}:</span>
            <span className="truncate max-w-[150px]">{item.name}</span>
          </button>
        ))}
      </div>

      {/* The 3x3 Matrix Grid */}
      <MatrixGrid />

      {/* Template Inspector for the currently selected matrix cell */}
      <TemplateInspector onOpenPlayground={scrollToPlayground} />

      {/* Threat Playground */}
      <div ref={playgroundRef}>
        <Playground />
      </div>

      {/* Custom Template Builder Modal */}
      {showBuilder && <TemplateBuilder onClose={() => setShowBuilder(false)} />}
    </div>
  );
};
