# INSTANCES: Master PowerPoint Presentation Guide & Pitch Deck
**Event:** Open Source Hackathon 2026 Botswana (UniPod · OSCB · Orange Digital Center · University of Botswana)  
**Track:** 01 — Defence & Security  
**Theme:** *Open Ideas, Brighter Possibilities*  
**Date:** Friday, 18 September 2026 | Orange Digital Centre, Gaborone  
**Presentation Time:** 5 Minutes Total (3 Minutes Presentation + 2 Minutes Jury Q&A)

---

## 🎯 Executive Presentation Philosophy: Simplicity First

> **Core Rule for Presenters:** Keep the story simple, relatable, and human.  
> Avoid alienating judges with low-level jargon upfront. Ground the problem in everyday Botswana experiences (a rural health clinic, a secondary school computer lab, a local business). Get technical *only* where required—specifically when detailing the **open-source security engines** and the **production OS integration path**.

---

## 📽️ Slide-by-Slide Deck Outline & Speaker Script

---

### SLIDE 1: Title & The Human Hook
- **Slide Title:** INSTANCES
- **Tagline:** Cyber Defense Made Simple. Protection That Fits You.
- **Visuals:** 
  - Obsidian dark aesthetic with clean emerald trust shield icon.
  - Event branding: *Open Source Hackathon 2026 Botswana (Track 01: Defence & Security)*.
  - Subtitle: *A Customizable Zero-Trust & Safe Incident Response Platform*.
- **Presenter Timing:** 0:00 – 0:30 (30 seconds)

#### 🎙️ Speaker Script:
> *"Good morning, honorable judges, mentors, and fellow builders.  
> Across Botswana today, our institutions are rapidly going digital. Our district clinics use electronic health registers, our secondary schools run public IT labs, and local businesses rely on digital point-of-sale systems.  
> But here is the critical vulnerability: **How do these vital institutions protect themselves when enterprise cybersecurity software costs hundreds of thousands of Pula, and raw open-source security tools are far too complex for everyday operators?**  
> We built **INSTANCES**: a simple, human-centered cyber defense platform powered entirely by trusted open-source signals. It gives every school, clinic, and business enterprise-grade zero-trust protection—without the enterprise price tag or technical headache."*

---

### SLIDE 2: The Botswana Dilemma (The Problem)
- **Slide Title:** Why Current Security Fails Our Communities
- **Visual Layout:** Three side-by-side challenge cards:
  1. **The Cost Barrier (Proprietary Platforms):**  
     Commercial solutions like ThreatLocker provide excellent zero-trust protection, but cost tens of thousands of dollars per year and require dedicated corporate IT teams. Public clinics and schools cannot afford them.
  2. **The Usability Chasm (Raw Open-Source):**  
     Engines like Linux IMA, AppArmor, Suricata, and Wazuh are free and immensely powerful—but they require editing low-level terminal configs, writing kernel rules, and deciphering cryptic log dumps. A clinic nurse or school teacher cannot do this.
  3. **The Dangerous Remote Takeover Trap:**  
     When a computer acts up, staff have no choice but to install AnyDesk or TeamViewer and hand over complete, unrestricted screen control to external technicians—exposing confidential patient records and financial spreadsheets to unvetted third parties.
- **Presenter Timing:** 0:30 – 1:00 (30 seconds)

#### 🎙️ Speaker Script:
> *"Consider a nurse at Kanye Clinic or a teacher managing a computer lab at GSS.  
> Traditional antivirus plays catch-up—it only catches malware it already knows about. Commercial zero-trust tools solve this by blocking everything by default, but their enterprise licenses are completely out of reach.  
> On the other hand, open-source security software like AppArmor and Suricata are world-class, but they are trapped behind complex command-line interfaces.  
> And when an anomaly occurs, staff panic and hand over full remote desktop control via AnyDesk to an outside contractor, instantly leaking private records.  
> Botswana needs an open-source, affordable platform that bridges this gap."*

---

### SLIDE 3: The Solution — INSTANCES
- **Slide Title:** Zero-Trust Made Accessible & Actionable
- **Visual Layout:**
  - *Left (The Core Principle):* **Strict Default-Deny**  
    `Nothing executes, accesses sensitive data, gains admin privileges, or traverses networks without an explicit, auditable policy.`
  - *Right (The Two Operational Pillars):*
    1. **Threat Anticipation:** Proactive protection profile selection, device ringfencing, and live attack simulation.
    2. **Threat Response:** Structured, privacy-preserving evidence collection checklists that replace risky remote takeovers.
