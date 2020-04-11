import React from 'react'
import style from './Filter.module.scss'


const Filter = () => {
    return (
        <div className={style.filter}>
            <div className={style.filter__block}>
                <div className={style.filter__title}>Бренд</div>
                <div className={style.filter__body}>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option1"></input>
                        <label className="style.filter__checkbox-text" for="option1">Apple</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option2"></input>
                        <label className="style.filter__checkbox-text" for="option2">Samsung</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option3"></input>
                        <label className="style.filter__checkbox-text" for="option3">Huawei</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option4"></input>
                        <label className="style.filter__checkbox-text" for="option4">Sony</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option5"></input>
                        <label className="style.filter__checkbox-text" for="option5">Honor</label>
                    </div>
                    <div class={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option6"></input>
                        <label className="filter__checkbox-text" for="option6">Oppo</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option7"></input>
                        <label className="filter__checkbox-text" for="option7">Xiaomi</label>
                    </div>
                </div>
            </div>
            <div className={style.filter__block}>
                <div className={style.filter__title}>Оперативная память</div>
                <div className={style.filter__body}>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option8"></input>
                        <label className="filter__checkbox-text" for="option8">1 Гб</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option9"></input>
                        <label className="filter__checkbox-text" for="option9">2 Гб</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option10"></input>
                        <label className="filter__checkbox-text" for="option10">3 Гб</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option11"></input>
                        <label className="filter__checkbox-text" for="option11">4 Гб</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option12"></input>
                        <label className="filter__checkbox-text" for="option12">6 Гб</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option13"></input>
                        <label className="filter__checkbox-text" for="option13">8 Гб</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option14"></input>
                        <label className="filter__checkbox-text" for="option14">12 Гб</label>
                    </div>
                </div>
            </div>
            <div className={style.filter__block}>
                <div className={style.filter__title}>Встроенная память</div>
                <div className={style.filter__body}>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option15"></input>
                        <label className="filter__checkbox-text" for="option15">от 4 Гб</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option16"></input>
                        <label className="filter__checkbox-text" for="option16">16 Гб</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option17"></input>
                        <label className="filter__checkbox-text" for="option17">32 Гб</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option18"></input>
                        <label className="filter__checkbox-text" for="option18">64 Гб</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option19"></input>
                        <label className="filter__checkbox-text" for="option19">128 Гб</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option20"></input>
                        <label className="filter__checkbox-text" for="option20">256 Гб</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option21"></input>
                        <label className="filter__checkbox-text" for="option21">512 Гб</label>
                    </div>
                </div>
            </div>
            <div className={style.filter__block}>
                <div className={style.filter__title}>Диагональ экрана</div>
                <div className={style.filter__body}>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option22"></input>
                        <label className="filter__checkbox-text" for="option22">от 10 до 12.6</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option23"></input>
                        <label className="filter__checkbox-text" for="option23">от 13 до 14.4</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option24"></input>
                        <label className="filter__checkbox-text" for="option24">от 15 до 16.4</label>
                    </div>
                    <div className={style.filter__checkbox}>
                        <input type="checkbox" className={style.filter__checkboxInput} id="option25"></input>
                        <label className="filter__checkbox-text" for="option25">17 и более</label>
                    </div>
                </div>
            </div>
            <a href="#s" className={style.filter__show}>Показать товары</a>
        </div>
    )
}

export default Filter;