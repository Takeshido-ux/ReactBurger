import React, { useState } from "react";
import style from "./register.module.css";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import {
  Button,
  Input,
  Logo,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { LOGIN_ROUTE } from "../../utils/constants";
import { addUserThunk } from "../../services/actions/user";
import { useDispatch, useSelector } from "../../services/redusers/index";

const Register = () => {
  const { isAuth } = useSelector((store) => store.user);
  const state = useLocation().state;
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    nick: "",
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(addUserThunk(form.email, form.password, form.nick));
  };
  //@ts-ignore
  if (isAuth) return <Navigate to={state?.from || "/"} />;

  return (
    <div className={style.registerPage}>
      <Logo />
      <p className="text text_type_main-medium mt-15">Вход</p>
      <form className={style.form}>
        <div className={style.margin}>
          <Input
            type={"text"}
            placeholder={"Name"}
            onChange={onChange}
            value={form.nick}
            name={"nick"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className={style.margin}>
          <Input
            type={"text"}
            placeholder={"Email"}
            onChange={onChange}
            value={form.email}
            name={"email"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className={style.margin}>
          <PasswordInput
            onChange={onChange}
            value={form.password}
            name={"password"}
          />
        </div>
        <div className={style.margin}>
          <Button onClick={onSubmit} type="primary" size="medium">
            Зарегистрироваться
          </Button>
        </div>
      </form>
      <p className="text text_type_main-default mt-10">
        Уже зарегистрированы ?{" "}
        <NavLink to={LOGIN_ROUTE}>
          <span className={style.textColor}>Войти</span>
        </NavLink>
      </p>
    </div>
  );
};

export default Register;
