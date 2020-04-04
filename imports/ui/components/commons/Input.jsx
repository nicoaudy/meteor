import React from "react";
import { Field } from "formik";

export const Input = ({ name, errors, touched, ...rest }) => (
	<>
		<Field name={name} {...rest} />
		{errors[name] && touched[name] ? <div>{errors[name]}</div> : null}
	</>
);
