import Link from 'next/link';
import { PageIntro } from '@/components/shared';

export default function NotFound() {
  return (
    <div className="not-found">
      <PageIntro
        label="404 / Unresolved path"
        title="This path does not resolve."
        description="The page may have moved, or the project is not public."
      />
      <div className="flex flex-wrap gap-4">
        <Link href="/" className="button">
          Return home
        </Link>
        <Link href="/work" className="button button-secondary">
          View work
        </Link>
      </div>
    </div>
  );
}
