# INSTANCES SECURITY — Hackathon Deliverables & Submission Dossier

**Event:** Open Source Hackathon 2026 Botswana (UniPod · OSCB · Orange Digital Center · University of Botswana)  
**Track:** Track 01 — Defence & Security (Cybersecurity)  
**Team Name:** Staging Hammer  
**Product Name:** Instances Security (INSTANCES)  
**Live URL:** [https://instances-bw.vercel.app](https://instances-bw.vercel.app)  
**Repository:** [GitHub Repository / Local Git Branch `master`]  
**License:** Apache License 2.0  

---

## Deliverables Checklist Matrix

| # | Item | Status | Submission Summary |
|---|---|---|---|
| **1** | **Name** | Complete | **Instances Security** |
| **2** | **Team** | Complete | **Staging Hammer** (UniPod / UB Innovation Cohort) |
| **3** | **Problem** | Complete | Triple challenge: surging AI/digital banking fraud, unaffordable enterprise tools, and invasive incident response channels |
| **4** | **Solution** | Complete | Open-source customizable zero-trust anticipation engine & bounded evidence response platform |
| **5** | **Target Users** | Complete | Public clinics/healthcare, educational computer labs, local SMEs/FinTechs, and Incident Response teams |
| **6** | **Key Features** | Complete | Application allowlisting, ringfencing, elevation control, network boundary, $A_1-C_3$ Matrix, Threat Playground, Community Hub |
| **7** | **Tech Stack** | Complete | React 18, TypeScript, Tailwind CSS + Linux IMA, AppArmor, SELinux, Suricata 7.0, OpenSnitch, Wazuh 4.7, Velociraptor |
| **8** | **Git** | Complete | Clean Git tree, modular component hierarchy, zero hardcoded credentials |
| **9** | **Live Demo Link** | Complete | Production deployment: `https://instances-bw.vercel.app` |
| **10** | **README** | Complete | Professional root documentation with architectural flow, quickstart, and demo walkthrough |
| **11** | **OS License** | Complete | Apache License 2.0 (Open-source, commercially viable, patent protection) |
| **12** | **Live Pitch** | Complete | Structured 5-minute script (3m pitch + 60s golden demo + 2m Q&A) |
| **13** | **Community Impact** | Complete | Democratization of cyber defense in Botswana, national data sovereignty, protection of rural health/schools |
| **14** | **Future Development** | Complete | Automated AI policy synthesis, Windows WDAC integration, and Track 2 community template exchange |

---

## 1. Project Name
### **Instances Security** *(stylized as INSTANCES)*
*Tagline: Zero-Trust Cyber Protection Scaled for Every Community.*

---

## 2. Team: Staging Hammer
* **Track:** 01 — Defence & Security
* **Affiliation:** UniPod / OSCB / Orange Digital Center / University of Botswana
* **Core Team Roles:**
  * **Lead Systems & Security Architect:** Core zero-trust policy engine design, $A_1-C_3$ matrix schema, and open-source telemetry mapping.
  * **Digital Forensics & Incident Response Lead:** Bounded evidence collection workflow, cryptographic sealing protocols, and reviewer audit trails.
  * **Full-Stack / UI-UX Engineer:** High-performance dashboard, interactive attack simulation playground, and plain-language advisory layer.

---

## 3. Problem Statement

### **Succinct One-Liner:**
> *"As digital adoption and AI-driven fraud surge across Botswana, local organizations remain defenseless due to unaffordable security tools and the lack of secure channels for incident responders to intervene without creating new vulnerabilities."*

### **In-Depth Breakdown:**
1. **The Emerging Market Threat Wave:** Botswana is transitioning rapidly to digital services (digital health records, mobile money, online education). Concurrently, incidents of AI-assisted social engineering, digital fraud, and banking scams (e.g., rampant FNB banking fraud schemes) are spiking.
2. **The Economic Divide in Cybersecurity:** World-class enterprise Zero-Trust Application Control and Ringfencing solutions (e.g., ThreatLocker, CrowdStrike) carry prohibitive annual license fees ($50–$150/endpoint/yr), making them unobtainable for rural clinics, public secondary schools, and small enterprises.
3. **The Open-Source Usability Chasm:** Powerful open-source primitives exist in the Linux kernel (Linux IMA, AppArmor, SELinux, Suricata, Wazuh), but they are fragmented, low-level, and require deep command-line expertise. A clinic nurse or school administrator cannot write AppArmor abstractions or parse raw syslog streams.
4. **The Remote Desktop Trap in Incident Response:** When suspicious behavior occurs, under-resourced organizations rely on unvetted IT support via AnyDesk or TeamViewer. This grants third-party contractors unrestricted remote desktop access to the entire file system—exposing confidential patient records and financial databases to data exfiltration and secondary breach.

---

## 4. Solution

**Instances Security** is an open-source, human-centric trust and cyber defense platform that democratizes enterprise-grade Zero-Trust through a **two-pillar architecture**:

### Core Philosophy: "Default-Deny"
> *"Nothing executes, reads private data, or traverses networks without an explicit, mathematically sound policy."*

### Pillar 1: Threat Anticipation (Proactive Hardening & Simulation)
* **$A_1–C_3$ Protection Matrix:** Eliminates configuration guesswork by mapping organization scale (1–3: Solo/Micro $\to$ School/SME $\to$ Hospital/District) against data sensitivity (A–C: Public docs $\to$ Business financial $\to$ Critical Patient Health Records).
* **Deterministic Ringfencing:** Restricts what approved software is allowed to touch (e.g., blocks Microsoft Office or PDF readers from launching PowerShell or CMD).
* **Storage & Network Boundaries:** Default-blocks unauthorized USB mass storage devices and drops outbound exfiltration channels.
* **Threat Simulation Playground:** Allows operators to safely simulate ransomware execution, rogue USB insertions, and C2 beacons to test defense postures without live destructive malware.

### Pillar 2: Threat Response (Bounded Evidence Collection)
* **Non-Invasive Diagnostic Checklist:** Replaces hazardous remote desktop takeovers with a 4-step guided evidence collection instance.
* **Zero-Leak Telemetry Packaging:** Extracts *only* audit diagnostics and system event logs; confidential patient or business records remain locked inside local storage.
* **Cryptographic Integrity:** Automatically seals evidence packages with an immutable SHA-256 checksum and passes them to a structured reviewer queue for auditable resolution.

---

## 5. Target Users & Beneficiaries

1. **Healthcare Facilities & Rural District Clinics (e.g., Kanye, Mochudi):**
   * *Challenge:* Running sensitive electronic health record systems (DHIS2, OpenMRS) with zero in-house cybersecurity staff.
   * *Benefit:* Preset $C_3$ Profile locks USB ports and blocks unauthorized data export while presenting alerts in plain language.
2. **Educational Institutions & School Computer Labs:**
   * *Challenge:* Student workstations vulnerable to unauthorized script execution, USB malware, and cryptominers.
   * *Benefit:* Preset $A_2/B_2$ Profile enforces strict application allowlisting and prevents privilege escalations.
3. **African SMEs & FinTech Startups:**
   * *Challenge:* High compliance requirements without the budget for six-figure enterprise EDR licenses.
   * *Benefit:* Enterprise-grade zero-trust policies running on top of free open-source infrastructure.
4. **Incident Response Teams & MSSPs:**
   * *Challenge:* Needing forensic evidence from remote client endpoints without incurring liability for client data privacy.
   * *Benefit:* Standardized, cryptographically sealed diagnostic packages without remote screen takeovers.

---

## 6. Key Features

* **Application Allowlisting:** Enforces strict execution integrity—unauthorized binaries and scripts are blocked by default.
* **Storage & Peripheral Ringfencing:** Restricts access to sensitive directories and blocks unapproved USB mass storage devices via kernel-level udev policies.
* **Parent-Child Process Controls:** Blocks common weaponization techniques (e.g., office suites launching `cmd.exe` or `powershell.exe`).
* **Elevation & Just-In-Time (JIT) Controls:** Eliminates permanent local administrator accounts with temporary 15-minute elevation tokens.
* **Network Boundary Segmentation:** Restricts outbound egress to whitelisted IPs and blocks known reverse shell ports.
* **Interactive $A_1–C_3$ Matrix:** One-click deployment of pre-hardened organizational security baselines.
* **Interactive Threat Simulation Playground:** 1-click safe scenario execution for real-time validation.
* **Dual-Layer Telemetry View:** One-click toggle between **Plain-Language Explanations** (for operators) and **Raw Technical Telemetry** (Suricata SID, AppArmor logs, IMA hashes for security analysts).
* **Bounded Evidence Collection Instance:** Privacy-preserving 4-step forensic bundle generation with SHA-256 seal.
* **Reviewer Audit Timeline:** Transparent triage, verification, and incident closure tracking.
* **Community Template Hub & Utility Leaderboard (Track 2):** Ecosystem for security engineers to publish, test, and score custom security templates.

---

## 7. Tech Stack

### Client & Application Layer:
* **Frontend Framework:** React 18 / TypeScript
* **Build System & Bundler:** Vite 5.2
* **Package Manager:** `yarn`
* **Styling & Design System:** Tailwind CSS (custom cyber-defense palette: dark obsidian, emerald trust indicators, cyan telemetry indicators, rose/amber alerts)
* **Icons:** `lucide-react`
* **Deployment & Hosting:** Vercel Global Edge Network with CI/CD GitHub integration

### Underlying Open-Source Engines & Primitives (Architecture Mapping):
* **Execution Allow-Listing:** Linux IMA (Integrity Measurement Architecture) & AppArmor
* **Storage & Hardware Controls:** Linux `udev` rules & SELinux targeted policies
* **Network Boundary & IPS:** Suricata 7.0 (Signature & Heuristic IDS/IPS) & OpenSnitch Application Firewall
* **Host Telemetry & Auditing:** Wazuh 4.7 SIEM agent, osquery SQL-based OS telemetry, and Velociraptor VQL forensic artifacts

---

## 8. Git & Repository Management

* **Repository State:** Fully initialized Git repository on `master` branch.
* **Hygiene:** Strict `.gitignore` protecting build outputs (`/dist`), dependency trees (`/node_modules`), and local environments.
* **Structure:** Clean modular breakdown separating `/src/components/anticipation`, `/src/components/response`, `/src/components/landing`, `/src/data`, and `/src/types`.
* **Zero Secrets:** Zero hardcoded API keys, private tokens, or proprietary binaries committed.

---

## 9. Live Demo Link

* **Production URL:** [https://instances-bw.vercel.app](https://instances-bw.vercel.app)
* **Local Fallback:** `http://localhost:5173` (via `yarn dev`)
* **Uptime & Performance:** Zero cold starts, 100% responsive across desktop, tablet, and mobile browsers.

---

## 10. README

* **Status:** Available in project root as `README.md`.
* **Includes:**
  * Project overview & architectural diagrams (Mermaid).
  * 3-step rapid quickstart (`yarn install`, `yarn dev`, `yarn build`).
  * $A_1–C_3$ Matrix explanation table.
  * Live demo walkthrough instructions for hackathon judges.

---

## 11. Open Source License

### **Apache License 2.0**
* **Rationale:**
  * Grants permissive use, modification, and distribution for public clinics, schools, and private enterprises.
  * Provides explicit protection against patent infringement disputes for contributors.
  * Enables enterprise adoption while allowing community templates and core policy modules to remain freely accessible.

---

## 12. Live Pitch Structure (5-Minute Strategy)

* **Time Allocation:** 3 Minutes Pitch + 60 Seconds Golden Live Demo + 2 Minutes Judge Q&A.
* **Slide 1 (0:00–0:30):** The Hook — Botswana's digital leap vs. the cybersecurity poverty line.
* **Slide 2 (0:30–1:00):** The Dilemma — The cost barrier of enterprise tools & the danger of remote screen sharing.
* **Slide 3 (1:00–1:30):** The Solution — INSTANCES default-deny philosophy & $A_1-C_3$ protection matrix.
* **Slide 4 (1:30–2:00):** Pillar 1 (Anticipation) vs Pillar 2 (Bounded Response).
* **Slide 5 (2:00–2:30):** Open-Source Engine Subsystems (IMA, AppArmor, Suricata, Wazuh).
* **Slide 6 (2:30–3:30):** **The 60-Second Golden Demo:**
  1. Navigate to `instances-bw.vercel.app`.
  2. Select **$C_3$ Primary Clinic** profile.
  3. Trigger **"Unauthorized USB Thumb Drive Patient Export"** in Playground.
  4. Show instant **BLOCKED** status.
  5. Toggle between Plain-Language Explanation and Technical Syslog Telemetry.
  6. Escalate directly to **Threat Response** and view the SHA-256 sealed evidence bundle.
* **Slide 7 (3:30–4:30):** Track 2 Vision (Instances Community Hub, Utility Leaderboard).
* **Slide 8 (4:30–5:00):** Impact on Botswana's Digital Future & Closing.

---

## 13. Community Impact & Economic Feasibility

1. **Safeguarding Critical National Infrastructure:** Protects vulnerable public healthcare clinics and government schools from ransomware shutdowns without requiring budget-breaking foreign software licenses.
2. **Countering Modern Fraud & Financial Scams:** By enforcing default-deny execution, social engineering payloads and malicious banking scam droppers cannot execute, even if a user is tricked into downloading them.
3. **Data Sovereignty for Botswana:** Security policies, event telemetry, and incident evidence remain completely within local boundaries rather than being shipped to foreign proprietary cloud providers.
4. **Fostering Local Cybersecurity Talent:** The Community Hub empowers local developers, University of Botswana students, and security analysts to build, audit, and distribute hardened security templates for local industry.

---

## 14. Future Development & Roadmap

1. **Automated AI Policy Generator:** Leveraging local lightweight LLMs to profile workstation behavior and auto-synthesize AppArmor and udev rules for legacy software.
2. **Cross-Platform Kernel Parity:** Developing native endpoint daemons for Windows endpoints (leveraging Windows Defender Application Control - WDAC, AppLocker, and Event Tracing for Windows - ETW) matching our Linux IMA/AppArmor capabilities.
3. **Sovereign Threat Intelligence Federation:** Allowing participating Botswana organizations to anonymously exchange blocked hash signatures and IoCs through the Community Hub.
4. **Standardized Incident Response API:** Integration with national CSIRTs and law enforcement digital forensics units for tamper-proof evidentiary handoffs.
