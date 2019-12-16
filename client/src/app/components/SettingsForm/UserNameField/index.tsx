import * as React from "react";
import * as style from "./style.scss";
import { UserName } from "app/models";
import { SettingsFormLabel } from "../SettingsFormLabel";

interface UserNameFieldProps {
	value: UserName;
	label: string;
	onChange: (value: UserName) => void;
}

export function UserNameField(props: UserNameFieldProps) {
	const { value, label } = props;
	return (
		<>
			<SettingsFormLabel>{label}</SettingsFormLabel>
			<input
				className={style.userNameInput}
				name="userName"
				type="text"
				value={value}
				onChange={(e: { target: { value: UserName } }) => {
					props.onChange(e.target.value);
				}}
			/>
		</>
	);
}
