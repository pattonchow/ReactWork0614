import React from "react";
import SideMenu from "./SideMenu";

const menuConfig = [
  {
    title: "Home"
  },
  {
    title: "Services",
    subItems: ["Cooking", "Cleaning"]
  },
  {
    title: "Contact",
    subItems: ["Phone", "Mail"]
  }
];

const App = () => {
  return (
    <div>
      {/* <h1>Dynamic Side Menu</h1> */}
      <SideMenu menuConfig={menuConfig} />
    </div>
  );
};

export default App;
