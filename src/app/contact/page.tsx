import type { Metadata } from 'next';
import { Arrow, PageIntro } from '@/components/shared';
import { CopyButton } from '@/components/copy-button';
import { profile } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Nishchay Bhatt for SDE-2, senior frontend, and React Native engineering opportunities.',
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact / Start a conversation"
        title="Let’s talk about the product problem, not just the stack."
        description="I’m open to SDE-2 and senior frontend or React Native opportunities. Especially when the work involves complex client state, performance, native platforms, or real-time products."
      />
      <div className="contact-page-grid">
        <div>
          <span className="node-label">The best way to reach me</span>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <Arrow diagonal />
          </a>
          <CopyButton text={profile.email} />
          <div className="contact-links">
            <a href={profile.linkedin}>
              <span>LinkedIn</span>
              <span>
                Professional profile
                <Arrow diagonal />
              </span>
            </a>
            <a href={profile.github}>
              <span>GitHub</span>
              <span>
                Code & published tools
                <Arrow diagonal />
              </span>
            </a>
            <a href={profile.resume} download>
              <span>Résumé</span>
              <span>One-page PDF ↓</span>
            </a>
          </div>
        </div>
        <aside className="opportunity-note">
          <div className="availability">
            <span className="availability-dot" aria-hidden="true" />
            Open to opportunities
          </div>
          <h2>
            Meaningful ownership.
            <br />
            Difficult systems.
            <br />
            Thoughtful teams.
          </h2>
          <p>{profile.location}</p>
          <p className="caption">{profile.opportunities}</p>
          <hr />
          <p>
            A role description and a little context about the product are a
            useful place to start.
          </p>
        </aside>
      </div>
    </>
  );
}
