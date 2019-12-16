import * as React from "react";
import { Link } from "react-router-dom";
import * as style from "./style.scss";
import { setActivePage } from "app/actions";
import { AppState } from "app/reducers";
import { connect } from "react-redux";
import { NavigationState, NavigationPage } from "app/models";
import SettingsIcon from "./icons/settings.svg";
import ChatIcon from "./icons/chatbubbles.svg";
import * as classNames from "classnames";

interface HeaderComponentProps {
	navigation: NavigationState;
	literals: i18n.I18nLiterals;
	setActivePage: (p: NavigationPage) => void;
}

const classes = (
	root: string,
	p: NavigationPage,
	n: NavigationState,
	shouldBlink: boolean = false
) =>
	classNames({
		[style[`${root}`]]: true,
		[style[`${root}Active`]]: n.activePage === p,
		[style[`${root}Default`]]: n.activePage !== p,
		[style[`${root}Blinking`]]: shouldBlink
	});

function HeaderComponent(props: HeaderComponentProps) {
	const { setActivePage, navigation, literals } = props;
	const hasUnreadMessages = navigation.unreadCount > 0;
	return (
		<nav className={style.nav}>
			<ul className={style.navList}>
				<li className={style.navItem}>
					<Link
						className={classes("navLink", "Chat", navigation)}
						to="/"
						onClick={() => {
							setActivePage("Chat");
						}}
					>
						<ChatIcon
							className={classes(
								"navLinkIcon",
								"Chat",
								navigation,
								hasUnreadMessages
							)}
							height="2em"
						/>
						{hasUnreadMessages ? (
							<span className={style.unreadCount}>
								{navigation.unreadCount}
							</span>
						) : null}
						<span>{literals.title.chat}</span>
					</Link>
				</li>
				<li className={style.navItem}>
					<Link
						className={classes("navLink", "Settings", navigation)}
						to="/settings"
						onClick={() => {
							setActivePage("Settings");
						}}
					>
						<SettingsIcon
							className={classes("navLinkIcon", "Settings", navigation)}
							height="2em"
						/>
						<span>{literals.title.settings}</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

function mapStateToProps(state: AppState) {
	return {
		navigation: state.navigation,
		literals: state.i18n.literals
	};
}

const mapDispatchToProps = {
	setActivePage
};

export const Header = connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderComponent);
