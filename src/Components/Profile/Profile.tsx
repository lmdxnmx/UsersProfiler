/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { InputTag } from "../Input/InputTag";
import s from "./Profile.module.scss";
import { Data } from "../Types/Data";
import { Htag } from "./../Htag/Htag";
import { Button } from "./../Button/Button";
import { useForm } from "react-hook-form";
import { Sidebar } from "./../Sidebar/Sidebar";
export const Profile = () => {
  const params = useParams();
  const [users, setUsers] = useState<Data>();

  useEffect(() => {
    getProductData();
  }, []);
  async function getProductData() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/` + params.id
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  const [edit, setEdit] = useState(true);
  const editToggle = () => {
    setEdit(!edit);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      data: {
        name: "",
        username: "",
        email: "",
        street: "",
        city: "",
        zipcode: "",
        phone: "",
        website: "",
        comment: "",
      },
    },
    mode: "onChange",
  });
  const onSubmit = (data: {}) => {
    const dataJson = JSON.stringify(data);
    console.log(dataJson);
  };

  useEffect(() => {
    if (users) {
      setValue("data", {
        name: users.name,
        username: users.username,
        email: users.email,
        street: users.address.street,
        city: users.address.city,
        zipcode: users.address.zipcode,
        phone: users.phone,
        website: users.website,
        comment: "",
      });
    }
  }, [users]);

  return (
    <>
      <Sidebar disabled={true} />
      <div className={s.profile}>
        <div className={s.profile__header}>
          <Htag name={"Профиль пользователя"} />
          <Button
            width={117}
            name={"Редактировать"}
            bgcolor={"#4B51EF"}
            onClick={editToggle}
            height={27}
            type="button"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.profile__input_wrapper}>
            <InputTag
              name={"name"}
              readOnly={edit}
              value={"Name"}
              refs={register("data.name", { required: true })}
              error={errors?.data?.name}
            />
            <InputTag
              name={"username"}
              readOnly={edit}
              value={"User name"}
              refs={register("data.username", { required: true })}
              error={errors?.data?.username}
            />
            <InputTag
              name={"email"}
              readOnly={edit}
              value={"E-mail"}
              refs={register("data.email", { required: true })}
              error={errors?.data?.email}
            />
            <InputTag
              name={"street"}
              readOnly={edit}
              value={"Street"}
              refs={register("data.street", { required: true })}
              error={errors?.data?.street}
            />
            <InputTag
              name={"city"}
              readOnly={edit}
              value={"City"}
              refs={register("data.city", { required: true })}
              error={errors?.data?.city}
            />
            <InputTag
              name={"zipcode"}
              value={"Zip code"}
              readOnly={edit}
              refs={register("data.zipcode", { required: true })}
              error={errors?.data?.zipcode}
            />
            <InputTag
              name={"phone"}
              readOnly={edit}
              value={"Phone"}
              refs={register("data.phone", { required: true })}
              error={errors?.data?.phone}
            />
            <InputTag
              name={"website"}
              readOnly={edit}
              value={"Website"}
              refs={register("data.website", { required: true })}
              error={errors?.data?.website}
            />
            <InputTag
              name={"comment"}
              readOnly={edit}
              comment={true}
              value={"Comment"}
              refs={register("data.comment", { required: false })}
            />
          </div>
          <div className={s.profile__button_wrapper}>
            <Button
              width={85}
              bgcolor={edit ? "#AFAFAF" : "#52CF4F"}
              disabled={edit ? true : false}
              name={"Отправить"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};
