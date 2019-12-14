import * as React from "react";
import { SettingsForm } from "app/components";
import { SettingsData, UserName, InterfaceColor, CtrlEnter } from "app/models";
import { AppState } from "app/reducers";
import { setUserName, setInterfaceColor, setCtrlEnter } from "app/actions";
import { connect } from "react-redux";

interface SettingsProps {
	settings: SettingsData;
	setUserName: (value: UserName) => void;
	setInterfaceColor: (value: InterfaceColor) => void;
	setCtrlEnter: (value: CtrlEnter) => void;
}

function SettingsComponent(props: SettingsProps) {
	return (
		<SettingsForm
			data={props.settings}
			setters={{
				setUserName: props.setUserName,
				setInterfaceColor: props.setInterfaceColor,
				setCtrlEnter: props.setCtrlEnter
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
	setCtrlEnter
};

export const Settings = connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsComponent);
