import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import TaskDetails from "./components/TaskDetails";
import { DataProvider } from "./context/DataContext";
import PageNotFound from "./components/PageNotFound";
import Loader from "./components/LoadingScreen"; // Import your Loader component

const App = () => {
  const [isAppInitialized, setIsAppInitialized] = useState(false);

  useEffect(() => {
    console.log("Starting app initialization...");
    // Simulate app initialization
    setTimeout(() => {
      console.log("App initialization complete.");
      setIsAppInitialized(true);
    }, 2000); // Simulated delay of 2 seconds
  }, []);

  return (
      <DataProvider>
        {!isAppInitialized ? (
          <Loader /> // Render the loader until the app is initialized
        ) : (
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addTodo" element={<AddTodo />} />
              <Route path="/edit" element={<EditTodo />} />
              <Route path="/todo/:id" element={<TaskDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        )}
      </DataProvider>
  );
};

export default App;
