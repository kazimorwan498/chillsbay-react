import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeSwitch() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return localStorage.getItem("theme") === "dark";
	});

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);

		if (isDarkMode === true) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
	};

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			setIsDarkMode(true);
		} else {
			document.documentElement.classList.remove("dark");
			setIsDarkMode(false);
		}
	}, []);

	return (
		<div className="fixed z-50 bottom-5 right-5 size-12 bg-accent rounded-full shadow-md">
			<button
				className="size-full flex items-center justify-center transition-transform duration-1000"
				onClick={toggleDarkMode}
			>
				{isDarkMode ? (
					<SunIcon className="size-6 stroke-white text-white" />
				) : (
					<MoonIcon className="size-6 stroke-white text-white" />
				)}
			</button>
		</div>
	);
}
