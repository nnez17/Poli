# PRD — LaporWarga Presentation Deck
## Elektro Expo 2026 — UI/UX Application for High School / Vocational High School

> **Document:** Product Requirements Document for the final presentation  
> **Primary output:** `index.html` as a web-based presentation deck  
> **Format:** 16:9, fullscreen, keyboard navigation, visual-first  
> **Competition theme:** LaporWarga Website Prototype for Fast, Transparent, and Integrated Public Complaint Services

---

# 1. Product Overview

## 1.1 Product Name

**LaporWarga**

A public complaint website that helps citizens report problems in their surroundings easily, track the progress of their reports transparently, and connect complaints with the responsible parties.

## 1.2 Competition Context

The presentation is prepared for the final round of **Elektro Expo 2026 — UI/UX Application for High School / Vocational High School**, organized by the Electrical Engineering Department of Politeknik Negeri Semarang.

The official competition theme is:

> **LaporWarga Website Prototype for Fast, Transparent, and Integrated Public Complaint Services.**

The Grand Final is scheduled for **September 2, 2026**.

## 1.3 Presentation Goals

The deck must:

1. Explain the problem being solved.
2. Show that the design was created based on user needs.
3. Visualize the design process from research → IA → LFW → HFW.
4. Explain how LaporWarga is used.
5. Highlight why the team's design solution is worth choosing.
6. Lead the judges naturally toward the prototype/demo.

The deck is not merely process documentation. It must work as a **story-driven product presentation**.

---

# 2. Design Direction

## 2.1 Core Principles

The presentation must feel like part of the **LaporWarga** product ecosystem, not a generic PowerPoint template.

Use a visual character that is:

- clean
- modern
- civic-tech
- trustworthy
- friendly
- card-based
- rounded
- spacious
- visual-first

## 2.2 Relationship to LaporWarga UI/UX

The deck must inherit the visual language of the LaporWarga prototype in Figma.

Preserve these elements whenever the Figma assets are available:

- primary colors
- accent colors
- typography
- card radius
- button shapes
- icon style
- illustration style
- imagery
- spacing
- navigation treatment
- report status treatment
- visual hierarchy

Do not create a deck theme that conflicts with the prototype.

## 2.3 Visual Adaptation for Presentation

The application UI may be used as the main visual element.

Example:

```text
┌──────────────────────────────────────────────────────────────┐
│  LAPORWARGA                                      03 / 11     │
│                                                              │
│  The Problem                                                  │
│  When citizens see a problem,                                │
│  the reporting process can feel complicated.                 │
│                                                              │
│                         ┌──────────────────────┐              │
│                         │     APP MOCKUP       │              │
│                         │                      │              │
│                         │      LaporWarga      │              │
│                         │                      │              │
│                         └──────────────────────┘              │
│                                                              │
│  Elektro Expo 2026                              TEAM XXXX     │
└──────────────────────────────────────────────────────────────┘
```

Use as much whitespace as possible.

---

# 3. Presentation Requirements

## 3.1 Platform

The presentation must run directly in a browser.

Target:

```text
index.html
```

Main libraries:

- Reveal.js via CDN
- Google Fonts via CDN
- Lucide Icons or another icon library via CDN
- Custom CSS
- Vanilla JavaScript

No build system is required.

## 3.2 Presentation Controls

Must support:

- Arrow Left
- Arrow Right
- Space
- Home
- End
- Fullscreen
- slide number
- progress indicator
- smooth transitions
- presenter-friendly layout

## 3.3 Responsive

Primary target:

```text
1920 × 1080
```

Must remain visually good at:

```text
1366 × 768
1920 × 1080
2560 × 1440
```

---

# 4. Slide Architecture

Target total:

**11 slides**

The sequence follows UX storytelling:

```text
Context
  ↓
Problem
  ↓
User
  ↓
Architecture
  ↓
Wireframe
  ↓
Visual Solution
  ↓
Flow
  ↓
Innovation
  ↓
Impact
  ↓
Demo
  ↓
Closing
```

---

# 5. Slide 01 — Cover

## Title

**LaporWarga**

### Subtitle

**Building faster, more transparent, and more integrated public complaint experiences.**

### Supporting Text

```text
Elektro Expo 2026
UI/UX Application — High School / Vocational High School
```

### Identity

```text
Team Name
Member 1
Member 2
Member 3
Teacher / Mentor
School
```

### Visual

Use:

- LaporWarga hero mockup
- LaporWarga logo
- decorative shapes from the application's visual identity
- minimal text

### Animation

1. Logo appears.
2. Title moves upward.
3. Mockup appears with a slight scale.
4. Team identity appears last.

---

# 6. Slide 02 — Team Identity

## Title

**Meet the Team**

### Content

Display each member as a card:

