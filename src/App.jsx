import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/Global/Navbar";
import HomePage from "./Components/HomePage";
import ErrorPage from "./Components/Global/ErrorPage";

function App() {
	return (
		<BrowserRouter>
			<MyNavbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
