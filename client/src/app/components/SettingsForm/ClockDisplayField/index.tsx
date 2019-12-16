import * as React from "react";
import * as style from "../style.scss";
import { ClockDisplay } from "app/models";
import { SettingsFormLabel } from "../SettingsFormLabel";

interface ClockDisplayFieldProps {
	value: ClockDisplay;
	label: string;
	optionLabel1: string;
	optionLabel2: string;
	onChange: (value: ClockDisplay) => void;
}

export function ClockDisplayField(props: ClockDisplayFieldProps) {
	const { value, label, optionLabel1, optionLabel2 } = props;
	return (
		<>
			<SettingsFormLabel>{label}</SettingsFormLabel>
			<div className={style.radioGroup}>
				<div className={style.formCheck}>
					<input
						type="radio"
						name="value12"
						checked={value === 12}
						onChange={e => {
							props.onChange(12);
							console.log("dasdsa!");
						}}
					/>
					<label className="form-check-label" htmlFor="value12">
						{optionLabel1}
					</label>
				</div>
				<div className={style.formCheck}>
					<input
						type="radio"
						name="value24"
						checked={value === 24}
						onChange={e => {
							props.onChange(24);
						}}
					/>
					<label className="form-check-label" htmlFor="value24">
						{optionLabel2}
					</label>
				</div>
			</div>
		</>
	);
}
