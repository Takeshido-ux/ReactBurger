export const GET_ORDER_INFO = "GET_ORDER_INFO";
const URL = "https://norma.nomoreparties.space/api/orders";

export const getOrderInfoThunk = (order) => {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_INFO,
    });
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        ingredients: order,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_ORDER_INFO,
          name: data.name,
          number: data.order.number,
        });
      });
  };
};
