import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./components/SignUp";
import SignInUp from "./components/SignUp";

// import About from "./pages/About";
// import DeskList from "./components/DeskList";
const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		{/* <Route path="/dashboard" element={<Dashboard />} /> */}
		<Route path="/SignInUp" element={<SignInUp />} />
		<Route path="/SignUp" element={<SignUp />} />
	</Routes>
);

export default App;
