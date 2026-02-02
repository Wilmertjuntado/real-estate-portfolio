import React from "react";
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Sticky CTA bar */}
      <StickyCta />

      {/* Page container */}
      <div className="mx-auto max-w-3xl px-5 py-12">
        {/* HERO (Above the fold) */}
        <section className="mb-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Text */}
            <div className="flex-1">

          <p className="mb-3 inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700">
            GoHighLevel (LeadConnector) • Real Estate Lead Systems
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Speed-to-Lead + Follow-Up Systems for Real Estate Teams
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-700">
            I help real estate teams stop losing Zillow/FB/PPC leads by building a clean GoHighLevel pipeline, instant
            lead routing, and automated follow-ups until the lead books.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Apply to Work With Me
            </a>
            <a
              href="#proof"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              See Proof / Samples
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-6 grid gap-2 sm:grid-cols-3">
            <Badge>✅ GHL pipeline + CRM cleanup</Badge>
            <Badge>✅ Lead routing + follow-up automations</Badge>
            <Badge>✅ Weekly visibility + reporting</Badge>
          </div>

          {/* Outcome cards */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <StatCard title="Focus" value="Speed-to-Lead" note="Reply instantly, not hours later" />
            <StatCard title="Focus" value="Booked Appointments" note="Follow-ups until scheduled" />
            <StatCard title="Focus" value="Pipeline Visibility" note="Know what’s hot vs dead" />
          </div>
              </div>

    {/* Profile photo */}
    <div className="shrink-0">
      <div className="overflow-hidden rounded-full border border-slate-200">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          width={160}
          height={160}
          className="h-40 w-40 object-cover"
          priority
        />
      </div>
    </div>
  </div>

        </section>

        <Divider />

        {/* 1) WHO I HELP */}
        <Section title="1) Who I Help">
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Real estate teams, brokers, and solo agents handling consistent inbound leads</li>
            <li>Investors (wholesaling, fix & flip, buy-and-hold) running lead pipelines</li>
            <li>Teams using GoHighLevel (or willing to move into it)</li>
            <li>Anyone losing deals due to slow response and inconsistent follow-up</li>
          </ul>
        </Section>

        <Divider />

        {/* 2) PROBLEMS I SOLVE */}
        <Section title="2) Problems I Solve">
          <ul className="space-y-2 text-slate-700">
            {[
              "Leads go cold because replies are slow (speed-to-lead is inconsistent)",
              "Leads aren’t routed/assigned properly, so nobody owns the follow-up",
              "No real follow-up system after FB leads, forms, missed calls, or DMs",
              "Pipeline stages are unclear, so deals get stuck or forgotten",
              "No reporting — decisions are based on guesswork, not data",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 text-slate-900">❌</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* Results strip (even without hard metrics) */}
        <Section title="What You Get (Outcomes)">
          <div className="grid gap-3 sm:grid-cols-3">
            <ResultCard title="Faster Responses" desc="Instant reply + routing so leads don’t wait." />
            <ResultCard title="Fewer Missed Follow-ups" desc="Automations that keep touching leads." />
            <ResultCard title="More Booked Calls" desc="Booking + confirmations + reminders." />
          </div>

          <p className="mt-4 text-sm text-slate-600">
            These are the exact levers that increase conversion without increasing ad spend.
          </p>
        </Section>

        <Divider />

        {/* 3) SERVICES I OFFER (Outcomes) */}
        <Section title="3) Services I Offer">
          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard
              title="Lead Intake + Source Tracking"
              desc="Capture leads from forms, FB leads, inbound calls, and other sources with consistent fields + tags."
            />
            <FeatureCard
              title="Lead Routing + Ownership"
              desc="Auto-assign leads by rules (agent/team/territory), so every lead has an owner immediately."
            />
            <FeatureCard
              title="Follow-Up Automation (SMS/Email)"
              desc="Instant response + smart sequences that continue until the lead books or is marked unqualified."
            />
            <FeatureCard
              title="GHL Pipeline + Stage Definitions"
              desc="A clean pipeline that reflects how you actually sell: New → Contacted → Qualified → Appointment → Under Contract → Closed."
            />
            <FeatureCard
              title="Booking + Confirmation System"
              desc="Calendar booking, confirmations, reminders, no-show reduction, and internal notifications."
            />
            <FeatureCard
              title="Weekly Reporting + Optimization"
              desc="Simple visibility: lead sources, speed-to-lead, appointments booked, and pipeline movement."
            />
          </div>

          <p className="mt-4 text-sm text-slate-600">
            Tools are the infrastructure. You’re paying for fewer missed leads and more booked appointments.
          </p>
        </Section>

        <Divider />

        {/* 4) PROOF / SAMPLES */}
        <Section title="4) Proof / Samples" id="proof">
          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="text-slate-700">
              Replace these with your screenshots as you build them. Even if you’re starting out, mock demos are
              acceptable and strongly recommended.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <ProofItem
                title="GHL Pipeline Screenshot (Mock or Real)"
                desc="Show stages + 3–5 sample opportunities with tags and statuses."
              />
              <ProofItem
                title="Workflow Screenshot (Automation)"
                desc="Lead in → instant SMS/email → task created → reminders → appointment confirmation."
              />
              <ProofItem
                title="Conversation Screenshot (Example)"
                desc="A sample SMS/email follow-up sequence that sounds human and books appointments."
              />
              <ProofItem
                title="Mini Case Study Card"
                desc="Context → problem → system built → outcome (speed-to-lead improved, fewer misses, more booked calls)."
              />
            </div>

            <div className="mt-5 rounded-xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-900">Proof checklist (what to capture in GoHighLevel):</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Pipeline view (stages visible)</li>
                <li>Workflow canvas (trigger + actions)</li>
                <li>Calendar settings + confirmation screen</li>
                <li>Reporting view (even basic)</li>
              </ul>
            </div>
          </div>
        </Section>

        <Divider />

        {/* 5) PROCESS */}
        <Section title="5) Process (How I Work)">
          <ol className="list-decimal space-y-2 pl-5 text-slate-700">
            <li>Discovery: lead sources, goals, current follow-up process</li>
            <li>Audit: CRM setup, pipeline stages, response speed, leaks</li>
            <li>Build: pipeline + fields + tags + routing + automations</li>
            <li>Test: lead → assigned → follow-up → booked → reminders</li>
            <li>Optimize: weekly tweaks based on what the data shows</li>
          </ol>
        </Section>

        <Divider />

        {/* 6) RATES / PACKAGES */}
        <Section title="6) Rates / Packages">
          <div className="grid gap-4 sm:grid-cols-3">
            <PricingCard
              title="Starter Setup"
              price="$299+"
              bullets={[
                "Pipeline setup + stage definitions",
                "Lead fields/tags standardization",
                "1 intake source connected",
                "1 instant reply automation",
              ]}
              highlight={false}
            />
            <PricingCard
              title="Growth System"
              price="$599+"
              bullets={[
                "Routing + ownership rules",
                "2–3 follow-up sequences",
                "Calendar booking + confirmations",
                "Basic reporting + weekly view",
              ]}
              highlight={true}
            />
            <PricingCard
              title="Monthly Retainer"
              price="$399+/mo"
              bullets={[
                "Ongoing optimization",
                "Weekly pipeline review",
                "New campaigns/lead sources",
                "Reporting improvements",
              ]}
              highlight={false}
            />
          </div>

          <p className="mt-4 text-sm text-slate-600">
            Final scope depends on your lead sources and how complex routing/follow-up needs to be.
          </p>
        </Section>

        <Divider />

        {/* 7) CTA */}
        <section id="cta" className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">7) Call to Action</h2>
          <p className="mt-2 text-slate-700">
            If you want fewer missed leads and faster follow-up in GoHighLevel, apply below. I reply within 24 hours.
          </p>

          <div className="mt-5 grid gap-3">
            <a
              href="https://your-application-form-link.com"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
              target="_blank"
              rel="noreferrer"
            >
              Apply to Work With Me
            </a>

            <a
              href="https://your-calendar-link.com"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
              target="_blank"
              rel="noreferrer"
            >
              Book a Discovery Call
            </a>
          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-900">Application questions:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Where do your leads come from? (FB leads, PPC, Zillow, referrals, etc.)</li>
              <li>What’s your biggest follow-up issue right now?</li>
              <li>Do you want a one-time build or monthly optimization?</li>
            </ul>
          </div>
        </section>

        <footer className="py-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} • Real Estate Lead Systems • GoHighLevel Specialist
        </footer>
      </div>
    </main>
  );
}

// ---------------- HELPERS ----------------

function StickyCta() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">
            Ready to stop losing leads in GoHighLevel?
          </p>
          <p className="truncate text-xs text-slate-600">
            Speed-to-lead + routing + follow-up automation
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
          >
            Apply
          </a>
          <a
            href="#proof"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-xs font-medium text-slate-900 hover:bg-slate-50"
          >
            Proof
          </a>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return <hr className="my-10 border-slate-200" />;
}

function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-700">
      {children}
    </div>
  );
}

function StatCard({ title, value, note }: { title: string; value: string; note: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <p className="text-xs font-medium text-slate-500">{title}</p>
      <p className="mt-1 text-base font-semibold">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{note}</p>
    </div>
  );
}

function ResultCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm text-slate-700">{desc}</p>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <p className="font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{desc}</p>
    </div>
  );
}

function ProofItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm text-slate-700">{desc}</p>
    </div>
  );
}

function PricingCard({
  title,
  price,
  bullets,
  highlight,
}: {
  title: string;
  price: string;
  bullets: string[];
  highlight: boolean;
}) {
  return (
    <div className={["rounded-2xl border p-5", highlight ? "border-slate-900" : "border-slate-200"].join(" ")}>
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-2xl font-semibold">{price}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
