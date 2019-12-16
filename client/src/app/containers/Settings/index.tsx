import * as React from "react";
import { SettingsForm } from "app/components";
import {
	SettingsData,
	UserName,
	InterfaceColor,
	CtrlEnter,
	ClockDisplay,
	Language
} from "app/models";
import { AppState } from "app/reducers";
import {
	setUserName,
	setInterfaceColor,
	setCtrlEnter,
	setClockDisplay,
	setLanguage,
	resetToDefaults
} from "app/actions";
import { connect } from "react-redux";
import { Page } from "../Page";

interface SettingsProps {
	settings: SettingsData;
	literals: i18n.I18nLiterals;
	setUserName: (value: UserName) => void;
	setInterfaceColor: (value: InterfaceColor) => void;
	setCtrlEnter: (value: CtrlEnter) => void;
	setClockDisplay: (value: ClockDisplay) => void;
	setLanguage: (value: Language) => void;
	resetToDefaults: () => void;
}

function SettingsComponent(props: SettingsProps) {
	return (
		<Page settings={props.settings}>
			<SettingsForm
				data={props.settings}
				literals={props.literals}
				setters={{
					setUserName: props.setUserName,
					setInterfaceColor: props.setInterfaceColor,
					setCtrlEnter: props.setCtrlEnter,
					setClockDisplay: props.setClockDisplay,
					setLanguage: props.setLanguage,
					resetToDefaults: props.resetToDefaults
				}}
			/>
		</Page>
	);
}

function mapStateToProps(state: AppState) {
	return {
		settings: state.settings,
		literals: state.i18n.literals
	};
}

const mapDispatchToProps = {
	setUserName,
	setInterfaceColor,
	setCtrlEnter,
	setClockDisplay,
	setLanguage,
	resetToDefaults
};

export const Settings = connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsComponent);
