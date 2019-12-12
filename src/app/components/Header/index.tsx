import * as React from "react";
import { Link } from "react-router-dom";

export function Header() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Chat</Link>
				</li>
				<li>
					<Link to="/settings">Settings</Link>
				</li>
			</ul>
		</nav>
	);
}
