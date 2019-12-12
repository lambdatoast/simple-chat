import * as React from "react";
import { Link } from "react-router-dom";
import * as style from "./style.scss";

export function Header() {
	return (
		<nav className={style.nav}>
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
