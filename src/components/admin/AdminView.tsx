import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Terminal, Shield, Cpu, Activity, Clock, CheckCircle2, AlertTriangle, RefreshCw, Database } from 'lucide-react';

export const AdminView: React.FC = () => {
  const { auditLogs } = useApp();
  const [filterSeverity, setFilterSeverity] = useState<'all' | 'threat' | 'success' | 'info'>('all');

  const filteredLogs = auditLogs.filter((log) => {
    if (filterSeverity === 'all') return true;
    return log.severity === filterSeverity;
  });

  const mockAgents = [
    { host: 'kanye-clinic-triage-01', os: 'Ubuntu 24.04 (Linux IMA Enforce)', ip: '10.24.4.12', profile: 'C3', status: 'Online', lastSeen: '2s ago' },
    { host: 'kanye-clinic-pharm-01', os: 'Ubuntu 24.04 (AppArmor Strict)', ip: '10.24.4.18', profile: 'C3', status: 'Online', lastSeen: '5s ago' },
    { host: 'gss-lab-terminal-08', os: 'Debian 12 (AppArmor Student)', ip: '192.168.100.14', profile: 'A2', status: 'Online', lastSeen: '12s ago' },
    { host: 'tlokweng-council-pc-02', os: 'Windows 11 (AppLocker Hash Rule)', ip: '172.16.2.88', profile: 'B2', status: 'Online', lastSeen: '1m ago' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-6">
      {/* Admin Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              System Admin & Auditor
            </span>
            <span className="text-xs font-mono text-slate-400">Instances Central Sentinel</span>
          </div>
          <h2 className="text-2xl font-bold text-white mt-1">Fleet Telemetry & Tamper-Evident Audit Log</h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-emerald-300">Central Policy Server: Healthy</span>
        </div>
      </div>

      {/* Fleet Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
          <span className="text-[10px] font-mono text-slate-500 uppercase">Live Endpoints</span>
          <p className="text-xl font-black text-white font-mono mt-1">142</p>
          <span className="text-[11px] text-emerald-400 font-mono mt-0.5 block">100% Heartbeat Valid</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
          <span className="text-[10px] font-mono text-slate-500 uppercase">Active Zero-Trust Profiles</span>
          <p className="text-xl font-black text-white font-mono mt-1">9 Presets</p>
          <span className="text-[11px] text-cyan-400 font-mono mt-0.5 block">A1 through C3 Active</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
          <span className="text-[10px] font-mono text-slate-500 uppercase">Suricata Egress Drops</span>
          <p className="text-xl font-black text-white font-mono mt-1">19</p>
          <span className="text-[11px] text-rose-400 font-mono mt-0.5 block">Zero data leaked</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
          <span className="text-[10px] font-mono text-slate-500 uppercase">Audit Records Stamped</span>
          <p className="text-xl font-black text-white font-mono mt-1">{auditLogs.length}</p>
          <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">SHA-256 Chained</span>
        </div>
      </div>

      {/* Connected Endpoint Fleet */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Connected Endpoint Sentinel Daemons</span>
          </h3>
          <span className="text-xs font-mono text-slate-500">Live Agent Sync</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 uppercase text-[10px]">
                <th className="pb-2.5">Hostname</th>
                <th className="pb-2.5">Enforcement Engine</th>
                <th className="pb-2.5">Internal IP</th>
                <th className="pb-2.5">Matrix Tier</th>
                <th className="pb-2.5">Status</th>
                <th className="pb-2.5 text-right">Heartbeat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {mockAgents.map((agent, i) => (
                <tr key={i} className="hover:bg-slate-800/30">
                  <td className="py-2.5 font-bold text-white">{agent.host}</td>
                  <td className="py-2.5 text-slate-400">{agent.os}</td>
                  <td className="py-2.5 text-cyan-400">{agent.ip}</td>
                  <td className="py-2.5">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-300 border border-slate-700">
                      {agent.profile}
                    </span>
                  </td>
                  <td className="py-2.5">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {agent.status}
                    </span>
                  </td>
                  <td className="py-2.5 text-right text-slate-500">{agent.lastSeen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Immutable Audit Log Table */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Tamper-Evident System Audit Trail</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Cryptographically chained timeline of all policy changes, simulations, and reviewer triage actions.
            </p>
          </div>

          {/* Severity Filters */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-mono">
            {(['all', 'threat', 'success', 'info'] as const).map((sev) => (
              <button
                key={sev}
                onClick={() => setFilterSeverity(sev)}
                className={`px-2.5 py-1 rounded-lg uppercase text-[10px] transition-all ${
                  filterSeverity === sev
                    ? 'bg-slate-800 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 uppercase text-[10px]">
                <th className="pb-2.5">Timestamp</th>
                <th className="pb-2.5">Actor</th>
                <th className="pb-2.5">Action Code</th>
                <th className="pb-2.5">Details</th>
                <th className="pb-2.5 text-right">Severity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-800/30">
                  <td className="py-2.5 text-slate-500 whitespace-nowrap">{log.timestamp}</td>
                  <td className="py-2.5 font-bold text-slate-200 whitespace-nowrap">{log.actor}</td>
                  <td className="py-2.5 text-cyan-300 font-bold whitespace-nowrap">{log.action}</td>
                  <td className="py-2.5 text-slate-300 max-w-md truncate">{log.details}</td>
                  <td className="py-2.5 text-right whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                        log.severity === 'threat'
                          ? 'bg-rose-500/20 text-rose-300'
                          : log.severity === 'success'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : log.severity === 'warn'
                          ? 'bg-amber-500/20 text-amber-300'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {log.severity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
