import { useRef } from "react";

const useFullScreen = (callback) => {
	const element = useRef();
	const runCB = (isFull) => {
		if (callback && typeof callback === "function") {
			callback(isFull);
		}
	};

	// request full screen
	// element
	const triggerFull = () => {
		if (element.current) {
			if (element.current.requestFullscreen) {
				element.current.requestFullscreen();
			} else if (element.current.mozRequestFullScreen) {
				element.current.mozRequestFullScreen();
			} else if (element.current.webkitRequestFullscreen) {
				element.current.webkitRequestFullscreen();
			} else if (element.current.msRequestFullscreen) {
				element.current.msRequestFullscreen();
			}
		}

		runCB(true);
	};

	// exit full screen
	// document
	const exitFull = () => {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}

		runCB(false);
	};

	return { element, triggerFull, exitFull };
};

const App = () => {
	const onFullScreen = (isFull) => {
		console.log(isFull ? "we are full" : "we are small");
	};
	const fullScEl = useFullScreen(onFullScreen);

	return (
		<>
			<div className="App" style={{ height: "1000vh" }}>
				<div ref={fullScEl.element}>
					<img
						src="https://cdn.vox-cdn.com/thumbor/IdoDsd77fM6hOm5K_CFxcbjU-YU=/0x0:3000x2000/1820x1213/filters:focal(2316x253:2796x733):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63068951/thrones_questions_1.0.jpg"
						alt=""
						style={{ width: "50%" }}
					/>
					<button onClick={fullScEl.exitFull}>Exit FullScreen</button>
				</div>
				<button onClick={fullScEl.triggerFull}>Make FullScreen</button>
			</div>
		</>
	);
};

export default App;
