import React from 'react';
import { useApp } from '../../context/AppContext';
import { Shield, ArrowRight, Server, Users, HeartPulse, Sparkles, CheckCircle2, ChevronRight, Lock, Terminal, Radio, FileCheck, Layers, Star, Zap, Cpu } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { setRole } = useApp();

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-10 px-4 text-center overflow-hidden">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Open Source Hackathon 2026 Botswana · Track 01: Defence & Security</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Cyber Defense Made Simple. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Protection That Fits You.
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
          Simple, customizable cyber protection that adopts and scales to your needs — without the enterprise price tag or technical headache.
        </p>

        {/* Primary Action Button */}
        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={() => setRole('login')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-emerald-500/25 hover:scale-[1.02]"
          >
            <span>Get Started / Sign In</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Real-World Context Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2">
            <HeartPulse className="w-3.5 h-3.5 text-rose-400" /> Rural Clinics & Health Posts
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-cyan-400" /> Primary & Secondary School IT Labs
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2">
            <Server className="w-3.5 h-3.5 text-amber-400" /> Local Businesses & Municipal Councils
          </span>
        </div>
      </section>

      {/* Two Operational Pillars */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Threat Anticipation</h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-sans">
                Tailor zero-trust enforcement to the organization's scale and data sensitivity. 
                Inspect allowed binaries, ringfence USB storage, and test attacks in the <strong>Playground</strong>.
              </p>
            </div>
            <button
              onClick={() => setRole('anticipation')}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              <span>Launch Anticipation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Threat Response</h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-sans">
                Replaces high-risk remote desktop takeovers (AnyDesk / TeamViewer) with structured, bounded evidence checklists. 
                Clinic staff securely bundle diagnostic logs into a sealed SHA-256 package.
              </p>
            </div>
            <button
              onClick={() => setRole('response')}
              className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              <span>Launch Response</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Benchmark & Foundation Section at Bottom */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
              Benchmark Architecture & Open-Source Primitives
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              Translating Enterprise Zero-Trust into Accessible Open-Source Software
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Commercial zero-trust platforms (such as ThreatLocker) demonstrate the power of strict default-deny enforcement. 
              <strong> INSTANCES translates these enterprise capabilities into accessible open-source engines </strong>
              required to make Track 1 an affordable reality across Botswana.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Enterprise Benchmark</span>
              <p className="text-xs font-bold text-slate-200 mt-0.5">Application Allow-Listing</p>
              <div className="mt-2.5 pt-2.5 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-emerald-400">Open-Source Subsystem</span>
                <p className="text-xs text-slate-300 font-mono mt-0.5">Linux IMA / AppArmor / Windows AppLocker</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Enterprise Benchmark</span>
              <p className="text-xs font-bold text-slate-200 mt-0.5">Storage Ringfencing</p>
              <div className="mt-2.5 pt-2.5 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-emerald-400">Open-Source Subsystem</span>
                <p className="text-xs text-slate-300 font-mono mt-0.5">udev rules + SELinux Policies</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Enterprise Benchmark</span>
              <p className="text-xs font-bold text-slate-200 mt-0.5">Network Boundary & Egress</p>
              <div className="mt-2.5 pt-2.5 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-emerald-400">Open-Source Subsystem</span>
                <p className="text-xs text-slate-300 font-mono mt-0.5">Suricata 7.0 + OpenSnitch</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Enterprise Benchmark</span>
              <p className="text-xs font-bold text-slate-200 mt-0.5">Continuous Audit & Detect</p>
              <div className="mt-2.5 pt-2.5 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-emerald-400">Open-Source Subsystem</span>
                <p className="text-xs text-slate-300 font-mono mt-0.5">Wazuh SIEM + osquery + Velociraptor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-emerald-500/30 space-y-4">
          <h3 className="text-xl font-bold text-white">Experience INSTANCES in Action</h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">
            Choose either the Threat Anticipation or Threat Response dashboard to begin the interactive demonstration.
          </p>
          <button
            onClick={() => setRole('login')}
            className="px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-sans inline-flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
          >
            <span>Proceed to Login</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
