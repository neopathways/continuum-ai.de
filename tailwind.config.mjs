/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{html,js,svelte,astro,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,astro,ts}",
	],

	plugins: [require("flowbite/plugin")],

	darkMode: "class",

	variants: {
		extend: {
			backgroundColor: ["dark"]
		}
	},

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: "var(--color-primary-50)",
					100: "var(--color-primary-100)",
					200: "var(--color-primary-200)",
					300: "var(--color-primary-300)",
					400: "var(--color-primary-400)",
					500: "var(--color-primary-500)",
					600: "var(--color-primary-600)",
					700: "var(--color-primary-700)",
					800: "var(--color-primary-800)",
					900: "var(--color-primary-900)"
				},
				secondary: {
					50: "var(--color-secondary-50)",
					100: "var(--color-secondary-100)",
					200: "var(--color-secondary-200)",
					300: "var(--color-secondary-300)",
					400: "var(--color-secondary-400)",
					500: "var(--color-secondary-500)",
					600: "var(--color-secondary-600)",
					700: "var(--color-secondary-700)",
					800: "var(--color-secondary-800)",
					900: "var(--color-secondary-900)"
				},
				dark: {
					50: "var(--color-dark-50)",
					100: "var(--color-dark-100)",
					200: "var(--color-dark-200)",
					300: "var(--color-dark-300)",
					400: "var(--color-dark-400)",
					500: "var(--color-dark-500)",
					600: "var(--color-dark-600)",
					700: "var(--color-dark-700)",
					800: "var(--color-dark-800)",
					900: "var(--color-dark-900)"
				},
				gray: {
					50: "#F5F5F5",
					100: "#CCCCCC",
					200: "#B8B8B8",
					300: "#A3A3A3",
					400: "#8F8F8F",
					500: "#5C5C5C",
					600: "#3F3F3F",
					700: "#2C2C2C",
					800: "#171717",
					900: "#111111"
				}
			},
		},
	},
};
