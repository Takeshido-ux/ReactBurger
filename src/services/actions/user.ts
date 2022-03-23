import { retriableFetch, setCookie } from "../../utils/retriable-fetch";
import { AppDispatch, AppThunk } from "../redusers";
export const GET_USER: "GET_USER" = "GET_USER";

export type TUserAction = {
  type: string;
  payload: {
    success: boolean;
    user: {
      email: string;
      name: string;
    };
    accessToken: string | undefined;
    refreshToken: string;
  };
  isAuth: boolean;
};

export const addUserThunk: AppThunk = (email, password, name) => {
  return async function (dispatch: AppDispatch) {
    const res = await fetch(
      "https://norma.nomoreparties.space/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
        }),
      }
    );
    const data = await res.json();
    setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
    dispatch({ type: GET_USER, payload: data, isAuth: data.success });
  };
};
export const logInUserThunk: AppThunk = (email, password) => {
  return async function (dispatch: AppDispatch) {
    const res = await fetch(
      "https://norma.nomoreparties.space/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const data = await res.json();
    if (data.success) {
      setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", data.refreshToken);
    }

    dispatch({ type: GET_USER, payload: data, isAuth: data.success });
  };
};
export const logOutUserThunk: AppThunk = (refreshToken) => {
  return async function (dispatch: AppDispatch) {
    const res = await fetch(
      "https://norma.nomoreparties.space/api/auth/logout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: refreshToken,
        }),
      }
    );
    const data = await res.json();
    setCookie("accessToken", "");
    dispatch({ type: GET_USER, payload: data, isAuth: !data.success });
  };
};

export const getUserThunk: AppThunk = (accessToken) => {
  return async function (dispatch: AppDispatch) {
    const res: any = await retriableFetch(
      "https://norma.nomoreparties.space/api/auth/user",
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    dispatch({ type: GET_USER, payload: res, isAuth: res.success });
  };
};
export const resetUserThunk = (
  name: string,
  email: string,
  password: string,
  accessToken: string | undefined
) => {
  return async function (dispatch: AppDispatch) {
    const res = await fetch("https://norma.nomoreparties.space/api/auth/user", {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    dispatch({ type: GET_USER, payload: data, isAuth: data.success });
  };
};