- **Presenter Timing:** 1:00 – 1:30 (30 seconds)

#### 🎙️ Speaker Script:
> *"INSTANCES solves this with one uncompromising rule: **Default-Deny**.  
> If software is not explicitly trusted, it does not run. If a USB drive is not authorized, it cannot read files. If a process tries to open a suspicious connection, it is instantly severed.  
> But we make this intuitive through two clear pillars:  
> First, **Threat Anticipation**, which gives users pre-configured protection profiles and an interactive playground to test policies safely.  
> Second, **Threat Response**, which replaces dangerous remote screen-sharing with a safe, bounded evidence checklist."*

---

### SLIDE 4: Threat Anticipation & The $A_1–C_3$ Protection Matrix
- **Slide Title:** Right-Sized Security: The $A_1–C_3$ Template Matrix
- **Visual Layout:** Clean 3×3 Archetype Matrix:
  - **Horizontal Rows (Fleet Scale):**  
    - Level 1: Solo Operator / Micro-Desk (1–5 Devices)  
    - Level 2: School IT Lab / Small Business (5–50 Devices)  
    - Level 3: District Hospital / Municipal Enterprise (50+ Devices)  
  - **Vertical Columns (Data Sensitivity):**  
    - Level A: Public / Standard Data (Educational media, basic browsing)  
    - Level B: Internal Business Data (Accounting records, inventory, POS)  
    - Level C: Regulated / Confidential Data (Electronic Health Records, National IDs)  
  - **Highlighted Showcase:** **Archetype C3 (District Clinic / Health Post)**
- **Key Features:**
  - Visual policy inspector: Allowed software, USB ringfence status, and network rules.
  - Collapsible design: Keeps the operator's workspace calm and uncluttered.
  - Custom Policy Studio: Allows developers to export or edit clean JSON schemas.
- **Presenter Timing:** 1:30 – 2:00 (30 seconds)

#### 🎙️ Speaker Script:
> *"One size does not fit all. A primary school computer lab should not have the same restrictions as an operating theater.  
> That is why we designed the **$A_1-C_3$ Protection Matrix**.  
> Rows represent scale—from a solo practitioner up to an entire district hospital. Columns represent sensitivity—from standard public browsing up to confidential patient histories.  
> In our app, selecting an organization—like a rural health clinic—instantly applies **Archetype C3**: locking down USB thumb drives, ringfencing the patient database, and permitting only approved medical applications."*

---

### SLIDE 5: Interactive Threat Playground (Live 60-Second Demo)
- **Slide Title:** Test Defenses Safely Before Deployment
- **Visuals & Live Demo Choreography:**
  - *Step 1:* Switch to live app at **`instances-bw.vercel.app`**.
  - *Step 2:* Open **Gateway / Login** $\rightarrow$ Click **"Protect Clinic (Archetype C3)"**.
  - *Step 3:* View the calm Anticipation dashboard with the collapsed matrix and active shield indicator.
  - *Step 4:* In the **Threat Simulation Playground**, select *"Unauthorized USB Patient Record Exfiltration"*.
  - *Step 5:* Click **"Trigger Simulation Now"**.
  - *Step 6:* Instant **BLOCKED** verdict appears in under 600ms.
  - *Step 7:* Highlight the **Plain Language Explanation** (*"Removable USB storage is blocked to safeguard patient health records. No staff action required."*) and toggle to **Technical Telemetry** for the jury.
- **Presenter Timing:** 2:00 – 2:45 (45 seconds)

#### 🎙️ Speaker Script (During Live Demo):
> *(Demonstrating live in browser)*  
> *"Let's see INSTANCES in action.  
> We log in and select 'Rural Health Clinic'. The system immediately deploys our C3 protection shield.  
> Now we enter the **Threat Simulation Playground**. Imagine someone plugs an unknown USB stick into a consulting room terminal and attempts to copy the patient records database.  
> We click 'Trigger Simulation'. Instantly: **BLOCKED**.  
> Look at the explanation: For the clinic nurse, it explains in calm, reassuring plain English: 'Removable USB storage is blocked by Profile C3. The system kept your data safe.'  
> But for our technical judges, a single click opens the technical telemetry, showing the exact open-source rule match and kernel interception."*

---

