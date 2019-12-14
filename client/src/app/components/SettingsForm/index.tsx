import * as React from "react";
import * as style from "./style.scss";
import { SettingsData, UserName, InterfaceColor, CtrlEnter } from "app/models";

interface SettingsFormProps {
	data: SettingsData;
	setters: {
		setUserName: (value: UserName) => void;
		setInterfaceColor: (value: InterfaceColor) => void;
		setCtrlEnter: (value: CtrlEnter) => void;
	};
}

export function SettingsForm(props: SettingsFormProps) {
	const { userName, interfaceColor, ctrlEnter } = props.data;
	const onChange = (setter: (value: UserName | InterfaceColor) => void) => (e: {
		target: { value: string };
	}) => {
		return setter(e.target.value);
	};

	return (
		<form className={style.settingsForm}>
			<label htmlFor="userName">User name</label>
			<input
				name="userName"
				type="text"
				value={userName}
				onChange={onChange(props.setters.setUserName)}
			/>
			<label>Interface Color</label>
			<div className={style.radioGroup}>
				<div className={style.formCheck}>
					<input
						type="radio"
						name="interfaceColorLight"
						checked={interfaceColor === "light"}
						onChange={e => {
							props.setters.setInterfaceColor("light");
						}}
					/>
					<label className="form-check-label" htmlFor="interfaceColorLight">
						Light
					</label>
				</div>
				<div className={style.formCheck}>
					<input
						type="radio"
						name="interfaceColorDark"
						checked={interfaceColor === "dark"}
						onChange={e => {
							props.setters.setInterfaceColor("dark");
						}}
					/>
					<label className="form-check-label" htmlFor="interfaceColorDark">
						Dark
					</label>
				</div>
			</div>
			<label>Interface Color</label>
			<div className={style.radioGroup}>
				<div className={style.formCheck}>
					<input
						type="radio"
						name="ctrlEnterOn"
						checked={ctrlEnter === "on"}
						onChange={e => {
							props.setters.setCtrlEnter("on");
						}}
					/>
					<label className="form-check-label" htmlFor="ctrlEnterOn">
						On
					</label>
				</div>
				<div className={style.formCheck}>
					<input
						type="radio"
						name="ctrlEnterOff"
						checked={ctrlEnter === "off"}
						onChange={e => {
							props.setters.setCtrlEnter("off");
						}}
					/>
					<label className="form-check-label" htmlFor="ctrlEnterOff">
						Off
					</label>
				</div>
			</div>
		</form>
	);
}
