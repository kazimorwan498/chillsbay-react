import React from "react";
import MyHeading from "./Global/MyHeading";
import { UseImages } from "../lib/Data.json";

export default function UseSect() {
	return (
		<section className="pt-[68px] pb-[50px] px-2 max-w-[1440px] mx-auto">
			<MyHeading className="sm:leading-[42px]">
				Why Use Chillsbay?
			</MyHeading>

			<div className="bg-primary/5 max-w-[1240px] mx-auto mt-10 shadow-lg pt-[62px] pb-[57px] px-10 flex flex-wrap items-center justify-center md:justify-between">
				{UseImages.map(({ img, title, des, desMaxWidth }, i) => (
					<div
						key={i}
						className="flex flex-col items-center justify-center max-w-[360px]"
					>
						<img
							className="size-[128px] mb-4"
							src={img}
							alt="Use"
						/>
						<MyHeading className="text-xl sm:text-2xl md:!text-[32px] max-w-[274px] last:max-w-[295px] first:!max-w-[258px] leading-[38px] text-black">
							{title}
						</MyHeading>
						<p
							className="mt-5 leading-[34px] text-black text-2xl text-center h-[120px]"
							style={{ maxWidth: desMaxWidth }}
						>
							{des}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
