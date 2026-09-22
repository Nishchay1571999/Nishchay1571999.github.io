import type { Metadata } from 'next';
import { ContactClose, PageIntro } from '@/components/shared';
import { ProjectRecord } from '@/components/project-record';
import { work } from '@/content/work';

export const metadata: Metadata = {
  title: 'Selected work',
  description:
    'Production mobile ownership, offline-first frontend architecture, and published package inspection tools.',
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        label="Work / Selected systems"
        title="The interface is only part of the story."
        description="Three records of working across boundaries: native platforms, unreliable networks, and package execution. Each explains the constraint, the decisions, and what is still unfinished."
      />
      <div>
        {work.map((project) => (
          <ProjectRecord key={project.slug} project={project} />
        ))}
      </div>
      <ContactClose />
    </>
  );
}
