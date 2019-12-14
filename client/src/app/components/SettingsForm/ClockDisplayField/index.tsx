import * as React from "react";
import * as style from "../style.scss";
import { ClockDisplay } from "app/models";

interface ClockDisplayFieldProps {
	value: ClockDisplay;
	onChange: (value: ClockDisplay) => void;
}

export function ClockDisplayField(props: ClockDisplayFieldProps) {
	const value = props.value;
	return (
		<>
			<label>Clock display</label>
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
						12 Hours
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
						24 Hours
					</label>
				</div>
			</div>
		</>
	);
}
