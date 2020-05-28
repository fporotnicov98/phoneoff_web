import React from 'react'
import style from './Header.module.scss'
import logo from './../image/logo.png';
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
                            {this.props.isAuth === true 
                            ?  <button className={style["header__button"]} onClick={() => this.openModal()}><NavLink to='/personal'>Личный кабинет</NavLink></button>
                            :<button className={style["header__button"]} onClick={() => this.openModal()}><NavLink to=''>Вход</NavLink></button>
                            }
                            <ModalAuth
                                isOpen={this.state.isModalOpen}
                                onClose={() => this.closeModal()}
                            />
                              
                            <button className={style["header__button"]}><NavLink to='/compare'>Сравнение</NavLink></button>
                            <button className={style["header__button"]}><NavLink to='/basket'>Корзина <span>{this.props.count > 0 && `(${this.props.count})`}</span></NavLink></button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header;