```text
[Photo / Avatar]

Name
Role

UI/UX Designer
Research
Prototype
Presentation
```

Example roles:

- Product Research
- UI/UX Designer
- Prototype & Interaction
- Presentation

### Principle

Do not create a CV.

Focus on:

> who did what in this project.

### Visual

Maximum 4 cards.

If the team has only 2–3 members, use larger cards.

---

# 7. Slide 03 — The Problem

## Title

**When problems around us do not have a clear reporting path**

### Problem Statement

Citizens can encounter various problems in their surroundings, such as:

- damaged roads
- waste
- damaged public facilities
- drainage problems
- street lighting
- environmental issues
- public services

However, the reporting experience can feel:

```text
Users do not know where to report
        ↓
The process feels complicated
        ↓
Users do not know whether the report has been received
        ↓
Users do not know who is handling it
        ↓
Trust in the process decreases
```

### Key Message

> **The problem is not only how citizens submit reports, but how they know their reports are actually moving forward.**

### Visual

Use two sides:

```text
BEFORE

Citizen
  ↓
Confused
  ↓
Different channels
  ↓
No visibility

VS

DESIRED

Citizen
  ↓
Report
  ↓
Verified
  ↓
Processed
  ↓
Resolved
```

---

# 8. Slide 04 — User Persona

## Title

**Who uses LaporWarga?**

### Primary Persona

**Name:** Budi / Sinta  
**Age:** 20–35  
**Status:** Active citizen / employee / student  
**Digital Behavior:** Comfortable using smartphones and digital services.

### Goals

- report problems quickly
- know report progress
- make sure the report reaches the responsible party
- see the outcome

### Pain Points

- repetitive reporting process
- uncertainty about the correct category
- unclear location input
- unclear progress updates
- fear that the report will not be followed up

### Needs

- simple process
- clear status information
- proof of submission
- progress updates
- transparency

### Quote

> “I just want to report a problem and know whether it is actually being handled.”

### Visual

Use one large persona card with:

```text
Avatar
Name
Age
Occupation
Goals
Pain Points
Needs
Quote
```

---

# 9. Slide 05 — Information Architecture

## Title

**Simplifying the structure of the user experience**

### IA

Use this structure:

```text
LaporWarga
│
├── Home
│   ├── Overview
│   ├── Latest Reports
│   ├── Categories
│   └── Create Report CTA
│
├── Create Report
│   ├── Category
│   ├── Description
│   ├── Photo
│   ├── Location
│   └── Review
│
├── My Reports
│   ├── All
│   ├── In Progress
│   ├── Resolved
│   └── Report Detail
│
├── Map
│   └── Nearby Reports
│
└── Profile
    ├── User Data
    ├── Notifications
    └── Settings
```

### Design Goal

The information architecture should allow users to find key functions without needing to understand the bureaucracy behind the system.

### Key Message

> **Complexity stays behind the system; the citizen experience stays simple.**

---

# 10. Slide 06 — Low Fidelity Wireframe

## Title

**We started with structure, not color**

### Content

Show several wireframes:

```text
HOME
┌───────────────┐
│ Header        │
│               │
│ Hero          │
│               │
│ Categories    │
│               │
│ Reports       │
└───────────────┘


CREATE REPORT
┌───────────────┐
│ Category      │
│               │
│ Description   │
│               │
│ Photo         │
│               │
│ Location      │
└───────────────┘


REPORT DETAIL
┌───────────────┐
│ Report        │
│               │
│ Timeline      │
│               │
│ Status        │
└───────────────┘
```

### Annotation

Use 3–4 callouts:

- primary CTA is easy to find
- form is broken into manageable steps
- status information is prioritized
- report details are easy to scan

### Key Message

> **Low fidelity helps us validate the flow and information structure before polishing the visuals.**

---

# 11. Slide 07 — High Fidelity Prototype

## Title

**From wireframe to a real experience**

### Visual

This should be one of the largest slides.

Show:

- Home
- Create Report
- Report Detail
- Dashboard / Status
- Map

Use browser/device mockups.

### Layout

```text
                LAPORWARGA
       High Fidelity Prototype

   ┌─────────┐   ┌─────────┐   ┌─────────┐
   │ HOME    │   │ REPORT  │   │ DETAIL  │
   │         │   │         │   │         │
   │         │   │         │   │         │
   └─────────┘   └─────────┘   └─────────┘
```

### UI Principle

Use the actual Figma screens as much as possible.

Do not replace the screens with generic mockups.

---

# 12. Slide 08 — User Flow

## Title

**From discovering a problem to seeing it resolved**

### User Flow

