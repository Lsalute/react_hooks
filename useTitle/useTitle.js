import { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title")
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);

  return setTitle;
}

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000)

  return (
    <>
      <h1>Hello</h1>
      
    </>
  );
};

export default App;
