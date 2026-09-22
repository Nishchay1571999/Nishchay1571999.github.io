export function CallingDiagram() {
  return (
    <figure className="system-figure calling-figure">
      <div className="figure-meta">
        <span>HiRobin / Product boundaries</span>
        <span aria-hidden="true">↗</span>
      </div>
      <div className="calling-model">
        <div className="system-node primary-node">
          <span className="node-label">Interface</span>
          <strong>React Native application</strong>
          <span>Onboarding · Conversations · Subscriptions</span>
        </div>
        <div className="model-connector" aria-hidden="true" />
        <div className="grid grid-cols-2 gap-4">
          <div className="system-node">
            <span className="node-label">Platform</span>
            <strong>Native Android</strong>
            <span>
              Dialer & telephony
              <br />
              Permissions & lifecycle
            </span>
          </div>
          <div className="system-node">
            <span className="node-label">Services</span>
            <strong>Live product state</strong>
            <span>
              Events & chat
              <br />
              Payments & calling
            </span>
          </div>
        </div>
        <div className="boundary-note">
          <span className="trace-dot active" aria-hidden="true" />
          One user journey. Multiple state owners.
        </div>
      </div>
      <figcaption>
        Sanitized responsibility map. Shows integration surfaces, not
        proprietary architecture.
      </figcaption>
    </figure>
  );
}

export function OfflineDiagram() {
  return (
    <figure className="system-figure offline-figure">
      <div className="figure-meta">
        <span>Operations / Proposed write lifecycle</span>
        <span className="text-attention">In progress</span>
      </div>
      <div className="offline-model">
        <div className="flex items-center justify-between gap-4">
          <span className="node-label">User updates a task</span>
          <span className="offline-label">Network unavailable</span>
        </div>
        <ol className="vertical-trace">
          <li>
            <span className="trace-step" aria-hidden="true">
              1
            </span>
            <div>
              <strong>Save the intent locally</strong>
              <span>Persist operation in IndexedDB</span>
            </div>
            <span className="state-tag">Queued</span>
          </li>
          <li>
            <span className="trace-step" aria-hidden="true">
              2
            </span>
            <div>
              <strong>Reconnect & reconcile</strong>
              <span>Compare the server revision</span>
            </div>
            <span className="state-tag">Syncing</span>
          </li>
          <li>
            <span className="trace-step" aria-hidden="true">
              3
            </span>
            <div>
              <strong>Confirm or surface a conflict</strong>
              <span>Keep the operator in control</span>
            </div>
            <span className="state-tag">Review</span>
          </li>
        </ol>
      </div>
      <figcaption>
        Architecture study: queued work stays visible until the server confirms
        it.
      </figcaption>
    </figure>
  );
}

export function LatchDiagram() {
  return (
    <figure className="system-figure latch-figure">
      <div className="figure-meta">
        <span>Latch / Inspect · Decide · Run</span>
        <span>Local-first</span>
      </div>
      <div className="latch-model">
        <p className="mono text-ink-soft">
          A trust boundary, before execution.
        </p>
        <ol className="audit-trace">
          <li>
            <span>01</span>
            <strong>Resolve</strong>
            <small>Exact version</small>
          </li>
          <li>
            <span>02</span>
            <strong>Verify</strong>
            <small>Artifact integrity</small>
          </li>
          <li>
            <span>03</span>
            <strong>Inspect</strong>
            <small>Static risk signals</small>
          </li>
          <li>
            <span>04</span>
            <strong>Decide</strong>
            <small>Policy & approval</small>
          </li>
        </ol>
        <div className="execution-gate">
          <span className="gate-rule" aria-hidden="true" />
          <strong>Execute only when allowed</strong>
          <span aria-hidden="true">↳</span>
        </div>
        <p className="caption">
          latch-core <span aria-hidden="true">→</span> latchx / latchpm
        </p>
      </div>
      <figcaption>
        Static risk signals inform a decision. They are not a malware verdict or
        a sandbox.
      </figcaption>
    </figure>
  );
}

export function SystemDiagram({ slug }: { slug: string }) {
  if (slug === 'hirobin') return <CallingDiagram />;
  if (slug === 'operations-console') return <OfflineDiagram />;
  return <LatchDiagram />;
}
