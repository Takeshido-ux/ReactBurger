import React, { useState } from "react";
import { NavLink, useLocation, Navigate } from "react-router-dom";
import {
  Logo,
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./login-page.module.css";
import { FORGOT_PASSWORD_ROUTE, REGISTER_ROUTE } from "../../utils/constants";
import { logInUserThunk } from "../../services/actions/user";
import { useDispatch, useSelector } from "../../services/redusers/index";

const LoginPage = () => {
  const { isAuth } = useSelector((store) => store.user);
  const state = useLocation().state;
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [form, setForm] = useState({
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
    dispatch(logInUserThunk(form.email, form.password));
    setForm({
      email: "",
      password: "",
    });
  };
  //@ts-ignore
  if (isAuth) return <Navigate to={state?.from || "/"} />;
  return (
    <div className={style.loginPage}>
      <Logo />
      <p className="text text_type_main-medium mt-15">Вход</p>
      <form className={style.form}>
        <div className={style.margin}>
          <Input
            type={"text"}
            placeholder={"email"}
            onChange={onChange}
            value={form.email}
            name={"email"}
            error={false}
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
            Войти
          </Button>
        </div>
      </form>
      <p className="text text_type_main-default mt-10">
        Вы новый - пользователь ?{" "}
        <NavLink to={REGISTER_ROUTE}>
          <span className={style.textColor}>Зарегистрироваться</span>
        </NavLink>
      </p>
      <p className="text text_type_main-default mt-3">
        Забыли пароль ?{" "}
        <NavLink to={FORGOT_PASSWORD_ROUTE}>
          <span className={style.textColor}>Восстановить пароль</span>
        </NavLink>
      </p>
    </div>
  );
};

export default LoginPage;
