type OursFunction = {
	(...args: unknown[]): void;
	queue: unknown[][];
	version?: string;
	getVisitorId?: () => string;
	getSessionId?: () => string;
};

type OursConsentSDK = {
	getConsent: () => Record<string, boolean>;
	acceptAll: () => void;
	rejectAll: () => void;
	acceptCategory: (category: string) => void;
	rejectCategory: (category: string) => void;
	show: () => void;
	hide: () => void;
	showPreferences: () => void;
	necessaryOnly: () => void;
	on: (
		event: "change" | "firstConsent" | "consent" | "close",
		callback: (consent: Record<string, boolean>) => void,
	) => void;
	setLanguage: (code: string) => void;
};

declare global {
	interface Window {
		ours: OursFunction;
		ours_data: Record<string, unknown>;
		oursLayer: unknown[];
		ours_consent: OursConsentSDK;
	}
}

export {};
