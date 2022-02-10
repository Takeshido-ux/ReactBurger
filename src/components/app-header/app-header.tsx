import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './app-header.module.css';
//@ts-ignore 
const AppHeader = (props) => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.header__inner}>
                        <nav className={style.nav__item + ' ' + style.width33}>
                        <a className={style.nav__item} href="#"><BurgerIcon type="primary" /> <p style={{color: 'white'}} className="text text_type_main-default ml-2">Конструктор</p> </a>
                        <a className={style.nav__item} href="#"><ListIcon type="primary" /> <p style={{color: 'white'}} className="text text_type_main-default ml-2">Лента Заказов</p></a>
                    </nav>
                    <div className={style.nav__item + ' ' + style.width33}>
                        <Logo/>
                    </div>
                        <div className={style.width33}>
                            <a className={style.your__profile} href="#"><ProfileIcon type="primary" /> <p style={{color: 'white'}} className="text text_type_main-default ml-2">Личный кабинет</p></a>
                        </div>
                </div>
        </div>
        </div>
    );
}

export default AppHeader;