import { Link, useLocation } from "react-router-dom";

const links = [
	{ to: "/", label: "CDP (CDN)" },
	{ to: "/cmp", label: "CMP" },
	{ to: "/integration", label: "CMP + CDP" },
];

export function Nav() {
	const { pathname } = useLocation();

	return (
		<nav className="nav">
			<div className="nav-inner">
				<span className="nav-logo">Ours Privacy</span>
				<div className="nav-links">
					{links.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className={`nav-link ${pathname === link.to ? "nav-link-active" : ""}`}
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
