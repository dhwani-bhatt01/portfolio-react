import React from "react";
import "./Input.scss";

interface PropsType {
	label: string;
	type?: string;
	placeholder: string;
	textarea?: boolean;
	rows?: number;
	cols?: number;
}

const Input = (props: PropsType) => {
	const { label, type, placeholder, textarea, rows, cols } = props;

	return (
		<div className="input-wrapper">
			<label className="label">{label}</label>
			{textarea ? (
				<textarea
					rows={rows}
					cols={cols}
					className="textarea"
					placeholder={placeholder}
				/>
			) : (
				<input className="textfield" type={type} placeholder={placeholder} />
			)}
		</div>
	);
};

export default Input;
