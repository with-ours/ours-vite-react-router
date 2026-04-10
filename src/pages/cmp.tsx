import { ConsentStatus } from "../components/ConsentStatus";
import "../styles.css";

export default function CmpPage() {
	return (
		<div className="min-h-screen bg-gradient">
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="hero">
					<span className="badge badge-cmp">Consent Management</span>
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Consent Management Platform
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						This page demonstrates the CMP on its own. It provides HIPAA-ready
						consent collection with auditor-grade receipts, regional policies,
						and a pre-styled banner loaded directly from the Ours Privacy CDN.
					</p>
				</div>

				<div className="demo-grid">
					<section className="demo-card">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							Installation
						</h2>
						<p className="text-gray-600 mb-4">
							Add the CMP with a single script tag in your HTML. The optional
							CSS file provides a pre-styled consent banner.
						</p>
						<pre className="code-block">
							<code>{`<!-- Optional: Pre-styled banner CSS -->
<link rel="stylesheet"
  href="https://cdn.oursprivacy.com/consent.css">

<!-- Required: Installation script -->
<script src="https://cdn.oursprivacy.com/cmp-init?token=YOUR_TOKEN">
</script>`}</code>
						</pre>
					</section>

					<section className="demo-card">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							Try It
						</h2>
						<p className="text-gray-600 mb-4">
							Click the buttons below to interact with the consent banner on
							this page.
						</p>
						<div className="button-row">
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => window.ours_consent?.show()}
							>
								Show Banner
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() => window.ours_consent?.showPreferences()}
							>
								Show Preferences
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() => window.ours_consent?.hide()}
							>
								Hide Banner
							</button>
						</div>
					</section>

					<section className="demo-card">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							Current Consent State
						</h2>
						<p className="text-gray-600 mb-4">
							This panel shows the live consent state. It updates automatically
							when you interact with the banner.
						</p>
						<ConsentStatus />
					</section>

					<section className="demo-card">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							Documentation
						</h2>
						<p className="text-gray-600 mb-4">
							For the full SDK reference, regional policies, and configuration
							options, see the docs.
						</p>
						<div className="link-list">
							<a
								href="https://docs.oursprivacy.com/docs/cookie-consent"
								target="_blank"
								rel="noopener noreferrer"
							>
								Cookie Consent Docs
							</a>
							<a
								href="https://docs.oursprivacy.com/docs/cookie-consent/javascript-sdk"
								target="_blank"
								rel="noopener noreferrer"
							>
								JavaScript SDK Reference
							</a>
							<a
								href="https://docs.oursprivacy.com/docs/cookie-consent/react-and-nextjs"
								target="_blank"
								rel="noopener noreferrer"
							>
								React and Next.js Guide
							</a>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
