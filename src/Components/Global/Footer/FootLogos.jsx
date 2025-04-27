import { Link } from "react-router-dom";
import { footSocial } from "../../../lib/Data.json";

export default function FootLogos() {
	return (
		<section>
			<div>
				<img src="/logo.svg" alt="Logo" />
			</div>

			<p className="mt-2 text-[15px] leading-[24px]">Copyright {new Date().getFullYear()} © Chillsbay</p>

			{/* Footer Social Media Links */}
			<div className="flex items-center gap-5 mt-6">
				{footSocial.map(({ img, url }, index) => (
					<Link to={url} target="__blank" key={index} className="size-5 flex items-center justify-center !p-0">
						<img src={img} alt="" />
					</Link>
				))}
			</div>
		</section>
	);
}
