import {
	Autocomplete,
	AutocompleteItem,
	Button,
	DatePicker,
	Form,
} from "@heroui/react";

export default function Hero() {
	const Location = ["Dhaka", "Chattogram", "Feni", "Comilla", "Noakhali"];
	const Activities = [
		"Night Clubs",
		"Cox's Bazar",
		"Saint Martin",
		"Lalbag Fort",
		"Ahsan Manzil",
		"Sundarbans",
		"Sajek",
	];

	return (
		<section className="bg-[url('/hero-bg1.png')] bg-no-repeat bg-left-top w-full px-4 sm:px-12 900px:ps-[100px] pt-10 sm:pt-14 900px:pt-20 pb-16 sm:pb-[100px] 900px:pb-[180px] space-y-10 bg-cover">
			<h1 className="text-white text-3xl sm:text-5xl 900px:text-[62px] font-bold leading-[120%] max-w-[316px] sm:max-w-[510px] 900px:max-w-[694px]">
				Find amazing things to do anytime, anywhere in Lagos.
			</h1>
			<div className="max-w-[770px] bg-white rounded-8px shadow-[0_4px_3px_rgba(0,0,0,0.25)] p-6 900px:p-[30px]">
				<div className="flex flex-wrap gap-3 items-center justify-center">
					<Autocomplete
						labelPlacement="outside"
						label="Location"
						placeholder="Dhaka"
						size="sm"
						variant="bordered"
						maxListboxHeight={150}
						className="900px:w-[174px] h-[54px] *:!bg-white !ring-primary"
					>
						{Location.map((item, i) => (
							<AutocompleteItem key={i} value={item}>
								{item}
							</AutocompleteItem>
						))}
					</Autocomplete>
					<DatePicker
						labelPlacement="outside"
						label="Date"
						placeholder="Dhaka"
						size="sm"
						variant="bordered"
						className="900px:w-[152px] h-[54px] *:!bg-white !ring-primary"
					/>
					<Autocomplete
						labelPlacement="outside"
						label="Activities"
						placeholder="Night Clubs"
						size="sm"
						variant="bordered"
						maxListboxHeight={150}
						className="900px:w-[174px] h-[54px] *:!bg-white"
					>
						{Activities.map((item, i) => (
							<AutocompleteItem key={i} value={item}>
								{item}
							</AutocompleteItem>
						))}
					</Autocomplete>
					<Button
						color="primary"
						radius="sm"
						className="w-full 900px:w-[150px] lg:w-[174px] 900px:h-[54px]"
					>
						Search
					</Button>
				</div>
			</div>
		</section>
	);
}
