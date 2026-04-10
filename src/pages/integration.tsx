import { ConsentStatus } from "../components/ConsentStatus";
import { TrackEventButton } from "../components/TrackEventButton";
import "../styles.css";

export default function IntegrationPage() {
	return (
		<div className="min-h-screen bg-gradient">
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="hero">
					<span className="badge badge-integration">CMP + CDP</span>
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Consent-Gated Tracking
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						See how the CMP and CDP work together. The CMP automatically gates
						tracking based on user consent — when analytics consent is rejected,
						CDP events are blocked at the network level.
					</p>
				</div>

				<div className="demo-grid">
					<section className="demo-card">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							Try It
						</h2>
						<p className="text-gray-600 mb-4">
							Use the banner to change consent, then try tracking an event.
						</p>
						<div className="button-row">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() => window.ours_consent?.show()}
							>
								Show Banner
							</button>
							<TrackEventButton
								eventName="integration_test_clicked"
								eventProperties={{ location: "integration", test: true }}
								className="btn-primary"
							>
								Track Event
							</TrackEventButton>
						</div>
					</section>

					<section className="demo-card">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							Current Consent State
						</h2>
						<p className="text-gray-600 mb-4">
							Consent categories and their current status. Reject analytics to
							see CDP events get blocked.
						</p>
						<ConsentStatus />
					</section>

					<section className="demo-card">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							How It Works
						</h2>
						<p className="text-gray-600 mb-4">
							Load the CMP first so consent is available before the CDP
							initializes. Once both are present, the CMP automatically gates
							CDP requests.
						</p>
						<pre className="code-block">
							<code>{`<!-- 1. Load the CMP first -->
<link rel="stylesheet"
  href="https://cdn.oursprivacy.com/consent.css">
<script
  src="https://cdn.oursprivacy.com/cmp-init?token=YOUR_CMP_TOKEN">
</script>

<!-- 2. Then load the CDP -->
<script>
  // CDP init snippet...
  ours('init', 'YOUR_CDP_TOKEN', {
    track_web_events: true
  });
</script>

<!-- The CMP loads before the CDP,
     so consent gates tracking from the start. -->`}</code>
						</pre>
					</section>

					<section className="demo-card">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							SPA Advantage
						</h2>
						<p className="text-gray-600 mb-4">
							In a React SPA (unlike SSR frameworks like Next.js), you can place
							both scripts directly in <code>index.html</code>. The CMP loads
							synchronously before the CDP, which means consent is available
							before any tracking begins — no timing race to worry about.
						</p>
						<pre className="code-block">
							<code>{`<!-- index.html -->
<head>
  <!-- CMP loads first (synchronous) -->
  <link rel="stylesheet"
    href="https://cdn.oursprivacy.com/consent.css">
  <script
    src="https://cdn.oursprivacy.com/cmp-init?token=YOUR_TOKEN">
  </script>

  <!-- CDP loads second -->
  <script>
    // Your Ours Pixel Code snippet here
    ours('init', 'YOUR_CDP_TOKEN', {
      track_web_events: true
    });
  </script>
</head>`}</code>
						</pre>
					</section>
				</div>
			</div>
		</div>
	);
}
