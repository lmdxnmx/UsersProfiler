/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, FC } from "react";
import { ListElement } from "./../ListElement/ListElement";
import { Data } from "../Types/Data";
import s from "./Main.module.scss";
import axios from "axios";
import { Htag } from "../Htag/Htag";
import { Sidebar } from "../Sidebar/Sidebar";
import Preloader from './../../Assets/Preloader.gif'

const Main: FC = () => {
  const [users, setUsers] = useState<Data[]>();
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    
    setTimeout(() => {
      getProductData()
    }, 350);
  }, []);
  async function getProductData() {
    try {
      const response = await axios.get<Data[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    setUsers(users);
  }, [flag]);
  return (
    <>
    {users ?
      <div className={s.main__container}>
        <Sidebar users={users} setFlag={setFlag} flag={flag} />
        <div className={s.main__users}>
          <Htag name={"Список пользователей"} />
          {users?.map((user) => {
            return (
              <ListElement
                key={user.id}
                id={user.id}
                name={user.name}
                city={user.address.city}
                company={user.company.name}
              />
            );
          })}
        </div>
      </div>
      :<div className={s.main__preloader}>
        <img src={Preloader} width={400} alt={"preloader"} />
        </div>}
    </>
  );
};

export default Main;
