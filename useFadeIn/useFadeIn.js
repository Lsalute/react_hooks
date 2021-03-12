import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }

  const element = useRef();

  // component did mount : dependency : []
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  // component will unmount
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn();
  const fadeInP = useFadeIn(5, 2);

  return (
    <>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem</p>
    </>
  );
};

export default App;