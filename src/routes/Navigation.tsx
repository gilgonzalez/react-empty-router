import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";


import { Suspense } from "react";
import logo from "../react.svg";
import { Route as RouteInterface, routes } from "./routes";


const Navigation = () => {
	return (
		<>
    <Suspense fallback={<h1>Cargando</h1>}>
			<BrowserRouter>
				<div className="main-layout">
					<nav >
						<img src={logo} alt="Logo React" />
						<ul>
              {/** Crear NavLink dinamico */}
              {
                routes.map(({to, name}: RouteInterface)=> (
                  <li key={to}>
                    <NavLink 
                      to={to} 
                      className={({ isActive }) => (isActive ? "nav-active" : "")} 
                    >{name}
                    </NavLink>
                  </li>
                ))
              }
						</ul>
					</nav>
				<Routes>
          {
            routes.map(({path, Component}: RouteInterface)=> (
              <Route path={path} element={<Component/>} key={path} />
            ))
          }
					<Route path="/*" element={<Navigate to={routes[0].to} replace />} />
				</Routes>
				</div>
			</BrowserRouter>
    </Suspense>
		</>
	);
};

export default Navigation;