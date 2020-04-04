import * as Yup from "yup";

export const validation = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email")
		.required("Email is required"),
	password: Yup.string()
		.min(5, "Password is too short")
		.required("Password is required")
});
