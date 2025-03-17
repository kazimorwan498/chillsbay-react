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
	};
	return (
		<section className="max-w-[1251px] mx-auto px-2.5">
			<Slider {...settings} className="!relative">
				{ChillingImages.map(
					(
						{ img, title, des, date, location, time, price },
						index
					) => (
						<div
							className="!flex gap-[30px] max-w-[1027px] mx-auto"
							key={index}
						>
							<img
								className="rounded-[18px]"
								src={img}
								alt="chilling"
							/>
							<div className="pt-4 max-w-[385px]">
								<h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold !leading-[54px]">
									{title}
								</h3>
								<p className="text-xl leading-[30px] mt-5">
									{des}
								</p>

								<div className="grid grid-cols-2 items-center justify-between gap-y-6 mt-[30px]">
									<div className="flex gap-3">
										<img
											src="/calender.svg"
											alt="calender"
										/>
										<span className="text-xl leading-[18px] font-bold tracking-wide">
											{date}
										</span>
									</div>
									<div className="flex gap-3">
										<img
											src="/location.svg"
											alt="location"
										/>
										<span className="text-xl leading-[18px] font-bold tracking-wide uppercase">
											{location}
										</span>
									</div>
									<div className="flex gap-3">
										<img src="/clock.svg" alt="clock" />
										<span className="text-xl leading-[18px] font-bold tracking-wide">
											{time}
										</span>
									</div>
									<div className="flex gap-3">
										<img src="/price.svg" alt="price" />
										<span className="text-xl leading-[18px] font-bold tracking-wide">
											{price}
										</span>
									</div>
								</div>

								<div className="flex items-center justify-between gap-4 mt-6">
									<Button
										variant="bordered"
										color="primary"
										className="w-[178px] h-10 rounded-md text-[15px] font-bold leading-[16px] text-primary"
									>
										Add to cart
									</Button>
									<Button
										variant="solid"
										color="primary"
										className="w-[178px] h-10 rounded-md text-[15px] font-bold leading-[16px]"
									>
										Book Now
									</Button>
								</div>

								<div className="mt-[30px] flex items-center gap-5">
									<span>Connect with us on:</span>
									<a href="https://x.com/" target="_blank">
										<img src="/twitter.svg" alt="twitter" />
									</a>
									<a
										href="https://www.instagram.com/"
										target="_blank"
									>
										<img
											src="/instagram.svg"
											alt="instagram"
										/>
									</a>
								</div>
							</div>
						</div>
					)
				)}
			</Slider>
		</section>
	);
}
