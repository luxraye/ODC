import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Shield, Lock, Radio, Database, Code, Check, Copy, HardDrive, Cpu, Terminal, ArrowRight, Sparkles } from 'lucide-react';

export const TemplateInspector: React.FC<{ onOpenPlayground: () => void }> = ({ onOpenPlayground }) => {
  const { activeTemplate } = useApp();
  const [viewJson, setViewJson] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(activeTemplate, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Tier {activeTemplate.id}
            </span>
            <h3 className="text-xl font-bold text-white">{activeTemplate.name}</h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">{activeTemplate.tagline}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewJson(!viewJson)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
              viewJson
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>{viewJson ? 'Visual Rules' : 'JSON Policy'}</span>
          </button>

          <button
            onClick={onOpenPlayground}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-slate-950 transition-all shadow-md shadow-emerald-600/30"
          >
            <span>Test in Playground</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {viewJson ? (
        /* JSON View */
        <div className="relative">
          <button
            onClick={handleCopyJson}
            className="absolute top-3 right-3 flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Copy JSON'}</span>
          </button>
          <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300/90 overflow-x-auto max-h-96">
            {JSON.stringify(activeTemplate, null, 2)}
          </pre>
        </div>
      ) : (
        /* Visual Breakdown */
        <div className="space-y-6">
          {/* Allow-Listed Binaries */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> Application Allow-List (Only These Execute)
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                {activeTemplate.allowedApps.length} binaries approved
              </span>
            </div>
            <div className="flex flex-wrap gap-2 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
              {activeTemplate.allowedApps.map((app) => (
                <span
                  key={app}
                  className="px-2.5 py-1 rounded-md bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 text-xs font-mono flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Ringfencing Controls */}
          <div>
            <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5 mb-2.5">
              <Lock className="w-3.5 h-3.5 text-cyan-400" /> Ringfencing & Privilege Boundaries
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 uppercase">USB Storage</span>
                <p className="text-xs font-bold text-slate-200 mt-1 uppercase font-mono">
                  {activeTemplate.ringfencing.usbStorage}
                </p>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  {activeTemplate.ringfencing.usbStorage === 'blocked' ? 'udev mount denied' : 'read-only filter'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Network Egress</span>
                <p className="text-xs font-bold text-slate-200 mt-1 uppercase font-mono truncate">
                  {activeTemplate.ringfencing.networkEgress}
                </p>
                <span className="text-[10px] text-slate-400 mt-0.5 block">Suricata port filter</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Elevation Control</span>
                <p className="text-xs font-bold text-slate-200 mt-1 uppercase font-mono">
                  {activeTemplate.ringfencing.elevationControl}
                </p>
                <span className="text-[10px] text-slate-400 mt-0.5 block">Polkit/Sudo restrict</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Memory Ringfence</span>
                <p className={`text-xs font-bold mt-1 uppercase font-mono ${
                  activeTemplate.ringfencing.memoryProtection ? 'text-emerald-400' : 'text-slate-400'
                }`}>
                  {activeTemplate.ringfencing.memoryProtection ? 'Active' : 'Standard'}
                </p>
                <span className="text-[10px] text-slate-400 mt-0.5 block">ASLR / ptrace block</span>
              </div>
            </div>
          </div>

          {/* Advanced Custom Developer Extensions (if present) */}
          {(activeTemplate.eBPF_filters || activeTemplate.hardwareUsbWhitelist || activeTemplate.evidenceWorkflow) && (
            <div className="p-4 rounded-xl bg-slate-950/90 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-emerald-300 uppercase">
                  Custom Developer Protections & Workflow Rules Active
                </span>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 text-xs font-mono">
                {activeTemplate.eBPF_filters && (
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-cyan-400 font-bold block">eBPF Blocked Syscalls:</span>
                    <span className="text-slate-300 text-[11px]">
                      {activeTemplate.eBPF_filters.blockedSyscalls.join(', ')}
                    </span>
                  </div>
                )}

                {activeTemplate.hardwareUsbWhitelist && (
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-amber-400 font-bold block">Hardware VID/PID Filter:</span>
                    <span className="text-slate-300 text-[11px]">
                      {activeTemplate.hardwareUsbWhitelist.allowedVendorIds.join(', ')}
                    </span>
                  </div>
                )}

                {activeTemplate.evidenceWorkflow && (
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-purple-400 font-bold block">Reviewer SLA Target:</span>
                    <span className="text-slate-300 text-[11px]">
                      {activeTemplate.evidenceWorkflow.reviewerSlaHours}h Response Window
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Open Source Engine Mapping */}
          <div className="pt-2 border-t border-slate-800/80">
            <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5 mb-2.5">
              <Terminal className="w-3.5 h-3.5 text-amber-400" /> Open-Source Engine Subsystems
            </span>
            <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/60 flex items-start gap-2">
                <span className="text-emerald-400 font-bold shrink-0">EXEC:</span>
                <span className="text-slate-300">{activeTemplate.openSourceStack.binaryEnforcement}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/60 flex items-start gap-2">
                <span className="text-cyan-400 font-bold shrink-0">NET:</span>
                <span className="text-slate-300">{activeTemplate.openSourceStack.networkInspection}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/60 flex items-start gap-2">
                <span className="text-amber-400 font-bold shrink-0">TELEMETRY:</span>
                <span className="text-slate-300">{activeTemplate.openSourceStack.endpointTelemetry}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/60 flex items-start gap-2">
                <span className="text-purple-400 font-bold shrink-0">AUDIT:</span>
                <span className="text-slate-300">{activeTemplate.openSourceStack.integrityAudit}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
