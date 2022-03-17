import { LOGIN_ROUTE, RESET_PASSWORD_ROUTE } from "../../utils/constants";

export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const RESET_PASSWORD = "RESET_PASSWORD";

export const forgotPasswordThunk = (email) => {
  return function (dispatch) {
    fetch("https://norma.nomoreparties.space/api/password-reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FORGOT_PASSWORD,
          payload: data,
          pathName: RESET_PASSWORD_ROUTE,
        });
      });
  };
};
export const resetPasswordThunk = (password, code) => {
  return function (dispatch) {
    fetch(" https://norma.nomoreparties.space/api/password-reset/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        password: password,
        token: code,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: RESET_PASSWORD,
          payload: data,
          pathName: LOGIN_ROUTE,
        });
      });
  };
};
