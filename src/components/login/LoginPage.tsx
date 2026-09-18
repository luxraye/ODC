import React from 'react';
import { useApp } from '../../context/AppContext';
import { Radio, FileCheck, Shield, Lock, ArrowRight, ArrowLeft, Terminal, KeyRound, Sparkles, CheckCircle2 } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { setRole, setShowAdminAuthModal } = useApp();

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-between py-8 px-4 max-w-6xl mx-auto space-y-12">
      {/* Top Title */}
      <div className="text-center space-y-3 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <KeyRound className="w-3.5 h-3.5" />
          <span>Operational Gateway // Role Authentication</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Select Your Working Dashboard
        </h2>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          Choose whether you are proactively managing zero-trust protection profiles or triaging a reported security incident.
        </p>
      </div>

      {/* The Two Main Role Cards */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Role 1: Threat Anticipation */}
        <div className="relative group rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-emerald-500/60 p-8 transition-all shadow-xl hover:shadow-emerald-950/30 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Radio className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Role 01 · Proactive Hardening
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                Threat Anticipation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                For network administrators, IT officers, and clinic leads who configure application allow-lists, storage ringfencing, and test policies in the sandbox.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Interactive <strong>A1–C3 Protection Matrix</strong> (Individual to Clinic)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>One-click <strong>Instances Threat Playground</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Developer <strong>JSON Policy Code Studio</strong> for custom rules</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setRole('anticipation')}
            className="mt-8 w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 group-hover:scale-[1.01]"
          >
            <span>Enter Threat Anticipation Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Role 2: Threat Response */}
        <div className="relative group rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-cyan-500/60 p-8 transition-all shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <FileCheck className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                Role 02 · Evidence & Triage
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                Threat Response
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                For clinic staff reporting anomalies and security reviewers triaging evidence. Replaces risky remote desktop tools with structured checklists.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span><strong>Bounded Evidence Instance</strong> (Replaces AnyDesk/TeamViewer)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>One-click diagnostic log extraction & SHA-256 seal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>IT Reviewer remediation and case resolution timeline</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setRole('response')}
            className="mt-8 w-full py-3.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 group-hover:scale-[1.01]"
          >
            <span>Enter Threat Response Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer: Admin portal button and Overview link */}
      <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <button
          onClick={() => setRole('landing')}
          className="flex items-center gap-1.5 hover:text-slate-200 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Product Overview</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-slate-500 hidden sm:inline">Restricted access:</span>
          <button
            onClick={() => setShowAdminAuthModal(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 hover:border-amber-500/40 transition-all"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Admin & Auditor Console</span>
          </button>
        </div>
      </div>
    </div>
  );
};
