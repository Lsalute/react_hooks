import { useEffect, useRef } from "react";

const useNotification = (title, options = {}) => {
	// we should have accessed window.Notification()
	// if it's not a window, notification doesnt supported on this browser(Chrome)
	if (!("Notification" in window)) {
		return;
	}

	const fireNoti = () => {
		// Notification.permission is read only
		if (Notification.permission !== "granted") {
			// ask granted
			// Notification.requestPermission - promise
			Notification.requestPermission().then((permission) => {
				if (permission === "granted") {
					new Notification(title, options);
				} else {
					// user dont want notification, just end.
					return;
				}
			});
		} else {
			new Notification(title, options);
		}
	};

	return fireNoti;
};

const App = () => {
	const trigNoti = useNotification("Can I steal your BTC?", {
		body: "I love stealing^_^!",
	});

	return (
		<>
			<div className="App" style={{ height: "1000vh" }}>
				<button onClick={trigNoti}>Hello</button>
			</div>
		</>
	);
};

export default App;
