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
		<section className="h-auto md:h-[100px] flex py-2">
			<Navbar
				isMenuOpen={IsMenuOpen}
				onMenuOpenChange={setIsMenuOpen}
				className="w-full"
				maxWidth="2xl"
			>
				{/* For Large Screen Device */}
				<NavbarContent className="sm:hidden">
					<NavbarBrand>
						<img
							className="cursor-pointer"
							src="/logo.svg"
							alt="Logo"
						/>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent className="sm:hidden pr-3" justify="end">
					<NavbarMenuToggle
						aria-level={IsMenuOpen ? "Close menu" : "Open menu"}
						className="cursor-pointer w-10"
					></NavbarMenuToggle>
				</NavbarContent>

				{/* For Large Screen Device */}
				<NavbarContent className="hidden sm:flex gap-4 w-full justify-center">
					<NavbarBrand>
						<img
							className="cursor-pointer"
							src="/logo.svg"
							alt="Logo"
						/>
					</NavbarBrand>

					<NavbarItem className="cursor-pointer">
						<Link className="text-secondary">Eat & Drink</Link>
					</NavbarItem>

					<NavbarItem className="cursor-pointer">
						<Link className="text-secondary relative w-[60px]">
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
							<Dropdown>
								<DropdownTrigger>
									<Button
										variant="none"
										className="cursor-pointer rounded-lg text-secondary"
									>
										Things to do
										<svg
											dataSlot="icon"
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
								<DropdownMenu
									aria-label="Things to do"
									className="shadow-lg rounded-md p-2 ring ring-secondary/30 hover:ring-primary/50 active:ring-primary/70 transform-content"
								>
									<DropdownItem className="hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors">
										Water Sports
									</DropdownItem>
									<DropdownItem className="hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors">
										Day Parties
									</DropdownItem>
									<DropdownItem className="hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors">
										Outdoors
									</DropdownItem>
									<DropdownItem className="hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors">
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
							<Dropdown>
								<DropdownTrigger>
									<Button
										variant="none"
										className="cursor-pointer rounded-lg"
									>
										<img src="/user.svg" alt="user" />
										<span className="text-secondary">
											Account
										</span>
									</Button>
								</DropdownTrigger>
								<DropdownMenu
									aria-label="profile"
									className="shadow-lg rounded-md p-2 ring ring-secondary/30 hover:ring-primary/50 active:ring-primary/70 transform-content"
								>
									<DropdownItem className="hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors">
										My Profile
									</DropdownItem>
									<DropdownItem className="hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors">
										My History
									</DropdownItem>
									<DropdownItem className="hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors">
										Sign Out
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</Link>
					</NavbarItem>

					<NavbarItem>
						<Button variant="solid" color="primary">
							Contact Now
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</section>
	);
}
