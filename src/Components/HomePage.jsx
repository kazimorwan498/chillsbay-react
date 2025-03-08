import React from "react";
import Hero from "./Hero";
import MoodSect from "./MoodSect";

export default function HomePage() {
	return (
		<section className="max-w-[1440px] mx-auto">
			<Hero />
			<MoodSect />
		</section>
	);
}
