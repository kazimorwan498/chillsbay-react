import React from "react";
import Hero from "./Hero";
import MoodSect from "./MoodSect";
import ThingsSect from "./ThingsSect";

export default function HomePage() {
	return (
		<section>
			<div className="max-w-[1440px] mx-auto">
				<Hero />
				<MoodSect />
			</div>
			<ThingsSect />
		</section>
	);
}
