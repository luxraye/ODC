import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MatrixCell } from '../../types';
import { Code, Save, X, Sparkles, Check, AlertTriangle, FileCode, Copy, Layers, Cpu, ShieldCheck } from 'lucide-react';

const STARTER_SNIPPETS: { label: string; description: string; json: MatrixCell }[] = [
  {
    label: 'eBPF Kernel Syscall Shield & Memory Ringfence',
    description: 'Custom kernel-level protection blocking ptrace injection, memfd execution, and enforcing W^X memory policies.',
    json: {
      id: 'CUSTOM-EBPF-01',
      row: 3,
      col: 'C',
      name: 'eBPF Kernel Sentinel & Memory Guard',
      targetProfile: 'High-Security Medical Telemetry & ICU Workstations',
      tagline: 'Kernel-enforced syscall boundary preventing in-memory process hollowing and debugger attachment.',
      devices: '20 - 50 Critical Nodes',
      sensitivityLabel: 'Critical Regulated Health Records',
      allowedApps: ['dhis2-portal', 'openmrs-ehr', 'icu-monitor-daemon'],
      ringfencing: {
        usbStorage: 'blocked',
        networkEgress: 'strict-whitelist',
        elevationControl: 'polkit-strict',
        memoryProtection: true,
      },
      openSourceStack: {
        binaryEnforcement: 'eBPF Syscall Filter (bpf_trace) + Linux IMA',
        networkInspection: 'Suricata 7.0 + nftables drop',
        endpointTelemetry: 'Wazuh FIM + osquery 5.11',
        integrityAudit: 'Velociraptor In-Memory Triage',
      },
      eBPF_filters: {
        blockedSyscalls: ['ptrace', 'memfd_create', 'process_vm_writev', 'bpf'],
        enforceWXMemory: true,
        blockPtrace: true,
      },
      customRules: {
        maxMemoryAllocationMB: 2048,
        isolateKernelRingBuffer: true,
        antiProcessHollowing: 'ENFORCE_SIGKILL',
      },
      starred: true,
    },
  },
  {
    label: 'Hardware USB VID/PID & Medical Device Vault',
    description: 'Hardware-level USB whitelist allowing only calibrated diagnostic ultrasound hardware while blocking generic flash drives.',
    json: {
      id: 'CUSTOM-USB-HARDWARE',
      row: 2,
      col: 'C',
      name: 'Calibrated Medical Diagnostic Hardware Filter',
      targetProfile: 'Maternity Ward Ultrasound & Laboratory Scanners',
      tagline: 'Permits designated hardware vendor IDs (VID/PID) while strictly blocking unauthorized storage media.',
      devices: '10 - 25 Clinical Devices',
      sensitivityLabel: 'Maternal Ultrasound Scans & Lab Results',
      allowedApps: ['ultrasound-viewer', 'lab-sync-agent', 'firefox-sandboxed'],
      ringfencing: {
        usbStorage: 'blocked',
        networkEgress: 'strict-whitelist',
        elevationControl: 'polkit-strict',
        memoryProtection: true,
      },
      openSourceStack: {
        binaryEnforcement: 'udev rule filter + AppArmor Hardware Boundary',
        networkInspection: 'Suricata 7.0 Outbound Whitelist',
        endpointTelemetry: 'osquery USB Event Recorder',
        integrityAudit: 'Trivy Artifact Scanner',
      },
      hardwareUsbWhitelist: {
        allowedVendorIds: ['0x04e8:0x6860 (Diagnostic Ultrasound)', '0x0483:0x5740 (Lab Centrifuge Serial)'],
        enforceEncryptedPartition: true,
      },
      customRules: {
        storageVaultPath: '/var/data/clinic_vault',
        encryptionCipher: 'AES-256-XTS',
        autoUnmountOnIdleSeconds: 300,
      },
      starred: true,
    },
  },
  {
    label: 'Bounded Evidence Review Workflow Definition',
    description: 'Custom incident response policy defining mandatory forensic artifacts, reviewer SLA deadlines, and webhook alerts.',
    json: {
      id: 'CUSTOM-IR-WORKFLOW',
      row: 3,
      col: 'B',
      name: 'District Council Automated Triage & Review Policy',
      targetProfile: 'Town Council Revenue & Land Management Terminals',
      tagline: 'Configures evidence collection checkpoints, reviewer assignment rules, and emergency quarantine triggers.',
      devices: '40 - 80 Municipal Desktops',
      sensitivityLabel: 'Municipal Land Board & Tender Records',
      allowedApps: ['land-board-gis', 'revenue-portal', 'libreoffice', 'thunderbird'],
      ringfencing: {
        usbStorage: 'read-only',
        networkEgress: 'strict-whitelist',
        elevationControl: 'polkit-strict',
        memoryProtection: true,
      },
      openSourceStack: {
        binaryEnforcement: 'Linux IMA Signatures + AppLocker GPO',
        networkInspection: 'Suricata High-Throughput Cluster',
        endpointTelemetry: 'Wazuh Enterprise Cluster',
        integrityAudit: 'Velociraptor Automated Artifact Extraction',
      },
      evidenceWorkflow: {
        requiredArtifacts: [
          'syslog_auth_tail_100',
          'velociraptor_usb_history_vql',
          'active_network_sockets_netstat',
          'workstation_physical_presence_token',
        ],
        reviewerSlaHours: 2,
        escalationWebhook: 'https://security-alerts.gov.bw/api/v1/triage',
      },
      customRules: {
        requireTwoReviewerSignatures: true,
        quarantineOnThreeFailures: true,
      },
      starred: true,
    },
  },
];

