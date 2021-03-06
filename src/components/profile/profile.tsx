import React, { useEffect, useMemo, useState } from "react";
import style from "./profile.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useLocation } from "react-router-dom";
import { PROFILE_ORDERS_ROUTE, PROFILE_ROUTE } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserThunk,
  logOutUserThunk,
  resetUserThunk,
} from "../../services/actions/user";
import { getCookie } from "../../utils/retriable-fetch";

export const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken = getCookie("accessToken");
    dispatch(getUserThunk(accessToken));
  }, [dispatch]);
  const { user } = useSelector(
    //@ts-ignore
    (store) => store.user
  );
  const [form, setForm] = useState({
    nick: user.user?.name ?? "",
    email: user.user?.email ?? "",
    password: "",
  });
  useMemo(() => {
    setForm({
      nick: user.user?.name ?? "",
      email: user.user?.email ?? "",
      password: "",
    });
  }, [user]);
  //@ts-ignore
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //@ts-ignore
  const handleExitClick = (e) => {
    e.preventDefault();
    const refreshToken = getCookie("refreshToken");
    dispatch(logOutUserThunk(refreshToken));
  };
  //@ts-ignore
  const onSubmit = (e) => {
    e.preventDefault();
    const accessToken = getCookie("accessToken");
    dispatch(resetUserThunk(form.nick, form.email, form.password, accessToken));
  };
  //@ts-ignore
  const onClose = (e) => {
    e.preventDefault();
    setForm({
      nick: user.user?.name,
      email: user.user?.email,
      password: "",
    });
  };
  return (
    <div className={style.profilePage}>
      <div className={style.profileInner}>
        <NavLink to={PROFILE_ROUTE} className={style.inActiveClass}>
          <p className={`text text_type_main-medium mt-15 ${style.cursor}`}>
            Профиль
          </p>
        </NavLink>
        <NavLink to={PROFILE_ORDERS_ROUTE} className={style.inActiveClass}>
          <p className={`text text_type_main-medium mt-15 ${style.cursor}`}>
            История заказов
          </p>
        </NavLink>
        <div onClick={handleExitClick} className={style.inActiveClass}>
          <p className={`text text_type_main-medium mt-15 ${style.cursor}`}>
            Выход
          </p>
        </div>
        <p className={`text text_type_main-small mt-15 ${style.cursor}`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>

      <form className={style.form}>
        <div className={style.margin}>
          <Input
            type={"text"}
            placeholder={"Name"}
            //@ts-ignore
            onChange={onChange}
            //@ts-ignore
            value={form.nick}
            name={"nick"}
            error={false}
            errorText={"Ошибка"}
            icon={"EditIcon"}
            size={"default"}
          />
        </div>
        <div className={style.margin}>
          <Input
            type={"text"}
            placeholder={"Email"}
            //@ts-ignore
            onChange={onChange}
            //@ts-ignore
            value={form.email}
            name={"email"}
            error={false}
            errorText={"Ошибка"}
            icon={"EditIcon"}
            size={"default"}
          />
        </div>
        <div className={style.margin}>
          <PasswordInput
            //@ts-ignore
            onChange={onChange}
            //@ts-ignore
            value={form.password}
            name={"password"}
          />
        </div>
        <div className={style.buttons}>
          <p
            onClick={onClose}
            className={`text text_type_main-default mr-5 ${style.cursor}`}
          >
            Отменить
          </p>
          <Button onClick={onSubmit} type="primary" size="medium">
            <p className="text text_type_main-default">Сохранить</p>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
