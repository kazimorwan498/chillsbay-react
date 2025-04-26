import Slider from "react-slick";
import { peopleImages } from "../../lib/Data.json";

export default function PeopleSect() {
	const settings = {
		className: "center",
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 6,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className="px-2 py-10 sm:py-[34px] mx-auto !max-w-[1258px]">
			<h3 className="font-bold text-2xl leading-[32px] mb-[30px] text-center sm:text-start">
				See How people are chilling on{" "}
				<span className="text-primary">Chillsbay</span>
			</h3>

			<div className="slider-container">
				<Slider
					{...settings}
					className="flex justify-center sm:justify-start !w-full !max-w-[1258px] overflow-y-auto"
				>
					{peopleImages.map((item, index) => (
						<img
							className="w-[207px] h-[200px]"
							key={index}
							src={item}
							alt="people"
						/>
					))}
				</Slider>
			</div>
		</section>
	);
}
