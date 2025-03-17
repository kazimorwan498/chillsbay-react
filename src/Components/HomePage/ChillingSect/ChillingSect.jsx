import React from "react";
import MyHeading from "../../Global/MyHeading";
import ChillingCarousel from "./ChillingCarousel";

export default function ChillingSect() {
	return (
		<section className="pt-[60px] pb-[79px] px-2">
			<MyHeading className="pb-10">
				See How People are Chilling On Chillsbay
			</MyHeading>

			<section className="relative">
				<ChillingCarousel />
			</section>
		</section>
	);
}
