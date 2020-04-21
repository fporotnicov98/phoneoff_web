import React from 'react'
import './Header.scss'
import logo from './../image/logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    debugger

    let getText = React.createRef();

    let onFindTitle = () => {
        let title = getText.current.value;
        props.findNewTitle(title)
    }
    


    return (
        <header className="header">
            <div className="container">
                <div class="header__row">
                    <div className="header__search">
                        <form className="header__form">
                            <input className="header__search-input" ref = {getText} type="search" placeholder="Поиск" onChange = {onFindTitle} value = {props.filterGoods}></input>
                            {/* <button className="header__search-button" onClick = {() => {props.filterNewTitle()}}><i className=" fas fa-search"></i></button> */}
                        </form>
                    </div>
                    <div className="header__logo">
                        <NavLink to='/'>
                            <img src={logo} alt="logo"></img>
                        </NavLink>
                    </div>
                    <div className="header__menu">
                        <NavLink to = '/personal' className="header__button">Личный кабинет</NavLink>
                        <NavLink to = '/compare' className="header__button">Сравнение</NavLink>
                        <NavLink to = '/basket' className="header__button">Корзина</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;