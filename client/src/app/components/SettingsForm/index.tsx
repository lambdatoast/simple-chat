import * as React from "react";
import * as style from "./style.scss";
import {
	SettingsData,
	UserName,
	InterfaceColor,
	CtrlEnter,
	ClockDisplay
} from "app/models";
import { InterfaceColorField } from "./InterfaceColorField";
import { CtrlEnterField } from "./CtrlEnterField";
import { UserNameField } from "./UserNameField";
import { ClockDisplayField } from "./ClockDisplayField";
import { ResetButton } from "./ResetButton";

interface SettingsFormProps {
	data: SettingsData;
	setters: {
		setUserName: (value: UserName) => void;
		setInterfaceColor: (value: InterfaceColor) => void;
		setCtrlEnter: (value: CtrlEnter) => void;
		setClockDisplay: (value: ClockDisplay) => void;
		resetToDefaults: () => void;
	};
}

export function SettingsForm(props: SettingsFormProps) {
	const { userName, interfaceColor, ctrlEnter, clockDisplay } = props.data;
	const {
		setInterfaceColor,
		setCtrlEnter,
		setUserName,
		setClockDisplay,
		resetToDefaults
	} = props.setters;

	return (
		<form className={style.settingsForm}>
			<UserNameField value={userName} onChange={setUserName} />
			<InterfaceColorField
				value={interfaceColor}
				onChange={setInterfaceColor}
			/>
			<ClockDisplayField value={clockDisplay} onChange={setClockDisplay} />
			<CtrlEnterField value={ctrlEnter} onChange={setCtrlEnter} />
			<ResetButton onClick={resetToDefaults} />
		</form>
	);
}
