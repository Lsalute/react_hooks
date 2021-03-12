export const usePreventLeave = () => {
	const listener = (event) => {
		event.preventDefault();
		event.returnValue = ""; // essential to google chrome
	};

	// beforeunload : allow you to execute the function before the window get closed or refreshed.
	// ex : you leave the page, you reload the page
	const enablePrevent = () => {
		window.addEventListener("beforeunload", listener);
	};
	const disablePrevent = () => {
		window.removeEventListener("beforeunload", listener);
	};

	return { enablePrevent, disablePrevent };
};
