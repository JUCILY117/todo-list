// Layout.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className={`flex-1 ${isSidebarCollapsed ? 'ml-0' : 'ml-64'}`}>
        <button onClick={toggleSidebar} className="absolute top-2 left-2 z-50 p-2 rounded-full bg-gray-200">Toggle Sidebar</button>
        {children}
      </div>
    </div>
  );
};

export default Layout;