### SLIDE 6: Threat Response & The Bounded Evidence Revolution
- **Slide Title:** Safe Incident Triage (Replacing AnyDesk / TeamViewer)
- **Visual Layout:** 4-Step Guided Evidence Checklist Diagram:
  - `Step 1: Workstation Verification` $\rightarrow$ Confirms device ID and timestamp.
  - `Step 2: Diagnostic Log Pull` $\rightarrow$ Extracts only system security events (never user files).
  - `Step 3: Staff Context & Observations` $\rightarrow$ Nurse inputs what happened or attaches a photo.
  - `Step 4: Sealed Cryptographic Bundle` $\rightarrow$ Signs the package with a tamper-evident SHA-256 hash.
- **Key Benefits:**
  - **No Remote Takeover:** Contractors never gain full screen or file system access.
  - **Privacy-Preserving:** Only diagnostic evidence leaves the machine; patient records stay sealed.
  - **Auditable Accountability:** Full timeline showing submission, review notes, and policy resolution.
- **Presenter Timing:** 2:45 – 3:15 (30 seconds)

#### 🎙️ Speaker Script:
> *"What happens when a suspicious event occurs?  
> Instead of handing over remote desktop access to a stranger, INSTANCES guides staff through a **Bounded Evidence Checklist**.  
> In four easy steps, the operator verifies the machine, lets the system pull diagnostic logs, adds a quick note, and submits a cryptographically sealed SHA-256 package.  
> The IT reviewer in Gaborone gets the exact forensic logs required to remediate the issue, while confidential patient files remain completely safe and untouched on the local computer."*

---

### SLIDE 7: Technical Architecture & Open-Source Engine Mapping
- **Slide Title:** Powered by Proven Open-Source Security Engines
- **Visual Layout:** Architectural Mapping Table:

| Capability | Open-Source Security Engine | Role in INSTANCES |
| :--- | :--- | :--- |
| **Binary Execution Control** | **Linux IMA** (Integrity Measurement Architecture) + **AppArmor** / **Windows AppLocker** | Cryptographic hash allow-listing; blocks unapproved `.exe` / ELF binaries. |
| **Storage & Privilege Ringfencing** | **udev rules** + **SELinux** / **Polkit** | Blocks unauthorized USB mass storage mounts and prevents privilege escalation. |
| **Network Boundary & Egress** | **Suricata 7.0 IPS** + **OpenSnitch** / **nftables** | Intercepts unauthorized outbound connections and kills reverse shells. |
| **Telemetry & Tamper-Evident Auditing** | **Wazuh SIEM** + **osquery** + **Velociraptor** | Lightweight endpoint telemetry, file integrity monitoring, and immutable log trails. |
| **Vulnerability & Code Auditing** | **Trivy** + **OWASP ZAP** | Pre-execution container and dependency vulnerability verification. |

- **Key Architectural Takeaway:** INSTANCES is the **unifying, human-centric orchestration layer** that translates high-level trust profiles into coordinated open-source enforcement.
- **Presenter Timing:** 3:15 – 3:45 (30 seconds)

#### 🎙️ Speaker Script:
> *"How do we deliver enterprise-grade defense without proprietary licenses? By orchestrating the best open-source security engines on earth.  
> For execution control, we utilize Linux IMA and AppArmor. For storage ringfencing, udev and SELinux isolate removable media. For network boundaries, Suricata 7.0 terminates rogue data egress. And for auditable telemetry, Wazuh and Velociraptor provide tamper-evident event trails.  
> INSTANCES harmonizes these complex tools into one cohesive, accessible interface."*

---

### SLIDE 8: Production Operating System Integration Map
- **Slide Title:** Production OS Roadmap & Integration Boundaries
- **Visual Layout:** Clean deployment flow diagram for native environments:
  - **Linux Endpoints (Debian / Ubuntu / Fedora):**  
    - Kernel IMA/EVM enforce file signature validation.  
    - AppArmor profiles restrict application capabilities (e.g. libreoffice cannot spawn `/bin/sh`).  
    - nftables drops unapproved network sockets.
  - **Windows Workstations (Windows 10 / 11 / Server):**  
    - Windows Defender Application Control (WDAC) & AppLocker enforce hash-based allow-lists.  
    - Windows Event Forwarding (WEF) streams security events to the central review queue.
  - **macOS Terminals:**  
    - Apple Endpoint Security Framework (ESF) and System Extensions monitor process creation and disk mounts.
  - **Security Boundary Guarantee:**  
    - Uses signed, least-privilege daemon agents. Web requests *never* execute arbitrary shell commands directly.
