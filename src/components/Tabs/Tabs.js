import React from "react";
import "./Tabs.css";

const Tabs = (props) => {
  const { tabs, selectedTab, setSelectedTab } = props;

  const handleClick = (number) => {
    //make handleClick function
    setSelectedTab(number);
  };

  const tabComponents = tabs.map((tab, idx) => {
    return (
      <button
        onClick={() => handleClick(idx)}
        key={idx}
        className={selectedTab === idx ? "selected" : "not-selected"}
      >
        {tab.label}
      </button>
    );
  });

  return <div className="Tabs">{tabComponents}</div>;
};

export default Tabs;
