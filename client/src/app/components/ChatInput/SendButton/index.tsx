import * as React from "react";
import * as style from "./style.scss";
import HappyIcon from "./icons/send.svg";

interface SendButtonProps {
	hide: boolean;
	onClick: () => void;
}

export function SendButton(props: SendButtonProps) {
	return props.hide ? null : (
		<button
			className={style.chatInputSendBtn}
			onClick={() => {
				props.onClick();
			}}
		>
			<HappyIcon className={style.chatInputSendBtnIcon} height="2em" />
		</button>
	);
}
