import * as React from "react";
import * as style from "../style.scss";
import { InterfaceColor } from "app/models";
import { SettingsFormLabel } from "../SettingsFormLabel";

interface InterfaceColorFieldProps {
	value: InterfaceColor;
	label: string;
	optionLabel1: string;
	optionLabel2: string;
	onChange: (value: InterfaceColor) => void;
}

export function InterfaceColorField(props: InterfaceColorFieldProps) {
	const { value, label, optionLabel1, optionLabel2 } = props;
	return (
		<>
			<SettingsFormLabel>{label}</SettingsFormLabel>
			<div className={style.radioGroup}>
				<div className={style.formCheck}>
					<input
						type="radio"
						name="interfaceColorLight"
						checked={value === "light"}
						onChange={e => {
							props.onChange("light");
						}}
					/>
					<label className="form-check-label" htmlFor="interfaceColorLight">
						{optionLabel1}
					</label>
				</div>
				<div className={style.formCheck}>
					<input
						type="radio"
						name="interfaceColorDark"
						checked={value === "dark"}
						onChange={e => {
							props.onChange("dark");
						}}
					/>
					<label className="form-check-label" htmlFor="interfaceColorDark">
						{optionLabel2}
					</label>
				</div>
			</div>
		</>
	);
}
