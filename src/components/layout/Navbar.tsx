import React from 'react';
import { useApp } from '../../context/AppContext';
import { Shield, Radio, FileCheck, Terminal, Map, RotateCcw, ArrowRight, ArrowLeft, LogOut, Zap } from 'lucide-react';
import { Role } from '../../types';

export const Navbar: React.FC = () => {
  const { currentRole, setRole, resetToDefaults, setShowAdminAuthModal } = useApp();

  const isPreAuth = currentRole === 'landing' || currentRole === 'login';

  const navItems: { role: Role; label: string; icon: React.ReactNode; badge?: string; badgeColor?: string }[] = [
    { role: 'anticipation', label: 'Threat Anticipation', icon: <Radio className="w-4 h-4" />, badge: 'A1-C3' },
    { role: 'response', label: 'Threat Response', icon: <FileCheck className="w-4 h-4" />, badge: 'Evidence' },
    { role: 'roadmap', label: 'Track 2 Hub', icon: <Zap className="w-4 h-4 text-purple-400" />, badge: 'COMMUNITY', badgeColor: 'bg-purple-500/20 text-purple-300 border border-purple-500/30' },
    { role: 'admin', label: 'Admin Telemetry', icon: <Terminal className="w-4 h-4" /> },
  ];

  const handleRoleClick = (role: Role) => {
    if (role === 'admin') {
      setShowAdminAuthModal(true);
    } else {
      setRole(role);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div 
          onClick={() => setRole('landing')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 via-slate-900 to-cyan-500/20 border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-950/40 group-hover:border-emerald-400 transition-all">
            <Shield className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-wider text-sm sm:text-base text-white font-mono">
                INSTANCES
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                v1.0-BW
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
              Customizable Zero-Trust & Evidence Engine
            </p>
          </div>
        </div>

        {/* Dynamic Center Navigation */}
        {!isPreAuth ? (
          /* Operational Workspace Tabs */
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            {navItems.map((item) => {
              const isActive = currentRole === item.role;
              return (
                <button
                  key={item.role}
                  onClick={() => handleRoleClick(item.role)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                      item.badgeColor || (isActive ? 'bg-emerald-500/30 text-emerald-200' : 'bg-slate-800 text-slate-400')
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        ) : (
          /* Subtle minimalist badge when on Landing / Login */
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Botswana Open Source Security Architecture</span>
          </div>
        )}

        {/* Right action area */}
        <div className="flex items-center gap-2.5">
          {isPreAuth ? (
            currentRole === 'landing' ? (
              <button
                onClick={() => setRole('login')}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold font-sans transition-all shadow-md shadow-emerald-500/20"
              >
                <span>Proceed to Login</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => setRole('landing')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Overview</span>
              </button>
            )
          ) : (
            <>
              {/* Switch Role / Exit to Login */}
              <button
                onClick={() => setRole('login')}
                title="Switch Operational Role"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all font-mono"
              >
                <LogOut className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Roles</span>
              </button>

              {/* Demo Reset Button */}
              <button
                onClick={resetToDefaults}
                title="Reset to initial synthetic demo state"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-300 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-rose-900/60 transition-all font-mono"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </>
          )}

          {/* Hackathon Badge */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>OSCB '26</span>
          </div>
        </div>
      </div>
    </header>
  );
};
