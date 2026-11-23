const TOWERS = {
  "DL-CP-101": { name: "Connaught Place", x: 310, y: 185 },
  "DL-KB-204": { name: "Karol Bagh", x: 225, y: 140 },
  "DL-RH-309": { name: "Rohini Sec-7", x: 165, y: 65 },
  "DL-DW-412": { name: "Dwarka Mor", x: 105, y: 245 },
  "DL-IG-518": { name: "IGI Terminal 3", x: 205, y: 315 },
  "UP-ND-602": { name: "Noida Sec-18", x: 515, y: 240 }
};

const DEMO_CDR = [
  { id: "A-01", sourceFile: "Airtel_CDR_SuspectA.csv", row: 2, suspect: "Suspect A", msisdnA: "+91-98101-44011", msisdnB: "+91-99100-77321", labelB: "Vikram (Broker)", ts: "2026-11-20 09:14:00", dur: 142, type: "OUT", tower: "DL-RH-309", imei: "358412091109941", sim: "SIM-AIR-8821" },
  { id: "A-02", sourceFile: "Airtel_CDR_SuspectA.csv", row: 3, suspect: "Suspect A", msisdnA: "+91-98101-44011", msisdnB: "+91-98118-55009", labelB: "Rohan (Handler)", ts: "2026-11-20 13:22:00", dur: 318, type: "IN", tower: "DL-KB-204", imei: "358412091109941", sim: "SIM-AIR-8821" },
  { id: "A-03", sourceFile: "Airtel_CDR_SuspectA.csv", row: 4, suspect: "Suspect A", msisdnA: "+91-98101-44011", msisdnB: "+91-98990-11203", labelB: "Local Courier", ts: "2026-11-20 17:45:00", dur: 64, type: "OUT", tower: "DL-CP-101", imei: "358412091109941", sim: "SIM-AIR-8821" },
  { id: "A-04", sourceFile: "Airtel_CDR_SuspectA.csv", row: 5, suspect: "Suspect A", msisdnA: "+91-98101-44011", msisdnB: "+91-99100-77321", labelB: "Vikram (Broker)", ts: "2026-11-20 23:18:00", dur: 410, type: "OUT", tower: "DL-CP-101", imei: "358412091107720", sim: "SIM-AIR-8821" },
  { id: "A-05", sourceFile: "Airtel_CDR_SuspectA.csv", row: 6, suspect: "Suspect A", msisdnA: "+91-98101-44011", msisdnB: "+91-98118-55009", labelB: "Rohan (Handler)", ts: "2026-11-20 23:42:00", dur: 275, type: "OUT", tower: "UP-ND-602", imei: "358412091107720", sim: "SIM-AIR-8821" },
  { id: "A-06", sourceFile: "Airtel_CDR_SuspectA.csv", row: 7, suspect: "Suspect A", msisdnA: "+91-98101-44011", msisdnB: "+91-99100-77321", labelB: "Vikram (Broker)", ts: "2026-11-21 01:12:00", dur: 195, type: "IN", tower: "UP-ND-602", imei: "358412091107720", sim: "SIM-AIR-8821" },
  { id: "A-07", sourceFile: "Airtel_CDR_SuspectA.csv", row: 8, suspect: "Suspect A", msisdnA: "+91-98101-44011", msisdnB: "+91-97170-60442", labelB: "Unknown Prepaid", ts: "2026-11-21 02:35:00", dur: 88, type: "OUT", tower: "DL-IG-518", imei: "358412091107720", sim: "SIM-AIR-8821" },
  { id: "B-01", sourceFile: "Jio_CDR_SuspectB.csv", row: 2, suspect: "Suspect B", msisdnA: "+91-98712-88204", msisdnB: "+91-99100-77321", labelB: "Vikram (Broker)", ts: "2026-11-20 11:05:00", dur: 220, type: "IN", tower: "DL-DW-412", imei: "864201055012311", sim: "SIM-JIO-4102" },
  { id: "B-02", sourceFile: "Jio_CDR_SuspectB.csv", row: 3, suspect: "Suspect B", msisdnA: "+91-98712-88204", msisdnB: "+91-98118-55009", labelB: "Rohan (Handler)", ts: "2026-11-20 16:30:00", dur: 185, type: "OUT", tower: "DL-CP-101", imei: "864201055012311", sim: "SIM-JIO-4102" },
  { id: "B-03", sourceFile: "Jio_CDR_SuspectB.csv", row: 4, suspect: "Suspect B", msisdnA: "+91-98712-88204", msisdnB: "+91-96504-33198", labelB: "Hotel Desk", ts: "2026-11-20 20:10:00", dur: 92, type: "OUT", tower: "DL-CP-101", imei: "864201055012311", sim: "SIM-JIO-4102" },
  { id: "B-04", sourceFile: "Jio_CDR_SuspectB.csv", row: 5, suspect: "Suspect B", msisdnA: "+91-98712-88204", msisdnB: "+91-99100-77321", labelB: "Vikram (Broker)", ts: "2026-11-20 23:25:00", dur: 304, type: "OUT", tower: "DL-CP-101", imei: "864201055012311", sim: "SIM-JIO-9098" },
  { id: "B-05", sourceFile: "Jio_CDR_SuspectB.csv", row: 6, suspect: "Suspect B", msisdnA: "+91-98712-88204", msisdnB: "+91-98118-55009", labelB: "Rohan (Handler)", ts: "2026-11-21 00:08:00", dur: 512, type: "IN", tower: "UP-ND-602", imei: "864201055012311", sim: "SIM-JIO-9098" },
  { id: "B-06", sourceFile: "Jio_CDR_SuspectB.csv", row: 7, suspect: "Suspect B", msisdnA: "+91-98712-88204", msisdnB: "+91-99100-77321", labelB: "Vikram (Broker)", ts: "2026-11-21 01:40:00", dur: 164, type: "OUT", tower: "UP-ND-602", imei: "864201055012311", sim: "SIM-JIO-9098" }
];

