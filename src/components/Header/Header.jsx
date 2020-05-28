import React from 'react'
import style from './Header.module.scss'
import logo from './../image/logo.png';
import compare from './../image/compare.png';
import { NavLink } from 'react-router-dom';
import ModalAuth from '../ModalWindow/ModalAuth/ModalAuth'
// import ModalRegister from '../ModalWindow/ModalRegister/ModalRegister';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };
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
                    <div className={style["header__row"]}>
                        <div className={style["header__search"]}>
                            <form className={style["header__form"]}>
                                <input className={style["header__search-input"]} type="search" placeholder="Поиск" onChange={e => this.props.setSearchQuery(e.target.value)} value={this.props.searchQuery}></input>
                            </form>
                        </div>
                        <div className={style["header__logo"]}>
                            <NavLink to='/'>
                                <img src={logo} alt="logo"></img>
                            </NavLink>
                        </div>
                        <div className={style["header__menu"]}>
                            <button id='main' className={style["header__button"]}><NavLink to='/'> {/* Главная */} <i class="fas fa-home"></i></NavLink></button>
                            {this.props.isAuth === true
                                ? <button id='user' className={style["header__button"]} /* onClick={() => this.openModal()} */ ><NavLink to='/personal'> {/* Личный кабинет */}<i class="fas fa-users-cog"></i> </NavLink></button>
                                : <button id='sign-in' className={style["header__button"]} onClick={() => this.openModal()}><NavLink to=''> {/* Войти */} <i class="fas fa-sign-in-alt"></i></NavLink></button>
                            }
                            <ModalAuth
                                isOpen={this.state.isModalOpen}
                                onClose={() => this.closeModal()}
                            />

                            <button id='compare' className={style["header__button"]}><NavLink to='/compare'> {/* Сравнение */} <img src={compare} alt=""/></NavLink></button>
                            <button id='basket' className={style["header__button"]}><NavLink to='/basket'> {/* Корзина */} <i class="fas fa-shopping-cart"></i></NavLink>{this.props.count > 0 && <span className={style['basket']}>{`${this.props.count}`}</span>}</button>
                            {this.props.isAuth === true
                                ? <button id='sign-out' onClick={() => this.props.logout()} className={style["header__button"]}> {/* Выйти */} <i class="fas fa-sign-out-alt"></i></button>
                                : undefined
                            }
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header;