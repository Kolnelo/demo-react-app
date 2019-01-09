import React from 'react';
import NavigationList from '../navigation-list';
//import CartPanel from '../cart-panel';
import {NavigationCart} from '../../containers';
import './styles.scss';

const Navigation = ({navigations = [{name:'Главная', to:'/'},
                                    {name:'Товары', to:'/'},
                                    {name:'Акции', to:'/'},
                                    {name:'Контакты', to:'/'},
                                    {name: 'Франшиза', to:'/'},
                                    {name: 'О нас', to:'/'}
                                   ]}) => (
    <nav className={'navigation'}>
        <NavigationList navigations={navigations}/>
        <div className={'navigation__cart-panel'}>
            <NavigationCart />
        </div>
    </nav>
);

export default Navigation;