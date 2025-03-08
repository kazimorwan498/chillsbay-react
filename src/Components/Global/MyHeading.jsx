import { cn } from "@heroui/react";
import React from "react";

export default function MyHeading({ children, className }) {
	return (
		<h2
			className={cn(
				"text-center font-bold text-2xl sm:text-3xl md:text-[42px] sm:leading-[54px] -tracking-[0.37px]",
				className
			)}
		>
			{children}
		</h2>
	);
}