```text
DISCOVER
PROBLEM
   ↓
OPEN
LAPORWARGA
   ↓
CREATE
REPORT
   ↓
SELECT
CATEGORY
   ↓
ADD
DETAILS + PHOTO
   ↓
SET
LOCATION
   ↓
SUBMIT
REPORT
   ↓
VERIFICATION
   ↓
IN PROGRESS
   ↓
RESOLVED
```

### UX Highlight

Every stage provides feedback.

Example:

```text
Submitted
    ↓
Verified
    ↓
In Progress
    ↓
Resolved
```

### Key Message

> **Users do not simply “send a report”; they can follow its entire journey.**

---

# 13. Slide 09 — Design Advantages & Innovation

## Title

**What makes LaporWarga different?**

### Innovation 01 — Transparent Status

Users can clearly see the report status.

```text
Submitted
  →
Verified
  →
In Progress
  →
Resolved
```

### Innovation 02 — Location-Based Reporting

Location becomes an essential part of the report so issues can be found and grouped more easily.

### Innovation 03 — Human-Friendly Reporting

Language and flow are designed around how citizens think, rather than around bureaucratic system structures.

### Innovation 04 — Visual Feedback

Status uses visual hierarchy, badges, timelines, icons, and progress indicators.

### Innovation 05 — Community Visibility

Reports can become shared information so citizens can understand issues happening around them.

### Key Message

> **We designed not only to receive reports, but to build trust in what happens after reporting.**

---

# 14. Slide 10 — Impact & Value

## Title

**One report → one piece of information → one action**

### For Citizens

- easier reporting
- progress visibility
- greater certainty
- stronger sense of being heard

### For Government / Staff

- more structured reports
- clearer categories
- more accurate locations
- trackable processes

### For the Community

- problems become visible faster
- issue data becomes more organized
- citizens participate more actively

### Diagram

```text
CITIZENS
  ↓
STRUCTURED REPORTS
  ↓
BETTER DATA
  ↓
MORE TARGETED ACTION
  ↓
BETTER ENVIRONMENT
```

---

# 15. Slide 11 — Demo & Closing

## Part A — Demo

### Title

**Let's see it in action**

Subtitle:

> From the first report to a resolved status.

Use only one large visual:

**main prototype mockup**

Then the presenter moves into the actual prototype.

## Part B — Closing

After the demo, return to:

# **LaporWarga**

### Closing Statement

> **Because every problem deserves to be heard, and every report deserves certainty.**

Footer:

```text
Elektro Expo 2026
UI/UX Application
[Team Name]
```

---

# 16. Presentation Storytelling

The presenter should not read the slide text.

Use this speaking structure:

```text
SLIDE
  ↓
Problem
  ↓
Explain
  ↓
Evidence / visual
  ↓
Conclusion
  ↓
Transition
```

Example transitions:

### Problem → Persona

> “After understanding the problem, we needed to understand who experiences it most.”

### Persona → IA

> “From these needs, we started defining the information users actually need.”

### IA → LFW

> “Once the structure was clear, we tested the flow first through wireframes.”

### LFW → HFW

> “When the flow worked, we translated it into the final visual interface.”

### HFW → Flow

> “But a good design is not only about how it looks, but how the user moves through the entire process.”

### Flow → Innovation

> “From this flow, we identified the parts that became the core value of LaporWarga.”

---

# 17. Visual System for HTML Presentation

## 17.1 Background

Use the LaporWarga visual identity as the presentation background.

If the original Figma colors are not yet available, use:

```css
--bg: #F8FAFC;
--surface: #FFFFFF;
--text: #0F172A;
--muted: #64748B;
--primary: #2563EB;
--primary-soft: #DBEAFE;
--border: #E2E8F0;
```

**Note:** these tokens are fallbacks. Once the Figma assets are accessible, replace them with the actual prototype colors.

## 17.2 Typography

Priority:

```text
Inter
or
Plus Jakarta Sans
```

Hierarchy:

```text
Hero       64–76px
Slide H1   42–54px
H2         28–36px
Body       18–22px
Caption    13–16px
```

## 17.3 Radius

Use large rounded corners:

```css
--radius-sm: 12px;
--radius-md: 18px;
--radius-lg: 28px;
```

## 17.4 Shadow

Use very subtle shadows:

```css
box-shadow:
  0 16px 40px rgba(15, 23, 42, 0.08);
```

Avoid heavy shadows.

---

# 18. HTML Architecture

Use Reveal.js.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>LaporWarga — Elektro Expo 2026</title>

  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.css"
  />

  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/theme/white.css"
  />

  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
  />

  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin
  />

  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
    rel="stylesheet"
  />
</head>
```

---

# 19. HTML Slide Components

Create reusable CSS classes/components:

```text
.slide-shell
.section-label
.slide-title
.slide-subtitle
.card
.persona-card
.mockup
.phone-frame
.browser-frame
.timeline
.flow-node
.feature-card
.team-card
.badge
.progress
.footer
```

Example:

```html
<section>
  <div class="slide-shell">

    <span class="section-label">
      03 / PROBLEM
    </span>

    <h1 class="slide-title">
      When the problems around us
      have no clear reporting path.
    </h1>

    <div class="problem-layout">
      ...
    </div>

  </div>
