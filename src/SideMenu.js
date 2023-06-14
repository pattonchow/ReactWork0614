import React, { useState } from "react";

const SideMenu = ({ menuConfig }) => {
  const [expandedMenu, setExpandedMenu] = useState("");

  const handleMenuClick = (title) => {
    setExpandedMenu((prevMenu) => (prevMenu === title ? "" : title));
  };

  const renderSubItems = (subItems, title) => {
    if (!subItems || subItems.length === 0) return null;

    return (
      <ul data-test-id={`ul-${title.toLowerCase()}`}>
        {subItems.map((subItem) => (
          <li
            key={`li-${title.toLowerCase()}-${subItem.toLowerCase()}`}
            data-test-id={`li-${title.toLowerCase()}-${subItem.toLowerCase()}`}
          >
            {subItem}
          </li>
        ))}
      </ul>
    );
  };

  const renderMenuItems = () => {
    return menuConfig.map((menuItem) => (
      <div
        key={`first-level-${menuItem.title.toLowerCase()}`}
        data-test-id={`first-level-${menuItem.title.toLowerCase()}`}
      >
        <div>{menuItem.title}</div>
        {menuItem.subItems && menuItem.subItems.length > 0 && (
          <button
            data-test-id={`button-${menuItem.title.toLowerCase()}`}
            onClick={() => handleMenuClick(menuItem.title)}
          >
            {expandedMenu === menuItem.title ? "Hide" : "Expand"}
          </button>
        )}
        {expandedMenu === menuItem.title &&
          renderSubItems(menuItem.subItems, menuItem.title)}
      </div>
    ));
  };

  return <div className="menu-wrapper">{renderMenuItems()}</div>;
};

export default SideMenu;
