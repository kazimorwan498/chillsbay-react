import React from "react";
import Hero from "./Hero";
import MoodSect from "./MoodSect";
import ThingsSect from "./ThingsSect";
import UseSect from "./UseSect";
import ChillingSect from "./ChillingSect/ChillingSect";

export default function HomePage() {
	return (
		<section>
			<div className="max-w-[1440px] mx-auto">
				<Hero />
				<MoodSect />
			</div>
			<ThingsSect />
			<div className="max-w-[1440px] mx-auto">
				<UseSect />
				<ChillingSect />
			</div>
		</section>
	);
}
