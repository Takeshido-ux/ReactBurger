import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./app-header.module.css";
import { NavLink } from "react-router-dom";
import {
  CONSTRUCTOR_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
} from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getIngredients } from "../../services/actions/burger-ingredients";

const AppHeader = () => {
  const dispatch = useDispatch();
  //@ts-ignore
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  //@ts-ignore
  const { isAuth } = useSelector((store) => store.user);
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.header__inner}>
          <nav className={style.nav__item + " " + style.width33}>
            <NavLink className={style.nav__item} to={CONSTRUCTOR_ROUTE}>
              <BurgerIcon type="primary" />{" "}
              <p
                style={{ color: "white" }}
                className="text text_type_main-default ml-2"
              >
                Конструктор
              </p>{" "}
            </NavLink>
            <NavLink className={style.nav__item} to={CONSTRUCTOR_ROUTE}>
              <ListIcon type="primary" />{" "}
              <p
                style={{ color: "white" }}
                className="text text_type_main-default ml-2"
              >
                Лента Заказов
              </p>
            </NavLink>
          </nav>
          <div className={style.nav__item + " " + style.width33}>
            <Logo />
          </div>
          <div className={style.width33}>
            <NavLink className={style.your__profile} to={PROFILE_ROUTE}>
              <ProfileIcon type="primary" />{" "}
              <p
                style={{ color: "white" }}
                className="text text_type_main-default ml-2"
              >
                Личный кабинет
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
