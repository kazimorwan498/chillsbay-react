import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/Global/Navbar";
import LandingPage from "./Components/Landing/LandingPage";
import ErrorPage from "./Components/Global/ErrorPage";
import MyFooter from "./Components/Global/Footer/MyFooter";
import ThemeSwitch from "./Components/Global/ThemeSwitch";

function App() {
	return (
		<BrowserRouter>
			<MyNavbar />
			<ThemeSwitch />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<MyFooter />
		</BrowserRouter>
	);
}

export default App;
