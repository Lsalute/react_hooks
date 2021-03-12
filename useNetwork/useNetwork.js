import { useEffect, useState } from "react";

const useNetwork = (onChange) => {
	const [status, setStatus] = useState(navigator.onLine);
	const handleChange = () => {
		if (typeof onChange === "function") {
			setStatus(navigator.onLine);
		}
		setStatus(navigator.onLine);
	};

	useEffect(() => {
		window.addEventListener("online", handleChange);
		window.addEventListener("offline", handleChange);

		// component will unmount
		// return () => {}
		() => {
			window.removeEventListener("online", handleChange);
			window.removeEventListener("offline", handleChange);
		};
	}, []);
	return status;
};

const App = () => {
	const handleNetworkChange = (online) => {
		console.log(online ? "we just went online." : "we are offline.");
	};
	const online = useNetwork(handleNetworkChange);

	return (
		<>
			<h1>{online ? "onLine" : "Offline"}</h1>
		</>
	);
};

export default App;
