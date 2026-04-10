import { Link } from "react-router-dom";
import { TrackEventButton } from "../components/TrackEventButton";
import "../styles.css";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-gradient">
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="hero">
					<span className="badge badge-cdp">CDP via CDN</span>
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Customer Data Platform
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						This page demonstrates the CDP installed via a script tag in{" "}
						<code>index.html</code>. The snippet creates a global{" "}
						<code>ours()</code> function that queues calls until the SDK loads.
						Click the buttons below to track events.
					</p>
				</div>

				<div className="demo-grid">
					<section className="demo-card">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							Track Events
						</h2>
						<p className="text-gray-600 mb-4">
							Each button fires a custom event via <code>ours.track()</code>.
							Open your browser network tab to see the requests.
						</p>
						<div className="button-row">
							<TrackEventButton
								eventName="primary_action_clicked"
								eventProperties={{
									location: "homepage",
									button_type: "primary",
								}}
							>
								Get Started
							</TrackEventButton>
							<TrackEventButton
								eventName="secondary_action_clicked"
								eventProperties={{
									location: "homepage",
									button_type: "secondary",
								}}
								className="btn-secondary"
							>
								Learn More
							</TrackEventButton>
						</div>
					</section>

					<section className="demo-card">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							SPA Navigation
						</h2>
						<p className="text-gray-600 mb-4">
							Client-side navigation preserves the SDK state. Navigate to the
							about page and back — the CDP stays initialized.
						</p>
						<Link to="/about" className="btn btn-secondary">
							Go to About Page
						</Link>
					</section>

					<section className="demo-card">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							Installation
						</h2>
						<p className="text-gray-600 mb-4">
							Add the CDP snippet to your <code>index.html</code>. That's it.
						</p>
						<pre className="code-block">
							<code>{`<!-- Ours Pixel Code -->
<script>
  // Paste your snippet from the
  // Ours Privacy dashboard here.
  ours('init', 'YOUR_CDP_TOKEN', {
    track_web_events: true
  });
</script>
<!-- End Ours Pixel Code -->`}</code>
						</pre>
					</section>
				</div>
			</div>
		</div>
	);
}
