import React from 'react';
import style from './order-details.module.css';
import img from '../../images/done.png';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE } from '../../services/actions/modal';

//@ts-ignore
export default function OrderDetails(props) {
  //@ts-ignore
  const orderInfo = useSelector(store => store.orderInfo);
  const dispatch = useDispatch();
  const handleToggleModal = () => {
      dispatch({type: TOGGLE});
  }
  return (
    <>
    <div className={style.title}>
        <p onClick={handleToggleModal} className={`text text_type_main-default ${style.cursor}`}>
            x   
        </p>
    </div>
    <div>
        <p className={`text text_type_digits-large ${style.textCenter + ' ' + style.font}`}>{orderInfo.orderNumber}</p>
        <p className={`text text_type_main-medium ${style.textCenter}`}>
        идентификатор заказа
        </p>
        <img className={style.img} src={img} alt="" />
        <p className={`text text_type_main-default ${style.textCenter}`}>
        Ваш заказ начали готовить<br />
        <span style={{color: '#8585AD'}}>Дождитесь готовности на орбитальной станции</span>
        </p>
    </div>
    </>
  )
}