export const TemplateBuilder: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { addCustomTemplate, selectTemplateById, publishToCommunity, setRole } = useApp();

  const [selectedSnippetIdx, setSelectedSnippetIdx] = useState(0);
  const [jsonCode, setJsonCode] = useState(
    JSON.stringify(STARTER_SNIPPETS[0].json, null, 2)
  );
  const [parseError, setParseError] = useState<string | null>(null);
  const [formatSuccess, setFormatSuccess] = useState(false);

  const handleSnippetSelect = (idx: number) => {
    setSelectedSnippetIdx(idx);
    setJsonCode(JSON.stringify(STARTER_SNIPPETS[idx].json, null, 2));
    setParseError(null);
  };

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(jsonCode);
      setJsonCode(JSON.stringify(parsed, null, 2));
      setParseError(null);
      setFormatSuccess(true);
      setTimeout(() => setFormatSuccess(false), 2000);
    } catch (err: any) {
      setParseError(err.message || 'Invalid JSON syntax');
    }
  };

  const getParsedTemplate = (): MatrixCell | null => {
    try {
      const parsed = JSON.parse(jsonCode);
      if (!parsed.id || !parsed.name || !parsed.targetProfile) {
        setParseError('Template must include "id", "name", and "targetProfile".');
        return null;
      }
      return {
        row: parsed.row || 3,
        col: parsed.col || 'C',
        devices: parsed.devices || 'Custom Network Nodes',
        sensitivityLabel: parsed.sensitivityLabel || 'Custom Policy Regulated',
        allowedApps: parsed.allowedApps || ['custom-app'],
        ringfencing: parsed.ringfencing || {
          usbStorage: 'blocked',
          networkEgress: 'strict-whitelist',
          elevationControl: 'polkit-strict',
          memoryProtection: true,
        },
        openSourceStack: parsed.openSourceStack || {
          binaryEnforcement: 'Custom IMA / AppArmor Profile',
          networkInspection: 'Suricata 7.0 Engine',
          endpointTelemetry: 'Wazuh SIEM',
          integrityAudit: 'Velociraptor Forensic Collector',
        },
        ...parsed,
        starred: true,
      };
    } catch (err: any) {
      setParseError(`JSON Parse Error: ${err.message}`);
      return null;
    }
  };

  const handleDeploy = () => {
    const template = getParsedTemplate();
    if (!template) return;
    addCustomTemplate(template);
    selectTemplateById(template.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-5xl p-6 shadow-2xl my-6 space-y-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-950/40">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Developer JSON Policy & Workflow Studio</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Custom Protections
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Write code that determines custom eBPF filters, hardware USB rules, or evidence review workflows.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all self-start sm:self-auto"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Preset Starter Snippets */}
        <div>
          <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
            Load Advanced Protection Starter Schema:
          </span>
          <div className="grid sm:grid-cols-3 gap-2.5">
            {STARTER_SNIPPETS.map((snip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSnippetSelect(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all text-xs font-mono ${
                  selectedSnippetIdx === idx
                    ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300 shadow-sm'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="font-bold truncate text-white">{snip.label}</div>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 font-sans">
                  {snip.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Main Editor & Schema Reference */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* JSON Code Editor */}
          <div className="lg:col-span-2 space-y-2 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5 text-cyan-400" /> JSON Policy Definition (Editable)
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleFormat}
                  className="text-[11px] px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700"
                >
                  {formatSuccess ? 'Formatted!' : 'Format Code'}
                </button>
              </div>
            </div>

            <textarea
              value={jsonCode}
              onChange={(e) => {
                setJsonCode(e.target.value);
                setParseError(null);
              }}
              rows={16}
              spellCheck={false}
              className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-emerald-300 font-mono text-xs leading-relaxed outline-none focus:border-emerald-500 transition-colors shadow-inner resize-y"
            />

            {/* Error or validation status banner */}
            {parseError ? (
              <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/40 text-rose-300 text-xs font-mono flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span className="truncate">{parseError}</span>
              </div>
            ) : (
              <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Valid JSON Schema. Ready for kernel translation and simulation testing.</span>
              </div>
            )}
          </div>

          {/* Schema Reference & Dual Deploy Actions */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono space-y-3.5 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs uppercase text-slate-400 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Custom Protection Schema
              </span>

              <div className="space-y-2 text-[11px] text-slate-300">
                <div className="p-2 rounded bg-slate-900 border border-slate-800/80">
                  <span className="text-cyan-400 font-bold block">eBPF_filters:</span>
                  <p className="text-slate-400 text-[10px] font-sans">
                    Block kernel syscalls (`ptrace`, `memfd_create`) to kill memory injection.
                  </p>
                </div>

                <div className="p-2 rounded bg-slate-900 border border-slate-800/80">
                  <span className="text-amber-400 font-bold block">hardwareUsbWhitelist:</span>
                  <p className="text-slate-400 text-[10px] font-sans">
                    Enforce USB Vendor ID/Product ID matching. Only authorized diagnostic hardware mounts.
                  </p>
                </div>

                <div className="p-2 rounded bg-slate-900 border border-slate-800/80">
                  <span className="text-purple-400 font-bold block">evidenceWorkflow:</span>
                  <p className="text-slate-400 text-[10px] font-sans">
                    Define custom required artifacts, reviewer SLA thresholds, and webhook endpoints.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={handleDeploy}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-sans text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
              >
                <Save className="w-4 h-4" />
                <span>Deploy to Active Matrix</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