- **Presenter Timing:** 3:45 – 4:15 (30 seconds)

#### 🎙️ Speaker Script:
> *"Our modular design provides a direct path to production deployment across operating systems.  
> On Linux, our profiles compile into native IMA and AppArmor policies. On Windows, they map to Windows Defender Application Control and AppLocker. On macOS, they connect via the Endpoint Security Framework.  
> Every adapter operates under strict least-privilege boundaries with cryptographically signed local daemons, ensuring the web interface never runs arbitrary OS commands."*

---

### SLIDE 9: The Future Horizon: Botswana Community Ecosystem
- **Slide Title:** Future Horizon: Community Templates & Advanced Controls
- **Visual Layout:** Two visionary pillars:
  1. **Community Template Marketplace & Leaderboard:**  
     - A nationwide repository where local developers, university researchers, and system administrators publish custom security profiles.  
     - **Utility Scores (e.g. 98/100):** Community-driven ranking based on policy strictness, validation testing, and real-world utility.
  2. **Advanced Zero-Trust Controls:**  
     - **Parent-Child Process Ringfencing:** Prevents trusted productivity tools (Word, PDF readers) from spawning command interpreters (`powershell.exe`, `bash`).  
     - **Just-In-Time (JIT) Elevation:** Eliminates permanent administrator accounts; provides 15-minute temporary elevation tokens for verified maintenance tasks.  
     - **Operational Mode Switching:** Fleet-wide transition between *Learning Mode* (passive baselining), *Secured Mode* (default-deny), and *Maintenance Mode*.
- **Presenter Timing:** 4:15 – 4:45 (30 seconds)

#### 🎙️ Speaker Script:
> *"Looking ahead, INSTANCES is designed to foster a self-sustaining cybersecurity ecosystem in Botswana.  
> We envision a **Community Template Marketplace** where local engineers and students publish, audit, and rank security templates tailored to local software and municipal needs, rated by an objective **Utility Score**.  
> Furthermore, we are designing advanced zero-trust controls: **Parent-Child Ringfencing** to eliminate macro exploits, **Just-In-Time Elevation** to abolish permanent root passwords, and **Fleet Mode Switching** to make onboarding effortless."*

---

