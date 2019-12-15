import * as React from "react";
import * as style from "./style.scss";

interface ButtonSendProps {
	hide: boolean;
	onClick: () => void;
}

export function ButtonSend(props: ButtonSendProps) {
	return props.hide ? null : (
		<button
			className={style.chatInputSendBtn}
			onClick={() => {
				props.onClick();
			}}
		>
			Send
		</button>
	);
}
