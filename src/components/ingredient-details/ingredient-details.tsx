import React, { useContext } from 'react';
import style from './ingredient-details.module.css';
import PropTypes from 'prop-types';
import { DataContext } from '../../utils/data-context';
//@ts-ignore
export default function IngredientDetails(props) {
    const productData = useContext(DataContext);
    //@ts-ignore 
    let src = productData.find(item => item._id === props.itemId ? item.image_large : null)
    return (
      <>
        <div className={style.title}>
            <p className="text text_type_main-default">
                Детали ингредиента
            </p>
            <p onClick={props.handleToggleModal} className={`text text_type_main-default ${style.cursor}`}>
                x   
            </p>
        </div>
        <div>                                                     
            <img className={style.img} src={src.image_large} alt="" />
            <p style={{textAlign: 'center'}} className={`text text_type_main-default`}>
            {
                //@ts-ignore
                productData.map(item => item._id === props.itemId ? item.name : null)
            }
            </p>
            <div className={style.ingredients__item}>
                <p className={style.p}>Калории,ккал<br />{
                    //@ts-ignore
                    productData.map(item => item._id === props.itemId ? item.calories : null)
                }</p>
                <p className={style.p}>Белки, г<br />{
                    //@ts-ignore
                    productData.map(item => item._id === props.itemId ? item.proteins : null)
                }</p>
                <p className={style.p}>Жиры, г<br />{
                    //@ts-ignore
                    productData.map(item => item._id === props.itemId ? item.fat : null)
                }
                </p>
                <p className={style.p}>Углеводы, г<br />{
                    //@ts-ignore
                    productData.map(item => item._id === props.itemId ? item.carbohydrates : null)
                }</p> 
            </div>
        </div>
      </>
  )
}

IngredientDetails.propTypes = {
    handleToggleModal: PropTypes.func,
    itemId: PropTypes.string,
    productData: PropTypes.array
}; 