import React from 'react';
import { useApp } from '../../context/AppContext';
import { MatrixCell, ScaleLevel, SensitivityLevel } from '../../types';
import { Shield, Star, CheckCircle, Info, HeartPulse, GraduationCap, Building2, User } from 'lucide-react';

export const MatrixGrid: React.FC = () => {
  const { matrix, activeTemplate, selectTemplateById, toggleStarTemplate } = useApp();

  const rows: { level: ScaleLevel; label: string; desc: string; icon: React.ReactNode }[] = [
    { level: 1, label: 'Tier 1: Individual / Micro', desc: '1 - 5 Devices (Solo consultant / remote)', icon: <User className="w-4 h-4 text-slate-400" /> },
    { level: 2, label: 'Tier 2: School / SME', desc: '5 - 50 Devices (Labs, councils, offices)', icon: <GraduationCap className="w-4 h-4 text-cyan-400" /> },
    { level: 3, label: 'Tier 3: Clinic / Enterprise', desc: '50+ Devices (Hospital wards, health centers)', icon: <HeartPulse className="w-4 h-4 text-rose-400" /> },
  ];

  const cols: { level: SensitivityLevel; label: string; desc: string }[] = [
    { level: 'A', label: 'Column A: Standard', desc: 'Public documents, media, casual work' },
    { level: 'B', label: 'Column B: Confidential', desc: 'Financial records, student marks, payroll' },
    { level: 'C', label: 'Column C: Regulated / Critical', desc: 'Patient EHR, medical files, national ID' },
  ];

  const getCell = (row: ScaleLevel, col: SensitivityLevel): MatrixCell | undefined => {
    return matrix.find((c) => c.row === row && c.col === col);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>A1–C3 Protection Template Matrix</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              9 Active Presets
            </span>
          </h3>
          <p className="text-xs text-slate-400">
            Select a cell to inspect rules or test against simulated threats.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-emerald-500/30 border border-emerald-400"></span> Active Policy
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-rose-500/20 border border-rose-500/50"></span> C3 Demo Hero
          </span>
        </div>
      </div>

      {/* Grid Container */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[700px] bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
          {/* Column Headers */}
          <div className="grid grid-cols-4 gap-3 mb-3">
            <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider pl-2 flex items-center">
              Scale \ Sensitivity
            </div>
            {cols.map((col) => (
              <div
                key={col.level}
                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 text-center"
              >
                <span className="text-xs font-mono font-bold text-slate-200">{col.label}</span>
                <p className="text-[10px] text-slate-400 mt-0.5 truncate">{col.desc}</p>
              </div>
            ))}
          </div>

          {/* Matrix Rows */}
          <div className="space-y-3">
            {rows.map((row) => (
              <div key={row.level} className="grid grid-cols-4 gap-3 items-stretch">
                {/* Row Header */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                    {row.icon}
                    <span className="text-xs font-mono font-bold text-white">{row.label}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 font-sans">{row.desc}</span>
                </div>

                {/* 3 Cells in this row */}
                {cols.map((col) => {
                  const cell = getCell(row.level, col.level);
                  if (!cell) return <div key={col.level} className="bg-slate-900/20 rounded-xl" />;

                  const isActive = activeTemplate.id === cell.id;
                  const isC3Hero = cell.id === 'C3';

                  return (
                    <div
                      key={cell.id}
                      onClick={() => selectTemplateById(cell.id)}
                      className={`relative group p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between select-none ${
                        isActive
                          ? 'bg-emerald-950/30 border-emerald-500 shadow-md shadow-emerald-950/50'
                          : isC3Hero
                          ? 'bg-gradient-to-br from-slate-900 via-rose-950/20 to-slate-900 border-rose-500/50 hover:border-rose-400'
                          : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        {/* Header: ID + Star */}
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`text-xs font-mono font-black px-2 py-0.5 rounded ${
                                isActive
                                  ? 'bg-emerald-500 text-slate-950 font-bold'
                                  : isC3Hero
                                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                                  : 'bg-slate-800 text-slate-300'
                              }`}
                            >
                              {cell.id}
                            </span>
                            {isC3Hero && (
                              <span className="text-[9px] font-mono uppercase bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded border border-rose-500/30">
                                Clinic Hero
                              </span>
                            )}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleStarTemplate(cell.id);
                            }}
                            className="text-slate-500 hover:text-amber-400 transition-colors"
                          >
                            <Star
                              className={`w-3.5 h-3.5 ${
                                cell.starred ? 'fill-amber-400 text-amber-400' : ''
                              }`}
                            />
                          </button>
                        </div>

                        {/* Cell Name */}
                        <h4 className="text-xs font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                          {cell.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-tight">
                          {cell.targetProfile}
                        </p>
                      </div>

                      {/* Footer: Quick summary tags */}
                      <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-400 truncate max-w-[100px]">
                          USB: {cell.ringfencing.usbStorage}
                        </span>
                        {isActive && (
                          <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                            <CheckCircle className="w-3 h-3" /> Selected
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
