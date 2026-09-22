import Link from 'next/link';
import {
  Arrow,
  ContactClose,
  Experience,
  Metrics,
  PackageList,
  Principles,
  SectionHeading,
  SurfaceMap,
} from '@/components/shared';
import { ProjectRecord } from '@/components/project-record';
import { profile } from '@/content/site';
import { work } from '@/content/work';

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-top">
          <p className="eyebrow">Frontend & Mobile Engineer</p>
          <span className="hero-edition mono">Selected work / 2022—2026</span>
        </div>
        <div className="hero-grid">
          <div className="hero-main">
            <h1 id="hero-title">{profile.headline}</h1>
            <p className="hero-summary">{profile.summary}</p>
          </div>
          <aside className="hero-aside">
            <div className="availability">
              <span className="availability-dot" aria-hidden="true" />
              Open to opportunities
            </div>
            <p>{profile.availability}</p>
            <div className="hero-location">
              <span className="location-symbol" aria-hidden="true">
                ⌖
              </span>
              <span>{profile.location}</span>
            </div>
            <p className="caption">India-wide & suitable remote roles</p>
            <div className="hero-trace" aria-hidden="true">
              <span /> <span /> <span />
            </div>
          </aside>
        </div>
        <div className="hero-actions">
          <a href="#selected-work" className="button">
            View selected work
            <Arrow />
          </a>
          <a href={profile.resume} download className="button button-secondary">
            Download résumé<span aria-hidden="true">↓</span>
          </a>
          <a className="hero-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <Arrow diagonal />
          </a>
        </div>
      </section>
      <Metrics />
      <SurfaceMap />
      <section id="selected-work" className="section-block selected-work">
        <SectionHeading number="01" title="Selected work">
          <span className="caption">
            Production ownership. Explicit decisions. Real constraints.
          </span>
        </SectionHeading>
        {work.map((project) => (
          <ProjectRecord key={project.slug} project={project} />
        ))}
      </section>
      <section className="section-block">
        <SectionHeading number="02" title="Small tools. Explicit systems.">
          <Link href="/open-source" className="text-link">
            All open source
            <Arrow />
          </Link>
        </SectionHeading>
        <p className="section-lead">
          I turn repeated client-platform problems into reusable tools. Startup
          and lifecycle are two places where hidden state becomes a very visible
          failure.
        </p>
        <PackageList compact />
      </section>
      <section className="section-block">
        <SectionHeading number="03" title="Where I’ve built">
          <Link className="text-link" href="/about">
            More about me
            <Arrow />
          </Link>
        </SectionHeading>
        <Experience />
      </section>
      <section className="section-block">
        <SectionHeading number="04" title="How I work" />
        <Principles />
      </section>
      <section className="current-direction">
        <div className="flex items-center gap-3">
          <span className="trace-dot active" aria-hidden="true" />
          <h2>Currently building deeper frontend systems</h2>
        </div>
        <p>
          Extending my production mobile experience into offline-first
          workflows, geospatial interfaces, and document intelligence. Getting
          better at building interfaces that explain and control complex
          systems.
        </p>
      </section>
      <ContactClose />
    </>
  );
}
