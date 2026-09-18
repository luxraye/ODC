import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Role,
  MatrixCell,
  AttackScenario,
  IncidentTicket,
  AuditLogEntry,
  EvidencePackage,
  CommunityTemplate,
  OperationalMode,
  JitElevationRequest,
} from '../types';
import {
  INITIAL_MATRIX,
  ATTACK_SCENARIOS,
  INITIAL_INCIDENTS,
  INITIAL_AUDIT_LOGS,
  COMMUNITY_TEMPLATES,
} from '../data/mockData';

interface AppContextType {
  currentRole: Role;
  setRole: (role: Role) => void;
  matrix: MatrixCell[];
  activeTemplate: MatrixCell;
  setActiveTemplate: (template: MatrixCell) => void;
  selectTemplateById: (id: string) => void;
  toggleStarTemplate: (id: string) => void;
  addCustomTemplate: (template: MatrixCell) => void;
  scenarios: AttackScenario[];
  activeScenario: AttackScenario;
  setActiveScenario: (scenario: AttackScenario) => void;
  incidents: IncidentTicket[];
  activeIncident: IncidentTicket | null;
  setActiveIncident: (incident: IncidentTicket | null) => void;
  submitEvidence: (ticketId: string, evidence: EvidencePackage) => void;
  updateIncidentStatus: (ticketId: string, status: IncidentTicket['status'], note?: string) => void;
  auditLogs: AuditLogEntry[];
  addAuditLog: (action: string, details: string, severity?: 'info' | 'warn' | 'threat' | 'success') => void;
  resetToDefaults: () => void;
  showAdminAuthModal: boolean;
  setShowAdminAuthModal: (show: boolean) => void;
  // Extended Capabilities
  communityTemplates: CommunityTemplate[];
  upvoteCommunityTemplate: (id: string) => void;
  publishToCommunity: (template: CommunityTemplate) => void;
  operationalMode: OperationalMode;
  setOperationalMode: (mode: OperationalMode) => void;
  jitRequests: JitElevationRequest[];
  requestJitElevation: (app: string, duration: number, reason: string) => void;
  approveJitElevation: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRole, setCurrentRole] = useState<Role>('landing');
  const [matrix, setMatrix] = useState<MatrixCell[]>(() => {
    const saved = localStorage.getItem('instances_matrix');
    return saved ? JSON.parse(saved) : INITIAL_MATRIX;
  });

  const [activeTemplate, setActiveTemplate] = useState<MatrixCell>(() => {
    return matrix.find((m) => m.id === 'C3') || matrix[0];
  });

  const [scenarios] = useState<AttackScenario[]>(ATTACK_SCENARIOS);
  const [activeScenario, setActiveScenario] = useState<AttackScenario>(ATTACK_SCENARIOS[1]);

  const [incidents, setIncidents] = useState<IncidentTicket[]>(() => {
    const saved = localStorage.getItem('instances_incidents');
    return saved ? JSON.parse(saved) : INITIAL_INCIDENTS;
  });

  const [activeIncident, setActiveIncident] = useState<IncidentTicket | null>(incidents[0] || null);

  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>(() => {
    const saved = localStorage.getItem('instances_audit_logs');
    return saved ? JSON.parse(saved) : INITIAL_AUDIT_LOGS;
  });

  const [showAdminAuthModal, setShowAdminAuthModal] = useState<boolean>(false);

  // Community & Advanced Capabilities
  const [communityTemplates, setCommunityTemplates] = useState<CommunityTemplate[]>(() => {
    const saved = localStorage.getItem('instances_community');
    return saved ? JSON.parse(saved) : COMMUNITY_TEMPLATES;
  });

  const [operationalMode, setOperationalModeState] = useState<OperationalMode>('secured');

  const [jitRequests, setJitRequests] = useState<JitElevationRequest[]>([
    {
      id: 'JIT-812',
      user: 'Dr. Segokgo (Chief Medical Officer)',
      targetApp: 'dicom-firmware-patcher.bin',
      durationMinutes: 30,
      reason: 'Urgent firmware calibration on X-Ray PACS scanner in Ward 3',
      status: 'APPROVED',
      issuedToken: 'JIT-TOKEN-0x89F4A',
      expiresAt: 'In 18 minutes',
    },
  ]);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('instances_matrix', JSON.stringify(matrix));
  }, [matrix]);

  useEffect(() => {
    localStorage.setItem('instances_incidents', JSON.stringify(incidents));
  }, [incidents]);

  useEffect(() => {
    localStorage.setItem('instances_audit_logs', JSON.stringify(auditLogs));
  }, [auditLogs]);

  useEffect(() => {
    localStorage.setItem('instances_community', JSON.stringify(communityTemplates));
  }, [communityTemplates]);

  const selectTemplateById = (id: string) => {
    const found = matrix.find((m) => m.id === id);
    if (found) {
      setActiveTemplate(found);
      addAuditLog(
        'TEMPLATE_SELECTED',
        `Switched active protection template to ${found.id} (${found.name})`,
        'info'
      );
    }
  };

  const toggleStarTemplate = (id: string) => {
    setMatrix((prev) =>
      prev.map((cell) => (cell.id === id ? { ...cell, starred: !cell.starred } : cell))
    );
  };

  const addCustomTemplate = (newTemplate: MatrixCell) => {
    setMatrix((prev) => [newTemplate, ...prev]);
    setActiveTemplate(newTemplate);
    addAuditLog(
      'CUSTOM_TEMPLATE_CREATED',
      `User created and deployed custom template "${newTemplate.name}" [${newTemplate.id}]`,
      'success'
    );
  };

  const submitEvidence = (ticketId: string, evidence: EvidencePackage) => {
    setIncidents((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId
          ? {
              ...ticket,
              status: 'Evidence Submitted',
              evidencePackage: evidence,
            }
          : ticket
      )
    );

    addAuditLog(
      'EVIDENCE_BUNDLE_SEALED',
      `Encrypted diagnostic bundle submitted for ticket #${ticketId} (Hash: ${evidence.cryptoHash.substring(0, 16)}...)`,
      'success'
    );
  };

  const updateIncidentStatus = (
    ticketId: string,
    status: IncidentTicket['status'],
    note?: string
  ) => {
    setIncidents((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status } : ticket
      )
    );

    addAuditLog(
      'INCIDENT_STATUS_CHANGE',
      `Ticket #${ticketId} updated to "${status}"${note ? ` Note: ${note}` : ''}`,
      status === 'Resolved' ? 'success' : 'warn'
    );
  };

  const addAuditLog = (
    action: string,
    details: string,
    severity: 'info' | 'warn' | 'threat' | 'success' = 'info'
  ) => {
    const newEntry: AuditLogEntry = {
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      timestamp: new Date().toLocaleTimeString(),
      actor: currentRole === 'admin' ? 'SysAdmin' : currentRole === 'response' ? 'IT Reviewer' : 'Defender Lead',
      role: currentRole.toUpperCase(),
      action,
      details,
      severity,
    };
    setAuditLogs((prev) => [newEntry, ...prev]);
  };

  // Community Actions
  const upvoteCommunityTemplate = (id: string) => {
    setCommunityTemplates((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const newUpvotes = t.upvotes + 1;
          const newScore = Math.min(100, t.utilityScore + 1);
          return { ...t, upvotes: newUpvotes, utilityScore: newScore };
        }
        return t;
      })
    );
    addAuditLog('COMMUNITY_TEMPLATE_UPVOTED', `Upvoted community protection template #${id}`, 'info');
  };

  const publishToCommunity = (template: CommunityTemplate) => {
    setCommunityTemplates((prev) => [template, ...prev]);
    addAuditLog(
      'COMMUNITY_TEMPLATE_PUBLISHED',
      `Published new template "${template.title}" to Instances Community Hub`,
      'success'
    );
  };

  const setOperationalMode = (mode: OperationalMode) => {
    setOperationalModeState(mode);
    addAuditLog(
      'OPERATIONAL_MODE_SWITCH',
      `Switched fleet operational mode to: ${mode.toUpperCase()}`,
      mode === 'secured' ? 'success' : mode === 'learning' ? 'info' : 'warn'
    );
  };

  const requestJitElevation = (app: string, duration: number, reason: string) => {
    const newReq: JitElevationRequest = {
      id: `JIT-${Math.floor(100 + Math.random() * 900)}`,
      user: 'Clinic Operator (Staff Workstation)',
      targetApp: app,
      durationMinutes: duration,
      reason,
      status: 'PENDING',
    };
    setJitRequests((prev) => [newReq, ...prev]);
    addAuditLog('JIT_ELEVATION_REQUESTED', `Requested temporary admin elevation for ${app} (${duration}m)`, 'warn');
  };

  const approveJitElevation = (id: string) => {
    const token = `JIT-TOKEN-0x${Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase()}`;
    setJitRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? {
              ...req,
              status: 'APPROVED',
              issuedToken: token,
              expiresAt: `In ${req.durationMinutes} minutes`,
            }
          : req
      )
    );
    addAuditLog('JIT_ELEVATION_APPROVED', `Issued elevation token ${token} for request #${id}`, 'success');
  };

  const resetToDefaults = () => {
    localStorage.removeItem('instances_matrix');
    localStorage.removeItem('instances_incidents');
    localStorage.removeItem('instances_audit_logs');
    localStorage.removeItem('instances_community');
    setMatrix(INITIAL_MATRIX);
    setActiveTemplate(INITIAL_MATRIX.find((m) => m.id === 'C3') || INITIAL_MATRIX[0]);
    setIncidents(INITIAL_INCIDENTS);
    setActiveIncident(INITIAL_INCIDENTS[0]);
    setAuditLogs(INITIAL_AUDIT_LOGS);
    setCommunityTemplates(COMMUNITY_TEMPLATES);
    setOperationalModeState('secured');
    setCurrentRole('landing');
  };

  return (
    <AppContext.Provider
      value={{
        currentRole,
        setRole: setCurrentRole,
        matrix,
        activeTemplate,
        setActiveTemplate,
        selectTemplateById,
        toggleStarTemplate,
        addCustomTemplate,
        scenarios,
        activeScenario,
        setActiveScenario,
        incidents,
        activeIncident,
        setActiveIncident,
        submitEvidence,
        updateIncidentStatus,
        auditLogs,
        addAuditLog,
        resetToDefaults,
        showAdminAuthModal,
        setShowAdminAuthModal,
        // Community & Elevation
        communityTemplates,
        upvoteCommunityTemplate,
        publishToCommunity,
        operationalMode,
        setOperationalMode,
        jitRequests,
        requestJitElevation,
        approveJitElevation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
