export const useClick = (onClick) => {
  // if The onClick is not a function, end this function
  if (typeof onClick !== "function") {
    return;
  }

  const element = useRef();

  useEffect(() => {
    if (element.current) {
      //component did mount
      element.current.addEventListener("click", onClick);
    }
    //component will unmount
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};
