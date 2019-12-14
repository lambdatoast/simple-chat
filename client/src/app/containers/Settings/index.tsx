import * as React from "react";
import { SettingsForm } from "app/components";
import {
	SettingsData,
	UserName,
	InterfaceColor,
	CtrlEnter,
	ClockDisplay
} from "app/models";
import { AppState } from "app/reducers";
import {
	setUserName,
	setInterfaceColor,
	setCtrlEnter,
	setClockDisplay,
	resetToDefaults
} from "app/actions";
import { connect } from "react-redux";

interface SettingsProps {
	settings: SettingsData;
	setUserName: (value: UserName) => void;
	setInterfaceColor: (value: InterfaceColor) => void;
	setCtrlEnter: (value: CtrlEnter) => void;
	setClockDisplay: (value: ClockDisplay) => void;
	resetToDefaults: () => void;
}

function SettingsComponent(props: SettingsProps) {
	return (
		<SettingsForm
			data={props.settings}
			setters={{
				setUserName: props.setUserName,
				setInterfaceColor: props.setInterfaceColor,
				setCtrlEnter: props.setCtrlEnter,
				setClockDisplay: props.setClockDisplay,
				resetToDefaults: props.resetToDefaults
			}}
		/>
	);
}

function mapStateToProps(state: AppState) {
	return {
		settings: state.settings
	};
}

const mapDispatchToProps = {
	setUserName,
	setInterfaceColor,
	setCtrlEnter,
	setClockDisplay,
	resetToDefaults
};

export const Settings = connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsComponent);
