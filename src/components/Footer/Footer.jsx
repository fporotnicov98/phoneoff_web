import React from 'react'
import './Footer.scss'
import copyright from './../image/copyright.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__copyright">
                        <div className="footer__text">
                            <img src={copyright} alt=""></img>
                                <span>ООО "PhoneOFF" 2020. Все
                                права защищены. Указанная стоимость товаров и условия их приобретения действительны на
                                текущую дату.</span>
                        </div>
                        </div>
                        <div className="footer__contacts">
                            <a href="#s"><i className="fab fa-vk"></i></a>
                            <a href="#s"><i className="fab fa-telegram-plane"></i></a>
                            <a className="footer__tel" href="tel:+79966390607">+7 (996) - 639 - 06 - 07</a>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;