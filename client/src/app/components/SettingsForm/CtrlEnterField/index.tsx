import * as React from "react";
import * as style from "../style.scss";
import { CtrlEnter } from "app/models";
import { SettingsFormLabel } from "../SettingsFormLabel";

interface CtrlEnterFieldProps {
	value: CtrlEnter;
	onChange: (value: CtrlEnter) => void;
}

export function CtrlEnterField(props: CtrlEnterFieldProps) {
	const ctrlEnter = props.value;
	return (
		<>
			<SettingsFormLabel>Send messages on CTRL + ENTER</SettingsFormLabel>
			<div className={style.radioGroup}>
				<div className={style.formCheck}>
					<input
						type="radio"
						name="ctrlEnterOn"
						checked={ctrlEnter === "on"}
						onChange={e => {
							props.onChange("on");
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
							props.onChange("off");
						}}
					/>
					<label className="form-check-label" htmlFor="ctrlEnterOff">
						Off
					</label>
				</div>
			</div>
		</>
	);
}
