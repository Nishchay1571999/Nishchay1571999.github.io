import Link from 'next/link';
import type { WorkRecord } from '@/content/work';
import { Arrow, Status } from './shared';
import { SystemDiagram } from './system-diagrams';

export function ProjectRecord({ project }: { project: WorkRecord }) {
  return (
    <article className="project-record">
      <div className="project-topline">
        <div className="flex items-center gap-5">
          <span className="index">{project.index} /</span>
          <Status status={project.status} />
        </div>
        <span className="mono text-ink-soft">{project.category}</span>
      </div>
      <div
        className={`project-body ${project.index === '02' ? 'project-reversed' : ''}`}
      >
        <div className="project-copy">
          <h3>
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          </h3>
          <p className="project-summary">{project.summary}</p>
          <p className="project-problem">{project.problem}</p>
          <div className="project-outcome">
            <span className="node-label">
              {project.status === 'In progress' ? 'Current state' : 'Outcome'}
            </span>
            <p>{project.outcome}</p>
          </div>
          <ul className="stack-list" aria-label="Technologies and focus">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link
            className="text-link project-cta"
            href={`/work/${project.slug}`}
          >
            {project.cta}
            <Arrow />
          </Link>
        </div>
        <SystemDiagram slug={project.slug} />
      </div>
    </article>
  );
}
