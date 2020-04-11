import React from 'react'
import './Header.scss'
import logo from './../image/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div class="header__row">
                    <div className="header__search">
                        <form className="header__form">
                            <input className="header__search-input" type="search" placeholder="Поиск"></input>
                            <button type="submit" className="header__search-button"><i className=" fas fa-search"></i></button>
                        </form>
                    </div>
                    <div className="header__logo">
                        <NavLink to='/main'>
                            <img src={logo} alt="logo"></img>
                        </NavLink>
                    </div>
                    <div className="header__menu">
                        <a className="header__button" href="#">Войти</a>
                        <a className="header__button" href="#">Сравнение</a>
                        <a className="header__button" href="#">Корзина</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;