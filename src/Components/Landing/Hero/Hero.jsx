import {
	Autocomplete,
	AutocompleteItem,
	Button,
	cn,
	DatePicker,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { Location, Activities } from "../../../lib/Data.json";
import HeroFinder from "./HeroFinder";

export default function Hero() {
	const HeroCarousel = ["/hero-bg1.png", "/hero-bg2.png", "/hero-bg3.png"];

	const [BgImgs, setBgImgs] = useState(HeroCarousel[0]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const changeBg = setInterval(() => {
			setCurrentIndex(
				(prevIndex) => (prevIndex + 1) % HeroCarousel.length
			);
		}, 5000);

		return () => clearInterval(changeBg);
	}, []);

	useEffect(() => {
		setBgImgs(HeroCarousel[currentIndex]);
	}, [currentIndex]);

	return (
		<section
			className="bg-no-repeat bg-left-top w-full px-4 sm:px-12 900px:ps-[100px] pt-10 sm:pt-14 900px:pt-20 pb-16 sm:pb-[100px] 900px:pb-[180px] space-y-10 bg-cover transition-all relative"
			style={{ backgroundImage: `url(${BgImgs})` }}
		>
			<div className="absolute bottom-4 flex items-center justify-center gap-2.5 sm:gap-4 left-1/2 -translate-x-1/2">
				{HeroCarousel.map((_, i) => (
					<button
						onClick={() => setCurrentIndex(i)}
						className={cn(
							"size-2.5 sm:size-4 rounded-full transition-colors",
							currentIndex === i
								? "bg-[rgb(23,34,55)]"
								: "bg-[rgb(90,94,102)]"
						)}
						key={i}
					/>
				))}
			</div>

			<h1 className="text-white text-3xl sm:text-5xl 900px:text-[62px] font-bold leading-[120%] max-w-[316px] sm:max-w-[510px] 900px:max-w-[694px]">
				Find amazing things to do anytime, anywhere in Lagos.
			</h1>
			<HeroFinder />
		</section>
	);
}
