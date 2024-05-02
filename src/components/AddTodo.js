import React, { useContext } from "react";
import TopNav from "../Utils/TopNav";
import FormInputs from "../Utils/FormInputs";
import DataContext from "../context/DataContext";

const AddTodo = () => {
  const { data, setData, setAddNotification, setAddNotificationTitle } =
    useContext(DataContext);

  return (
<<<<<<< HEAD
    <div className=" w-full relative min-h-screen bg-gradient-to-r from-blue-400 to-blue-200">
=======
    <div className=" w-full relative min-h-screen bg-gradient-to-r from-white-100">
>>>>>>> 3f7342403c298159c65d4da3760c2faedfb6a2cc
      <div className=" max-w-[1300px] px-10 max-md:px-5 m-auto">
        <div>
          <TopNav title={"Add New Todo"}/>
          <FormInputs
            data={data}
            setData={setData}
            setAddNotification={setAddNotification}
            setAddNotificationTitle={setAddNotificationTitle}
          />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
