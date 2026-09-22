import Link from 'next/link';
import {
  experience,
  metrics,
  packages,
  principles,
  profile,
  surfaces,
} from '@/content/site';
import type { WorkRecord } from '@/content/work';

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? '↗' : '→'}
    </span>
  );
}

export function Status({ status }: { status: WorkRecord['status'] }) {
  return (
    <span
      className={`status ${status === 'In progress' ? 'status-progress' : ''}`}
    >
      <span aria-hidden="true" />
      {status}
    </span>
  );
}

export function SectionHeading({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="flex items-baseline gap-4">
        <span className="index">{number}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

export function Metrics() {
  return (
    <section className="metrics" aria-label="Selected production evidence">
      {metrics.map((metric) => (
        <div className="metric" key={metric.label}>
          <p className="metric-value">{metric.value}</p>
          <p className="metric-label">{metric.label}</p>
          <p className="metric-context">{metric.context}</p>
        </div>
      ))}
    </section>
  );
}

export function SurfaceMap() {
  return (
    <section
      className="section-block surface-section"
      aria-labelledby="surfaces-title"
    >
      <div className="section-heading">
        <h2 id="surfaces-title">One product, multiple engineering surfaces.</h2>
        <span className="caption">
          A frontend center. A wider field of view.
        </span>
      </div>
      <div className="surface-map">
        {surfaces.map((surface, i) => (
          <div key={surface.title} className="surface-cell">
            <span
              className={`trace-dot ${i === 0 ? 'active' : ''}`}
              aria-hidden="true"
            />
            <h3>{surface.title}</h3>
            <p>{surface.description}</p>
            <Link href={surface.href}>
              {surface.evidence}
              <Arrow />
            </Link>
          </div>
        ))}
      </div>
      <p className="caption mt-5">
        Public packages + private professional contributions
      </p>
    </section>
  );
}

export function PackageList({ compact = false }: { compact?: boolean }) {
  return (
    <div className="package-list">
      {(compact ? packages.slice(0, 2) : packages).map((pkg) => (
        <article key={pkg.name} className="package-row">
          <div>
            <h3>{pkg.name}</h3>
            <span className="package-version">Published · v{pkg.version}</span>
          </div>
          <div>
            <p className="font-medium text-ink">{pkg.purpose}</p>
            <p className="mt-2 text-ink-soft">{pkg.description}</p>
          </div>
          <div className="package-links">
            <a href={pkg.github}>
              GitHub
              <Arrow diagonal />
            </a>
            <a href={pkg.npm}>
              npm
              <Arrow diagonal />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Experience({ full = false }: { full?: boolean }) {
  return (
    <div className="experience-list">
      {(full ? experience : experience.slice(0, 4)).map((job, i) => (
        <article className="experience-row" key={job.company}>
          <div className="experience-date">
            <span
              className={i === 0 ? 'current-marker' : ''}
              aria-hidden="true"
            />
            {job.period}
          </div>
          <div>
            <h3>{job.company}</h3>
            <p className="mt-2 text-ink-soft">{job.role}</p>
            {full && (
              <p className="caption mt-2">
                {job.legal ? `${job.legal} / ` : ''}
                {job.location}
              </p>
            )}
          </div>
          <p className="text-ink-soft">{job.summary}</p>
        </article>
      ))}
    </div>
  );
}

export function Principles() {
  return (
    <div className="principles">
      {principles.map((principle, index) => (
        <article key={principle.title}>
          <span className="mono text-signal">0{index + 1} /</span>
          <h3>{principle.title}</h3>
          <p>{principle.description}</p>
        </article>
      ))}
    </div>
  );
}

export function ContactClose() {
  return (
    <section className="contact-close">
      <div>
        <span className="mono text-ink-soft">
          Have a difficult product problem?
        </span>
        <h2>
          Let’s make it
          <br />
          work in the real world.
        </h2>
        <p>
          I’m interested in roles where I can own meaningful frontend and mobile
          systems, and build with people who care about the details.
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <a className="button" href={`mailto:${profile.email}`}>
            Email Nishchay
            <Arrow diagonal />
          </a>
          <a className="text-link" href={profile.linkedin}>
            View LinkedIn
            <Arrow diagonal />
          </a>
        </div>
      </div>
      <div className="contact-note">
        <span className="availability-dot" aria-hidden="true" />
        <p>{profile.availability}</p>
        <span className="caption">
          {profile.location}
          <br />
          {profile.opportunities}
        </span>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-top">
        <Link href="/" className="wordmark">
          <span className="mark">
            NB<span>/</span>
          </span>
          <span>{profile.name}</span>
        </Link>
        <div className="flex flex-wrap gap-x-6">
          <a href={`mailto:${profile.email}`}>
            Email
            <Arrow diagonal />
          </a>
          <a href={profile.github}>
            GitHub
            <Arrow diagonal />
          </a>
          <a href={profile.linkedin}>
            LinkedIn
            <Arrow diagonal />
          </a>
          <a href={profile.resume} download>
            Résumé
            <Arrow diagonal />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Frontend & Mobile Engineer · Bengaluru</p>
        <p>Built with Next.js & TypeScript. A record of decisions.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      <p className="lead">{description}</p>
    </div>
  );
}
