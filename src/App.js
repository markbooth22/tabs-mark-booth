import "./App.css";
import Tabs from "./components/Tabs/Tabs";
import Display from "./components/Display/Display";
import { useState } from "react";

function App() {
  const [tabs, setTabs] = useState([
    {
      label: "Home",
      content: "Welcome to the Homepage",
    },
    {
      label: "About Me",
      content: "I am Mark, I used to be a Dolphin Trainer",
    },
    {
      label: "Contact Me",
      content: "You know how to contact me",
    },
  ]);

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="App">
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <Display tabs={tabs} selectedTab={selectedTab} />
    </div>
  );
}

export default App;
