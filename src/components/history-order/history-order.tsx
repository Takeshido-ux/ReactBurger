import React from "react";
import style from "../history-order/history-order.module.css";

const HistoryOrder = () => {
  return (
    <div className={style.historyOrder}>
      <div className={style.title}>
        <p className="text text_type_digits-default">asdas</p>
        <p className="text text_type_digits-default">asdas</p>
      </div>
      <p className="text text_type_digits-medium">asdas</p>
      <p className="text text_type_digits-default">asdas</p>
      <div className={style.info}>
        <div>123213</div>
        <div>123123</div>
      </div>
    </div>
  );
};

export default HistoryOrder;
