import { Outlet } from "react-router";
import { Nav } from "./Nav";

export function Layout() {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
}
