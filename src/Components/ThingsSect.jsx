import React from "react";
import MyHeading from "./Global/MyHeading";
import { ThingsImages } from "../lib/Data.json";

export default function ThingsSect() {
	return (
		<section className="px-2 bg-primary/5">
			<section className="max-w-[1240px] mx-auto py-[50px]">
				<MyHeading className="xl:text-start text-xl sm:text-2xl md:text-[32px] mb-10">
					Top things to do in Lagos
				</MyHeading>

				<div className="flex flex-wrap items-center justify-center gap-5 sm:gap-y-10">
					{ThingsImages.map(({ img, title }, i) => (
						<div className="w-[295px] h-[309px]">
							<img
								className="rounded-[20px]"
								key={i}
								src={img}
								alt="Things"
							/>
							<h3 className="text-center text-lg sm:text-xl md:text-[22px] font-bold leading-[27px] mt-3">
								{title}
							</h3>
						</div>
					))}
				</div>
			</section>
		</section>
	);
}
