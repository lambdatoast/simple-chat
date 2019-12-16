import * as React from "react";
import { UserName } from "app/models";
import { SettingsFormLabel } from "../SettingsFormLabel";

interface UserNameFieldProps {
	value: UserName;
	onChange: (value: UserName) => void;
}

export function UserNameField(props: UserNameFieldProps) {
	const userName = props.value;
	return (
		<>
			<SettingsFormLabel>User name</SettingsFormLabel>
			<input
				name="userName"
				type="text"
				value={userName}
				onChange={(e: { target: { value: UserName } }) => {
					props.onChange(e.target.value);
				}}
			/>
		</>
	);
}
