import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Panel from "./Panel/Panel";
import { ToastContainer } from "react-toastify";
const App = () => {
  const [isUserLogin, setIsUserLogin] = useState(
    sessionStorage.getItem("token")
  );
  useEffect(() => {
    const isUserLogin = sessionStorage.getItem("token");
    setIsUserLogin(isUserLogin);
  }, []);
  return (
    <div>
      <Navbar isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin}/>
      <Panel setIsUserLogin={setIsUserLogin} isUserLogin={isUserLogin}/>
      <ToastContainer />
    </div>
  );
};

export default App;
