import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import ours from "ours-web-sdk";
import { describe, expect, it, vi } from "vitest";
import { TrackEventButton } from "./TrackEventButton";

// Mock the ours SDK
vi.mock("ours-web-sdk", () => ({
	default: {
		track: vi.fn(),
	},
}));

describe("TrackEventButton", () => {
	it("renders children correctly", () => {
		render(
			<TrackEventButton eventName="test_event">Click Me</TrackEventButton>,
		);

		expect(
			screen.getByRole("button", { name: /click me/i }),
		).toBeInTheDocument();
	});

	it("tracks event when clicked", async () => {
		const user = userEvent.setup();
		const eventName = "button_clicked";
		const eventProperties = { location: "test", type: "primary" };

		render(
			<TrackEventButton eventName={eventName} eventProperties={eventProperties}>
				Click Me
			</TrackEventButton>,
		);

		const button = screen.getByRole("button", { name: /click me/i });
		await user.click(button);

		expect(ours.track).toHaveBeenCalledWith(eventName, eventProperties);
		expect(ours.track).toHaveBeenCalledTimes(1);
	});

	it("calls onClick handler when provided", async () => {
		const user = userEvent.setup();
		const handleClick = vi.fn();

		render(
			<TrackEventButton eventName="test_event" onClick={handleClick}>
				Click Me
			</TrackEventButton>,
		);

		const button = screen.getByRole("button", { name: /click me/i });
		await user.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("applies custom className", () => {
		render(
			<TrackEventButton eventName="test_event" className="custom-class">
				Click Me
			</TrackEventButton>,
		);

		const button = screen.getByRole("button", { name: /click me/i });
		expect(button).toHaveClass("custom-class");
		expect(button).toHaveClass("btn");
		expect(button).toHaveClass("btn-primary");
	});
});
