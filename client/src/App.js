import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";
const App = () => (
	<Routes>
		<Route path="/" element={<LoginPage />} />
		<Route path="/dashboard" element={<Dashboard />} />
		<Route path="/booking" element={<BookingPage/>} />
		<Route path="/confirm" element={<ConfirmationPage/>} />
		{/* <Route path="/listCalender" element={<ListCalender/>} /> */}


	</Routes>
);

export default App;
