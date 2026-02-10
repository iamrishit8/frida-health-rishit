# FRIDA — Fostering Research, Impact, Development & Advocacy

FRIDA is a health policy think tank based in New Delhi.  
This repository contains the source code for the official **FRIDA Health** website.

The website functions as a public-facing platform to present FRIDA’s research, policy engagement, and advocacy work—bridging rigorous evidence with legislative and institutional action.

---

## Project Overview

The FRIDA website is designed to support both public communication and policy outreach. Core objectives include:

- **Research Repository**  
  A structured library of policy briefs, reports, and commentaries with gated PDF downloads for lead capture.

- **Advocacy & Campaigns**  
  Dedicated sections highlighting ongoing initiatives aimed at influencing health policy and governance.

- **Parliamentary Forum**  
  Visualizations and dashboards showcasing legislative engagement, consultations, and policy dialogue.

- **Events & Media**  
  Coverage of summits, roundtables, workshops, and press mentions.

---

## Tech Stack

- **Framework:** React (via Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Routing:** React Router

---

## Getting Started

Follow the steps below to run the project locally.

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

1. **Clone the repository**
   git clone <YOUR_GIT_URL>
   cd frida-health-rishit

2. **Install dependencies**
   npm install

3. **Run the development server**
   npm run dev

4. **Build for production**
   npm run build

---

## Project Structure
src/
├── components/   # Reusable UI components (Navbar, Footer, shadcn primitives)
├── pages/        # Route-level pages (Home, About, Research, Advocacy, etc.)
├── lib/          # Shared utilities and configuration
└── assets/       # Static assets

---

## Notes on Research Downloads

* Research PDFs are served from the `public/` directory.
* Downloads are gated using a Google Form submission captured via a hidden iframe.
* User details are collected before triggering the file download to support outreach and analytics.

---

## Contact

For development-related queries or contributions, please contact the repository owner.

---