import { heroui } from "@heroui/react";

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
				secondary: "rgb(38, 57, 92)",
			},
		},
	},
	darkMode: "class",
	plugins: [heroui()],
};
