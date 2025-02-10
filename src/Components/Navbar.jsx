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
		<section className="h-[100px] flex py-2">
			<Navbar
				isMenuOpen={IsMenuOpen}
				onMenuOpenChange={setIsMenuOpen}
				className="w-full"
				maxWidth="2xl"
			>
				{/* For Large Screen Device */}
				<NavbarContent className="900px:hidden min-w-[160px]">
					<NavbarBrand>
						<img
							className="cursor-pointer"
							src="/logo.svg"
							alt="Logo"
						/>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent className="900px:hidden pr-3" justify="end">
					<NavbarMenuToggle
						aria-level={IsMenuOpen ? "Close menu" : "Open menu"}
						className="cursor-pointer w-10 rounded-md"
					/>
				</NavbarContent>

				{/* For Large Screen Device */}
				<NavbarContent className="hidden 900px:flex gap-4 w-full justify-center">
					<NavbarBrand>
						<img
							className="cursor-pointer"
							src="/logo.svg"
							alt="Logo"
						/>
					</NavbarBrand>

					<NavbarItem className="cursor-pointer">
						<Link className="text-accent bg-inherit rounded-md">
							Eat & Drink
						</Link>
					</NavbarItem>

					<NavbarItem className="cursor-pointer">
						<Link className="text-accent relative w-[60px] bg-inherit rounded-md">
							Club{" "}
							<span className="bg-primary inline-flex items-center justify-center text-white font-bold h-[17px] w-[42px] rounded-full text-[10px] uppercase absolute bottom-5 right-0">
								<img
									className="size-[7px]"
									src="/sparkle.svg"
									alt="sparkles"
								/>
								Hot
							</span>
						</Link>
					</NavbarItem>

					<NavbarItem>
						<Link>
							<Dropdown className="shadow-lg rounded-[4px] p-2 border border-accent/10 hover:border-secondary active:border-primary/30 transform-content">
								<DropdownTrigger>
									<Button
										variant="none"
										className="cursor-pointer rounded-md text-accent"
									>
										Things to do
										<svg
											data-slot="icon"
											fill="none"
											strokeWidth={1.5}
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
											className="size-4 stroke-primary"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m19.5 8.25-7.5 7.5-7.5-7.5"
											/>
										</svg>
									</Button>
								</DropdownTrigger>
								<DropdownMenu aria-label="Things to do">
									<DropdownItem className="hover:!bg-secondary active:bg-primary/30 rounded-md transition-colors">
										Water Sports
									</DropdownItem>
									<DropdownItem className="hover:!bg-secondary active:bg-primary/30 rounded-md transition-colors">
										Day Parties
									</DropdownItem>
									<DropdownItem className="hover:!bg-secondary active:bg-primary/30 rounded-md transition-colors">
										Outdoors
									</DropdownItem>
									<DropdownItem className="hover:!bg-secondary active:bg-primary/30 rounded-md transition-colors">
										Rentals
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</Link>
					</NavbarItem>

					<NavbarItem className="cursor-pointer">
						<Link>
							<img src="/cart.svg" alt="cart" />
						</Link>
					</NavbarItem>

					<NavbarItem>
						<Link>
							<Dropdown className="shadow-lg rounded-[4px] p-2 border border-accent/10 hover:border-secondary active:border-primary/30 transform-content">
								<DropdownTrigger>
									<Button
										variant="none"
										className="cursor-pointer rounded-md"
									>
										<img src="/user.svg" alt="user" />
										<span className="text-accent">
											Account
										</span>
									</Button>
								</DropdownTrigger>
								<DropdownMenu aria-label="profile">
									<DropdownItem className="hover:!bg-secondary active:bg-primary/30 rounded-md transition-colors">
										My Profile
									</DropdownItem>
									<DropdownItem className="hover:!bg-secondary active:bg-primary/30 rounded-md transition-colors">
										My History
									</DropdownItem>
									<DropdownItem className="hover:!bg-secondary active:bg-primary/30 rounded-md transition-colors">
										Sign Out
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</Link>
					</NavbarItem>

					<NavbarItem>
						<Button
							variant="solid"
							color="primary"
							className="w-[130px] h-9 rounded-md"
						>
							Contact Now
						</Button>
					</NavbarItem>
				</NavbarContent>

				<NavbarMenu className="mt-7 bg-[rgb(245,250,255)]">
					{menuItem.map((item, index) => (
						<NavbarMenuItem key={index}>
							<Link className="px-3 py-1.5 w-full text-lg text-accent hover:!bg-secondary active:bg-primary/30 rounded-md transition-colors cursor-pointer !opacity-100">
								{item}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar>
		</section>
	);
}
