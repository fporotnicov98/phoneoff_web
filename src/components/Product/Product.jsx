import React from 'react'
import './Product.scss'
import Preloader from '../commons/Preloader'
import { NavLink } from 'react-router-dom'

const Product = (props) => {
    if (!props.product) {
        return (
            <Preloader />
        )
    }
    debugger
    return (
        <>
            <p className='back'><NavLink to="/">Вернуться к покупкам</NavLink></p>
            <div class="products">

                <div class="product">
                    <div class="product__header">
                        <div class="product__title">Мобильный телефон {props.product.Name}</div>
                        <div class="product__buttons">
                            <NavLink to='/compare'><button class="product__button-compare" onClick={() => props.compare.length <= 1 ? props.addToCompare(props.product) : alert("Уже сравнивается два товара")}>Сравнить</button></NavLink>
                        </div>
                    </div>
                    <div class="product__body">
                        <div class="product__row">
                            <div class="slider">
                                <div class="slider__block">
                                    <img src={`data:image/png;base64,${props.product.Image}`} alt='' />
                                </div>
                            </div>
                            <div class="product__info">
                                <div class="product__desc">
                                    <div class="color">
                                        <div class="color__title">Цвет</div>
                                        <div className="color__items">
                                            <a class="color__item color__item--active" id="color-item-red" href="#s">{null}</a>
                                            <a class="color__item" id="color-item-grey" href="#s">{null}</a>
                                            <a class="color__item" id="color-item-blue" href="#s">{null}</a>
                                        </div>

                                    </div>
                                    <div class="desc__items">
                                        <div className="desc__title">Основные характеристики</div>
                                        <div class="desc">
                                            <p>Оперативная память: <span>{props.product.ROM} Гб</span></p>
                                            <p>Встроенная память: <span>{props.product.RAM} Гб</span></p>
                                            <p>Диагональ: <span>{props.product.Diagonal}"</span></p>
                                        </div>
                                        <div className="desc__title">Описание</div>
                                        <div className="desc"><p>{props.product.Description}</p></div>
                                    </div>
                                </div>
                                <div class="basket">
                                    <div class="basket__price">Цена: {props.product.Cost} руб</div>
                                    {
                                        props.cart.some(item => item.Id === props.product.Id)
                                            ? <div className='check'><i class="fas fa-check"></i></div>
                                            : <button onClick={() => props.addToCart(props.product)} className="basket__btn">Добавить в корзину</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about"></div>
                <div class="characterictics"></div>
            </div>
        </>
    )
}

export default Product;