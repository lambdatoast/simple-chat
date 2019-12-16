import * as React from "react";
import { SettingsData } from "app/models";
import { AppState } from "app/reducers";
import { connect } from "react-redux";
import { Header } from "../Header";
import * as style from "./style.scss";

interface PageContainerProps {
	settings: SettingsData;
	children: React.ReactNode;
}

function PageContainer(props: PageContainerProps) {
	return (
		<div className={style.page} data-theme={props.settings.interfaceColor}>
			<Header />
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