</section>
```

---

# 20. Motion Direction

Use subtle animations.

Priority:

```text
fade
fade-up
scale
slide
```

Duration:

```text
350–700ms
```

Easing:

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

Do not use:

- excessive bounce
- excessive rotation
- distracting animation
- slow transitions

The presentation should feel premium and professional.

---

# 21. Asset Requirements

## 21.1 Asset Folder

All photos, screenshots, logos, illustrations, wireframes, and prototype images used by the presentation **must be stored inside `public/`**.

Do not create another asset folder.

Recommended structure:

```text
public/
├── logo/
│   ├── laporwarga.png
│   └── polines.png
│
├── team/
│   ├── member-1.png
│   ├── member-2.png
│   └── member-3.png
│
├── persona/
│   └── persona.png
│
├── wireframe/
│   ├── home.png
│   ├── create-report.png
│   └── report-detail.png
│
└── prototype/
    ├── home.png
    ├── create-report.png
    ├── report-detail.png
    ├── map.png
    └── profile.png
```

## 21.2 Usage Rules

Use relative paths such as:

```html
<img src="./public/prototype/home.png" alt="LaporWarga Home">
```

Never:

- move presentation images outside `public/`
- create another asset directory
- use base64/data URI for local presentation images when a file can be used
- stretch screenshots

## 21.3 Asset Sources

Priority:

1. Export directly from Figma.
2. Use high-resolution screenshots.
3. Avoid small or blurry screenshots.
4. Keep cropping consistent.
5. Do not stretch screenshots.

---

# 22. Content Rules

Every slide must answer one question.

```text
Cover
→ What did we build?

Team
→ Who are we?

Problem
→ What problem are we solving?

Persona
→ Who is it for?

IA
→ How is the information structured?

LFW
→ How did we structure the flow?

HFW
→ What does the final solution look like?

Flow
→ How does the user use it?

Innovation
→ Why is our solution different?

Impact
→ What value does it create?

Demo
→ How does the product work?
```

---

# 23. Do / Don't

## DO

- use the prototype as the main visual
- use whitespace
- use hierarchy
- show the design process
- show before/after
- use large mockups
- use subtle animation
- make every slide understandable within 3–5 seconds

## DON'T

- use long paragraphs
- use too many colors
- use generic PowerPoint templates
- show every screen at once without hierarchy
- use overly small fonts
- overuse animation
- put the entire proposal into the slides

---

# 24. Final Acceptance Criteria

The presentation is considered complete when:

- [ ] It runs directly from `index.html`.
- [ ] It does not require npm/build.
- [ ] Fullscreen works.
- [ ] Slides can be navigated using the keyboard.
- [ ] Aspect ratio is 16:9.
- [ ] All 11 slides are implemented.
- [ ] Team identity can be changed easily.
- [ ] Figma assets can be replaced without restructuring the HTML.
- [ ] The deck is visually consistent with LaporWarga UI/UX.
- [ ] There is no lorem ipsum.
- [ ] No placeholder content remains before presentation.
- [ ] All text is readable from presentation distance.
- [ ] The prototype/demo can be opened from the demo slide.
- [ ] The last slide has a strong closing statement.

---

# 25. Implementation Priority

## P0 — Required

1. Reveal.js setup.
2. 11 slides.
3. Keyboard navigation.
4. Fullscreen.
5. Responsive 16:9.
6. Final content.
7. LaporWarga visual identity.
8. Prototype screenshots.
9. Flow diagram.
10. High fidelity mockups.

## P1 — Highly Recommended

1. Slide transitions.
2. Progress indicator.
3. Animated timeline.
4. Browser/device mockup.
5. Demo link.
6. Presenter-friendly controls.

## P2 — Nice to Have

1. Ambient background animation.
2. Interactive cursor effect.
3. Mini navigation overview.
4. Keyboard shortcut overlay.

---

# 26. Important Notes

This document uses the official Elektro Expo 2026 context as the basis for the presentation theme and requirements.

Specific material from the Figma design and Google Docs should be treated as the **source of truth** for:

- team name
- member names
- final colors
- final typography
- prototype screens
- final persona
- final IA
- research findings
- terminology
- features
- product wording

Do not invent research numbers, usability-testing results, response counts, or product success claims when they are not present in the original sources.

---

# 27. Final Presentation Thesis

The whole presentation should lead to one central idea:

> **LaporWarga is not simply a place to submit complaints. It is designed to make citizens feel that their reports are seen, processed, and given clear outcomes.**
