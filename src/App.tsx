import React, { FC } from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { Profile } from "./Components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
const App: FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/users/:id"} element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
