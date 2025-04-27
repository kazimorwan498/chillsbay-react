import React from "react";
import FootLogos from "./FootLogos";
import FootNav from "./FootNav";

export default function MyFooter() {
	return (
		<footer className="max-w-[1256px] mx-auto px-2 pt-[84px] pb-[118px]">
			<FootLogos />
			<FootNav />
		</footer>
	);
}
