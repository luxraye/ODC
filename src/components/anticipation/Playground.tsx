import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Play, ShieldAlert, ShieldCheck, ArrowRight, AlertTriangle, Terminal, Cpu, FileText, CheckCircle2 } from 'lucide-react';
import { AttackScenario } from '../../types';

export const Playground: React.FC = () => {
  const { activeTemplate, scenarios, activeScenario, setActiveScenario, setRole, addAuditLog } = useApp();
  const [simulating, setSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState<{
    outcome: 'BLOCK' | 'ALLOW';
    scenario: AttackScenario;
    timestamp: string;
  } | null>(null);

  const [telemetryTab, setTelemetryTab] = useState<'plain' | 'technical'>('plain');

  const handleRunSimulation = () => {
    setSimulating(true);
    setSimulationResult(null);

    setTimeout(() => {
      setSimulating(false);
      setSimulationResult({
        outcome: activeScenario.expectedOutcome,
        scenario: activeScenario,
        timestamp: new Date().toLocaleTimeString(),
      });

      addAuditLog(
        activeScenario.expectedOutcome === 'BLOCK' ? 'PLAYGROUND_ATTACK_INTERCEPTED' : 'PLAYGROUND_ACTION_PERMITTED',
        `Simulated "${activeScenario.title}" against profile ${activeTemplate.id}. Verdict: ${activeScenario.expectedOutcome}`,
        activeScenario.expectedOutcome === 'BLOCK' ? 'threat' : 'success'
      );
    }, 600);
  };

  const handleEscalateToResponse = () => {
    setRole('response');
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <h3 className="text-xl font-bold text-white">Instances Threat Simulation Playground</h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulate realistic attack scenarios against active zero-trust templates without risking actual computers.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
          <span className="text-slate-500">Active Shield:</span>
          <span className="text-emerald-400 font-bold">{activeTemplate.id} ({activeTemplate.name})</span>
        </div>
      </div>

      {/* Scenario Selector & Run Button */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-3">
          <label className="text-xs font-mono uppercase text-slate-400 block">
            Select Test Threat Scenario:
          </label>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {scenarios.map((scen) => {
              const isSelected = activeScenario.id === scen.id;
              return (
                <div
                  key={scen.id}
                  onClick={() => {
                    setActiveScenario(scen);
                    setSimulationResult(null);
                  }}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-emerald-950/40 border-emerald-500 shadow-md shadow-emerald-950/50'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded uppercase font-semibold ${
                      scen.category === 'malware' ? 'bg-rose-500/20 text-rose-300' :
                      scen.category === 'storage' ? 'bg-amber-500/20 text-amber-300' :
                      scen.category === 'network' ? 'bg-cyan-500/20 text-cyan-300' :
                      'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {scen.category}
                    </span>
                    <span className={`text-[10px] font-mono font-bold ${
                      scen.expectedOutcome === 'BLOCK' ? 'text-rose-400' : 'text-emerald-400'
                    }`}>
                      Target: {scen.expectedOutcome}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-200 line-clamp-1">{scen.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{scen.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Scenario Preview & Run */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-slate-500">Payload Details</span>
            <div>
              <p className="text-xs font-bold text-slate-200">{activeScenario.title}</p>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">Target: {activeScenario.targetAsset}</p>
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 block">Syscall / Command:</span>
              <code className="text-[11px] font-mono text-amber-300 break-all">{activeScenario.simulatedPayload}</code>
            </div>
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={simulating}
            className="mt-4 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/30 disabled:opacity-50"
          >
            {simulating ? (
              <>
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                <span>Evaluating Zero-Trust Policy...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Trigger Simulation Now</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Simulation Result Output */}
      {simulationResult && (
        <div className={`p-6 rounded-2xl border transition-all ${
          simulationResult.outcome === 'BLOCK'
            ? 'bg-gradient-to-b from-rose-950/30 to-slate-950 border-rose-500/50 shadow-xl shadow-rose-950/20'
            : 'bg-gradient-to-b from-emerald-950/30 to-slate-950 border-emerald-500/50 shadow-xl shadow-emerald-950/20'
        }`}>
          {/* Verdict Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                simulationResult.outcome === 'BLOCK'
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                  : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
              }`}>
                {simulationResult.outcome === 'BLOCK' ? (
                  <ShieldAlert className="w-6 h-6" />
                ) : (
                  <ShieldCheck className="w-6 h-6" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-black font-mono px-2 py-0.5 rounded ${
                    simulationResult.outcome === 'BLOCK'
                      ? 'bg-rose-500 text-slate-950'
                      : 'bg-emerald-500 text-slate-950'
                  }`}>
                    {simulationResult.outcome}ED
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Evaluated against {activeTemplate.id} Policy
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mt-1">
                  {simulationResult.scenario.title}
                </h4>
              </div>
            </div>

            {/* Escalate button */}
            {simulationResult.outcome === 'BLOCK' && (
              <button
                onClick={handleEscalateToResponse}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shrink-0 shadow-lg shadow-cyan-600/30"
              >
                <span>Escalate to Threat Response Case</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Explanation Toggle & Details */}
          <div className="mt-5 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
              <button
                onClick={() => setTelemetryTab('plain')}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                  telemetryTab === 'plain'
                    ? 'bg-slate-800 text-emerald-300 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Plain Language (Clinic / School Staff)
              </button>
              <button
                onClick={() => setTelemetryTab('technical')}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                  telemetryTab === 'technical'
                    ? 'bg-slate-800 text-cyan-300 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Technical Telemetry (Security Judges)
              </button>
            </div>

            {telemetryTab === 'plain' ? (
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
                <FileText className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-200">Plain-English Recommendation</p>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {simulationResult.scenario.plainEnglishReason}
                  </p>
                  <span className="text-[10px] font-mono text-slate-400 mt-2 block">
                    No action needed by the user. The zero-trust sentinel automatically intercepted the call at the kernel boundary.
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 font-mono text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-500">Trigger Subsystem:</span>
                  <span className="text-amber-400">{simulationResult.scenario.technicalTelemetry.engine}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-500">Rule Match ID:</span>
                  <span className="text-emerald-400">{simulationResult.scenario.technicalTelemetry.ruleId}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-500">Intercepted Call:</span>
                  <span className="text-rose-400 truncate max-w-[300px]">{simulationResult.scenario.technicalTelemetry.matchedPattern}</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-slate-500">Kernel Enforcement:</span>
                  <span className="text-slate-300">{simulationResult.scenario.technicalTelemetry.actionTaken}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
