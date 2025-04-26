import React from "react";
import MyHeading from "../Global/MyHeading";
import { UseImages } from "../../lib/Data.json";

export default function UseSect() {
	return (
		<section className="pt-[68px] pb-[50px] px-5">
			<MyHeading className="sm:leading-[42px]">
				Why Use Chillsbay?
			</MyHeading>

			<div className="bg-primary/5 max-w-[1240px] mx-auto mt-10 shadow-xl rounded-sm sm:pt-[62px] py-3 sm:pb-[57px] px-2 sm:px-10 flex flex-wrap items-center justify-center md:justify-between">
				{UseImages.map(({ img, title, des, desMaxWidth }, i) => (
					<div
						key={i}
						className="flex flex-col items-center justify-center max-w-[323px]"
					>
						<img
							loading="lazy"
							className="size-20 md:size-24 xl:size-[128px] mb-4"
							src={img}
							alt="Use"
						/>
						<MyHeading className="text-xl sm:text-2xl md:text-[27px] lg:text-[30px] xl:!text-[32px] max-w-[274px] last:max-w-[295px] first:!max-w-[258px] sm:leading-[38px] text-black">
							{title}
						</MyHeading>
						<p
							className="mt-5 lg:leading-[34px] text-black text-base sm:text-lg md:text-xl lg:text-2xl text-center h-[120px]"
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
