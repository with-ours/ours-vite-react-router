import ours from "ours-web-sdk";
import type React from "react";

interface TrackEventButtonProps {
	eventName: string;
	eventProperties?: Record<string, unknown>;
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export function TrackEventButton({
	eventName,
	eventProperties = {},
	children,
	className = "",
	onClick,
}: TrackEventButtonProps) {
	const handleClick = () => {
		// Track the event using ours
		ours.track(eventName, eventProperties);

		// Call the optional onClick handler
		if (onClick) {
			onClick();
		}
	};

	return (
		<button
			type="button"
			onClick={handleClick}
			className={`btn btn-primary ${className}`}
		>
			{children}
		</button>
	);
}
