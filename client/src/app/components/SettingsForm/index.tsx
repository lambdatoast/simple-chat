import * as React from "react";
import * as style from "./style.scss";
import { SettingsData, UserName, InterfaceColor } from "app/models";

interface SettingsFormProps {
	data: SettingsData;
	setters: {
		setUserName: (value: UserName) => void;
		setInterfaceColor: (value: InterfaceColor) => void;
	};
}

export function SettingsForm(props: SettingsFormProps) {
	const { userName, interfaceColor } = props.data;
	const onChange = (setter: (value: UserName | InterfaceColor) => void) => (e: {
		target: { value: string };
	}) => {
		return setter(e.target.value);
	};

	return (
		<form className={style.settingsForm}>
			<input
				type="text"
				value={userName}
				onChange={onChange(props.setters.setUserName)}
			/>
			<div className={style.interfaceColor}>
				<div className="form-check">
					<input
						className="form-check-input"
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
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="interfaceColorDark"
						value="dark"
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
		</form>
	);
}
