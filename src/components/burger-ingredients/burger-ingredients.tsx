import {Tab, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useContext } from 'react';
import style from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { DataContext } from '../../utils/data-context';

//@ts-ignore
const BurgerIngredients = (props) => {
    const productData = useContext(DataContext);
    const [current, setCurrent] = React.useState('one');
    return (
        <div style={{width: '50%'}}>
        <p className="text text_type_main-large mb-8 mt-10">Соберите бургер</p>
        <nav className={style.flex}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
            </Tab>
        </nav>
            <div className={style.scrollBar}>
                <div>
                    <p className="text text_type_main-medium mb-8 mt-8">Булки</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    
                        {   //@ts-ignore
                            productData.map(item => {
                                return(
                                    item.type === 'bun' ? 
                                    <div id={item._id} onClick={props.handleToggleModal} key={item._id} style={{width: '50%', cursor: 'pointer', marginBottom: '40px'}}>
                                    <img className={style.marginImg} src={item.image} alt="" />
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0 15px 0'}}>
                                        <p className="text text_type_digits-default mr-2">{item.price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    <p style={{textAlign: 'center'}} className={`text text_type_main-default ${style.marginAuto}`}>{item.name}</p>
                                    </div> 
                                    :
                                    null
                                );
                            })
                        }
                    </div>
                </div>
                <div>
                    <p className="text text_type_main-medium mb-8 mt-8">Соусы</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    {       //@ts-ignore
                            productData.map(item => {
                                return(
                                    item.type === 'sauce' ? 
                                    <div id={item._id} onClick={props.handleToggleModal} key={item._id} style={{width: '50%', cursor: 'pointer', marginBottom: '40px'}}>
                                    <img className={style.marginImg} src={item.image} alt="" />
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0 15px 0'}}>
                                        <p className="text text_type_digits-default mr-2">{item.price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    <p style={{textAlign: 'center'}} className={`text text_type_main-default ${style.marginAuto}`}>{item.name}</p>
                                    </div> 
                                    :
                                    null
                                );
                            })
                        }
                    </div>
                </div>
                <div>
                    <p className="text text_type_main-medium mb-8 mt-8">Начинки</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    {       //@ts-ignore
                            productData.map(item => {
                                return(
                                    item.type === 'main' ? 
                                    <div id={item._id} onClick={props.handleToggleModal} key={item._id} style={{width: '50%', cursor: 'pointer', marginBottom: '40px'}}>
                                    <img className={style.marginImg} src={item.image} alt="" />
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0 15px 0'}}>
                                        <p className="text text_type_digits-default mr-2">{item.price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    <p style={{textAlign: 'center'}} className={`text text_type_main-default ${style.marginAuto}`}>{item.name}</p>
                                    </div> 
                                    :
                                    null
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerIngredients;

BurgerIngredients.propTypes = {
    productData: PropTypes.array,
    handleToggleModal: PropTypes.func,
    createBurger: PropTypes.func
}; 