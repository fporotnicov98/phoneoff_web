import React from 'react'
import style from './Header.module.scss'
import logo from './../image/logo.png';
import { NavLink } from 'react-router-dom';
import ModalAuth from '../ModalWindow/ModalAuth/ModalAuth'
import ModalRegister from '../ModalWindow/ModalRegister/ModalRegister';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };
        this.getText = React.createRef();
    }

    onFindTitle() {
        let title = this.getText.current.value;
        this.props.findNewTitle(title)
    }
    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    render() {
        return (
            <header className={style["header"]}>
                <div className={style["container"]}>
                    <div class={style["header__row"]}>
                        <div className={style["header__search"]}>
                            <form className={style["header__form"]}>
                                <input className={style["header__search-input"]} ref={this.getText} type="search" placeholder="Поиск" onChange={this.onFindTitle} value={this.props.filterGoods}></input>
                                {/* <button className={style["header__search-button"]} onClick = {() => {props.filterNewTitle()}}><i className=" fas fa-search"></i></button> */}
                            </form>
                        </div>
                        <div className={style["header__logo"]}>
                            <NavLink to='/'>
                                <img src={logo} alt="logo"></img>
                            </NavLink>
                        </div>
                        <div className={style["header__menu"]}>
                            <button className={style["header__button"]} onClick={() => this.openModal()}><NavLink to=''>Вход</NavLink></button>
                            <ModalAuth
                                isOpen={this.state.isModalOpen}
                                onClose={() => this.closeModal()}
                            />
                            {/* <ModalRegister
                                isOpen={this.state.isModalOpen}
                                onClose={() => this.closeModal()}
                            /> */}
                            <button className={style["header__button"]}><NavLink to='/compare'>Сравнение</NavLink></button>
                            <button className={style["header__button"]}><NavLink to='/basket'>Корзина</NavLink></button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header;