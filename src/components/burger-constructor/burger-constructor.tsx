import style from './burger-constructor.module.css'
import {ConstructorElement, Button, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE, GET_ID } from '../../services/actions/modal';
import { getOrderInfo } from '../../services/actions/order-details';
import { ADD_CONSTRUCTOR_INGREDIENT , ADD_CONSTRUCTOR_INGREDIENTS, CHANGE_CONSTRUCTOR_INGREDIENT_POSITION, REMOVE_CONSTRUCTOR_INGREDIENT} from '../../services/actions/burger-constructor';
import { INCREMENT, DECREMENT } from '../../services/actions/burger-ingredients';
import React from 'react';

//@ts-ignore
const BurgerConstructor = (props) => {
    //@ts-ignore
    const {ingredients, constructorIngredients, constructorIngredient, isDrag} = useSelector(store => ({
        //@ts-ignore
        ingredients: store.ingredients.ingredients,
        //@ts-ignore
        constructorIngredients: store.constructorIngredients.constructorIngredients,
        //@ts-ignore
        constructorIngredient: store.constructorIngredients.constructorIngredient,
        //@ts-ignore
        isDrag: store.ingredients.isDrag
    }));
    //@ts-ignore
    const dispatch = useDispatch();
    //@ts-ignore
    const handleOrderClick = (e) => {
        let id = e.currentTarget.id;
        //@ts-ignore
        let order = ingredients.map(item => item._id)
        dispatch({type: TOGGLE});
        dispatch({type: GET_ID, payload: id});
        dispatch(getOrderInfo(order));
    }

    //@ts-ignore
    const handleDragOver = e => e.preventDefault();
    //@ts-ignore
    const handleDropMain = (e) => {
        if(constructorIngredient.isAdded === false){
            dispatch({type: ADD_CONSTRUCTOR_INGREDIENTS, payload: constructorIngredient});
            dispatch({type: INCREMENT, payload: constructorIngredient})
        }
    };
    //@ts-ignore
    const handleDragOverElem = e => e.preventDefault();
    //@ts-ignore
    const handleDropElem = (e) => {
        //@ts-ignore
        const changeIngredient = constructorIngredients.find(item => item.index == e.currentTarget.id);
        if(constructorIngredient.isAdded === true){
            dispatch({type: CHANGE_CONSTRUCTOR_INGREDIENT_POSITION, payload: changeIngredient});
        }
    }

    //@ts-ignore
    const handleDragElem = (e) => {
        e.preventDefault();
    }

    //@ts-ignore
    const handleDragStartElem = (e) => {
         //@ts-ignore
        const changeIngredient = constructorIngredients.find(item => item.index == e.currentTarget.id);
        dispatch({type: ADD_CONSTRUCTOR_INGREDIENT, payload: changeIngredient});
    }

    //@ts-ignore
    const handleCloseElement = (index, id) => {
        //@ts-ignore
        dispatch({type: REMOVE_CONSTRUCTOR_INGREDIENT, payload: index})
        dispatch({type: DECREMENT, payload: id})
   }

    //@ts-ignore
    const sum = constructorIngredients.reduce((accum, item) => {
        if(item.type === 'bun'){
            accum += item.price + item.price
        }
        else accum += item.price
        return accum
    }, 0);
    const boxBorder = isDrag ? style.borderOn : style.borderOff

    return <div style={{width: '50%', display: 'flex', justifyContent: 'center'}}>
      <div className='pt-30'>
        <div onDragOver={handleDragOver} onDrop={handleDropMain} className={'p-2' + ' ' + boxBorder} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {//@ts-ignore
                    constructorIngredients.map(item => {
                        if(item.type === 'bun'){
                        return <div className={style.dragTop} key={item._id}>
                                <div className={style.dragIcon}></div>
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text={item.name}
                                    price={item.price}
                                    thumbnail={item.image_mobile}
                                />
                                </div>
                        }
                    })
                }
                <div className={style.drag}>
                    {//@ts-ignore
                    constructorIngredients.map((item,i) => {
                        if(item.type !== 'bun'){
                        return (<div draggable = {true}
                            //@ts-ignore 
                        onDrop={handleDropElem} onDrag={handleDragElem} onDragStart={handleDragStartElem} onDragOver={handleDragOverElem} id={i} key={i} className={style.dragItem}>
                                <div className={style.dragIcon}><DragIcon type="primary" /></div>
                                <ConstructorElement
                                    text={item.name}
                                    price={item.price}
                                    thumbnail={item.image_mobile}
                                    //@ts-ignore 
                                    handleClose={() => handleCloseElement(i, item._id)}
                                />
                                </div>)}
                    })}
                </div>
                {//@ts-ignore
                    constructorIngredients.map(item => {
                        if(item.type === 'bun'){
                        return <div className={style.dragBottom} key={item._id}>
                                <div className={style.dragIcon}></div>
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={item.name}
                                    price={item.price}
                                    thumbnail={item.image_mobile}
                                />
                                </div>
                        }
                    })
                }
        </div>
        <div className='pt-3' style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
        <div className='mr-8' style={{display: 'flex', alignItems: 'center'}}>
            <p className="text text_type_digits-medium mr-2">{sum}</p>
            <CurrencyIcon type="primary" />
        </div>
        <div onClick={handleOrderClick} id='orderDetails'>
            <Button type="primary" size="large">
                Оформить заказ
            </Button>
        </div>
        </div>
        
    </div>
  </div>;
}
export default BurgerConstructor;
