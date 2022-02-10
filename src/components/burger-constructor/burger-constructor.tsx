import arr from '../../utils/data';
import style from './burger-constructor.module.css'
import {ConstructorElement, Button, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
//@ts-ignore
const BurgerConstructor = (props) => {

    return <div style={{width: '50%', display: 'flex', justifyContent: 'center'}}>
      <div className='pt-30'>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={arr[0].price}
            thumbnail={arr[0].image_mobile}
        />
        <div className={style.drag}>
            <div className={style.dragItem}>
                <div className={style.dragIcon}><DragIcon type="primary" /></div>
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={arr[0].price}
                    thumbnail={arr[0].image_mobile}
                />
            </div>
        </div>
        <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={arr[0].price}
            thumbnail={arr[0].image_mobile}
        />
        </div>
        <div className='pt-10' style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
        <div className='mr-8' style={{display: 'flex', alignItems: 'center'}}>
            <p className="text text_type_digits-medium mr-2">123</p>
            <CurrencyIcon type="primary" />
        </div>
        <div onClick={props.handleToggleModal} id='orderDetails'>
            <Button type="primary" size="large">
                Оформить заказ
            </Button>
        </div>
        </div>
        
    </div>
  </div>;
}
export default BurgerConstructor;