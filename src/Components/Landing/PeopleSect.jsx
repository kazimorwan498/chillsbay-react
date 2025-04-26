import React from "react";
import { peopleImages } from "../../lib/Data.json";

export default function PeopleSect() {
	return (
		<section className="px-2 py-10 sm:py-[50px] mx-auto !max-w-[1258px]">
			<h3 className="font-bold text-2xl leading-[32px] mb-[30px] text-center sm:text-start">
				See How people are chilling on{" "}
				<span className="text-primary">Chillsbay</span>
			</h3>

			<div className="flex flex-wrap  justify-center sm:justify-start !w-full !max-w-[1258px]">
				{peopleImages.map((item, index) => (
					<img
						className="w-[207px] h-[200px]"
						key={index}
						src={item}
						alt="people"
					/>
				))}
			</div>
		</section>
	);
}
