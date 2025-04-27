const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "rgb(14, 139, 255)",
				secondary: "rgb(214,235,253)",
				accent: "rgb(38, 57, 92)",
			},
			screens: {
				"900px": "900px",
				"650px": "650px",
				"430px": "430px",
				"400px": "400px",
			},
			fontFamily: {
				RedHat: "Red Hat Display,serif",
			},
			borderRadius: {
				"8px": "8px",
			},
		},
	},
	darkMode: "class",
	plugins: [heroui()],
};
