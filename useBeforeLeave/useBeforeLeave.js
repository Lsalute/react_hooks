import { useEffect, useRef } from "react";

export const useBeforeLeave = (onBefore) => {
	// if onBefore is not function, end this function(useBeforeLeave )
	if (typeof onBefore !== "function") {
		return;
	}

	// you can customize
	const handle = (event) => {
		const { clientY } = event;
		// onBefore() works when mouse cursor moveout upside

		if (clientY <= 0) {
			onBefore();
		}
	};

	useEffect(() => {
		// firefox doesn't work. so you use mouseout in firefox
		document.addEventListener("mouseleave", handle);

		// component will unmount
		return () => document.removeEventListener("mouseleave", handle);
	}, []); // <- dependency([]) : only do it once
};

const App = () => {
	const begForLife = () => {
		console.log("pls dont leave");
	};
	useBeforeLeave(begForLife);

	return (
		<>
			<h1>Hello</h1>
		</>
	);
};

export default App;
