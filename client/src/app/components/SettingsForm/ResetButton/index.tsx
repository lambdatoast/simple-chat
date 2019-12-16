import * as React from "react";
import * as style from "./style.scss";

interface ResetButtonProps {
	onClick: () => void;
	label: string;
}

export function ResetButton(props: ResetButtonProps) {
	const { label } = props;
	return (
		<button type="button" className={style.resetButton} onClick={props.onClick}>
			{label}
		</button>
	);
}
