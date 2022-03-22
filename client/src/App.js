import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";
import SignInUp from "./pages/SignInUp";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/dashboard" element={<Dashboard />} />
		<Route path="/SignInUp" element={<SignInUp />} />
	</Routes>
);

export default App;
