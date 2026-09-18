# INSTANCES: Master Pitch Deck Guide & Speaker Script
**Event:** Open Source Hackathon 2026 Botswana (UniPod · OSCB · Orange Digital Center · University of Botswana)  
**Track:** 01 — Defence & Security  
**Live Application URL:** [https://instances-bw.vercel.app](https://instances-bw.vercel.app)  
**Presentation Time:** 5 Minutes (3 Min Pitch + 2 Min Q&A)

---

## 🎯 Executive Pitch Strategy

The biggest trap in cybersecurity presentations is getting lost in acronyms (`IMA`, `eBPF`, `SID`, `ASLR`).  
**Judges don't invest in acronyms; they invest in outcomes.**

This pitch follows the **"Human Impact $\rightarrow$ Elegant Architecture $\rightarrow$ Live Proof $\rightarrow$ Ecosystem"** story arc:
1. **The Ground Reality:** A nurse in Kanye clinic cannot debug Linux terminal outputs or pay thousands of dollars for proprietary American software like ThreatLocker.
2. **The Innovation:** INSTANCES makes **Zero-Trust Default-Deny** human, customizable, and 100% open-source.
3. **The Proof:** A live 60-second simulation of an unauthorized USB data leak blocked in real time with plain-language reassurance.
4. **The Vision (Track 2):** A Botswana community marketplace where local developers build and rank security templates for national sovereignty.

---

## 📊 Slide-by-Slide Presentation Guide

---

### SLIDE 1: Title & The Bold Hook
- **Slide Title:** INSTANCES
- **Subtitle:** Zero-Trust Cyber Protection Scaled for Every Community
- **Visual:** Clean obsidian dark backdrop, INSTANCES shield logo with glowing emerald/cyan accents, Hackathon Track 01 banner, URL: `instances-bw.vercel.app`.
- **Presenter Timing:** 0:00 – 0:30 (30 seconds)

#### 🎙️ Speaker Script:
> *"Good morning, honorable judges, mentors, and fellow innovators.  
> Across Botswana today, we are rapidly digitizing our society — our clinics are adopting electronic health registers, our secondary schools have computer labs, and our businesses operate on digital money.  
> But here is the silent crisis: **how do we protect these systems when enterprise cybersecurity costs hundreds of thousands of Pula, and open-source alternatives are completely inaccessible to everyday operators?**  
> Today, we present **INSTANCES**: an open-source, human-centric trust platform that brings enterprise-grade zero-trust defense to every clinic, school, and business in Botswana."*

---

### SLIDE 2: The Botswana Dilemma (The Problem)
- **Slide Title:** The Security Paradox in Botswana
- **Visual:** Split comparison graphic:
  - *Left (Commercial Platforms):* Expensive ($$$$), closed-source, vendor lock-in, requires dedicated SOC teams.
  - *Right (Raw Open-Source):* Linux IMA, AppArmor, Suricata, Wazuh — powerful, but fragmented, command-line only, alienating non-technical staff.
  - *Center (The Real Victim):* Photo or icon of a rural clinic triage desk with patient queues.
- **Key Bullet Points:**
  - **The Cost Barrier:** Enterprise zero-trust tools are financially out of reach for public institutions.
  - **The Usability Chasm:** A clinic nurse or schoolteacher cannot edit iptables or debug kernel logs.
  - **The Remote Desktop Trap:** When incidents occur, staff hand over unrestricted AnyDesk/TeamViewer access to unvetted third parties — creating an even bigger security breach.
- **Presenter Timing:** 0:30 – 1:00 (30 seconds)

#### 🎙️ Speaker Script:
> *"Consider the nurse at Kanye District Clinic. If an unverified USB flash drive is inserted into her computer, traditional antivirus might miss it if the malware is new. Proprietary zero-trust solutions like ThreatLocker exist, but they are prohibitively expensive and closed-source.  
> On the other hand, open-source giants like Linux IMA, AppArmor, and Suricata have the power to stop it, but they require a PhD in Linux sysadmin to configure.  
> Worse still, when something goes wrong, the nurse calls an IT contractor who demands full remote desktop control via AnyDesk. One stranger now has full access to confidential patient records.  
> We knew there had to be a better way."*

---

### SLIDE 3: The Solution — INSTANCES
- **Slide Title:** Zero-Trust Made Accessible & Customizable
- **Visual:** Graphic showing the core philosophy:
  - `Default-Allow (Legacy Antivirus)` $\rightarrow$ *Tries to guess bad files (always playing catch-up).*
  - `Default-Deny (INSTANCES Zero-Trust)` $\rightarrow$ *Nothing executes, reads data, or traverses networks without an explicit policy.*
- **Key Bullet Points:**
  - **Customizable Protection Matrix ($A_1–C_3$):** Tailored to device scale and data sensitivity.
  - **Two Unified Workspaces:**
    - *Threat Anticipation:* Proactive ringfencing & interactive simulation sandbox.
    - *Threat Response:* Bounded, non-invasive evidence checklists.
  - **Plain-Language Intelligence:** Translates low-level kernel telemetry into calm human advisories.
- **Presenter Timing:** 1:00 – 1:30 (30 seconds)

#### 🎙️ Speaker Script:
> *"INSTANCES is built on one unbreakable principle: **Default-Deny**.  
> Nothing executes, reads private databases, gains administrator privilege, or opens a network socket unless an explicit, auditable template permits it.  
> But unlike rigid enterprise tools, INSTANCES is **customizable** to local realities. We don't force a one-size-fits-all policy. We introduce the $A_1-C_3$ Protection Matrix, matching the size of the environment with the sensitivity of the data."*

---

### SLIDE 4: Pillar 1 — Threat Anticipation & The $A_1-C_3$ Matrix
- **Slide Title:** The $A_1–C_3$ Template Matrix
- **Visual:** The 3x3 interactive matrix graphic:
  - *Rows 1–3 (Scale):* 1 (Individual/1–5 PCs) $\rightarrow$ 2 (School/SME 5–50 PCs) $\rightarrow$ 3 (District Clinic/Hospital 50+ PCs).
  - *Columns A–C (Sensitivity):* A (Standard Public) $\rightarrow$ B (Confidential Business) $\rightarrow$ C (Critical Electronic Health Records).
  - Highlighted cell: **$C_3$ District General Hospital (Primary Demo Case)**.
- **Key Bullet Points:**
  - **Context-Aware Hardening:** A secondary school lab (A2) needs to block gaming scripts; a clinic (C3) needs to lock down patient databases and block USB mounts.
  - **Visual Policy Inspector:** View approved binaries, USB ringfencing, and network egress rules.
  - **Developer JSON Code Studio:** Write custom eBPF filters, hardware USB VID/PID rules, and review workflows.
- **Presenter Timing:** 1:30 – 2:00 (30 seconds)

#### 🎙️ Speaker Script:
> *"Here is the heart of our proactive engine: the $A_1-C_3$ Matrix.  
> Rows 1 to 3 represent the scale of the network — from a solo developer up to a district general hospital.  
> Columns A to C represent data sensitivity — from public curriculum documents to highly confidential patient medical histories.  
> Cell C3 is our clinic hero profile: it locks down USB ports, restricts network egress to verified government servers, and ensures that only certified medical software like DHIS2 or OpenMRS can ever execute."*

---

### SLIDE 5: Pillar 2 — Threat Response (The Bounded Evidence Revolution)
- **Slide Title:** Safe Response Without Remote Takeover
- **Visual:** Workflow diagram:
  - `Alert Occurs` $\rightarrow$ `Step 1: Workstation ID` $\rightarrow$ `Step 2: Auto-Syslog Diagnostic` $\rightarrow$ `Step 3: Staff Notes/Photo` $\rightarrow$ `Step 4: Sealed SHA-256 Bundle` $\rightarrow$ `Reviewer Queue`.
- **Key Bullet Points:**
  - **Replaces AnyDesk/TeamViewer:** Staff never hand over live screen control.
  - **Privacy-Preserving:** Only diagnostic security logs are extracted; zero patient health records leave the workstation.
  - **Cryptographically Sealed:** Every submission generates an immutable SHA-256 hash for forensic integrity and non-repudiation.
- **Presenter Timing:** 2:00 – 2:30 (30 seconds)

#### 🎙️ Speaker Script:
> *"When a security event occurs, INSTANCES changes the game with our **Threat Response Workspace**.  
> Instead of handing over remote screen control, the clinic nurse is guided through a **Bounded Evidence Checklist**. In four simple steps, the app verifies the workstation, automatically extracts privacy-preserving diagnostic logs, captures notes, and signs the package with a cryptographic SHA-256 seal.  
> The IT reviewer in Gaborone receives the exact diagnostic proof they need to resolve the incident, while confidential patient files remain completely untouched."*

---

### SLIDE 6: Live Product Demonstration (The 60-Second Golden Demo)
- **Slide Title:** Live Demonstration: Zero-Trust in Action
- **Visual:** Switch screen directly to live app: **`https://instances-bw.vercel.app`**
- **Live Demo Choreography:**
  1. *Screen 1 (Landing & Login):* Click **"Proceed to Login"** $\rightarrow$ Click **"Enter Threat Anticipation Workspace"**.
  2. *Screen 2 (Matrix):* Show the $A_1-C_3$ grid; click **$C_3$ Clinic Shield**.
  3. *Screen 3 (Playground):* Select *"Unauthorized USB Thumb Drive Patient Export"* $\rightarrow$ Click **"Trigger Simulation Now"**.
  4. *Screen 4 (Verdict):* Show instant **BLOCKED** badge. Toggle between **Plain Language** (*"Removable USB storage devices are blocked by Profile C3..."*) and **Technical Telemetry** (*Suricata SID / AppArmor udev block*).
  5. *Screen 5 (Response Handoff):* Click **"Escalate to Threat Response Case"** to show the bounded checklist and reviewer resolution.
- **Presenter Timing:** 2:30 – 3:30 (60 seconds)

#### 🎙️ Speaker Script (During Live Demo):
> *(Switch to browser at instances-bw.vercel.app)*  
> *"Let's see it live. We enter the Threat Anticipation workspace and inspect our C3 Clinic Profile.  
> Now, let's step into the **Instances Playground**. A rogue USB stick is plugged into Consulting Room 4 attempting to copy our patient database. We click 'Trigger Simulation'.  
> Instantly: **BLOCKED**.  
> Notice what happens next: for the clinic nurse, the system explains in plain English: 'Removable USB drives are blocked to protect patient records. No action needed.' But for our cybersecurity judges, a single click reveals the technical telemetry — our udev storage boundary and AppArmor kernel intercept.  
> With one more click, we can escalate this directly into our Threat Response workflow."*

---

### SLIDE 7: Open-Source Engine Subsystems (Under the Hood)
- **Slide Title:** How Open-Source Powers Track 1
- **Visual:** Clean 4-quadrant architectural mapping table:
  - **Allow-Listing:** Linux IMA (Integrity Measurement Architecture) + AppArmor + Windows AppLocker.
  - **Storage & Privilege Ringfencing:** udev hardware rules + SELinux strict policies.
  - **Network Boundary:** Suricata 7.0 IPS + OpenSnitch application firewall.
  - **Telemetry & Digital Forensics:** Wazuh 4.7 SIEM + osquery + Velociraptor VQL.
- **Key Bullet Points:**
  - Proven enterprise zero-trust principles realized 100% through trusted open-source signals.
  - Zero proprietary licensing fees.
  - Full data sovereignty for Botswana.
- **Presenter Timing:** 3:30 – 4:00 (30 seconds)

#### 🎙️ Speaker Script:
> *"How do we achieve this without commercial software? By orchestrating the world's most powerful open-source security primitives.  
> For execution control, we harness Linux IMA and AppArmor. For storage boundaries, we deploy udev kernel rules. For network micro-segmentation, Suricata 7.0 drops rogue egress connections. And for unified auditing, Wazuh and Velociraptor provide tamper-evident telemetry.  
> INSTANCES is the unifying, human-centric orchestration layer that makes these complex tools work together seamlessly."*

---

### SLIDE 8: Track 2 — The Instances Community & Future Horizon
- **Slide Title:** Track 2: Community Hub & The Next Frontier
- **Visual:** Screenshot / graphic of the Track 2 Hub:
  - *Instances Community Leaderboard:* Templates ranked by **Utility Score (e.g. 98/100)**, downloads, and upvotes.
  - *Advanced Capabilities:*
    - **Parent-Child Process Ringfencing:** Blocking Office apps from launching PowerShell.
    - **Just-In-Time (JIT) Elevation Control:** 15-minute temporary admin tokens instead of permanent root.
    - **Operational Mode Switching:** Learning $\leftrightarrow$ Secured $\leftrightarrow$ Maintenance.
- **Key Bullet Points:**
  - **Public Template Marketplace:** Developers across Botswana can publish, audit, and share hardened profiles.
  - **Utility Ranking System:** Community-vetted scores based on security coverage and battle-tested validation.
  - **Extending Zero-Trust:** Going beyond standard baselines to eliminate process hollowing and standing privileges.
- **Presenter Timing:** 4:00 – 4:30 (30 seconds)

#### 🎙️ Speaker Script:
> *"Today's MVP is Track 1. But our vision extends to **Track 2: The Instances Community**.  
> We have built an open template marketplace where developers across Botswana can create custom protection profiles, publish them, and compete on our **Utility Ranking Leaderboard**.  
> Furthermore, Track 2 incorporates extended capabilities: **Parent-Child Ringfencing** that prevents Word documents from spawning command shells, **Just-In-Time Elevation** giving temporary 15-minute admin tokens, and **Operational Mode Switching** for fleet lifecycles."*

---

### SLIDE 9: Impact, Feasibility & Hackathon Alignment
- **Slide Title:** Empowering Botswana's Digital Future
- **Visual:** Map of Botswana with impact nodes (Gaborone, Kanye, Francistown, Maun) highlighting:
  - *Clinics & Hospitals (Healthcare Track Synergy)*
  - *Schools & Community Centers (Education)*
  - *Local Councils & SMEs (Economic Protection)*
- **Key Bullet Points:**
  - **Track 01 Alignment:** Directly strengthens digital defense and safeguards critical community systems.
  - **Zero Hardware Overhead:** Runs on existing computers; no expensive proprietary appliances needed.
  - **National Cyber Sovereignty:** Botswana controls its own security profiles, evidence data, and community templates.
- **Presenter Timing:** 4:30 – 4:50 (20 seconds)

#### 🎙️ Speaker Script:
> *"INSTANCES is not just a coding exercise; it is an economic and national defense solution.  
> By removing license fees and replacing complex CLIs with intuitive plain-language workflows, we enable every rural clinic, municipal office, and secondary school to defend itself against modern cyber threats.  
> This is digital security built by Botswana, for Botswana, on open-source foundations."*

---

### SLIDE 10: Conclusion & Call to Action
- **Slide Title:** INSTANCES: Defend Proactively. Respond Accountably.
- **Visual:** Bold closing card:
  - Live URL: **`https://instances-bw.vercel.app`**
  - Team Name & University of Botswana / UniPod Affiliation
  - "Thank You / Questions & Answers"
- **Presenter Timing:** 4:50 – 5:00 (10 seconds)

#### 🎙️ Speaker Script:
> *"INSTANCES is live right now at **instances-bw.vercel.app**.  
> We invite the judges to test our matrix, simulate attacks in our playground, and explore our community hub.  
> Thank you, and we look forward to your questions!"*

---

## 🛡️ Judge Q&A Cheat Sheet (Bulletproof Answers)

### Q1: "How is this different from just installing Wazuh, Suricata, or AppArmor on a machine?"
> **Answer:** *"Wazuh, Suricata, and AppArmor are fantastic engines, but they are completely siloed and inaccessible to non-technical users. A clinic nurse or school principal cannot write AppArmor abstractions or configure Suricata rulesets.  
> INSTANCES is the **orchestration, customization, and translation layer**. It translates high-level organizational profiles (like our C3 Clinic Profile) into unified zero-trust enforcement across execution, storage, and network boundaries, and gives operators plain-language insights rather than a terrifying wall of raw alerts."*

### Q2: "What prevents a malicious developer from publishing a rogue template on the Track 2 Community Hub?"
> **Answer:** *"Every community template undergoes our **Utility & Verification Pipeline**:  
> 1. Syntactic validation against our strict JSON schema.  
> 2. Automated behavior testing in our Track 2 Detonation Sandbox.  
> 3. A community Utility Ranking score that requires cryptographic author verification before a profile can be marked with our 'Verified' badge.  
> Furthermore, users can inspect the complete JSON policy in our Code Studio before deploying."*

### Q3: "How does the Bounded Evidence Checklist prevent data leaks if the computer is already compromised?"
> **Answer:** *"Traditional incident response relies on remote desktop tools like AnyDesk or TeamViewer. That means the remote technician has unrestricted read access to the entire file system — including patient health records.  
> Our Bounded Evidence Collection runs locally as a sandboxed instance. It extracts **only** pre-defined security diagnostic audit logs (such as the specific kernel block event) and staff notes, seals the bundle with a SHA-256 cryptographic hash, and routes it to verified reviewers. Private medical records never leave the local storage boundary."*

### Q4: "Is this scalable from a 5-PC school lab to an entire hospital?"
> **Answer:** *"Yes! That is the core purpose of our $A_1-C_3$ Matrix. Scale 1 is designed for individual consultants and micro-offices with 1 to 5 PCs. Scale 2 covers school labs and SMEs with 5 to 50 terminals. Scale 3 is engineered for enterprise hospitals and municipal district networks with hundreds of nodes."*

---

## 📋 Hackathon Presentation Checklist

- [ ] Open **`https://instances-bw.vercel.app`** in your browser beforehand in a dedicated tab.
- [ ] Have the browser pre-set to full screen (`F11`).
- [ ] Test the 1-click playground simulation in advance to ensure instant loading.
- [ ] Keep a backup local server running on `http://localhost:5173` just in case venue Wi-Fi fluctuates.
- [ ] Rehearse the 3-minute pitch once with a timer!
