import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EvidenceCollector } from './EvidenceCollector';
import { ReviewerWorkflow } from './ReviewerWorkflow';
import { FileCheck, ShieldAlert, CheckCircle2, Clock, AlertTriangle, UserCheck, ArrowRight, Eye, Shield } from 'lucide-react';
import { IncidentTicket } from '../../types';

export const ResponseView: React.FC = () => {
  const { incidents, activeIncident, setActiveIncident } = useApp();
  const [showEvidenceCollector, setShowEvidenceCollector] = useState(false);
  const [activeTab, setActiveTab] = useState<'staff' | 'reviewer'>('staff');

  const currentTicket = activeIncident || incidents[0];

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-6">
      {/* Calm Staff Reassurance Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">
              Zero-Trust Incident Response & Evidence Triage
            </h3>
          </div>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            <strong>Calm guidance for clinic & school staff:</strong> An unauthorized action was intercepted. Your computer is safe. 
            Do <em>not</em> grant remote desktop access (AnyDesk/TeamViewer) to anyone. Use the bounded checklist below to submit diagnostic proof directly to verified reviewers.
          </p>
        </div>

        {/* Role Toggle for Hackathon Judges */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
          <button
            onClick={() => setActiveTab('staff')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'staff'
                ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Clinic Staff View
          </button>
          <button
            onClick={() => setActiveTab('reviewer')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'reviewer'
                ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            IT Reviewer View
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Incident Queue List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> Active Incidents ({incidents.length})
            </span>
            <span className="text-[10px] font-mono text-slate-500">Live Triage Queue</span>
          </div>

          <div className="space-y-2.5">
            {incidents.map((t) => {
              const isSelected = currentTicket?.id === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => setActiveIncident(t)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500 shadow-md shadow-cyan-950/40'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-slate-300">{t.code}</span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        t.severity === 'CRITICAL' || t.severity === 'HIGH'
                          ? 'bg-rose-500/20 text-rose-300'
                          : t.severity === 'MEDIUM'
                          ? 'bg-amber-500/20 text-amber-300'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {t.severity}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-white line-clamp-1">{t.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1 font-mono">{t.device}</p>

                  <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-500">{t.timestamp}</span>
                    <span
                      className={`font-semibold ${
                        t.status === 'Resolved'
                          ? 'text-emerald-400'
                          : t.status === 'Evidence Submitted'
                          ? 'text-cyan-400'
                          : 'text-amber-400'
                      }`}
                    >
                      {t.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Panel: Staff Action or Reviewer Workflow */}
        <div className="lg:col-span-2">
          {activeTab === 'staff' ? (
            /* Staff Incident Detail & Evidence Trigger */
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                      {currentTicket.code}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{currentTicket.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1.5">{currentTicket.title}</h3>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">Assigned Reviewer</span>
                  <span className="text-xs font-mono text-slate-300">{currentTicket.assignedReviewer}</span>
                </div>
              </div>

              {/* Description & Incident Status */}
              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="font-mono text-slate-500 uppercase text-[10px] block mb-1">Incident Summary</span>
                  <p className="text-slate-200 leading-relaxed font-sans">{currentTicket.description}</p>
                </div>

                {/* Evidence Checklist */}
                <div>
                  <span className="font-mono text-slate-400 uppercase text-[10px] block mb-2">
                    Reviewer's Requested Evidence Checklist
                  </span>
                  <div className="space-y-2">
                    {currentTicket.evidenceRequired.map((req, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 font-mono text-slate-300"
                      >
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${
                          currentTicket.evidencePackage ? 'text-emerald-400' : 'text-slate-600'
                        }`} />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2">
                  {currentTicket.evidencePackage ? (
                    <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-2">
                      <div className="flex items-center justify-center gap-2 text-emerald-300 font-mono font-bold">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Evidence Bundle Sealed & Submitted</span>
                      </div>
                      <p className="text-slate-400 text-[11px] font-sans">
                        The IT Reviewer has been notified. You can view the case progress under the Reviewer tab.
                      </p>
                      <button
                        onClick={() => setActiveTab('reviewer')}
                        className="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 text-slate-950 font-bold text-xs font-mono"
                      >
                        Switch to Reviewer Workspace
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowEvidenceCollector(true)}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-600/30"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>Start Guided Evidence Collection Checklist</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Reviewer Workflow */
            <ReviewerWorkflow ticket={currentTicket} />
          )}
        </div>
      </div>

      {/* Bounded Evidence Collection Wizard Modal */}
      {showEvidenceCollector && currentTicket && (
        <EvidenceCollector
          ticket={currentTicket}
          onClose={() => setShowEvidenceCollector(false)}
        />
      )}
    </div>
  );
};
