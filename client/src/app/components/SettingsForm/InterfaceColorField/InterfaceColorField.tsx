import * as React from "react";
import * as style from "../style.scss";
import { InterfaceColor } from "app/models";

interface InterfaceColorFieldProps {
	value: InterfaceColor;
	onChange: (value: InterfaceColor) => void;
}

export function InterfaceColorField(props: InterfaceColorFieldProps) {
	const interfaceColor = props.value;
	return (
		<>
			<label>Interface Color</label>
			<div className={style.radioGroup}>
				<div className={style.formCheck}>
					<input
						type="radio"
						name="interfaceColorLight"
						checked={interfaceColor === "light"}
						onChange={e => {
							props.onChange("light");
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
							props.onChange("dark");
						}}
					/>
					<label className="form-check-label" htmlFor="interfaceColorDark">
						Dark
					</label>
				</div>
			</div>
		</>
	);
}
