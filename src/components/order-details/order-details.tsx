import React from 'react';
import style from './order-details.module.css';
import img from '../../images/done.png';

//@ts-ignore
export default function OrderDetails(props) {
    console.log(props.itemId)
  return (
    <>
    <div className={style.title}>
        <p onClick={props.handleToggleModal} className={`text text_type_main-default ${style.cursor}`}>
            x   
        </p>
    </div>
    <div>
        <p className={`text text_type_digits-large ${style.textCenter + ' ' + style.fontSize}`}>034536</p>
        <p className={`text text_type_main-medium ${style.textCenter}`}>
        идентификатор заказа
        </p>
        <img className={style.img} src={img} alt="" />
        <p className={`text text_type_main-default ${style.textCenter}`}>
        Ваш заказ начали готовить<br />
        Дождитесь готовности на орбитальной станции
        </p>
    </div>
    </>
  )
}
