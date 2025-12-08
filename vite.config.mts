import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	publicDir: "./public",
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/test/setup.ts",
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
			exclude: [
				"**/node_modules/**",
				"**/dist/**",
				"**/*.test.{ts,tsx}",
				"**/*.config.{ts,mts,js}",
				"**/test/**",
				"**/*.d.ts",
			],
		},
	},
} as UserConfig);
