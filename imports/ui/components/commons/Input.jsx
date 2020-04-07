import React from "react";
import { Field, ErrorMessage } from "formik";

const Error = ({ children }) => <div style={{ color: "red" }}>{children}</div>;

export const Input = ({ name, errors, touched, ...rest }) => (
	<>
		<Field name={name} {...rest} />
		<ErrorMessage name={name} component={Error} />
	</>
);