### SLIDE 10: Conclusion, Impact & Project Links
- **Slide Title:** Defend Proactively. Respond Accountably.
- **Visual Layout:**
  - Summary of Value:
    - ✅ **100% Open Source & Zero Licensing Fees**
    - ✅ **Tailored to Botswana's Public & Private Sectors**
    - ✅ **Human-First Plain Language Usability**
    - ✅ **Safe Evidence Triage Without Remote Takeover**
  - **Consolidated Project Links Box:**
    - 🌐 **Live Web Application:** [https://instances-bw.vercel.app](https://instances-bw.vercel.app)
    - 💻 **GitHub Source Code:** [https://github.com/luxraye/ODC.git](https://github.com/luxraye/ODC.git)
    - 📖 **Open Source Community Botswana:** [oscbotswana.co.bw](https://oscbotswana.co.bw)
    - 🏆 **Hackathon Track:** Track 01 — Defence & Security | Orange Digital Center Botswana
- **Presenter Timing:** 4:45 – 5:00 (15 seconds)

#### 🎙️ Speaker Script:
> *"INSTANCES proves that cybersecurity does not have to be expensive, intimidating, or foreign.  
> By uniting world-class open-source engines under a clean, human-centered interface, we empower every clinic nurse, teacher, and entrepreneur in Botswana to take control of their digital sovereignty.  
> Our live prototype is available right now at **instances-bw.vercel.app**, and our complete codebase is open on GitHub.  
> Thank you, and we welcome your questions!"*

---

## 📋 Hackathon 12-Module Checklist Cross-Reference

This table maps each of the 12 required build modules from the official hackathon specification directly to its presentation coverage:

| Checklist Step | Module Name | Implementation in INSTANCES | Slide Coverage |
| :--- | :--- | :--- | :--- |
| **Step 01** | **Landing and Login** | Clean hero tagline; 30-second plain-language product explanation; organization selection (Clinic, School, SME, Reviewer). | Slide 1 & Slide 5 |
| **Step 02** | **Roles and Navigation** | Distinct Anticipation Lead vs. Response Triage vs. Admin routes; clean navigation header with zero enterprise clutter. | Slide 3 & Slide 5 |
| **Step 03** | **Threat Anticipation Dashboard** | Calm security center with 98.4% protection level, protected nodes summary, and active shield indicators. | Slide 4 & Slide 5 |
| **Step 04** | **A1–C3 Template Matrix** | 3×3 matrix mapping Fleet Scale (1–3) to Data Sensitivity (A–C); collapsible design to keep workspace clean. | Slide 4 |
| **Step 05** | **Template Details and Builder** | Profile inspector for allowed binaries, USB storage, network egress; Developer JSON Code Studio with validation. | Slide 4 |
| **Step 06** | **Instances Playground** | 1-click threat simulation sandbox; instant Allow/Block decision; plain-English explanation + technical telemetry. | Slide 5 |
| **Step 07** | **Threat Scenarios and Signals** | 4 pre-seeded realistic attacks mapped to open-source engines (Linux IMA, AppArmor, udev, Suricata, Wazuh, osquery). | Slide 5 & Slide 7 |
| **Step 08** | **Threat Response Dashboard** | Clear, non-technical incident queue for staff; urgent action prompts without requiring external IT calls. | Slide 6 |
| **Step 09** | **Evidence Collection Instance** | 4-step bounded checklist replacing AnyDesk/TeamViewer; synthetic diagnostic pull and cryptographic SHA-256 seal. | Slide 6 |
| **Step 10** | **Reviewer and Audit Workflow** | Reviewer triage desk; status lifecycle (`Under Review` $\rightarrow$ `Policy Remediated` $\rightarrow$ `Resolved`); immutable audit log. | Slide 6 |
| **Step 11** | **Safety, Data & Explanation Layer** | Fully synthetic safe demo telemetry; zero risk to host machine; dual plain-English/technical explanations; 1-click reset. | Slide 5 & Slide 8 |
| **Step 12** | **Production OS Integration Map** | Comprehensive documentation of native adapters for Linux (IMA/AppArmor), Windows (WDAC/AppLocker), and macOS (ESF). | Slide 8 |

---

## 🛡️ Judge Q&A Anticipation Guide (Bulletproof Responses)

### Q1: "Isn't default-deny too disruptive for ordinary non-technical workers?"
> **Answer:**  
> *"That is precisely why traditional enterprise zero-trust fails in small organizations—it requires an IT admin to manually approve every single binary.  
> INSTANCES solves this through our **$A_1-C_3$ Matrix archetypes**. Instead of starting from scratch, organizations inherit curated, pre-tested application profiles. For example, Profile A2 for schools already whitelists standard web browsers and office suites. Users only experience blocks when unvetted, unknown executables or unauthorized USB media attempt to interact with the system."*

### Q2: "Why not just let the IT contractor use AnyDesk to fix the computer?"
> **Answer:**  
> *"AnyDesk and TeamViewer grant full interactive desktop control. That means the remote technician has unrestricted read and write access to the entire disk—including confidential medical registers, financial records, and personal passwords.  
> Furthermore, compromised remote desktop credentials are one of the top attack vectors globally.  
> Our **Bounded Evidence Checklist** flips the paradigm: it extracts *only* the specific system diagnostic event logs needed to identify the malfunction, packages them into an encrypted, SHA-256 sealed bundle, and transmits them securely. Zero patient data ever leaves the clinic workstation."*

### Q3: "How does the web application interact with actual operating systems in production?"
> **Answer:**  
> *"In this hackathon prototype, we built an interactive, self-contained simulation layer with synthetic telemetry so judges can test every feature safely without executing live root exploits on their machines.  
> For production deployment (documented in our Step 12 OS Integration Map), INSTANCES pairs with a lightweight, cryptographically signed local daemon. The daemon compiles our JSON protection templates directly into native kernel configurations: **Linux IMA policies and AppArmor abstractions** on Linux, and **WDAC XML policies** on Windows. The web interface acts strictly as the policy orchestration and evidence review layer."*

### Q4: "What makes this genuinely open-source rather than just another commercial SaaS clone?"
> **Answer:**  
> *"INSTANCES is built 100% on open-source foundations. We do not use proprietary threat feeds, closed agent binaries, or hidden licensing tiers.  
> Every security signal we consume comes from recognized open-source engines: Linux IMA, AppArmor, Suricata, Wazuh, and osquery. Our code is published under the open-source license on GitHub, giving Botswana complete technological sovereignty over its security infrastructure."*
