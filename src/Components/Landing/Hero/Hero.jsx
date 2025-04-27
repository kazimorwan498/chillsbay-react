import Slider from "react-slick";
import { cn } from "@heroui/react";
import { useEffect, useState } from "react";
import HeroFinder from "./HeroFinder";
import { HeroCarousel } from "../../../lib/Data.json";

export default function Hero() {
	const settings = {
		dots: true,
		fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
	};

	return (
		<section className="relative">
			<div className="slider-container">
				<Slider {...settings}>
					{HeroCarousel.map((item, index) => (
						<div key={index} className="!h-[678px]">
							<img src={item} alt={item} className="!h-[678px] object-cover" />
						</div>
					))}
				</Slider>
			</div>
			<section className="bg-no-repeat bg-left-top w-full px-4 sm:px-12 900px:ps-[100px] pt-10 sm:pt-14 900px:pt-20 pb-16 sm:pb-[100px] 900px:pb-[180px] space-y-10 bg-cover transition-all absolute inset-0">
				<h1 className="text-white text-3xl sm:text-5xl 900px:text-[62px] font-bold leading-[120%] max-w-[316px] sm:max-w-[510px] 900px:max-w-[694px]">
					Find amazing things to do anytime, anywhere in Lagos.
				</h1>
				<HeroFinder />
			</section>
		</section>
	);
}
