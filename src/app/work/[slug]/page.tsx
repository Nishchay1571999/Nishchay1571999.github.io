import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Arrow, Status } from '@/components/shared';
import { SystemDiagram } from '@/components/system-diagrams';
import { work } from '@/content/work';
import {
  hirobinContributions,
  hirobinEvidence,
  packages,
  profile,
} from '@/content/site';

export const dynamicParams = false;
export function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = work.find((item) => item.slug === slug);
  return {
    title: project?.shortTitle ?? 'Work',
    description: project?.summary,
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = work.find((item) => item.slug === slug);
  if (!project) notFound();
  const next = work[(work.indexOf(project) + 1) % work.length];
  return (
    <>
      <div className="case-header">
        <Link href="/work" className="breadcrumb">
          Work <span aria-hidden="true">/</span> {project.shortTitle}
        </Link>
        <div className="flex flex-wrap items-center gap-5 mb-6">
          <span className="index">Record {project.index}</span>
          <Status status={project.status} />
        </div>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>
      </div>
      <div className="case-layout">
        <article className="case-body">
          <section id="context">
            <h2>Context</h2>
            <p>{project.context}</p>
          </section>
          <section id="constraints">
            <h2>The difficult part</h2>
            <p>{project.constraint}</p>
          </section>
          <section id="responsibility">
            <h2>My responsibility</h2>
            <p>{project.responsibility}</p>
            {slug === 'hirobin' && (
              <>
                <div className="ownership-evidence">
                  {hirobinEvidence.map((item) => (
                    <div key={item.label}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
                <p className="caption">
                  Product usage: September 2026 snapshot. Contribution period:
                  January–September 2026. Installs and active users are distinct
                  measures; product scale is team context.
                </p>
                <div className="failure-list">
                  {hirobinContributions.map((item) => (
                    <div key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
          <section id="system-model">
            <h2>System model</h2>
            <SystemDiagram slug={slug} />
          </section>
          <section id="decisions">
            <h2>Decisions & tradeoffs</h2>
            <div className="decisions">
              {project.decisions.map((decision, index) => (
                <div className="decision" key={decision.title}>
                  <span className="index">0{index + 1}</span>
                  <div>
                    <h3>{decision.title}</h3>
                    <p>{decision.why}</p>
                    <div className="tradeoff">
                      <span className="node-label">Tradeoff</span>
                      <p>{decision.tradeoff}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section id="failure-modes">
            <h2>Failure modes considered</h2>
            {slug === 'hirobin' && (
              <p className="caption">
                Constraints to discuss in an interview; implementation-specific
                recovery details remain private.
              </p>
            )}
            <div className="failure-list">
              {project.failures.map((failure) => (
                <div key={failure.title}>
                  <h3>{failure.title}</h3>
                  <p>{failure.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section id="outcome">
            <h2>
              {project.status === 'In progress'
                ? 'Current state & validation'
                : 'Outcome'}
            </h2>
            <p>{project.outcome}</p>
            {slug === 'latch' && (
              <>
                <p>
                  The reviewed releases provide local static risk signals and
                  policy enforcement. They are not malware verdicts, a sandbox,
                  or a complete package-manager replacement.
                </p>
                <div className="case-package-links">
                  {packages.slice(2).map((pkg) => (
                    <div key={pkg.name}>
                      <strong>{pkg.name}</strong>
                      <a href={pkg.github}>
                        Source
                        <Arrow diagonal />
                      </a>
                      <a href={pkg.npm}>
                        npm
                        <Arrow diagonal />
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
          <section id="retrospective">
            <h2>
              {slug === 'operations-console'
                ? 'What comes next'
                : 'What I would examine next'}
            </h2>
            <p>{project.retrospective}</p>
          </section>
          <section className="interview-prompts">
            <span className="mono text-signal">For a deeper conversation</span>
            <h2>Ask me about this work.</h2>
            <ul>
              {project.prompts.map((prompt) => (
                <li key={prompt}>{prompt}</li>
              ))}
            </ul>
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent(`Let's talk about ${project.shortTitle}`)}`}
              className="text-link"
            >
              Discuss this work
              <Arrow diagonal />
            </a>
          </section>
        </article>
        <aside className="case-rail">
          <dl>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt>Visibility</dt>
              <dd>{project.confidentiality}</dd>
            </div>
            <div>
              <dt>Stack & focus</dt>
              <dd>
                <ul>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
          <nav aria-label="Case study sections">
            <span className="node-label">In this record</span>
            <a href="#system-model">System model</a>
            <a href="#decisions">Decisions & tradeoffs</a>
            <a href="#failure-modes">Failure modes</a>
            <a href="#outcome">Outcome & progress</a>
          </nav>
          {slug === 'hirobin' && (
            <p className="caption">
              No proprietary screenshots, internal volumes, or private source
              are published here.
            </p>
          )}
        </aside>
      </div>
      <div className="next-project">
        <div>
          <span className="mono text-ink-soft">Next record / {next.index}</span>
          <h2>
            <Link href={`/work/${next.slug}`}>
              {next.shortTitle}
              <Arrow />
            </Link>
          </h2>
        </div>
        <Link href="/work" className="text-link">
          All work
          <Arrow />
        </Link>
      </div>
    </>
  );
}
