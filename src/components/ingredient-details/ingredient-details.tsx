import React from 'react';
import style from './ingredient-details.module.css';
//@ts-ignore
export default function IngredientDetails(props) {
    //@ts-ignore 
    let src = props.productData.find(item => item._id == props.itemId ? item.image_large : null)
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
                props.productData.map(item => item._id == props.itemId ? item.name : null)
            }
            </p>
            <div className={style.ingredients__item}>
                <p className={style.p}>Калории,ккал<br />{
                    //@ts-ignore
                    props.productData.map(item => item._id == props.itemId ? item.calories : null)
                }</p>
                <p className={style.p}>Белки, г<br />{
                    //@ts-ignore
                    props.productData.map(item => item._id == props.itemId ? item.proteins : null)
                }</p>
                <p className={style.p}>Жиры, г<br />{
                    //@ts-ignore
                    props.productData.map(item => item._id == props.itemId ? item.fat : null)
                }
                </p>
                <p className={style.p}>Углеводы, г<br />{
                    //@ts-ignore
                    props.productData.map(item => item._id == props.itemId ? item.carbohydrates : null)
                }</p> 
            </div>
        </div>
      </>
  )
}
