import Hero from "./Components/Hero";
import MyNavbar from "./Components/Navbar";

function App() {
	return (
		<>
			<main className="max-w-[1440px] mx-auto">
				<MyNavbar />
				<Hero />
			</main>
		</>
	);
}

export default App;
