import React from 'react'
import './Product.scss'

const Product = () => {
    return (
        <div class="products">
            <div class="product">
                <div class="product__header">
                    <div class="product__title">Мобильный телефон Apple iPhone 11 Pro Max 512GB (серый космос)</div>
                    <div class="product__buttons">
                        <a class="product__button-compare" href="#s">Сравнить</a>
                        <a class="product__button-like" href="#s">В избранное</a>
                    </div>
                </div>
                <div class="product__body">
                    <div class="product__row">
                        <div class="slider">
                            <div class="slider__block"></div>
                        </div>
                        <div class="product__info">
                            <div class="product__desc">
                                <div class="color">
                                    <div class="color__title">Цвет</div>
                                    <div className="color__items">
                                        <a class="color__item color__item--active" id="color-item-red" href="#s"></a>
                                        <a class="color__item" id="color-item-grey" href="#s"></a>
                                        <a class="color__item" id="color-item-blue" href="#s"></a>
                                    </div>

                                </div>
                                <div class="desc__items">
                                    <div className="desc__title">Основные характеристики</div>
                                    <div class="desc__item">
                                        <p>1 -ая характеристика: <span>Описание</span></p>
                                        <p>1 -ая характеристика: <span>Описание</span></p>
                                        <p>1 -ая характеристика: <span>Описание</span></p>
                                        <p>1 -ая характеристика: <span>Описание</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="basket">
                                <div class="basket__price">67 990р</div>
                                <div class="basket__btn"><a href="#s">Добавить в корзину</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about"></div>
            <div class="characterictics"></div>
        </div>
    )
}

export default Product;