import { useState } from "react";
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
	Link,
} from "@heroui/react";
import {
	AccountItems,
	MobileNavItems,
	ThingsToDoItems,
} from "../../lib/Data.json";
import { Link as LinkRRD } from "react-router-dom";
import { DownArrow, ShoppingCart } from "./Icons";

export default function MyNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar
			shouldHideOnScroll
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className="w-full"
			maxWidth="2xl"
			classNames={{
				base: "h-[100px] py-2 max-w-[1440px] mx-auto bg-white dark:bg-black",
			}}
		>
			{/* For Large Screen Device */}
			<NavbarContent className="900px:hidden min-w-[160px]">
				<NavbarBrand>
					<LinkRRD to="/">
						<img
							className="cursor-pointer"
							src="/logo.svg"
							alt="Logo"
						/>
					</LinkRRD>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="900px:hidden sm:pr-3" justify="end">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="cursor-pointer w-10 rounded-md"
				/>
			</NavbarContent>

			{/* For Large Screen Device */}
			<NavbarContent className="hidden 900px:flex gap-4 w-full justify-center">
				<NavbarBrand>
					<LinkRRD to="/">
						<img
							className="cursor-pointer"
							src="/logo.svg"
							alt="Logo"
						/>
					</LinkRRD>
				</NavbarBrand>

				<NavbarItem className="cursor-pointer">
					<LinkRRD
						to="/eat-drink"
						className="text-accent dark:text-white bg-inherit rounded-md"
					>
						Eat & Drink
					</LinkRRD>
				</NavbarItem>

				<NavbarItem className="cursor-pointer">
					<LinkRRD
						to="/club"
						className="text-accent dark:text-white relative !w-[76px] bg-inherit rounded-md !font-medium"
					>
						Club{" "}
						<span className="bg-primary inline-flex items-center justify-center text-white font-bold h-[17px] w-[42px] rounded-full text-[10px] uppercase absolute bottom-5 right-0">
							<img
								className="size-[7px]"
								src="/sparkle.svg"
								alt="sparkles"
							/>
							Hot
						</span>
					</LinkRRD>
				</NavbarItem>

				<NavbarItem>
					<Dropdown className="shadow-lg rounded-[4px] p-2 border border-accent/10 hover:border-secondary active:border-primary/30">
						<DropdownTrigger>
							<div
								variant="none"
								className="flex items-center justify-center cursor-pointer rounded-md text-accent dark:text-white !text-base space-x-2"
							>
								<span>Things to do</span>
								<DownArrow className="size-4 stroke-primary dark:stroke-white" />
							</div>
						</DropdownTrigger>
						<DropdownMenu aria-label="Things to do">
							{ThingsToDoItems.map(({ items, path }, index) => (
								<DropdownItem
									className="hover:!bg-secondary active:bg-primary/30 [&>*]:!text-base rounded-md transition-colors [&>*]:!font-medium"
									key={index}
									textValue={items}
								>
									<LinkRRD to={path} className="block">
										{items}
									</LinkRRD>
								</DropdownItem>
							))}
						</DropdownMenu>
					</Dropdown>
				</NavbarItem>

				<NavbarItem className="cursor-pointer">
					<LinkRRD to="/cart">
						<ShoppingCart className="size-[28px] stroke-accent dark:stroke-white" />
					</LinkRRD>
				</NavbarItem>

				<NavbarItem>
					<Dropdown className="shadow-lg rounded-[4px] p-2 border border-accent/10 hover:border-secondary active:border-primary/30 transform-content">
						<DropdownTrigger>
							<Link
								variant="none"
								className="cursor-pointer rounded-md !text-base space-x-2"
							>
								<img src="/user.svg" alt="user" />
								<span className="text-accent">Account</span>
							</Link>
						</DropdownTrigger>
						<DropdownMenu aria-label="profile">
							{AccountItems.map(({ items, path }, index) => (
								<DropdownItem
									className="hover:!bg-secondary active:bg-primary/30 [&>*]:!text-base rounded-md transition-colors [&>*]:!font-medium"
									key={index}
								>
									<LinkRRD to={path} className="block">
										{items}
									</LinkRRD>
								</DropdownItem>
							))}
						</DropdownMenu>
					</Dropdown>
				</NavbarItem>

				<NavbarItem>
					<Button
						variant="solid"
						color="primary"
						className="w-[130px] h-9 rounded-md ms-[43px]"
					>
						<LinkRRD to="/contact-now">Contact Now</LinkRRD>
					</Button>
				</NavbarItem>
			</NavbarContent>

			{/* For Small Screen Device */}
			<NavbarMenu className="mt-7 bg-[rgb(245,250,255)]">
				{MobileNavItems.map(({ items, path }, index) => (
					<NavbarMenuItem key={index}>
						<LinkRRD
							to={path}
							className="px-3 py-1.5 block text-lg text-accent hover:!bg-secondary active:bg-primary/30 rounded-md transition-colors cursor-pointer !opacity-100"
							onClick={() => setIsMenuOpen(false)}
						>
							{items}
						</LinkRRD>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
