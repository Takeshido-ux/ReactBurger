import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { appRoutes } from "../../routes";
import { useSelector } from "react-redux";
import Modal from "../modal/modal";

const AppRouter = () => {
  //@ts-ignore
  const { isAuth } = useSelector((store) => store.user);
  const location = useLocation();
  //@ts-ignore
  const background = location.state?.background;

  return (
    <>
      <Routes location={background ?? location}>
        {appRoutes.map(({ path, Component, children }) =>
          children?.length ? (
            <Route key={path} path={path} element={Component}>
              {children.map(({ childPath, childComponent }, i) => (
                <Route key={i} path={childPath} element={childComponent} />
              ))}
            </Route>
          ) : (
            <Route key={path} path={path} element={Component} />
          )
        )}
      </Routes>
      <Routes>
        {background && <Route path="/ingredients/:id" element={<Modal />} />}
      </Routes>
    </>
  );
};

export default AppRouter;
