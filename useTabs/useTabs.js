import { useState } from "react";

const contentList = [
  {
    tab: "section1",
    content: "I'm the content of the section.1"
  },
  {
    tab: "section2",
    content: "I'm the content of the section.2"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, contentList);

  return (
    <>
      <h1>Hello</h1>
      {contentList.map((section, index) => (
        <button
          onClick={() => {
            changeItem(index);
          }}
        >
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </>
  );
};

export default App;
