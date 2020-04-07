import React from "react";

const style = {
	width: "95%",
	maxWidth: "600px",
	margin: "0 auto",
	paddingBottom: "60px"
};

export const Container = ({ children }) => <div style={style}>{children}</div>;
