import type { Metadata } from 'next';
import {
  Arrow,
  ContactClose,
  Experience,
  PageIntro,
  Principles,
  SectionHeading,
} from '@/components/shared';
import { profile } from '@/content/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Four years of frontend and mobile product engineering across React Native, native Android, real-time systems, and operational software.',
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About / Nishchay Bhatt"
        title="I started in React Native. The work kept pulling me deeper."
        description="Into the native platform, the real-time events, the unreliable connection. Into the systems around the screen."
      />
      <div className="about-story">
        <div className="about-meta">
          <span className="availability-dot" aria-hidden="true" />
          <p>{profile.role}</p>
          <p className="caption">4+ years / {profile.location}</p>
          <a href={profile.resume} download className="button button-secondary">
            Download résumé<span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="reading-prose">
          <p>
            I am a frontend and mobile engineer based in Bengaluru. Over the
            last four years, I have built consumer and operational products in
            React and React Native, including real-time games, field-operations
            tools, payment workflows, analytics interfaces, and an AI calling
            assistant.
          </p>
          <p>
            The part of engineering I enjoy most is where the interface stops
            being isolated. A screen depends on native Android behavior,
            background lifecycle, a WebSocket event, an unreliable connection, a
            payment state, or work that must not block the first render. Those
            boundaries are where product quality is usually won or lost.
          </p>
          <p>
            That interest also shapes my open-source work: a lifecycle boot
            manager, a package for Android overlay behavior, and tools that
            inspect packages before execution or installation.
          </p>
          <p>
            I am looking for SDE-2 or senior frontend/mobile roles where I can
            own meaningful product systems, work with strong engineers, and
            deepen my web, platform, and systems experience.
          </p>
          <a className="text-link" href={profile.github}>
            Explore the public work
            <Arrow diagonal />
          </a>
        </div>
      </div>
      <section className="section-block">
        <SectionHeading number="01" title="Experience" />
        <Experience full />
        <div className="freelance-note">
          <span className="mono">Supporting freelance work / 2024</span>
          <p>
            <strong>Waters India.</strong> Built and maintained a Next.js
            website, including search-engine optimization.
          </p>
        </div>
      </section>
      <section className="section-block">
        <SectionHeading number="02" title="Principles I return to" />
        <Principles />
      </section>
      <ContactClose />
    </>
  );
}
