import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/Global/Navbar";
import LandingPage from "./Components/Landing/LandingPage";
import ErrorPage from "./Components/Global/ErrorPage";
import MyFooter from "./Components/Global/Footer/MyFooter";

function App() {
	return (
		<BrowserRouter>
			<MyNavbar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<MyFooter />
		</BrowserRouter>
	);
}

export default App;
