import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

// import About from "./pages/About";
// import DeskList from "./components/DeskList";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		{/* We have left these old paths in the code incase we are adding anymore pages: */}
		{/* <Route path="/about/this/site" element={<About />} /> */}
		{/* <Route path="/desks" element={<DeskList />} /> */}
	</Routes>
);

export default App;
