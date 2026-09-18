export type Role = 'landing' | 'login' | 'anticipation' | 'response' | 'admin' | 'roadmap';

export type ScaleLevel = 1 | 2 | 3; // 1: Individual, 2: School/Business, 3: Clinic/Enterprise
export type SensitivityLevel = 'A' | 'B' | 'C'; // A: Standard, B: Confidential, C: Regulated/Medical

export interface MatrixCell {
  id: string; // e.g. "A1", "C3", "CUSTOM-..."
  row: ScaleLevel;
  col: SensitivityLevel;
  name: string;
  targetProfile: string;
  tagline: string;
  devices: string;
  sensitivityLabel: string;
  allowedApps: string[];
  ringfencing: {
    usbStorage: 'blocked' | 'read-only' | 'monitored' | 'allowed';
    networkEgress: 'strict-whitelist' | 'standard-filtered' | 'open-monitored';
    elevationControl: 'polkit-strict' | 'sudo-prompt' | 'standard';
    memoryProtection: boolean;
  };
  openSourceStack: {
    binaryEnforcement: string; // e.g. "Linux IMA / AppLocker"
    networkInspection: string; // e.g. "Suricata 7.0 + nftables"
    endpointTelemetry: string; // e.g. "Wazuh Agent 4.7 + osquery"
    integrityAudit: string;    // e.g. "Velociraptor artifact collector"
  };
  starred?: boolean;
  // Advanced developer JSON extensions
  eBPF_filters?: {
    blockedSyscalls: string[];
    enforceWXMemory: boolean;
    blockPtrace: boolean;
  };
  hardwareUsbWhitelist?: {
    allowedVendorIds: string[];
    enforceEncryptedPartition: boolean;
  };
  evidenceWorkflow?: {
    requiredArtifacts: string[];
    reviewerSlaHours: number;
    escalationWebhook?: string;
  };
  customRules?: Record<string, any>;
}

export interface AttackScenario {
  id: string;
  title: string;
  category: 'malware' | 'storage' | 'network' | 'privilege' | 'benign';
  description: string;
  targetAsset: string;
  simulatedPayload: string;
  expectedOutcome: 'BLOCK' | 'ALLOW';
  openSourceTrigger: string;
  plainEnglishReason: string;
  technicalTelemetry: {
    ruleId: string;
    engine: string;
    matchedPattern: string;
    actionTaken: string;
  };
}

export interface IncidentTicket {
  id: string;
  code: string;
  title: string;
  device: string;
  location: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  timestamp: string;
  status: 'Awaiting Evidence' | 'Evidence Submitted' | 'Under Review' | 'Policy Remediated' | 'Resolved';
  assignedReviewer: string;
  description: string;
  evidenceRequired: string[];
  evidencePackage?: EvidencePackage;
}

export interface EvidencePackage {
  ticketId: string;
  submittedAt: string;
  submittedBy: string;
  deviceFingerprint: string;
  systemLogsSnippet: string;
  userNotes: string;
  attachments: { name: string; size: string; type: string }[];
  cryptoHash: string;
  status: 'sealed' | 'reviewed';
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  actor: string;
  role: string;
  action: string;
  details: string;
  severity: 'info' | 'warn' | 'threat' | 'success';
}

export interface CommunityTemplate {
  id: string;
  title: string;
  author: string;
  organization: string;
  category: 'Healthcare' | 'Education' | 'FinTech' | 'Government' | 'General';
  matrixTier: string;
  rating: number;
  utilityScore: number; // Score out of 100 based on validation & utility
  upvotes: number;
  downloads: number;
  verified: boolean;
  description: string;
  capabilitiesSupported: string[];
  tags: string[];
  createdAt: string;
}

export type OperationalMode = 'learning' | 'secured' | 'maintenance';

export interface JitElevationRequest {
  id: string;
  user: string;
  targetApp: string;
  durationMinutes: number;
  reason: string;
  status: 'PENDING' | 'APPROVED' | 'EXPIRED';
  issuedToken?: string;
  expiresAt?: string;
}
