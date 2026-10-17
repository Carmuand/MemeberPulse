# MemberPulse

> **Spot the drop. Step in. Keep them moving.**

MemberPulse is a member-retention dashboard for boutique fitness studios (Pilates, CrossFit, martial arts). It tracks attendance and flags the members who are losing motivation **weeks before they cancel** — so staff can reach out at the right moment instead of reacting after the cancellation.

This repository contains a **zero-dependency interactive demo** built with plain HTML, CSS and JavaScript. No build step, no backend, no install.

---

## ✨ Features

- **Risk queue** — members auto-sorted by risk level (High / Medium / Stable / Saved) with an 8-week attendance trend for each.
- **Honest, simple signals** — risk is explained in plain words, not a black-box score: a 30%+ dip from a member's usual rhythm raises a flag, 50%+ is high risk.
- **Attendance trend chart** — hand-drawn on `<canvas>`, comparing the last 2 weeks against the member's baseline ("usual rhythm").
- **Suggested next step + editable message** — ready-to-send, personalized outreach text for each member.
- **Live alert hero** — the pitch's core insight, visualized: from 3× a week to almost zero.
- **Weekly simulator** — "Simulate 1 week →" advances the data to show how new alerts appear over time (great for live demos).
- **Demo login** — local-only sign-in screen (any credentials work), remembers the session, with a log-out chip.
- **EN / ES language toggle** — the entire UI, insights, and generated messages switch language on the fly.
- **Brand palette** — colors lifted directly from the MemberPulse pitch deck (deep navy `#0A2135`, coral `#F9543A`).

---

## 🚀 Run it

No installation needed.

```bash
git clone https://github.com/<your-username>/memberpulse.git
cd memberpulse
```

Then just **open `index.html`** in any browser (double-click works).

Optional — serve it locally:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

---

## 🖥️ Demo guide (5 minutes)

1. **Sign in** — any name/email/password works, or click *Use demo account*.
2. **Hero** — "What if you knew first?" shows the live high-risk alerts.
3. **Click a member** in the risk queue → see their attendance trend and plain-language insight.
4. **Read the suggested next step**, tweak the message, hit **Send message ✓**.
5. **Simulate 1 week →** to watch new alerts appear (proactive, not reactive).
6. **Toggle EN / ES** to show the app in both languages.
7. Close on **Pricing**: keeping a single member a month covers the subscription.

---

## 📁 Project structure

```
memberpulse/
├── index.html      # Layout: login, landing sections, dashboard
├── styles.css      # Pitch-matched theme (navy + coral), responsive
├── app.js          # Fictional data, risk engine, i18n (EN/ES), demo login
└── docs/
    ├── MemberPulse Pitch.pdf
    └── Pitch Structure - Week 5.pdf
```

---

## 🧠 How the risk engine works

For each member we compare the **last 2 weeks** against a **baseline** (the average of the previous 6 weeks):

| Condition | Level |
|---|---|
| ~0 visits while usually active, or drop ≥ 50% | **High** |
| Drop 30–49% | **Medium** |
| Otherwise | **Stable** |
| Recovered after staff outreach | **Saved** |

The logic lives in `riskOf()` in [`app.js`](app.js). It is intentionally transparent — a studio owner should be able to understand *why* someone was flagged.

---

## ⚠️ Disclaimer

All member data in this demo is **fictional** and generated in the browser. There is no backend; the "login" stores only a name in `localStorage`. This is a product demo, not a production system.

---

## 📄 License

Released for demonstration purposes. See the pitch deck in [`docs/`](docs) for the full product vision.
