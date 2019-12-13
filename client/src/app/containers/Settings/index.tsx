import * as React from "react";
import { SettingsForm } from "app/components";
import { SettingsData, UserName, InterfaceColor } from "app/models";
import { AppState } from "app/reducers";
import { setUserName, setInterfaceColor } from "app/actions";
import { connect } from "react-redux";

interface SettingsProps {
	settings: SettingsData;
	setUserName: (value: UserName) => void;
	setInterfaceColor: (value: InterfaceColor) => void;
}

function SettingsComponent(props: SettingsProps) {
	return (
		<SettingsForm
			data={props.settings}
			setters={{
				setUserName: props.setUserName,
				setInterfaceColor: props.setInterfaceColor
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
	setInterfaceColor
};

export const Settings = connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsComponent);
