import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Radio, 
  FileCheck, 
  Shield, 
  ArrowRight, 
  ArrowLeft, 
  Terminal, 
  KeyRound, 
  HeartPulse, 
  Users, 
  Server, 
  CheckCircle2, 
  Sparkles,
  UserCheck,
  Building2
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { setRole, selectTemplateById, setShowAdminAuthModal } = useApp();
  const [activeTab, setActiveTab] = useState<'create' | 'signin'>('create');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // Handle Account Selection with automated routing and template selection
  const handleSelectOrganization = (orgType: 'clinic' | 'school' | 'sme' | 'reviewer') => {
    switch (orgType) {
      case 'clinic':
        selectTemplateById('C3');
        setRole('anticipation');
        break;
      case 'school':
        selectTemplateById('A2');
        setRole('anticipation');
        break;
      case 'sme':
        selectTemplateById('B2');
        setRole('anticipation');
        break;
      case 'reviewer':
        setRole('response');
        break;
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-between py-8 px-4 max-w-6xl mx-auto space-y-8">
      {/* Top Header */}
      <div className="text-center space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <KeyRound className="w-3.5 h-3.5" />
          <span>INSTANCES Gateway · Account Setup & Sign In</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          {activeTab === 'create' ? 'Get Started with INSTANCES' : 'Welcome Back'}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          {activeTab === 'create'
            ? 'Choose what type of organization you are protecting to activate the recommended zero-trust shield.'
            : 'Sign in to your active security workspace or access the reviewer triage desk.'}
        </p>

        {/* Dual Tab Switcher */}
        <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 mt-2">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-5 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2 ${
              activeTab === 'create'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Create Account / Choose Organization</span>
          </button>
          <button
            onClick={() => setActiveTab('signin')}
            className={`px-5 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2 ${
              activeTab === 'signin'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Sign In to Existing Account</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Create Account - Organization Archetypes */}
      {activeTab === 'create' && (
        <div className="space-y-4">
          <div className="text-center">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Select Your Operating Environment
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {/* Archetype 1: Rural Clinic */}
            <div 
              onClick={() => handleSelectOrganization('clinic')}
              className="group cursor-pointer rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-emerald-500/60 p-6 transition-all shadow-xl hover:shadow-emerald-950/30 flex flex-col justify-between hover:scale-[1.02]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    High Strictness
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Rural Health Clinic
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-400 block mt-0.5">
                    Archetype C3 · Health Post
                  </span>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Designed for clinics and hospitals (e.g. Kanye, Mochudi). Locks patient medical databases and blocks unauthorized USB sticks.
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Patient Record Ringfence</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Routes to Threat Anticipation</span>
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectOrganization('clinic');
                }}
                className="mt-6 w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-600/20"
              >
                <span>Protect Clinic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Archetype 2: School IT Lab */}
            <div 
              onClick={() => handleSelectOrganization('school')}
              className="group cursor-pointer rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-cyan-500/60 p-6 transition-all shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between hover:scale-[1.02]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Balanced
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    School IT Computer Lab
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-400 block mt-0.5">
                    Archetype A2 · Secondary School
                  </span>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    For public schools and training labs. Allows student learning tools while stopping malware downloads and malicious script executions.
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Allowed Educational Browsers</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Routes to Threat Anticipation</span>
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectOrganization('school');
                }}
                className="mt-6 w-full py-2.5 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-cyan-600/20"
              >
                <span>Protect School</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Archetype 3: Local Business / SME */}
            <div 
              onClick={() => handleSelectOrganization('sme')}
              className="group cursor-pointer rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-amber-500/60 p-6 transition-all shadow-xl hover:shadow-amber-950/30 flex flex-col justify-between hover:scale-[1.02]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Server className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Adaptive
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    Local Business / SME
                  </h3>
                  <span className="text-[11px] font-mono text-amber-400 block mt-0.5">
                    Archetype B2 · Regional SME
                  </span>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    For local stores, accounting desks, and logistics offices. Shields invoicing and POS systems from unauthorized tampering.
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Invoicing & Financial Ringfence</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Routes to Threat Anticipation</span>
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectOrganization('sme');
                }}
                className="mt-6 w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-amber-500/20"
              >
                <span>Protect Business</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Archetype 4: IT Reviewer & Auditor */}
            <div 
              onClick={() => handleSelectOrganization('reviewer')}
              className="group cursor-pointer rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-purple-500/60 p-6 transition-all shadow-xl hover:shadow-purple-950/30 flex flex-col justify-between hover:scale-[1.02]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Forensics
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    IT Security Reviewer
                  </h3>
                  <span className="text-[11px] font-mono text-purple-400 block mt-0.5">
                    Incident Triage Desk
                  </span>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    For technical reviewers. Triages bounded evidence checklists, inspects SHA-256 sealed bundles, and resolves incidents without risky remote desktop takeovers.
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Evidence Package Inspector</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Routes to Threat Response</span>
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectOrganization('reviewer');
                }}
                className="mt-6 w-full py-2.5 px-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-purple-500/20"
              >
                <span>Launch Triage Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Sign In (Fast Access & Preset Login) */}
      {activeTab === 'signin' && (
        <div className="max-w-md mx-auto w-full p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">Sign In to Your Workspace</h3>
            <p className="text-xs text-slate-400 mt-1">
              Select a demo profile or enter credentials to open your dashboard.
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div>
              <label className="text-slate-400 block mb-1">Account / Email:</label>
              <input
                type="text"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="lead@kanye-clinic.bw"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-xs font-sans"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Passphrase:</label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-xs font-sans"
              />
            </div>
          </div>

          <div className="pt-2 space-y-2.5">
            <span className="text-[10px] font-mono text-slate-500 uppercase block">1-Click Fast Access (Judges & Evaluators):</span>
            <button
              onClick={() => {
                selectTemplateById('C3');
                setRole('anticipation');
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Enter Threat Anticipation (Kanye Clinic C3)</span>
            </button>

            <button
              onClick={() => setRole('response')}
              className="w-full py-2.5 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-600/20"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>Enter Threat Response (Reviewer Triage Desk)</span>
            </button>
          </div>
        </div>
      )}

      {/* Footer: Admin console button and Overview link */}
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
