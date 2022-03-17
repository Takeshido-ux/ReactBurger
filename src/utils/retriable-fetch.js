export function setCookie(name, value, props) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const checkResponse = async (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const refreshToken = () => {
  return fetch(`https://norma.nomoreparties.space/api/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: getCookie("refreshToken"),
    }),
  }).then(checkResponse);
};

export const retriableFetch = async (url, options) => {
  try {
    const res = await fetch(url, options);
    const result = await checkResponse(res);
    return result;
  } catch (err) {
    if (err.message === "jwt expired" || err.message === "jwt malformed") {
      const refreshData = await refreshToken(); // обновляем токен; пытаемся 1 раз, если не сложилось -- падаем с ошибкой
      setCookie("refreshToken", refreshData.refreshToken);
      const authToken = refreshData.accessToken.split("Bearer ")[1];

      setCookie("accessToken", authToken); // тут для примера accessToken храним в куке

      if (!options.headers) {
        options.headers = {};
      }

      options.headers.authorization = `Bearer ${getCookie("accessToken")}`;
      const res = await fetch(url, options); // повторяем оригинальный запрос с оригинальными options (+ дополнительным хедером)
      return await checkResponse(res); // если все равно проваливаемся -- значит не судьба :/
    }
    throw err;
  }
};
