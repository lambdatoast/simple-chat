import * as React from "react";
import { Link } from "react-router-dom";
import * as style from "./style.scss";
import { setActivePage } from "app/actions";
import { AppState } from "app/reducers";
import { connect } from "react-redux";
import { NavigationState, NavigationPage } from "app/models";

interface HeaderComponentProps {
	navigation: NavigationState;
	setActivePage: (p: NavigationPage) => void;
}

function HeaderComponent(props: HeaderComponentProps) {
	const { setActivePage, navigation } = props;
	return (
		<nav className={style.nav}>
			<ul>
				<li>
					<Link
						to="/"
						onClick={() => {
							setActivePage("Chat");
						}}
					>
						Chat
						{navigation.unreadCount > 0 ? (
							<span className={style.unreadCount}>
								{navigation.unreadCount}
							</span>
						) : null}
					</Link>
				</li>
				<li>
					<Link
						to="/settings"
						onClick={() => {
							setActivePage("Settings");
						}}
					>
						Settings
					</Link>
				</li>
			</ul>
		</nav>
	);
}

function mapStateToProps(state: AppState) {
	return {
		navigation: state.navigation
	};
}

const mapDispatchToProps = {
	setActivePage
};

export const Header = connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderComponent);
