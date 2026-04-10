import { useCallback, useEffect, useState } from "react";

export function ConsentStatus() {
	const [consent, setConsent] = useState<Record<string, boolean> | null>(null);

	const refresh = useCallback(() => {
		if (window.ours_consent) {
			setConsent({ ...window.ours_consent.getConsent() });
		}
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			if (window.ours_consent) {
				clearInterval(interval);
				refresh();
				window.ours_consent.on("change", () => refresh());
			}
		}, 200);
		return () => clearInterval(interval);
	}, [refresh]);

	if (!consent) {
		return (
			<div className="consent-status">
				<p className="text-gray-500">Waiting for consent manager to load...</p>
			</div>
		);
	}

	const categories = Object.entries(consent);

	return (
		<div className="consent-status">
			{categories.length === 0 ? (
				<p className="text-gray-500">
					No consent categories found. Try interacting with the banner.
				</p>
			) : (
				categories.map(([name, accepted]) => (
					<div key={name} className="consent-category">
						<span className="consent-category-name">{name}</span>
						<span
							className={`consent-badge ${accepted ? "consent-accepted" : "consent-rejected"}`}
						>
							{accepted ? "Accepted" : "Rejected"}
						</span>
					</div>
				))
			)}
		</div>
	);
}
