import React, { useEffect, useState } from "react";
import style from "../login-page/login-page.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Logo,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordThunk } from "../../services/actions/reset-password";
import { LOGIN_ROUTE } from "../../utils/constants";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //@ts-ignore
  const { answer, pathName } = useSelector((store) => store.resetPassword);
  const [form, setForm] = useState({
    password: "",
    code: "",
  });
  //@ts-ignore
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //@ts-ignore
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordThunk(form.password, form.code));
  };
  useEffect(() => {
    if (answer.success) {
      navigate(pathName);
    }
  }, [answer]);

  return (
    <div className={style.loginPage}>
      <Logo />
      <p className="text text_type_main-medium mt-15">Восстановление пароля</p>
      <form className={style.form}>
        <div className={style.margin}>
          <PasswordInput
            //@ts-ignore
            onChange={onChange}
            //@ts-ignore
            value={form.password}
            name={"password"}
          />
        </div>
        <div className={style.margin}>
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            //@ts-ignore
            onChange={onChange}
            //@ts-ignore
            value={form.code}
            name={"code"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <p>{answer.message}</p>
        <div className={style.margin}>
          <Button onClick={onSubmit} type="primary" size="medium">
            Сохранить
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

export default ResetPassword;
