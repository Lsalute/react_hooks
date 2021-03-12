export const useInput = (initialValue, validator) => {
	const [inputValue, setInputValue] = useState(initialValue);

	const onChange = (e) => {
		const {
			target: { value },
		} = e;
		let willUpdate = true;

		if (typeof validator === "function") {
			willUpdate = validator(value);
		}

		if (willUpdate) {
			setInputValue(value);
		}
	};

	return { inputValue, onChange };
};
