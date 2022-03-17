import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./forgot-password.module.css";
import {
  Button,
  Input,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { LOGIN_ROUTE, RESET_PASSWORD_ROUTE } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordThunk } from "../../services/actions/reset-password";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //@ts-ignore
  const { answer, pathName } = useSelector((store) => store.resetPassword);
  const [form, setForm] = useState({
    email: "",
  });
  //@ts-ignore
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //@ts-ignore
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(forgotPasswordThunk(form.email));
  };
  useEffect(() => {
    navigate(pathName);
  }, [answer]);

  return (
    <div className={style.forgotPasswordPage}>
      <Logo />
      <p className="text text_type_main-medium mt-15">Восстановление пароля</p>
      <form className={style.form} onSubmit={onSubmit}>
        <div className={style.margin}>
          <Input
            type={"text"}
            placeholder={"Укажите e-mail"}
            //@ts-ignore
            onChange={onChange}
            //@ts-ignore
            value={form.email}
            name={"email"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <p>{answer.message}</p>
        <div className={style.margin}>
          <Button type="primary" size="medium">
            Восстановить
          </Button>
        </div>
      </form>
      <p className="text text_type_main-default mt-10">
        Вспомнили пароль ?{" "}
        <NavLink to={LOGIN_ROUTE}>
          <span className={style.textColor}>Войти</span>
        </NavLink>
      </p>
    </div>
  );
};

export default ForgotPassword;
