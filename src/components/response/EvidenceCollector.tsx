import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { IncidentTicket, EvidencePackage } from '../../types';
import { FileCheck, Shield, Check, Lock, Upload, Terminal, ArrowRight, ArrowLeft, Paperclip, Sparkles } from 'lucide-react';

export const EvidenceCollector: React.FC<{
  ticket: IncidentTicket;
  onClose: () => void;
}> = ({ ticket, onClose }) => {
  const { submitEvidence } = useApp();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [staffName, setStaffName] = useState('Nurse Matshidiso (Triage Lead)');
  const [workstationConfirmed, setWorkstationConfirmed] = useState(true);
  const [logCaptured, setLogCaptured] = useState(true);
  const [staffNotes, setStaffNotes] = useState(
    'A visitor asked to print a document from a black Lexar USB stick. When inserted, the screen popped up a red INSTANCES block alert. No files opened.'
  );
  const [attachmentName, setAttachmentName] = useState('photo_of_usb_alert_screen.jpg');
  const [submitting, setSubmitting] = useState(false);
  const [sealedHash, setSealedHash] = useState('');

  const handleNextStep = () => {
    if (step === 3) {
      // Generate synthetic cryptographic hash
      const randomHash = Array.from({ length: 64 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join('');
      setSealedHash(`sha256:${randomHash}`);
      setStep(4);
    } else {
      setStep((prev) => (prev + 1) as any);
    }
  };

  const handleFinalSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      const pkg: EvidencePackage = {
        ticketId: ticket.id,
        submittedAt: new Date().toLocaleTimeString(),
        submittedBy: staffName,
        deviceFingerprint: `${ticket.device} [MAC: b8:27:eb:d2:54:19]`,
        systemLogsSnippet: `Mar 17 14:38:10 kanye-clinic-03 kernel: [STORAGE_RINGFENCE] BLOCKED /dev/sdb1 mount by unverified user. Policy: C3. OpenSource Sentinel: udev+AppArmor.`,
        userNotes: staffNotes,
        attachments: [{ name: attachmentName, size: '840 KB', type: 'image/jpeg' }],
        cryptoHash: sealedHash,
        status: 'sealed',
      };

      submitEvidence(ticket.id, pkg);
      setSubmitting(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl p-6 shadow-2xl my-8 space-y-6">
        {/* Wizard Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Bounded Evidence Collection</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                  {ticket.code}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Safe, structured evidence capture — no remote desktop takeover required.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-slate-800"
          >
            Cancel
          </button>
        </div>

        {/* Step Progress Indicators */}
        <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
          {[
            { num: 1, label: 'Device ID' },
            { num: 2, label: 'Diagnostic Logs' },
            { num: 3, label: 'Notes & Photo' },
            { num: 4, label: 'Seal & Send' },
          ].map((s) => (
            <div
              key={s.num}
              className={`p-2 rounded-lg border transition-all ${
                step === s.num
                  ? 'bg-cyan-950/50 border-cyan-500 text-cyan-300 font-bold'
                  : step > s.num
                  ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-400'
                  : 'bg-slate-950 border-slate-800 text-slate-500'
              }`}
            >
              <span>{s.num}. {s.label}</span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="min-h-[220px] text-xs font-mono space-y-4">
          {step === 1 && (
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-slate-500 uppercase text-[10px]">Workstation Telemetry</span>
                <div className="flex justify-between text-slate-300">
                  <span>Reported Device:</span>
                  <span className="text-cyan-400 font-bold">{ticket.device}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Location:</span>
                  <span className="text-slate-200">{ticket.location}</span>
                </div>
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Your Name / Title at Clinic</label>
                <input
                  type="text"
                  value={staffName}
                  onChange={(e) => setStaffName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-cyan-500"
                />
              </div>

              <label className="flex items-center gap-2 p-3 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer text-slate-300">
                <input
                  type="checkbox"
                  checked={workstationConfirmed}
                  onChange={(e) => setWorkstationConfirmed(e.target.checked)}
                  className="accent-cyan-500 rounded"
                />
                <span>I confirm I am physically present at this workstation right now.</span>
              </label>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5 font-bold">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Bounded Diagnostic Log Extraction
                  </span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                    Auto-Packaged
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] font-sans">
                  The instance automatically pulled only the security audit log lines corresponding to the blocked USB attempt. No personal patient records are included.
                </p>
                <pre className="p-2.5 rounded bg-slate-900 text-[10px] text-emerald-400 overflow-x-auto">
{`Mar 17 14:38:09 kernel: usb 2-1: new high-speed USB device number 4 using xhci_hcd
Mar 17 14:38:10 instances_sentinel[412]: Policy C3 Storage Ringfence triggered.
Mar 17 14:38:10 instances_sentinel[412]: Intercepted read call on /var/data/patient_records.csv
Mar 17 14:38:10 apparmor="DENIED" operation="open" name="/media/usb/leak.csv" pid=4821`}
                </pre>
              </div>

              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[11px] font-sans">
                Privacy boundary verified: Zero private health database files leave this workstation.
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="text-slate-300 block mb-1">What occurred? (Plain Language Notes)</label>
                <textarea
                  value={staffNotes}
                  onChange={(e) => setStaffNotes(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-cyan-500 font-sans text-xs"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block mb-2 font-bold">Attached Supporting Photo / Screenshot:</span>
                <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Paperclip className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{attachmentName}</span>
                  </div>
                  <span className="text-[10px] text-slate-500">840 KB (Mocked)</span>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4 text-center py-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Cryptographic Bundle Sealed</h4>
                <p className="text-xs text-slate-400 mt-1 font-sans">
                  The evidence package has been signed with the local workstation key and hashed for non-repudiation.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-left">
                <span className="text-[10px] text-slate-500 block uppercase">SHA-256 Checksum:</span>
                <code className="text-xs text-cyan-300 break-all">{sealedHash}</code>
              </div>
            </div>
          )}
        </div>

        {/* Wizard Controls */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-4">
          {step > 1 ? (
            <button
              onClick={() => setStep((prev) => (prev - 1) as any)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-mono"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              onClick={handleNextStep}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-600/30"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleFinalSubmit}
              disabled={submitting}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/30 disabled:opacity-50"
            >
              {submitting ? (
                <span>Transmitting Encrypted Bundle...</span>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Send Evidence to Reviewer Queue</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
