import React, { useState, useEffect } from "react";

const Greeting = () => {
  const handleCreateButtonClick = () => {
    // Redirect to the deployed Todo app URL
    window.location.href = "https://todoaayu.netlify.app/";
  };

  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ]

  let month = months[date.getMonth()]
  
 let today = `${date.getUTCDate()} ${month} ${date.getFullYear()}`

  let greeting = "";

  if (hours > 0 && hours < 12) {
    greeting = "Good morning";
  } 
  else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon";
  } 
  else if (hours >= 18 && hours < 21) {
    greeting = "Good evening";
  } 
  else {
    greeting = "Good night";
  }

  return (
    <div className="py-7 px-10 max-lg:px-2 max-lg:py-3">
      <div className=" max-w-[1600px] max-lg:container flex justify-between items-center">
        <h1 className=" text-blue-900 font-bold flex items-center gap-1 text-4xl max-m:text-lg mb-10 mt-2"><span className="max-lg:text-3xl">&#128075;</span>{greeting}</h1>

        <div>
        <button onClick={handleCreateButtonClick} style ={{position: 'fixed', backgroundColor: 'blue', color: 'white', padding: '1rem 2rem', marginLeft: '10rem', borderRadius: '2rem', cursor: 'pointer', border: 'none'}}>Back To Home</button>
          <p className=" text-blue-900 font-semibold text-lg max-sm:text-sm">{today}</p>
          <p className="text-blue-900 font-semibold text-lg max-sm:text-sm">
            {hours < 10 ? `0${hours}` : hours}:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
