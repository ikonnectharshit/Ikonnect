import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  RadioTower,
  Activity,
  Cpu,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowUpRight,
  MessageCircle, // Added for WhatsApp
} from "lucide-react";

export default function App() {
  const brandBlue = "#17155B";
  const brandBlueDeep = "#0E0C3F";
  const brandYellow = "#D8C21C";
  const whatsappGreen = "#25D366";

  const nav = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Solutions", href: "#solutions" },
      { label: "Railway Architecture", href: "#railway-architecture" },
      { label: "IoT", href: "#iot-solutions" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const solutions = [
    { icon: Activity, title: "Pantograph Monitoring", text: "Continuous contact force and acceleration monitoring for predictive maintenance of rolling stock and OHE systems." },
    { icon: ShieldCheck, title: "OHE Monitoring", text: "Condition visibility for wire behavior, contact quality, wear indicators, and corridor-level analytics." },
    { icon: Activity, title: "Thermal Surveillance", text: "Thermal analytics for substations, traction assets, field installations, and critical railway equipment." },
    { icon: RadioTower, title: "Hybrid Connectivity", text: "Integrated OFC, PtP/PtMP wireless, and VHF/UHF communication backbone for uninterrupted telemetry." },
    { icon: ShieldCheck, title: "Auto-Changeover Systems", text: "Fail-safe redundancy between OFC and wireless/radio paths for mission-critical railway applications." },
    { icon: Cpu, title: "Unified NMS Dashboard", text: "Central platform for alerts, analytics, SNMP visibility, remote monitoring, and reporting." },
    { icon: Activity, title: "IoT Asset Monitoring", text: "Sensor-based monitoring of field assets, equipment health, environment, power parameters, and operational status across distributed sites." },
    { icon: RadioTower, title: "Remote Telemetry Solutions", text: "Gateway-based data acquisition and edge telemetry for remote assets using IP, RF, and industrial communication interfaces." },
    { icon: Cpu, title: "Smart Industrial IoT Platforms", text: "End-to-end IoT architecture covering sensors, gateways, dashboards, alerts, analytics, and enterprise integration." },
  ];

  const sectors = ["Indian Railways", "Metro Rail", "Mining", "Power Utilities", "Industrial Infrastructure", "Smart Cities", "Oil & Gas"];
  const differentiators = [
    "RDSO-aligned engineering mindset",
    "OEM + system integration delivery model",
    "Railway-grade deployment capability",
    "99.99% uptime design focus",
    "Centralized dashboard and analytics",
    "Field-to-control-center integration",
  ];
  const projects = [
    { name: "Smart Railway Monitoring Suite", desc: "Integrated pantograph, OHE, thermal, connectivity, and analytics solution for electrified railway corridors." },
    { name: "Hybrid OFC + Wireless Redundancy", desc: "Fail-safe network architecture for signaling and telemetry transport across station yards and long corridors." },
    { name: "Thermal Surveillance for Electrical Assets", desc: "Continuous thermal monitoring of substations, traction assets, and critical field equipment." },
    { name: "IoT-Based Remote Asset Monitoring", desc: "Distributed IoT sensors and gateways for monitoring equipment status, energy parameters, alarms, and field conditions from a central platform." },
  ];
  const corridorStats = [["24/7", "Monitoring"], ["99.99%", "Availability Focus"], ["RDSO", "Aligned Delivery"], ["OFC + RF", "Hybrid Backbone"]];
  const iotStack = ["Sensors & Controllers", "IoT Gateways", "Edge Processing", "Cloud / On-Prem Platform", "Dashboards & Alerts", "ERP / SCADA / NMS Integration"];
  const brochures = [
    { title: "Corporate Profile", desc: "Company overview, sectors, capabilities, and positioning." },
    { title: "Railway Monitoring Suite", desc: "Pantograph, OHE, thermal, and dashboard solution pack." },
    { title: "IoT Solutions Note", desc: "Remote telemetry, industrial IoT, and centralized asset monitoring." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919414177766"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: whatsappGreen }}
        title="Chat with Lokesh Bhatnagar"
      >
        <MessageCircle size={32} color="white" fill="white" />
      </a>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <path d="M52 8c12 0 22 10 22 22 0 7-3 13-8 17l-8-9c2-2 3-5 3-8 0-6-5-11-11-11s-11 5-11 11c0 3 1 6 3 8l-8 9c-5-4-8-10-8-17 0-12 10-22 22-22Z" fill={brandYellow} />
                <path d="M24 54c10-8 18-12 28-12s18 4 28 12v11c-10-8-18-12-28-12s-18 4-28 12V54Z" fill={brandBlue} />
                <path d="M15 71c13-8 25-12 37-12s24 4 33 12v10c-9-3-19-5-33-5s-24 2-37 5V71Z" fill={brandBlue} />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight" style={{ color: brandBlue }}>ikonnect</div>
              <div className="text-xs font-medium italic text-slate-500">Transforming Connectivity</div>
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-600 lg:flex">
            {nav.map((item) => <a key={item.label} href={item.href} className="transition hover:text-slate-900">{item.label}</a>)}
          </nav>

          <div className="hidden lg:block">
            <a href="#contact" className="inline-flex items-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-lg" style={{ backgroundColor: brandBlue }}>
              Enquire Now
            </a>
          </div>

          <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white lg:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle navigation">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {nav.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-indigo-50" />
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full blur-3xl" style={{ backgroundColor: `${brandBlue}18` }} />
          <div className="absolute -right-20 top-20 h-80 w-80 rounded-full blur-3xl" style={{ backgroundColor: `${brandYellow}33` }} />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm">
                Smart Connectivity • Railway Monitoring • Industrial IoT
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl" style={{ color: brandBlue }}>
                Advanced digital monitoring for critical railway infrastructure.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Ikonnect designs and integrates smart railway monitoring systems, thermal surveillance, OHE and pantograph visibility, resilient communication backbone, remote telemetry, and centralized analytics.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5" style={{ backgroundColor: brandBlue }}>
                  Request a Proposal <ChevronRight className="ml-1 h-4 w-4" />
                </a>
                <a href="#railway-architecture" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100">
                  View Architecture
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                {corridorStats.map(([big, small]) => (
                  <div key={big} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-2xl font-black" style={{ color: brandBlue }}>{big}</div>
                    <div className="mt-1 text-sm text-slate-500">{small}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.08 }} className="flex items-center justify-center">
              <div className="w-full max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/60">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Integrated Platform</div>
                    <div className="text-2xl font-black" style={{ color: brandBlue }}>Ikonnect Operations View</div>
                  </div>
                  <div className="rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${brandYellow}30`, color: brandBlue }}>Live Monitoring</div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    ["Locos / Assets", "24"],
                    ["Active Alarms", "02"],
                    ["Avg Contact Force", "127 N"],
                    ["Network Health", "99.97%"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                      <div className="text-sm text-slate-500">{label}</div>
                      <div className="mt-2 text-3xl font-black" style={{ color: brandBlue }}>{value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.75rem] p-5 text-white" style={{ background: `linear-gradient(135deg, ${brandBlue}, ${brandBlueDeep})` }}>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Signal Chain</div>
                  <div className="mt-2 text-xl font-bold">Sensor → Processing → Redundant Network → Dashboard</div>
                  <div className="mt-5 grid grid-cols-2 gap-3 text-center text-xs font-semibold text-white/90 sm:grid-cols-4">
                    {["FBG / Field Sensors", "Edge Processing", "OFC + RF", "NMS / Alerts"].map((item) => (
                      <div key={item} className="rounded-2xl bg-white/10 p-3 backdrop-blur">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 md:grid-cols-4">
            {["Railway-grade architecture", "Hybrid connectivity backbone", "Remote asset telemetry", "Monitoring + analytics + reporting"].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-100">{item}</div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">About Ikonnect</div>
              <h2 className="mt-2 text-4xl font-black tracking-tight" style={{ color: brandBlue }}>
                A system integrator focused on reliable monitoring and connectivity for railways and critical infrastructure.
              </h2>
              <p className="mt-5 text-slate-600 leading-8">
                Ikonnect combines engineering, integration, deployment, and operations support across railway-grade environments. The platform approach brings together field sensing, telemetry transport, redundancy, analytics, and centralized monitoring under one implementation layer.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 h-2.5 w-10 rounded-full" style={{ backgroundColor: brandYellow }} />
                  <div className="text-sm font-semibold text-slate-700">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Solutions</div>
                <h2 className="mt-2 text-4xl font-black tracking-tight" style={{ color: brandBlue }}>
                  Core offerings for railway, telecom, monitoring, and industrial IoT deployments.
                </h2>
              </div>
              <p className="max-w-2xl text-slate-600">
                Designed for operator visibility, maintenance intelligence, corridor resilience, and continuous field operations.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <div key={solution.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: brandBlue }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{solution.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{solution.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="railway-architecture" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Railway Architecture</div>
            <h2 className="mt-2 text-4xl font-black tracking-tight" style={{ color: brandBlue }}>
              Reference architecture for monitoring, redundancy, and central visibility.
            </h2>
            <p className="mt-4 max-w-3xl text-slate-600 leading-8">
              Conceptual deployment model: field sensing and surveillance at the asset layer, local processing, redundant OFC + wireless transport, and centralized command visibility.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
            <img alt="Railway architecture" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 260'%3E%3Crect width='1200' height='260' fill='%23f8fafc'/%3E%3Crect x='40' y='70' width='180' height='90' rx='24' fill='%23D8C21C'/%3E%3Crect x='290' y='70' width='180' height='90' rx='24' fill='%2317155B'/%3E%3Crect x='540' y='70' width='180' height='90' rx='24' fill='%23D8C21C'/%3E%3Crect x='790' y='70' width='180' height='90' rx='24' fill='%2317155B'/%3E%3Crect x='980' y='70' width='180' height='90' rx='24' fill='%23D8C21C'/%3E%3Ctext x='130' y='125' text-anchor='middle' font-size='26' font-family='Arial' font-weight='700' fill='%230E0C3F'%3EField%3C/text%3E%3Ctext x='380' y='125' text-anchor='middle' font-size='26' font-family='Arial' font-weight='700' fill='white'%3ELocal%3C/text%3E%3Ctext x='630' y='125' text-anchor='middle' font-size='24' font-family='Arial' font-weight='700' fill='%230E0C3F'%3ETransport%3C/text%3E%3Ctext x='880' y='125' text-anchor='middle' font-size='24' font-family='Arial' font-weight='700' fill='white'%3ECentral%3C/text%3E%3Ctext x='1070' y='125' text-anchor='middle' font-size='22' font-family='Arial' font-weight='700' fill='%230E0C3F'%3EAnalytics%3C/text%3E%3C/svg%3E" className="w-full rounded-2xl" />
          </div>
        </section>

        <section id="iot-solutions" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">IoT Products & Solutions</div>
              <h2 className="mt-2 text-4xl font-black tracking-tight" style={{ color: brandBlue }}>
                IoT-enabled monitoring and telemetry for distributed assets.
              </h2>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Typical IoT Stack</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {iotStack.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 p-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-100">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Projects & Use Cases</div>
                <h2 className="mt-2 text-4xl font-black tracking-tight" style={{ color: brandBlue }}>
                  Representative solutions for infrastructure monitoring.
                </h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {projects.map((project) => (
                <div key={project.name} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]" style={{ backgroundColor: `${brandYellow}35`, color: brandBlue }}>Featured</div>
                  <h3 className="text-xl font-black text-slate-900">{project.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] p-10 text-white shadow-2xl" style={{ background: `linear-gradient(135deg, ${brandBlue}, ${brandBlueDeep})` }}>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Contact Us</div>
              <h2 className="mt-2 text-4xl font-black tracking-tight">Direct Connectivity to Support.</h2>
              <p className="mt-5 max-w-2xl text-white/80 leading-8">
                Reach out to our engineering and support team for project inquiries, technical specifications, and custom deployment requests.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="bg-white/10 p-3 rounded-2xl group-hover:bg-white/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <a href="mailto:info@ikonnect.in" className="text-lg font-medium hover:underline">info@ikonnect.in</a>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="bg-white/10 p-3 rounded-2xl group-hover:bg-white/20 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase font-bold tracking-widest">Lokesh Bhatnagar</p>
                    <a href="tel:+919414177766" className="text-lg font-medium hover:underline">+91-9414177766</a>
                  </div>
                </div>

                {/* WhatsApp Specific Contact Card */}
                <a 
                  href="https://wa.me/919414177766" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="bg-[#25D366] p-3 rounded-2xl">
                    <MessageCircle className="h-6 w-6 text-white" fill="white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase font-bold tracking-widest">Available on WhatsApp</p>
                    <p className="text-lg font-bold">Chat Now</p>
                  </div>
                  <ChevronRight className="ml-auto h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-medium">India</span>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Enquiry Form</div>
              <h3 className="mt-2 text-3xl font-black tracking-tight" style={{ color: brandBlue }}>
                Submit your project details.
              </h3>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <input required className={inputClass} placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <input className={inputClass} placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input required className={inputClass} placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  <input required className={inputClass} placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <textarea required className="min-h-[140px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400" placeholder="Tell us about your project requirement" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <div className="flex flex-wrap items-center gap-4">
                  <button type="submit" className="inline-flex items-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 active:scale-95" style={{ backgroundColor: brandBlue }}>
                    Submit Enquiry <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                  {submitted && <div className="text-sm font-bold text-emerald-600">Enquiry submitted successfully. We will get back to you soon.</div>}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="text-2xl font-black tracking-tight" style={{ color: brandBlue }}>ikonnect</div>
            <div className="mt-2 text-sm italic text-slate-500">Transforming Connectivity</div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Smart connectivity, railway monitoring, remote telemetry, and industrial IoT solutions for critical infrastructure.
            </p>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Quick Links</div>
            <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-slate-700">
              {nav.map((item) => <a key={item.label} href={item.href} className="hover:text-slate-900 transition-colors">{item.label}</a>)}
            </div>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Contact</div>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <a href="mailto:info@ikonnect.in" className="block hover:underline">info@ikonnect.in</a>
              <a href="tel:+919414177766" className="block hover:underline">+91-9414177766</a>
              <div>India</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
