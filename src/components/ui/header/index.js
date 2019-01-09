import React from 'react';
import Logo from '../logo';
import './styles.scss';

const Header = () => (
    <header className={'header'}>
        <div className={'header__row'}>
            <div className={'header__item header__item-logo'}>
                <Logo/>
            </div>
            <div className={'header__item header__item-name'}>
                Demo React App!
            </div>
            <div className={'header__item header__item-profile'}>
                <button className={'btn btn-secondary'}>Войти</button>
                <button className={'btn btn-secondary'}>Регистрация</button>
            </div>
        </div>
    </header>
);

export default Header;