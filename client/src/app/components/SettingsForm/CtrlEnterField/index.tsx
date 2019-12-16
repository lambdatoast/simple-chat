import * as React from "react";
import * as style from "../style.scss";
import { CtrlEnter } from "app/models";
import { SettingsFormLabel } from "../SettingsFormLabel";

interface CtrlEnterFieldProps {
	value: CtrlEnter;
	label: string;
	optionLabel1: string;
	optionLabel2: string;
	onChange: (value: CtrlEnter) => void;
}

export function CtrlEnterField(props: CtrlEnterFieldProps) {
	const { value, label, optionLabel1, optionLabel2 } = props;
	return (
		<>
			<SettingsFormLabel>{label}</SettingsFormLabel>
			<div className={style.radioGroup}>
				<div className={style.formCheck}>
					<input
						type="radio"
						name="ctrlEnterOn"
						checked={value === "on"}
						onChange={e => {
							props.onChange("on");
						}}
					/>
					<label className="form-check-label" htmlFor="ctrlEnterOn">
						{optionLabel1}
					</label>
				</div>
				<div className={style.formCheck}>
					<input
						type="radio"
						name="ctrlEnterOff"
						checked={value === "off"}
						onChange={e => {
							props.onChange("off");
						}}
					/>
					<label className="form-check-label" htmlFor="ctrlEnterOff">
						{optionLabel2}
					</label>
				</div>
			</div>
		</>
	);
}