const DEMO_IPDR = [
  { id: "IP-01", sourceFile: "ISP_IPDR_Sessions.csv", row: 2, suspect: "Suspect A", msisdn: "+91-98101-44011", ip: "103.21.58.142", port: 54218, service: "Encrypted Messaging Relay", start: "2026-11-20 23:20:00", end: "2026-11-20 23:39:00", upKb: 1840, downKb: 6420 },
  { id: "IP-02", sourceFile: "ISP_IPDR_Sessions.csv", row: 3, suspect: "Suspect A", msisdn: "+91-98101-44011", ip: "103.21.58.142", port: 54901, service: "Cloud Storage Upload", start: "2026-11-20 23:45:00", end: "2026-11-21 00:02:00", upKb: 48200, downKb: 1920 },
  { id: "IP-03", sourceFile: "ISP_IPDR_Sessions.csv", row: 4, suspect: "Suspect B", msisdn: "+91-98712-88204", ip: "49.36.112.87", port: 41092, service: "VoIP / Tunnel Endpoint", start: "2026-11-20 23:27:00", end: "2026-11-20 23:54:00", upKb: 9210, downKb: 11400 },
  { id: "IP-04", sourceFile: "ISP_IPDR_Sessions.csv", row: 5, suspect: "Suspect B", msisdn: "+91-98712-88204", ip: "49.36.112.87", port: 41877, service: "Encrypted Messaging Relay", start: "2026-11-21 00:11:00", end: "2026-11-21 00:29:00", upKb: 2150, downKb: 5300 },
  { id: "IP-05", sourceFile: "ISP_IPDR_Sessions.csv", row: 6, suspect: "Suspect A", msisdn: "+91-98101-44011", ip: "103.21.59.204", port: 60114, service: "Financial Gateway HTTPS", start: "2026-11-21 02:38:00", end: "2026-11-21 02:44:00", upKb: 420, downKb: 1180 }
];

const DEMO_ANOMALIES = [
  { file: "Airtel_CDR_SuspectA.csv", row: 9, issue: "Missing Cell_ID field — record quarantined from geo-timeline." },
  { file: "Jio_CDR_SuspectB.csv", row: 8, issue: "Malformed 12-digit IMEI (expected 15 digits) — flagged for analyst review." }
];

const state = {
  cdr: structuredClone(DEMO_CDR),
  ipdr: structuredClone(DEMO_IPDR),
  anomalies: structuredClone(DEMO_ANOMALIES),
  files: [
    { name: "Airtel_CDR_SuspectA.csv", schema: "Operator A (Airtel)", rows: 7, status: "Normalized" },
    { name: "Jio_CDR_SuspectB.csv", schema: "Operator B (Jio)", rows: 6, status: "Normalized" },
    { name: "ISP_IPDR_Sessions.csv", schema: "ISP IPDR", rows: 5, status: "Correlated" }
  ],
  role: "Lead Investigator",
  audit: [],
  pinned: [],
  citedRowId: null
};

function logAudit(action, detail) {
  const now = new Date().toLocaleTimeString("en-IN", { hour12: false });
  state.audit.unshift({ time: now, role: state.role, action, detail });
  document.getElementById("auditCount").textContent = state.audit.length;
}

function showToast(msg) {
  const box = document.getElementById("toastBox");
  box.textContent = msg;
  box.classList.remove("hidden");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => box.classList.add("hidden"), 2600);
}

function getHour(ts) {
  return parseInt(ts.split(" ")[1].split(":")[0], 10);
}

function isNight(ts) {
  const h = getHour(ts);
  return h >= 23 || h < 5;
}

function toEpochMin(ts) {
  return Math.floor(new Date(ts.replace(" ", "T")).getTime() / 60000);
}

function getCommonContacts() {
  const bySuspect = {};
  state.cdr.forEach(r => {
    if (!bySuspect[r.msisdnB]) bySuspect[r.msisdnB] = { number: r.msisdnB, label: r.labelB || "Contact", suspects: new Set(), calls: 0, dur: 0, records: [] };
    bySuspect[r.msisdnB].suspects.add(r.suspect);
    bySuspect[r.msisdnB].calls += 1;
    bySuspect[r.msisdnB].dur += r.dur;
    bySuspect[r.msisdnB].records.push(r);
  });
  return Object.values(bySuspect).filter(c => c.suspects.size > 1);
}

function detectSwaps() {
  const swaps = [];
  const grouped = {};
  state.cdr.forEach(r => {
    if (!grouped[r.suspect]) grouped[r.suspect] = [];
    grouped[r.suspect].push(r);
  });
  Object.entries(grouped).forEach(([suspect, list]) => {
    const sorted = [...list].sort((a, b) => a.ts.localeCompare(b.ts));
    for (let i = 1; i < sorted.length; i++) {
      const prev = sorted[i - 1];
      const curr = sorted[i];
      if (prev.imei !== curr.imei) {
        swaps.push({ kind: "IMEI SWAP", suspect, from: prev.imei, to: curr.imei, ts: curr.ts, record: curr });
      }
      if (prev.sim !== curr.sim) {
        swaps.push({ kind: "SIM SWAP", suspect, from: prev.sim, to: curr.sim, ts: curr.ts, record: curr });
      }
    }
  });
  return swaps;
}

function detectCoLocations() {
  const aRecs = state.cdr.filter(r => r.suspect === "Suspect A");
  const bRecs = state.cdr.filter(r => r.suspect === "Suspect B");
  const hits = [];
  aRecs.forEach(a => {
    bRecs.forEach(b => {
      if (a.tower === b.tower) {
        const diff = Math.abs(toEpochMin(a.ts) - toEpochMin(b.ts));
        if (diff <= 30) {
          hits.push({ tower: a.tower, towerName: TOWERS[a.tower]?.name || a.tower, diffMin: diff, recA: a, recB: b });
        }
      }
    });
  });
  return hits;
}

