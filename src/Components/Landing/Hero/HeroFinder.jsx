import {
	Autocomplete,
	AutocompleteItem,
	Button,
	DatePicker,
} from "@heroui/react";
import { Location, Activities } from "../../../lib/Data.json";

export default function HeroFinder() {
	return (
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
	);
}
