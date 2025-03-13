import React from "react";
import MyHeading from "./Global/MyHeading";
import { MoodImage } from "../lib/Data.json";

export default function MoodSect() {
	return (
		<section className="py-[50px] px-2">
			<MyHeading className="mb-[30px]">
				What are you in the mood for?
			</MyHeading>

			<div className="flex flex-wrap items-center justify-center gap-y-3 sm:gap-y-5">
				{MoodImage.map(({ img, title }, i) => (
					<div key={i}>
						<img src={img} alt="Mood" />
						<h3 className="text-center text-xl sm:text-2xl md:text-[32px] font-bold leading-[38px] mt-3">
							{title}
						</h3>
					</div>
				))}
			</div>
		</section>
	);
}