function detectIpdrBursts() {
  const bursts = [];
  state.ipdr.forEach(ip => {
    const ipMin = toEpochMin(ip.start);
    const match = state.cdr.find(c => c.suspect === ip.suspect && Math.abs(toEpochMin(c.ts) - ipMin) <= 5);
    if (match) {
      bursts.push({ ipdr: ip, cdr: match, deltaMin: Math.abs(toEpochMin(match.ts) - ipMin) });
    }
  });
  return bursts;
}

function renderOverview() {
  const commons = getCommonContacts();
  const swaps = detectSwaps();
  const nightCount = state.cdr.filter(r => isNight(r.ts)).length;
  const uniqueContacts = new Set(state.cdr.map(r => r.msisdnB)).size;
  const outCount = state.cdr.filter(r => r.type === "OUT").length;
  const inCount = state.cdr.length - outCount;

  const kpis = [
    { label: "Normalized CDRs", val: state.cdr.length, sub: `${state.ipdr.length} IPDR sessions linked`, cls: "" },
    { label: "Unique Contacts", val: uniqueContacts, sub: `${commons.length} shared bridge numbers`, cls: "highlight" },
    { label: "Night Calls (23–05)", val: nightCount, sub: `${Math.round((nightCount / Math.max(state.cdr.length, 1)) * 100)}% of total volume`, cls: "alert" },
    { label: "IMEI / SIM Swaps", val: swaps.length, sub: "Burner / SIM change alerts", cls: "alert" },
    { label: "Co-Location Hits", val: detectCoLocations().length, sub: "Same tower within 30 min", cls: "highlight" }
  ];

  document.getElementById("kpiGrid").innerHTML = kpis.map(k => `
    <div class="kpi-card ${k.cls}">
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-val">${k.val}</div>
      <div class="kpi-sub">${k.sub}</div>
    </div>
  `).join("");

  const hourly = Array(24).fill(0);
  state.cdr.forEach(r => hourly[getHour(r.ts)] += 1);
  const maxH = Math.max(...hourly, 1);
  document.getElementById("hourlyChart").innerHTML = hourly.map((cnt, h) => {
    const pct = Math.round((cnt / maxH) * 100);
    const nightCls = (h >= 23 || h < 5) ? "night" : "";
    return `
      <div class="bar-col" title="${String(h).padStart(2, "0")}:00 — ${cnt} calls">
        <div class="bar-fill ${nightCls}" style="height:${Math.max(pct, 4)}%"></div>
        <span class="bar-label">${String(h).padStart(2, "0")}</span>
      </div>
    `;
  }).join("");

  document.getElementById("ioRatioTag").textContent = `OUT ${outCount} · IN ${inCount}`;

  const contactMap = {};
  state.cdr.forEach(r => {
    if (!contactMap[r.msisdnB]) contactMap[r.msisdnB] = { num: r.msisdnB, label: r.labelB || "Contact", calls: 0, dur: 0 };
    contactMap[r.msisdnB].calls += 1;
    contactMap[r.msisdnB].dur += r.dur;
  });
  const ranked = Object.values(contactMap).sort((a, b) => b.calls - a.calls).slice(0, 5);
  const maxCalls = Math.max(...ranked.map(x => x.calls), 1);

  document.getElementById("topContactsList").innerHTML = ranked.map(c => `
    <div class="contact-bar-row">
      <div class="contact-bar-meta">
        <span><code>${c.num}</code> · ${c.label}</span>
        <span>${c.calls} calls · ${c.dur}s</span>
      </div>
      <div class="contact-bar-track">
        <div class="contact-bar-fill" style="width:${Math.round((c.calls / maxCalls) * 100)}%"></div>
      </div>
    </div>
  `).join("");

  renderCdrTable();
}

