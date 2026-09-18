import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { IncidentTicket } from '../../types';
import { FileCheck, Shield, CheckCircle2, AlertTriangle, Terminal, Lock, MessageSquare, ArrowRight } from 'lucide-react';

export const ReviewerWorkflow: React.FC<{ ticket: IncidentTicket }> = ({ ticket }) => {
  const { updateIncidentStatus, addAuditLog } = useApp();
  const [reviewerNote, setReviewerNote] = useState('');
  const [actionDoneMessage, setActionDoneMessage] = useState<string | null>(null);

  const handleAction = (status: IncidentTicket['status'], actionSummary: string) => {
    updateIncidentStatus(ticket.id, status, reviewerNote);
    setActionDoneMessage(`Case updated to: ${status}`);
    setTimeout(() => setActionDoneMessage(null), 3000);
    setReviewerNote('');
  };

  const pkg = ticket.evidencePackage;

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6">
      {/* Reviewer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Reviewer Workspace
            </span>
            <span className="text-xs font-mono text-slate-400">Assigned: {ticket.assignedReviewer}</span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">{ticket.title}</h3>
          <p className="text-xs text-slate-400 font-mono mt-0.5">Location: {ticket.location}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
            ticket.status === 'Resolved'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              : ticket.status === 'Evidence Submitted'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
          }`}>
            {ticket.status}
          </span>
        </div>
      </div>

      {actionDoneMessage && (
        <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{actionDoneMessage}</span>
        </div>
      )}

      {/* Evidence Bundle Details */}
      {pkg ? (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <span className="text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" /> Sealed Evidence Bundle
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Verified Hash
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
              <div>
                <span className="text-slate-500 block text-[10px]">Submitted By:</span>
                <span className="text-slate-300">{pkg.submittedBy} ({pkg.submittedAt})</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Device Fingerprint:</span>
                <span className="text-cyan-400">{pkg.deviceFingerprint}</span>
              </div>
            </div>

            <div>
              <span className="text-slate-500 block text-[10px] font-mono">Staff Context Note:</span>
              <p className="text-xs text-slate-200 mt-0.5 bg-slate-900 p-2.5 rounded-lg border border-slate-800 font-sans">
                "{pkg.userNotes}"
              </p>
            </div>

            <div>
              <span className="text-slate-500 block text-[10px] font-mono">Diagnostic Log Excerpt:</span>
              <pre className="p-2.5 rounded bg-slate-900 text-[10px] font-mono text-emerald-400 overflow-x-auto">
                {pkg.systemLogsSnippet}
              </pre>
            </div>

            <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-slate-400">
              <span>Attachment: {pkg.attachments[0]?.name} ({pkg.attachments[0]?.size})</span>
              <span className="text-[10px] text-slate-500 truncate max-w-[200px]">{pkg.cryptoHash}</span>
            </div>
          </div>

          {/* Reviewer Action Form */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
            <label className="text-xs font-mono uppercase text-slate-400 block">
              Reviewer Assessment & Remediation Notes:
            </label>
            <input
              type="text"
              placeholder="e.g. Verified flash drive payload was intercepted by C3. Replaced terminal USB profile."
              value={reviewerNote}
              onChange={(e) => setReviewerNote(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-100 outline-none focus:border-cyan-500"
            />

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => handleAction('Under Review', 'Reviewer opened investigation')}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 border border-slate-700"
              >
                Mark Under Review
              </button>

              <button
                onClick={() => handleAction('Policy Remediated', 'Hardened USB ringfence policy on node')}
                className="px-3 py-1.5 rounded-lg bg-amber-600/30 hover:bg-amber-600/40 text-xs font-mono text-amber-300 border border-amber-500/40"
              >
                Policy Remediated
              </button>

              <button
                onClick={() => handleAction('Resolved', 'All checks passed, zero data leaked')}
                className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs font-mono shadow-md shadow-emerald-600/20"
              >
                Resolve & Close Case
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8 rounded-xl bg-slate-950 text-center space-y-2 border border-slate-800">
          <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto" />
          <p className="text-xs font-mono text-slate-300">No evidence package submitted yet for this ticket.</p>
          <p className="text-[11px] text-slate-500">The assigned clinic staff must complete the Bounded Evidence Checklist.</p>
        </div>
      )}
    </div>
  );
};
