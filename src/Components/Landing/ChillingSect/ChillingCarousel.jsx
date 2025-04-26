import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { ChillingImages } from "../../../lib/Data.json";
import { Button } from "@heroui/react";

export default function ChillingCarousel() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};
	return (
		<section className="xl:max-w-[1251px] mx-auto">
			<Slider {...settings} className="!relative">
				{ChillingImages.map(({ img, title, des, pDetails }, index) => (
					<div
						className="!flex flex-col lg:flex-row lg:gap-[30px] lg:max-w-[1100px] mx-auto"
						key={index}
					>
						<div className="430px:max-w-[400px] md:max-w-[473px] xl:max-w-[612px] mx-auto lg:ms-auto">
							<img
								className="rounded-[18px] 430px:max-w-[400px] md:max-w-[473px] xl:max-w-[612px]"
								src={img}
								alt="chilling"
							/>
						</div>
						<div className="pt-4 430px:max-w-[400px] md:max-w-[473px] xl:max-w-[385px] mx-auto lg:me-auto">
							<h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold xl:!leading-[54px]">
								{title}
							</h3>
							<p className="text-base sm:text-lg lg:text-xl sm:leading-[30px] mt-2.5 md:mt-5 max-w-[400px] md:max-w-[473px] xl:max-w-[385px]">
								{des}
							</p>

							<div className="grid grid-cols-2 items-center justify-between gap-y-6 mt-[30px]">
								{pDetails.map(({ img, title }, index) => (
									<div className="flex gap-3" key={index}>
										<img
											className="size-4 sm:size-auto"
											loading="lazy"
											src={img}
											alt="calender"
										/>
										<span className="text-base sm:text-xl leading-[18px] font-bold tracking-wide">
											{title}
										</span>
									</div>
								))}
							</div>

							<div className="flex items-center gap-4 mt-8 sm:mt-6">
								<Button
									variant="bordered"
									color="primary"
									className="w-[120px] sm:w-[178px] h-10 rounded-md text-[15px] font-bold leading-[16px] text-primary"
								>
									Add to cart
								</Button>
								<Button
									variant="solid"
									color="primary"
									className="w-[120px] sm:w-[178px] h-10 rounded-md text-[15px] font-bold leading-[16px]"
								>
									Book Now
								</Button>
							</div>

							<div className="mt-5 sm:mt-[30px] flex items-center gap-5">
								<span className="text-base sm:text-xl">
									Connect with us on:
								</span>
								<a
									className="size-4 sm:size-auto"
									href="https://x.com/"
									target="_blank"
								>
									<img src="/twitter.svg" alt="twitter" />
								</a>
								<a
									className="size-4 sm:size-auto"
									href="https://www.instagram.com/"
									target="_blank"
								>
									<img src="/instagram.svg" alt="instagram" />
								</a>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</section>
	);
}
