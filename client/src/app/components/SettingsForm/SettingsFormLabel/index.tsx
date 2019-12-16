import * as React from "react";
import * as style from "./style.scss";

export function SettingsFormLabel(props: { children: React.ReactNode }) {
	const { children } = props;
	return <label className={style.settingsFormLabel}>{children}</label>;
}
