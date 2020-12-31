import React from "react";

const Display = (props) => {
  const { selectedTab, tabs } = props;

  return <div className="Display">{tabs[selectedTab].content}</div>;
};

export default Display;
