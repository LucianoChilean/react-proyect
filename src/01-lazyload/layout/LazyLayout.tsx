import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import { routes } from "./routes";


export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>

            <ul>
                <li>
                    <NavLink to="lazy1">Lazy 1</NavLink>

                </li>
                <li>
                    <NavLink to="lazy2">Lazy 2 antiguo</NavLink>
                </li>
                {
                    routes.map(({ to, name }) => (
                        <li key={to}>
                            <NavLink to={to}>{name}</NavLink>
                        </li>
                    ))
                }
            </ul>


            <Routes>
                <Route path="lazy1" element={<LazyPage1 />}></Route>
                <Route path="lazy2" element={<LazyPage2 />}></Route>
                {
                    routes.map(({ path, Component }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<Component />} ></Route>
                    ))
                }

                {/* <Route path="*" element={<div>Not Found</div>}></Route> */}
                <Route path="*" element={<Navigate to="lazy1" replace />}> </Route>
            </Routes>
        </div>
    )
}

export default LazyLayout;
