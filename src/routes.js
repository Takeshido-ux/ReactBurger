import {
  CONSTRUCTOR_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  INGREDIENT_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  REGISTER_ROUTE,
  RESET_PASSWORD_ROUTE,
  PROFILE_ORDERS_ROUTE,
} from "./utils/constants";
import Constructor from "./components/constructor/constructor";
import LoginPage from "./components/login-page/login-page";
import Register from "./components/register/register";
import ForgotPassword from "./components/forgot-password/forgot-password";
import ResetPassword from "./components/reset-password/reset-password";
import Profile from "./components/profile/profile";
import Ingredient from "./components/ingredient/ingredient";
import Orders from "./components/orders/orders";
import ProtectedRoute from "./components/protected-route/protected-route";

export const appRoutes = [
  {
    path: CONSTRUCTOR_ROUTE,
    Component: <Constructor />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <LoginPage />,
  },
  {
    path: REGISTER_ROUTE,
    Component: <Register />,
  },
  {
    path: FORGOT_PASSWORD_ROUTE,
    Component: <ForgotPassword />,
  },
  {
    path: RESET_PASSWORD_ROUTE,
    Component: <ResetPassword />,
  },
  {
    path: INGREDIENT_ROUTE,
    Component: <Ingredient />,
  },
  {
    path: CONSTRUCTOR_ROUTE,
    Component: <Constructor />,
  },
  {
    path: PROFILE_ROUTE,
    Component: <ProtectedRoute />,
    children: [
      {
        childPath: PROFILE_ROUTE,
        childComponent: <Profile />,
      },
      {
        path: PROFILE_ORDERS_ROUTE,
        Component: <Orders />,
      },
    ],
  },
];
