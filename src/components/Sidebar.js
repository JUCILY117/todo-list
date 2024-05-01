// Sidebar.js
import React from "react";

const Sidebar = ({ isCollapsed }) => {
  return (
    <div className={`w-64 bg-gray-200 ${isCollapsed ? 'd-none d-sm-block' : ''}`}>
      {/* Sidebar content goes here */}
    </div>
  );
};

export default Sidebar;
