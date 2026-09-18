# INSTANCES: Open-Source Customizable Trust & Defence Platform

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![Track](https://img.shields.io/badge/Track-01_Defence_%26_Security-emerald.svg)](https://instances-bw.vercel.app)
[![Live Demo](https://img.shields.io/badge/Live_Demo-instances--bw.vercel.app-cyan.svg)](https://instances-bw.vercel.app)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](https://instances-bw.vercel.app)

> **"Nothing executes, reads private data, or traverses networks without an explicit, auditable policy."**

Built for the **Open Source Hackathon 2026 Botswana** (UniPod · OSCB · Orange Digital Center · University of Botswana)  
**Team:** Staging Hammer  
**Live Production App:** [https://instances-bw.vercel.app](https://instances-bw.vercel.app)  
**Open Source License:** [Apache License 2.0](LICENSE)

---

## 🎯 The Problem in Botswana
As digital health records, school IT labs, and mobile money adoption surge across Botswana, local institutions face a dual crisis:
1. **The Cost Barrier:** Enterprise zero-trust tools cost thousands of dollars per endpoint, out of reach for public clinics, schools, and SMEs.
2. **The Usability Chasm:** Powerful open-source tools (Linux IMA, AppArmor, Suricata, Wazuh) exist, but are low-level, command-line only, and inaccessible to everyday operators.
3. **The Remote Desktop Trap:** When suspicious incidents occur, staff hand over unrestricted remote desktop access (AnyDesk/TeamViewer) to unvetted contractors, exposing confidential patient and banking data.

---

## 🛡️ The Solution: INSTANCES
**INSTANCES** is a customizable trust and security platform that translates zero-trust principles into accessible open-source orchestration:

### 1. Threat Anticipation (Proactive Hardening & Simulation)
- **$A_1 - C_3$ Protection Matrix:** Maps environment size (Rows 1–3: Individual to Hospital) against data sensitivity (Columns A–C: Public docs to Patient Health Records).
- **Deterministic Ringfencing:** Restricts software behavior (blocks office suites from spawning command shells or reading sensitive directories).
- **Storage & Network Controls:** Default-blocks unauthorized USB drives and drops unapproved outbound socket connections.
- **Threat Simulation Playground:** 1-click safe attack simulations (ransomware execution, rogue USB exports, reverse shells) with plain-language reassurance for non-technical staff and technical telemetry for security analysts.
- **Developer JSON Code Studio:** Create, validate, and deploy custom zero-trust protection schemas with live syntax parsing.

### 2. Threat Response (Bounded Evidence Collection)
- **Non-Invasive Diagnostic Checklist:** Replaces hazardous remote screen sharing with a 4-step guided evidence collection instance.
- **Zero-Leak Telemetry:** Extracts *only* audit logs and event snippets; private records remain securely on the machine.
- **Cryptographically Sealed:** Generates an immutable SHA-256 checksum on every submission for non-repudiation in the IT reviewer audit queue.

### 3. Track 2: Instances Community Hub & Advanced Controls
- **Community Template Leaderboard:** Developers across Botswana can create, publish, and test zero-trust templates with **Utility Scores (out of 100)**, downloads, and real-time upvotes.
- **Parent-Child Process Ringfencing:** Blocks authorized applications from invoking shells or downloaders.
- **Just-in-Time (JIT) Elevation Control:** Zero standing privileges with time-bounded temporary admin tokens.
- **Unified Operational Mode Switching:** Learning Mode $\leftrightarrow$ Secured Mode $\leftrightarrow$ Maintenance Mode.

---

## 🏗️ Architecture & Open-Source Engine Mapping

```
┌────────────────────────────────────────────────────────────────────────┐
│                      INSTANCES UI & Orchestrator                       │
│           (React 18 · TypeScript · Vite · Tailwind CSS · Lucide)       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
        ┌───────────────────────────┴───────────────────────────┐
        ▼                                                       ▼
┌───────────────────────────────────┐   ┌───────────────────────────────────┐
│        THREAT ANTICIPATION        │   │          THREAT RESPONSE          │
├───────────────────────────────────┤   ├───────────────────────────────────┤
│ • Binary Allow-Listing: Linux IMA │   │ • 4-Step Bounded Checklist        │
│ • App Isolation: AppArmor/SELinux │   │ • Privacy-Preserving Log Pull     │
│ • Storage Ringfence: udev rules   │   │ • SHA-256 Cryptographic Seal      │
│ • Network Egress: Suricata 7.0    │   │ • Reviewer Audit Timeline         │
│ • 1-Click Simulation Playground   │   │ • Policy Remediation Queue        │
└───────────────────────────────────┘   └───────────────────────────────────┘
```

| Security Capability | Open-Source Engine Subsystem | Role in Instances |
| :--- | :--- | :--- |
| **Application Allow-listing** | Linux IMA / AppArmor / Windows AppLocker | Cryptographic hash enforcement of permitted binaries |
| **Ringfencing & Elevation** | SELinux / Polkit / sudoers | Restricting allowed binaries from invoking child processes |
| **Network Boundary & IPS** | Suricata 7.0 / OpenSnitch / nftables | Monitoring and terminating unexpected socket egress |
| **Host Telemetry & Audit** | Wazuh 4.7 / osquery / Velociraptor | Real-time endpoint query and file integrity monitoring |
| **Vulnerability Scanning** | Trivy / OWASP ZAP | Pre-execution artifact scanning |

---

## 🚀 Quickstart

### Prerequisites
- Node.js (v18+)
- `yarn` (recommended) or `npm`

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/luxraye/ODC.git
cd ODC

# 2. Install dependencies
yarn install

# 3. Start local development server
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
yarn build
```

---

## 📁 Repository Structure

```
├── src/
│   ├── components/
│   │   ├── anticipation/     # A1-C3 Matrix, Inspector, Playground, JSON Code Studio
│   │   ├── response/         # Incident Queue, Bounded Evidence Collector, Reviewer Portal
│   │   ├── landing/          # Clean, distraction-free explainer & open-source mapping
│   │   ├── login/            # Dedicated role selection portal & admin entry
│   │   ├── roadmap/          # Track 2 Community Hub, Utility Leaderboard & Advanced Controls
│   │   ├── admin/            # Fleet telemetry & tamper-evident audit log
│   │   └── layout/           # Responsive navigation & role indicators
│   ├── context/              # AppContext with local storage sync & state engine
│   ├── data/                 # Pre-seeded Botswana clinic, school, and community datasets
│   └── types/                # TypeScript interfaces for zero-trust schemas
├── HACKATHON_DELIVERABLES_CHECKLIST.md  # Complete submission dossier
├── PITCH_DECK_AND_PRESENTATION_GUIDE.md # 10-slide pitch script & judges Q&A
├── LICENSE                   # Open Source Apache License 2.0
├── vercel.json               # Vercel deployment configuration
└── package.json
```

---

## 🌐 Live Deployment
Production Web App: **[https://instances-bw.vercel.app](https://instances-bw.vercel.app)**  
*(SSO deployment protection disabled for public hackathon evaluation)*

---

## 📄 Open Source License
Distributed under the **[Apache License 2.0](LICENSE)**. Free for use, modification, and deployment by public institutions, clinics, schools, and enterprises.
