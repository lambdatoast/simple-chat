import * as React from "react";
import { SettingsData, NavigationPage } from "app/models";
import { AppState } from "app/reducers";
import { connect } from "react-redux";
import { Header } from "../Header";
import * as style from "./style.scss";

interface PageContainerProps {
	settings: SettingsData;
	activePage: NavigationPage;
	children: React.ReactNode;
}

function PageContainer(props: PageContainerProps) {
	return (
		<div className={style.page} data-theme={props.settings.interfaceColor}>
			<Header activePage={props.activePage} />
			{props.children}
		</div>
	);
}

function mapStateToProps(state: AppState) {
	return {
		settings: state.settings
	};
}

const mapDispatchToProps = {};

export const Page = connect<{}, {}, PageContainerProps, AppState>(
	mapStateToProps,
	mapDispatchToProps
)(PageContainer);
