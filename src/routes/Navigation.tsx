import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";

import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";
import logo from "../react.svg";

const Navigation = () => {
	return (
		<>
			<BrowserRouter>
				<div className="main-layout">
					<nav >
						<img src={logo} alt="Logo React" />
						<ul>
							<li>
								<NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/"> SHOPPING </NavLink>
							</li>
							<li>
								<NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/about"> ABOUT </NavLink>
							</li>
							<li>
								<NavLink className={({ isActive }) => (isActive ? "nav-active" : "")} to="/users"> USERS </NavLink>
							</li>
						</ul>
					</nav>
				<Routes>
					<Route path="/about" element={<h1>About</h1>} />
					<Route path="/users" element={<h1>Users</h1>} />
					<Route path="/" element={<ShoppingPage/>} />
					<Route path="/*" element={<Navigate to="/" replace />} />
				</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};

export default Navigation;