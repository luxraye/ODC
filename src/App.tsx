import React, { useState } from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { LandingPage } from './components/landing/LandingPage';
import { LoginPage } from './components/login/LoginPage';
import { AnticipationView } from './components/anticipation/AnticipationView';
import { ResponseView } from './components/response/ResponseView';
import { AdminView } from './components/admin/AdminView';
import { Track2Roadmap } from './components/roadmap/Track2Roadmap';
import { Lock, X, KeyRound, Sparkles, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';

export const App: React.FC = () => {
  const { currentRole, setRole, showAdminAuthModal, setShowAdminAuthModal, addAuditLog } = useApp();
  const [adminEmail, setAdminEmail] = useState('admin@instances.bw');
  const [adminPassword, setAdminPassword] = useState('security2026');
  const [authError, setAuthError] = useState<string | null>(null);

  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminEmail === 'admin@instances.bw' && adminPassword === 'security2026') {
      setShowAdminAuthModal(false);
      setRole('admin');
      addAuditLog('ADMIN_AUTHENTICATED', 'System Administrator authorized via master credentials.', 'success');
      setAuthError(null);
    } else {
      setAuthError('Invalid credentials. Use demo: admin@instances.bw / security2026');
    }
  };

  const handleQuickDemoAdmin = () => {
    setShowAdminAuthModal(false);
    setRole('admin');
    addAuditLog('ADMIN_AUTHENTICATED', 'System Administrator authorized via quick demo bypass.', 'success');
    setAuthError(null);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Navbar with role switcher & reset */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentRole === 'landing' && <LandingPage />}
        {currentRole === 'login' && <LoginPage />}
        {currentRole === 'anticipation' && <AnticipationView />}
        {currentRole === 'response' && <ResponseView />}
        {currentRole === 'admin' && <AdminView />}
        {currentRole === 'roadmap' && <Track2Roadmap />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/60 py-6 px-4 text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>INSTANCES // Open-Source Trust & Zero-Trust Platform</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400/80">Track 01: Defence & Security</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>OSCB Hackathon 2026 Gaborone</span>
            <button
              onClick={() => setRole('roadmap')}
              className="text-cyan-400 hover:underline"
            >
              OS Integration Map
            </button>
            <button
              onClick={() => setShowAdminAuthModal(true)}
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Admin Authentication Modal */}
      {showAdminAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-sm">
                <KeyRound className="w-4 h-4" />
                <span>Admin Console Authentication</span>
              </div>
              <button
                onClick={() => setShowAdminAuthModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Access the central fleet audit logs, telemetry sensors, and template approval workflow.
            </p>

            <form onSubmit={handleAdminAuth} className="space-y-3.5 text-xs font-mono">
              <div>
                <label className="text-slate-300 block mb-1">Admin Email</label>
                <input
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Password</label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-amber-500"
                  required
                />
              </div>

              {authError && (
                <p className="text-xs text-rose-400 font-mono">{authError}</p>
              )}

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-sans flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20"
                >
                  <Lock className="w-4 h-4" />
                  <span>Verify Credentials & Enter</span>
                </button>

                <button
                  type="button"
                  onClick={handleQuickDemoAdmin}
                  className="w-full py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-mono text-[11px] flex items-center justify-center gap-1.5 transition-all border border-slate-700"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>1-Click Hackathon Demo Login</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
