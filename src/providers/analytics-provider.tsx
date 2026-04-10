import ours from "ours-web-sdk";
import { useEffect } from "react";

export function AnalyticsProvider() {
	useEffect(() => {
		ours.init("your_code_here", { track_web_events: true });
	}, []);

	return null; // No UI, just initialization
}
