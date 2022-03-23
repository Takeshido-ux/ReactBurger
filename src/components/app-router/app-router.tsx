import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { appRoutes } from "../../routes";
import Modal from "../modal/modal";

type TLocation = {
  background: string | undefined;
};

const AppRouter = () => {
  const location = useLocation();
  const background = (location.state as TLocation)?.background;

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
