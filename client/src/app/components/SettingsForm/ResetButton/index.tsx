import * as React from "react";
import * as style from "./style.scss";

interface ResetButtonProps {
	onClick: () => void;
}

export function ResetButton(props: ResetButtonProps) {
	return (
		<button type="button" className={style.resetButton} onClick={props.onClick}>
			Reset to defaults
		</button>
	);
}