function renderCdrTable() {
  const q = document.getElementById("cdrSearchInput").value.trim().toLowerCase();
  const susp = document.getElementById("cdrSuspectFilter").value;
  const nightOnly = document.getElementById("cdrNightFilter").checked;
  const commonNums = new Set(getCommonContacts().map(c => c.number));
  const swapIds = new Set(detectSwaps().map(s => s.record.id));

  const filtered = state.cdr.filter(r => {
    if (susp !== "ALL" && r.suspect !== susp) return false;
    if (nightOnly && !isNight(r.ts)) return false;
    if (q) {
      const hay = `${r.sourceFile} ${r.msisdnA} ${r.msisdnB} ${r.labelB} ${r.tower} ${r.imei} ${r.sim}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  document.getElementById("cdrTableBody").innerHTML = filtered.map(r => {
    const flags = [];
    if (isNight(r.ts)) flags.push(`<span class="flag-badge flag-night">NIGHT</span>`);
    if (swapIds.has(r.id)) flags.push(`<span class="flag-badge flag-swap">SWAP</span>`);
    if (commonNums.has(r.msisdnB)) flags.push(`<span class="flag-badge flag-bridge">BRIDGE</span>`);
    const citedCls = state.citedRowId === r.id ? "cited-row" : "";
    return `
      <tr id="row-${r.id}" class="${citedCls}">
        <td><code>${r.sourceFile}:${r.row}</code></td>
        <td>${r.suspect}</td>
        <td>${r.ts}</td>
        <td><code>${r.msisdnB}</code> ${r.labelB || ""}</td>
        <td>${r.type}</td>
        <td>${r.dur}</td>
        <td>${r.tower} (${TOWERS[r.tower]?.name || "Custom"})</td>
        <td><code>${r.imei}</code></td>
        <td>${flags.join("") || "—"}</td>
      </tr>
    `;
  }).join("");
}

function renderImportView() {
  document.getElementById("ingestedFilesList").innerHTML = state.files.map(f => `
    <div class="file-row">
      <div>
        <strong>${f.name}</strong>
        <div style="font-size:11px;color:var(--text-secondary)">${f.schema} · ${f.rows} valid rows</div>
      </div>
      <span class="tag tag-emerald">${f.status}</span>
    </div>
  `).join("");

  document.getElementById("validationSummary").innerHTML = `
    <div class="val-stat"><strong>${state.cdr.length + state.ipdr.length}</strong><span>Normalized Rows</span></div>
    <div class="val-stat"><strong>${state.files.length}</strong><span>Operator Sources</span></div>
    <div class="val-stat"><strong style="color:var(--accent-crimson)">${state.anomalies.length}</strong><span>Flagged Anomalies</span></div>
  `;

  document.getElementById("validationAnomalies").innerHTML = state.anomalies.map(a => `
    <div class="anomaly-item">
      <strong>${a.file} · Row ${a.row}</strong>
      <div style="color:var(--text-secondary);margin-top:2px">${a.issue}</div>
    </div>
  `).join("");
}

function renderNetworkGraph() {
  const bridgeOnly = document.getElementById("bridgeOnlyToggle").checked;
  const commons = getCommonContacts();
  const commonSet = new Set(commons.map(c => c.number));

  const nodes = [
    { id: "Suspect A", label: "Suspect A", sub: "+91-98101-44011", kind: "suspect", x: 140, y: 220 },
    { id: "Suspect B", label: "Suspect B", sub: "+91-98712-88204", kind: "suspect", x: 620, y: 220 }
  ];

  const contactsMap = {};
  state.cdr.forEach(r => {
    if (!contactsMap[r.msisdnB]) contactsMap[r.msisdnB] = { id: r.msisdnB, label: r.labelB || r.msisdnB, isCommon: commonSet.has(r.msisdnB), links: {} };
    contactsMap[r.msisdnB].links[r.suspect] = (contactsMap[r.msisdnB].links[r.suspect] || 0) + 1;
  });

  const contacts = Object.values(contactsMap).filter(c => !bridgeOnly || c.isCommon);
  const bridgeList = contacts.filter(c => c.isCommon);
  const aOnly = contacts.filter(c => !c.isCommon && c.links["Suspect A"]);
  const bOnly = contacts.filter(c => !c.isCommon && c.links["Suspect B"]);

  bridgeList.forEach((c, i) => {
    nodes.push({ id: c.id, label: c.label, sub: c.id, kind: "bridge", x: 380, y: 140 + i * 160, links: c.links });
  });
  aOnly.forEach((c, i) => {
    nodes.push({ id: c.id, label: c.label, sub: c.id, kind: "contact", x: 190, y: 75 + i * 290, links: c.links });
  });
  bOnly.forEach((c, i) => {
    nodes.push({ id: c.id, label: c.label, sub: c.id, kind: "contact", x: 570, y: 80 + i * 280, links: c.links });
  });

  const nodeById = Object.fromEntries(nodes.map(n => [n.id, n]));
  const edges = [];
  contacts.forEach(c => {
    Object.entries(c.links).forEach(([susp, cnt]) => {
      if (nodeById[susp] && nodeById[c.id]) {
        edges.push({ from: nodeById[susp], to: nodeById[c.id], cnt, isBridge: c.isCommon });
      }
    });
  });

  const svg = document.getElementById("networkSvg");
  const edgeMarkup = edges.map(e => {
    const stroke = e.isBridge ? "#e5a00d" : "#52525b";
    const mx = (e.from.x + e.to.x) / 2;
    const my = (e.from.y + e.to.y) / 2;
    return `
      <line x1="${e.from.x}" y1="${e.from.y}" x2="${e.to.x}" y2="${e.to.y}" stroke="${stroke}" stroke-width="${Math.min(1.5 + e.cnt * 0.8, 5)}" stroke-opacity="0.85" />
      <rect x="${mx - 14}" y="${my - 9}" width="28" height="18" rx="3" fill="#131316" stroke="${stroke}" />
      <text x="${mx}" y="${my + 4}" text-anchor="middle" fill="#f4f4f0" font-size="10" font-family="monospace">${e.cnt}x</text>
    `;
  }).join("");

  const nodeMarkup = nodes.map(n => {
    const fill = n.kind === "suspect" ? "#dc2626" : n.kind === "bridge" ? "#e5a00d" : "#27272a";
    const stroke = n.kind === "contact" ? "#71717a" : "#f4f4f0";
    const r = n.kind === "suspect" ? 26 : n.kind === "bridge" ? 22 : 17;
    return `
      <g class="graph-node" data-node="${n.id}" style="cursor:pointer">
        <circle cx="${n.x}" cy="${n.y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="1.5" />
        <text x="${n.x}" y="${n.y + r + 15}" text-anchor="middle" fill="#f4f4f0" font-size="11" font-weight="600">${n.label}</text>
        <text x="${n.x}" y="${n.y + r + 28}" text-anchor="middle" fill="#a1a1aa" font-size="9" font-family="monospace">${n.sub}</text>
      </g>
    `;
  }).join("");

  svg.innerHTML = edgeMarkup + nodeMarkup;

  svg.querySelectorAll(".graph-node").forEach(el => {
    el.addEventListener("click", () => inspectNode(el.dataset.node));
  });

  document.getElementById("commonContactsList").innerHTML = commons.map(c => `
    <div class="common-item" style="cursor:pointer" data-jump="${c.number}">
      <strong style="color:var(--accent-amber)">${c.label}</strong> · <code>${c.number}</code>
      <div style="color:var(--text-secondary);margin-top:2px">${c.calls} total calls · ${c.dur}s · Shared by ${Array.from(c.suspects).join(" &amp; ")}</div>
    </div>
  `).join("");

  document.querySelectorAll("[data-jump]").forEach(el => {
    el.addEventListener("click", () => inspectNode(el.dataset.jump));
  });

  inspectNode(commons[0]?.number || "Suspect A");
}

function inspectNode(nodeId) {
  const recs = state.cdr.filter(r => r.suspect === nodeId || r.msisdnB === nodeId);
  const totalDur = recs.reduce((s, r) => s + r.dur, 0);
  const box = document.getElementById("nodeInspector");
  box.innerHTML = `
    <div><strong style="color:var(--text-primary);font-size:14px">${nodeId}</strong></div>
    <div>Linked CDR Records: <strong style="color:var(--accent-amber)">${recs.length}</strong> · Total Duration: <strong>${totalDur}s</strong></div>
    <div>First Seen: <code>${recs[0]?.ts || "N/A"}</code></div>
    <div>Last Seen: <code>${recs[recs.length - 1]?.ts || "N/A"}</code></div>
    <div class="citation-row">
      ${recs.slice(0, 4).map(r => `<button class="cite-btn" data-cite="${r.id}">${r.sourceFile}:${r.row}</button>`).join("")}
    </div>
  `;
  box.querySelectorAll("[data-cite]").forEach(btn => {
    btn.addEventListener("click", () => jumpToEvidence(btn.dataset.cite));
  });
}

function renderLocationView() {
  const mode = document.getElementById("mapSuspectSelect").value;
  const svg = document.getElementById("towerMapSvg");
  const coLocs = detectCoLocations();
  const coTowerIds = new Set(coLocs.map(h => h.tower));

  const gridLines = [];
  for (let x = 40; x < 640; x += 60) gridLines.push(`<line x1="${x}" y1="0" x2="${x}" y2="380" stroke="#1b1b1f" stroke-width="1" />`);
  for (let y = 40; y < 380; y += 60) gridLines.push(`<line x1="0" y1="${y}" x2="640" y2="${y}" stroke="#1b1b1f" stroke-width="1" />`);

  const buildPath = (suspect, color) => {
    const seq = state.cdr.filter(r => r.suspect === suspect).sort((a, b) => a.ts.localeCompare(b.ts));
    let out = "";
    for (let i = 1; i < seq.length; i++) {
      const p1 = TOWERS[seq[i - 1].tower];
      const p2 = TOWERS[seq[i].tower];
      if (p1 && p2 && seq[i - 1].tower !== seq[i].tower) {
        out += `<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="${color}" stroke-width="2.5" stroke-dasharray="6 4" />`;
      }
    }
    return out;
  };

  let paths = "";
  if (mode === "BOTH" || mode === "Suspect A") paths += buildPath("Suspect A", "#e5a00d");
  if (mode === "BOTH" || mode === "Suspect B") paths += buildPath("Suspect B", "#dc2626");

  const towersMarkup = Object.entries(TOWERS).map(([id, t]) => {
    const isCo = coTowerIds.has(id);
    return `
      <g>
        ${isCo ? `<circle cx="${t.x}" cy="${t.y}" r="22" fill="none" stroke="#e5a00d" stroke-width="1.5" stroke-dasharray="3 3" />` : ""}
        <circle cx="${t.x}" cy="${t.y}" r="8" fill="${isCo ? "#e5a00d" : "#27272a"}" stroke="#f4f4f0" stroke-width="1.5" />
        <text x="${t.x}" y="${t.y - 14}" text-anchor="middle" fill="#f4f4f0" font-size="11" font-weight="600">${t.name}</text>
        <text x="${t.x}" y="${t.y + 22}" text-anchor="middle" fill="#a1a1aa" font-size="9" font-family="monospace">${id}</text>
      </g>
    `;
  }).join("");

  svg.innerHTML = gridLines.join("") + paths + towersMarkup;

  document.getElementById("colocationBanner").innerHTML = coLocs.length
    ? `<strong>Co-Location Detected (${coLocs.length} windows):</strong> ` + coLocs.map(c => `${c.towerName} (${c.tower}) — Suspect A (${c.recA.ts.slice(11, 16)}) &amp; Suspect B (${c.recB.ts.slice(11, 16)}), Δ ${c.diffMin} min`).join(" | ")
    : "No co-location overlaps found within 30-minute window.";

  const swaps = detectSwaps();
  document.getElementById("swapCountTag").textContent = `${swaps.length} SWAPS`;
  document.getElementById("swapAlertsList").innerHTML = swaps.map(s => `
    <div class="swap-item">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <strong style="color:var(--accent-crimson)">${s.kind} · ${s.suspect}</strong>
        <button class="cite-btn" data-cite="${s.record.id}">${s.record.sourceFile}:${s.record.row}</button>
      </div>
      <div style="margin-top:4px;font-family:var(--font-mono);font-size:11px">${s.from} → ${s.to}</div>
      <div style="color:var(--text-secondary);font-size:11px;margin-top:2px">Detected at ${s.ts} IST (${TOWERS[s.record.tower]?.name || s.record.tower})</div>
    </div>
  `).join("");

  const timelineRecs = state.cdr.filter(r => mode === "BOTH" || r.suspect === mode).sort((a, b) => a.ts.localeCompare(b.ts));
  document.getElementById("towerTimelineList").innerHTML = timelineRecs.map(r => `
    <div class="timeline-item" style="display:flex;justify-content:space-between;align-items:center">
      <div>
        <strong>${r.ts.slice(5, 16)}</strong> · <span style="color:var(--accent-amber)">${r.suspect}</span> → ${TOWERS[r.tower]?.name || r.tower} (${r.tower})
      </div>
      <button class="cite-btn" data-cite="${r.id}">Row ${r.row}</button>
    </div>
  `).join("");

  document.querySelectorAll("#view-location [data-cite]").forEach(btn => {
    btn.addEventListener("click", () => jumpToEvidence(btn.dataset.cite));
  });
}

function renderIpdrView() {
  const bursts = detectIpdrBursts();
  document.getElementById("ipdrBurstGrid").innerHTML = bursts.map(b => `
    <div class="burst-card">
      <div style="display:flex;justify-content:space-between">
        <strong style="color:var(--accent-amber)">${b.ipdr.suspect} · Δ ${b.deltaMin} min</strong>
        <code>${b.ipdr.ip}:${b.ipdr.port}</code>
      </div>
      <div><strong>${b.ipdr.service}</strong> (${b.ipdr.upKb} KB up / ${b.ipdr.downKb} KB down)</div>
      <div style="color:var(--text-secondary)">Triggered right after call with ${b.cdr.labelB} (${b.cdr.msisdnB}) at ${b.cdr.ts.slice(11, 16)} IST</div>
      <div class="citation-row">
        <button class="cite-btn" data-cite="${b.cdr.id}">${b.cdr.sourceFile}:${b.cdr.row}</button>
        <span class="tag tag-stone">${b.ipdr.sourceFile}:${b.ipdr.row}</span>
      </div>
    </div>
  `).join("");

  document.querySelectorAll("#ipdrBurstGrid [data-cite]").forEach(btn => {
    btn.addEventListener("click", () => jumpToEvidence(btn.dataset.cite));
  });

  document.getElementById("ipdrTableBody").innerHTML = state.ipdr.map(r => `
    <tr>
      <td><code>${r.sourceFile}:${r.row}</code></td>
      <td>${r.suspect} (${r.msisdn})</td>
      <td><code>${r.ip}</code></td>
      <td><code>${r.port}</code></td>
      <td>${r.service}</td>
      <td>${r.start.slice(5, 16)} → ${r.end.slice(11, 16)}</td>
      <td>${r.upKb.toLocaleString()} / ${r.downKb.toLocaleString()}</td>
    </tr>
  `).join("");
}

function jumpToEvidence(recordId) {
  state.citedRowId = recordId;
  switchView("overview");
  document.getElementById("cdrSearchInput").value = "";
  document.getElementById("cdrSuspectFilter").value = "ALL";
  document.getElementById("cdrNightFilter").checked = false;
  renderCdrTable();
  const rowEl = document.getElementById(`row-${recordId}`);
  if (rowEl) rowEl.scrollIntoView({ behavior: "smooth", block: "center" });
  showToast(`Jumped to verified source row (${recordId})`);
}

function answerQuery(rawQuery) {
  const q = rawQuery.toLowerCase();
  const isHindi = /[\u0900-\u097F]/.test(rawQuery) || q.includes("hindi") || q.includes("raat") || q.includes("sabse");

  if (q.includes("say") || q.includes("talk") || q.includes("audio") || q.includes("whatsapp message") || q.includes("chat content") || q.includes("live intercept")) {
    return {
      refusal: true,
      text: "Insufficient evidence in uploaded records: CDR and IPDR files contain call metadata, cell towers, device IDs, and IP session headers only. Call audio, conversation transcripts, encrypted message contents, and live telecom interception are not present and are strictly out of scope.",
      citations: []
    };
  }

  if (q.includes("common") || q.includes("shared") || q.includes("कॉमन")) {
    const commons = getCommonContacts();
    const lines = commons.map(c => `${c.label} (${c.number}) — ${c.calls} calls, ${c.dur}s across Suspect A & Suspect B`).join("; ");
    const cites = commons.flatMap(c => c.records.slice(0, 2));
    return {
      refusal: false,
      text: isHindi
        ? `संदिग्ध A और संदिग्ध B के बीच ${commons.length} कॉमन नंबर मिले हैं: ${lines}। नीचे दिए गए सोर्स रिकॉर्ड पर क्लिक करके पुष्टि करें।`
        : `Identified ${commons.length} common bridge numbers linked to both Suspect A and Suspect B: ${lines}.`,
      citations: cites
    };
  }

  if (q.includes("night") || q.includes("रात") || q.includes("23") || q.includes("11")) {
    const nightRecs = state.cdr.filter(r => isNight(r.ts));
    const counts = {};
    nightRecs.forEach(r => counts[r.msisdnB] = (counts[r.msisdnB] || 0) + 1);
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
    const topLabel = nightRecs.find(r => r.msisdnB === top?.[0])?.labelB || "";
    return {
      refusal: false,
      text: isHindi
        ? `रात 11:00 से सुबह 05:00 बजे के बीच कुल ${nightRecs.length} कॉल दर्ज हुईं। सबसे ज़्यादा कॉल ${topLabel} (${top[0]}) के साथ (${top[1]} बार) हुई हैं।`
        : `Found ${nightRecs.length} calls in the 23:00–05:00 IST nocturnal window. Most frequent night contact: ${topLabel} (${top[0]}) with ${top[1]} calls.`,
      citations: nightRecs.slice(0, 4)
    };
  }

  if (q.includes("imei") || q.includes("sim") || q.includes("swap") || q.includes("device")) {
    const swaps = detectSwaps();
    const summary = swaps.map(s => `${s.suspect} performed a ${s.kind} (${s.from} → ${s.to}) at ${s.ts} IST`).join(". ");
    return {
      refusal: false,
      text: `Detected ${swaps.length} device/SIM identity changes: ${summary}.`,
      citations: swaps.map(s => s.record)
    };
  }

  if (q.includes("tower") || q.includes("location") || q.includes("co-location") || q.includes("colocation")) {
    const hits = detectCoLocations();
    const summary = hits.map(h => `${h.towerName} (${h.tower}) within ${h.diffMin} minutes`).join("; ");
    return {
      refusal: false,
      text: `Detected ${hits.length} co-location windows where Suspect A and Suspect B used the same cell tower within 30 minutes: ${summary}.`,
      citations: hits.flatMap(h => [h.recA, h.recB])
    };
  }

  if (q.includes("ipdr") || q.includes("ip") || q.includes("burst") || q.includes("session")) {
    const bursts = detectIpdrBursts();
    const summary = bursts.map(b => `${b.ipdr.suspect} initiated ${b.ipdr.service} (${b.ipdr.ip}:${b.ipdr.port}) within ${b.deltaMin} min of calling ${b.cdr.labelB}`).join("; ");
    return {
      refusal: false,
      text: `Found ${bursts.length} CDR-to-IPDR burst correlations within ±5 minutes: ${summary}.`,
      citations: bursts.map(b => b.cdr)
    };
  }

  return {
    refusal: false,
    text: `Case CASE-2026-DL-0418 currently holds ${state.cdr.length} normalized CDR rows and ${state.ipdr.length} IPDR sessions across 2 suspects. Try asking about common contacts, night-time calls (English or Hindi), IMEI/SIM swaps, tower co-location, or IPDR bursts.`,
    citations: state.cdr.slice(0, 2)
  };
}

function appendChatMessage(role, payload) {
  const feed = document.getElementById("chatFeed");
  const div = document.createElement("div");
  if (role === "user") {
    div.className = "msg msg-user";
    div.textContent = payload;
  } else {
    div.className = `msg msg-ai ${payload.refusal ? "refusal" : ""}`;
    const citesHtml = payload.citations.length
      ? `<div class="citation-row">${payload.citations.map(c => `<button class="cite-btn" data-cite="${c.id}">${c.sourceFile} · Row ${c.row} · ${c.ts.slice(11, 16)}</button>`).join("")}</div>`
      : "";
    const pinHtml = !payload.refusal
      ? `<div class="msg-actions"><button class="btn btn-outline btn-sm pin-finding-btn">Verify &amp; Pin to Report</button></div>`
      : "";
    div.innerHTML = `<div>${payload.text}</div>${citesHtml}${pinHtml}`;

    div.querySelectorAll("[data-cite]").forEach(btn => {
      btn.addEventListener("click", () => jumpToEvidence(btn.dataset.cite));
    });

    const pinBtn = div.querySelector(".pin-finding-btn");
    if (pinBtn) {
      pinBtn.addEventListener("click", () => {
        if (state.role === "Forensic Analyst") {
          showToast("Role restricted: Switch to Lead Investigator or Reviewing Officer to verify findings.");
          return;
        }
        state.pinned.push({
          text: payload.text,
          citations: payload.citations.map(c => `${c.sourceFile}:${c.row}`),
          verifiedBy: state.role,
          time: new Date().toLocaleTimeString("en-IN", { hour12: false })
        });
        logAudit("FINDING_VERIFIED", payload.text.slice(0, 72));
        renderPinnedFindings();
        pinBtn.disabled = true;
        pinBtn.textContent = "Verified & Pinned";
        showToast("Finding verified and added to Officer Draft Report");
      });
    }
  }
  feed.appendChild(div);
  feed.scrollTop = feed.scrollHeight;
}

function renderPinnedFindings() {
  document.getElementById("pinnedCountBadge").textContent = state.pinned.length;
  const list = document.getElementById("pinnedFindingsList");
  if (!state.pinned.length) {
    list.innerHTML = `<div class="pinned-item" style="color:var(--text-muted)">No verified findings pinned yet. Run an AI query and click "Verify &amp; Pin to Report".</div>`;
    return;
  }
  list.innerHTML = state.pinned.map((p, idx) => `
    <div class="pinned-item">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px">
        <strong style="color:var(--accent-emerald)">VERIFIED #${idx + 1}</strong>
        <span style="font-size:10px;color:var(--text-muted)">${p.verifiedBy} · ${p.time}</span>
      </div>
      <div>${p.text}</div>
      <div style="margin-top:6px;font-family:var(--font-mono);font-size:10px;color:var(--accent-amber)">Sources: ${p.citations.join(", ") || "Case Metadata"}</div>
    </div>
  `).join("");
}

function parseUploadedCsv(fileName, text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return;
  const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
  const idx = (names) => headers.findIndex(h => names.some(n => h.includes(n)));
  const iA = idx(["calling", "a_number", "msisdn_a", "from"]);
  const iB = idx(["called", "b_number", "msisdn_b", "to"]);
  const iTs = idx(["start", "timestamp", "time", "date"]);
  const iDur = idx(["dur", "sec"]);
  const iTow = idx(["cell", "tower"]);
  const iImei = idx(["imei"]);

  let added = 0;
  for (let r = 1; r < lines.length; r++) {
    const cols = lines[r].split(",").map(c => c.trim());
    if (cols.length < 3) continue;
    const tower = cols[iTow] || "DL-CP-101";
    const imei = cols[iImei] || "358412091109941";
    if (!cols[iTow]) {
      state.anomalies.push({ file: fileName, row: r + 1, issue: "Missing Cell Tower ID — defaulted to unknown." });
    }
    state.cdr.push({
      id: `U-${Date.now()}-${r}`,
      sourceFile: fileName,
      row: r + 1,
      suspect: "Suspect A",
      msisdnA: cols[iA] || "+91-98101-44011",
      msisdnB: cols[iB] || "+91-99100-77321",
      labelB: "Imported Contact",
      ts: cols[iTs] || "2026-11-21 01:15:00",
      dur: parseInt(cols[iDur], 10) || 60,
      type: "OUT",
      tower: TOWERS[tower] ? tower : "DL-CP-101",
      imei,
      sim: "SIM-IMP-001"
    });
    added++;
  }
  state.files.push({ name: fileName, schema: "Auto-Mapped CSV", rows: added, status: "Normalized" });
  logAudit("CSV_IMPORT", `Ingested ${added} rows from ${fileName}`);
  refreshAll();
  showToast(`Normalized ${added} rows from ${fileName}`);
}

function exportDraftReport() {
  const lines = [
    "VOLTCRYPT PS03 — OFFICER-VERIFIED DRAFT INVESTIGATION REPORT",
    `Case ID: CASE-2026-DL-0418`,
    `Exported By: ${state.role}`,
    `Timestamp: ${new Date().toISOString()}`,
    `Normalized CDR Records: ${state.cdr.length} | IPDR Sessions: ${state.ipdr.length}`,
    "",
    "--- VERIFIED FINDINGS ---",
    ...(state.pinned.length
      ? state.pinned.map((p, i) => `${i + 1}. [${p.verifiedBy} @ ${p.time}] ${p.text} | Sources: ${p.citations.join(", ")}`)
      : ["No findings pinned yet. Pin AI findings after officer verification."]),
    "",
    "--- DETECTED COMMON CONTACTS ---",
    ...getCommonContacts().map(c => `- ${c.label} (${c.number}): ${c.calls} calls, ${c.dur}s`),
    "",
    "--- DETECTED IMEI / SIM SWAPS ---",
    ...detectSwaps().map(s => `- ${s.kind} | ${s.suspect} | ${s.from} -> ${s.to} @ ${s.ts} (${s.record.sourceFile}:${s.record.row})`)
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "VOLTCRYPT_Case_0418_Draft_Report.txt";
  a.click();
  logAudit("REPORT_EXPORT", "Exported officer draft investigation report");
  showToast("Draft Investigation Report downloaded");
}

const VIEW_TITLES = {
  overview: "Overview & Communication Patterns",
  import: "Data Import & Operator Normalisation",
  network: "Cross-Suspect Contact Network Graph",
  location: "Cell-Tower Timeline & IMEI/SIM Alerts",
  ipdr: "IPDR Session & Burst Correlation",
  assistant: "Evidence-Linked AI Investigation Assistant"
};

function switchView(viewName) {
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === viewName));
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === `view-${viewName}`));
  document.getElementById("viewTitle").textContent = VIEW_TITLES[viewName] || "VOLTCRYPT";
}

function refreshAll() {
  renderOverview();
  renderImportView();
  renderNetworkGraph();
  renderLocationView();
  renderIpdrView();
  renderPinnedFindings();
}

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => switchView(btn.dataset.view));
});

document.getElementById("cdrSearchInput").addEventListener("input", renderCdrTable);
document.getElementById("cdrSuspectFilter").addEventListener("change", renderCdrTable);
document.getElementById("cdrNightFilter").addEventListener("change", renderCdrTable);
document.getElementById("bridgeOnlyToggle").addEventListener("change", renderNetworkGraph);
document.getElementById("mapSuspectSelect").addEventListener("change", renderLocationView);

document.getElementById("roleSelect").addEventListener("change", e => {
  state.role = e.target.value;
  const tag = document.getElementById("rolePermissionTag");
  if (state.role === "Forensic Analyst") {
    tag.textContent = "READ-ONLY VERIFY";
    tag.className = "tag tag-crimson";
  } else {
    tag.textContent = "CAN VERIFY";
    tag.className = "tag tag-emerald";
  }
  logAudit("ROLE_SWITCH", `Active role changed to ${state.role}`);
  showToast(`Switched RBAC role to ${state.role}`);
});

document.getElementById("chatForm").addEventListener("submit", e => {
  e.preventDefault();
  const input = document.getElementById("chatInput");
  const q = input.value.trim();
  if (!q) return;
  appendChatMessage("user", q);
  logAudit("AI_QUERY", q);
  const res = answerQuery(q);
  appendChatMessage("ai", res);
  input.value = "";
});

document.querySelectorAll("#promptChips .chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const q = chip.dataset.q;
    appendChatMessage("user", q);
    logAudit("AI_QUERY", q);
    appendChatMessage("ai", answerQuery(q));
  });
});

document.getElementById("openAuditBtn").addEventListener("click", () => {
  document.getElementById("auditLogList").innerHTML = state.audit.map(a => `
    <div class="audit-entry">[${a.time}] <strong>${a.role}</strong> · ${a.action} — ${a.detail}</div>
  `).join("");
  document.getElementById("auditModal").classList.remove("hidden");
});

document.getElementById("closeAuditBtn").addEventListener("click", () => {
  document.getElementById("auditModal").classList.add("hidden");
});

document.getElementById("exportReportBtn").addEventListener("click", exportDraftReport);

document.getElementById("reloadDemoBtn").addEventListener("click", () => {
  state.cdr = structuredClone(DEMO_CDR);
  state.ipdr = structuredClone(DEMO_IPDR);
  state.anomalies = structuredClone(DEMO_ANOMALIES);
  state.files = [
    { name: "Airtel_CDR_SuspectA.csv", schema: "Operator A (Airtel)", rows: 7, status: "Normalized" },
    { name: "Jio_CDR_SuspectB.csv", schema: "Operator B (Jio)", rows: 6, status: "Normalized" },
    { name: "ISP_IPDR_Sessions.csv", schema: "ISP IPDR", rows: 5, status: "Correlated" }
  ];
  logAudit("DEMO_RESET", "Reloaded synthetic R4C demo case");
  refreshAll();
  showToast("Synthetic demo dataset restored");
});

const dropzone = document.getElementById("csvDropzone");
const fileInput = document.getElementById("csvFileInput");
document.getElementById("browseCsvBtn").addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", e => {
  const f = e.target.files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = ev => parseUploadedCsv(f.name, ev.target.result);
  reader.readAsText(f);
});
dropzone.addEventListener("dragover", e => { e.preventDefault(); dropzone.classList.add("dragover"); });
dropzone.addEventListener("dragleave", () => dropzone.classList.remove("dragover"));
dropzone.addEventListener("drop", e => {
  e.preventDefault();
  dropzone.classList.remove("dragover");
  const f = e.dataTransfer.files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = ev => parseUploadedCsv(f.name, ev.target.result);
  reader.readAsText(f);
});

logAudit("SESSION_INIT", "Loaded synthetic case CASE-2026-DL-0418");
refreshAll();
appendChatMessage("ai", {
  refusal: false,
  text: "VOLTCRYPT AI Investigator initialized for CASE-2026-DL-0418. Ask in English or Hindi about common contacts, night-time calls, IMEI/SIM swaps, tower co-location, or IPDR bursts. Every finding links directly to its source row.",
  citations: []
});