import React from "react";
import style from "../orders/orders.module.css";
import { NavLink } from "react-router-dom";
import {
  LOGIN_ROUTE,
  PROFILE_ORDERS_ROUTE,
  PROFILE_ROUTE,
} from "../../utils/constants";
import HistoryOrder from "../history-order/history-order";

const Orders = () => {
  return (
    <div className={style.profilePage}>
      <div className={style.profileInner}>
        <NavLink
          to={PROFILE_ROUTE}
          className={style.inActiveClass}
          //@ts-ignore
          activeClassName={style.activeClass}
        >
          <p className={`text text_type_main-medium mt-15 ${style.cursor}`}>
            Профиль
          </p>
        </NavLink>
        <NavLink
          to={PROFILE_ORDERS_ROUTE}
          className={style.inActiveClass}
          //@ts-ignore
          activeClassName={style.activeClass}
        >
          <p className={`text text_type_main-medium mt-15 ${style.cursor}`}>
            История заказов
          </p>
        </NavLink>
        <NavLink
          to={LOGIN_ROUTE}
          className={style.inActiveClass}
          //@ts-ignore
          activeClassName={style.activeClass}
        >
          <p className={`text text_type_main-medium mt-15 ${style.cursor}`}>
            Выход
          </p>
        </NavLink>
        <p className={`text text_type_main-small mt-15 ${style.cursor}`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={style.profileOrders}>
        <HistoryOrder />
      </div>
    </div>
  );
};

export default Orders;
