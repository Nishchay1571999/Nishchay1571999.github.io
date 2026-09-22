import type { Metadata } from 'next';
import {
  Arrow,
  ContactClose,
  PackageList,
  PageIntro,
  SurfaceMap,
} from '@/components/shared';
import { profile } from '@/content/site';

export const metadata: Metadata = {
  title: 'Open source',
  description:
    'Published tools for React Native startup and lifecycle, and npm package inspection before execution or installation.',
};

export default function OpenSourcePage() {
  return (
    <>
      <PageIntro
        label="Open source / Published tools"
        title="Make the hidden state explicit."
        description="Small, focused tools built around problems I encountered while shipping mobile products and developer workflows. Source-visible, published, and candid about their limits."
      />
      <PackageList />
      <p className="caption mt-5">
        Versions reviewed in the portfolio source documents on 22 September
        2026. Follow the package links for the latest releases.
      </p>
      <section className="section-block source-story">
        <h2>Two moments that shape a mobile experience.</h2>
        <div>
          <p>
            A useful first render. A predictable return from the background.
            Startup sequencing and application lifecycle are easy to distribute
            across effects and callbacks, until a user encounters the resulting
            uncertainty.
          </p>
          <p>
            <strong>rn-bootloader</strong> organizes work into explicit pre-UI
            and post-UI phases. <strong>react-native-appcycle</strong> exposes
            foreground/background behavior and Android entry points through a
            React Native API.
          </p>
          <details className="technical-detail">
            <summary>Under the native boundary</summary>
            <p>
              react-native-appcycle includes new-architecture code generation
              and Kotlin/Objective-C surfaces. Foreground runtime behavior,
              Quick Settings, accessibility triggers, and optional assistant
              invocation have platform-specific setup requirements. The
              repository documents integration and compatibility.
            </p>
          </details>
        </div>
      </section>
      <section className="source-note">
        <h2>A clear limit is part of the API.</h2>
        <p>
          Latch reports local static risk signals and evaluates policy before
          delegation. It does not prove a package safe, sandbox its execution,
          or replace every package-manager behavior.
        </p>
      </section>
      <SurfaceMap />
      <section className="professional-proof">
        <h2>Some of the most meaningful work is private.</h2>
        <p>
          My professional work includes product applications, native Android
          integrations, supporting services, dashboards, and websites. These
          case studies describe the engineering surfaces without exposing
          internal repositories or proprietary product details.
        </p>
        <a className="text-link" href={profile.github}>
          View my GitHub profile
          <Arrow diagonal />
        </a>
      </section>
      <ContactClose />
    </>
  );
}
