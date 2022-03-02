import React from 'react';
import style from './ingredient-details.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE } from '../../services/actions/modal';


//@ts-ignore
export default function IngredientDetails(props) {
    const dispatch = useDispatch();
    const handleToggleModal = () => {
        dispatch({type: TOGGLE});
    }
    //@ts-ignore
    const ingredients = useSelector(store => store.ingredients.ingredients)
    //@ts-ignore
    const id = useSelector(store => store.ingredientIdSet.ingredientId)
    //@ts-ignore 
    let src = ingredients.find(item => item._id === id ? item.image_large : null)
    return (
      <>
        <div className={style.title}>
            <p className="text text_type_main-default">
                Детали ингредиента
            </p>
            <p onClick={handleToggleModal} className={`text text_type_main-default ${style.cursor}`}>
                x   
            </p>
        </div>
        <div>                                                     
            <img className={style.img} src={src.image_large} alt="" />
            <p style={{textAlign: 'center'}} className={`text text_type_main-default`}>
            {
                //@ts-ignore
                ingredients.map(item => item._id === id ? item.name : null)
            }
            </p>
            <div className={style.ingredients__item}>
                <p className={style.p}>Калории,ккал<br />{
                    //@ts-ignore
                    ingredients.map(item => item._id === id ? item.calories : null)
                }</p>
                <p className={style.p}>Белки, г<br />{
                    //@ts-ignore
                    ingredients.map(item => item._id === id ? item.proteins : null)
                }</p>
                <p className={style.p}>Жиры, г<br />{
                    //@ts-ignore
                    ingredients.map(item => item._id === id ? item.fat : null)
                }
                </p>
                <p className={style.p}>Углеводы, г<br />{
                    //@ts-ignore
                    ingredients.map(item => item._id === id ? item.carbohydrates : null)
                }</p> 
            </div>
        </div>
      </>
  )
}
