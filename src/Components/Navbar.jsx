import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from "@heroui/navbar";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@heroui/react";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function MyNavbar() {
	const [IsMenuOpen, setIsMenuOpen] = useState(false);
	const menuItem = [
		"Eat & Drink",
		"Club",
		"Things to do",
		"Shoping",
		"Account",
		"Contact",
	];

	return (
		<section>
			<Navbar
				isMenuOpen={IsMenuOpen}
				onMenuOpenChange={setIsMenuOpen}
				className="w-full"
			>
				<NavbarContent className="sm:hidden">
					<NavbarBrand>
						<img src="/logo.svg" alt="Logo" />
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent className="sm:hidden pr-3" justify="end">
					<NavbarMenuToggle
						aria-level={IsMenuOpen ? "Close menu" : "Open menu"}
						className="cursor-pointer w-10"
					></NavbarMenuToggle>
				</NavbarContent>
			</Navbar>
		</section>
	);
}
