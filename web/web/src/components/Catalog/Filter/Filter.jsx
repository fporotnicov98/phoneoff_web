import React from 'react'
import './Filter.scss'


const Filter = () => {
    return (
        <div class="filter">
            <div class="filter__block">
                <div class="filter__title">Бренд</div>
                <div class="filter__body">
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option1"></input>
                        <label class="filter__checkbox-text" for="option1">Apple</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option2"></input>
                        <label class="filter__checkbox-text" for="option2">Samsung</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option3"></input>
                        <label class="filter__checkbox-text" for="option3">Huawei</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option4"></input>
                        <label class="filter__checkbox-text" for="option4">Sony</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option5"></input>
                        <label class="filter__checkbox-text" for="option5">Honor</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option6"></input>
                        <label class="filter__checkbox-text" for="option6">Oppo</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option7"></input>
                        <label class="filter__checkbox-text" for="option7">Xiaomi</label>
                    </div>
                </div>
            </div>
            <div class="filter__block">
                <div class="filter__title">Оперативная память</div>
                <div class="filter__body">
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option8"></input>
                        <label class="filter__checkbox-text" for="option8">1 Гб</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option9"></input>
                        <label class="filter__checkbox-text" for="option9">2 Гб</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option10"></input>
                        <label class="filter__checkbox-text" for="option10">3 Гб</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option11"></input>
                        <label class="filter__checkbox-text" for="option11">4 Гб</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option12"></input>
                        <label class="filter__checkbox-text" for="option12">6 Гб</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option13"></input>
                        <label class="filter__checkbox-text" for="option13">8 Гб</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option14"></input>
                        <label class="filter__checkbox-text" for="option14">12 Гб</label>
                    </div>
                </div>
            </div>
            <div class="filter__block">
                <div class="filter__title">Встроенная память</div>
                <div class="filter__body">
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option15"></input>
                        <label class="filter__checkbox-text" for="option15">от 4 Гб</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option16"></input>
                        <label class="filter__checkbox-text" for="option16">16 Гб</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option17"></input>
                        <label class="filter__checkbox-text" for="option17">32 Гб</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option18"></input>
                        <label class="filter__checkbox-text" for="option18">64 Гб</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option19"></input>
                        <label class="filter__checkbox-text" for="option19">128 Гб</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option20"></input>
                        <label class="filter__checkbox-text" for="option20">256 Гб</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option21"></input>
                        <label class="filter__checkbox-text" for="option21">512 Гб</label>
                    </div>
                </div>
            </div>
            <div class="filter__block">
                <div class="filter__title">Диагональ экрана</div>
                <div class="filter__body">
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option22"></input>
                        <label class="filter__checkbox-text" for="option22">от 10 до 12.6</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option23"></input>
                        <label class="filter__checkbox-text" for="option23">от 13 до 14.4</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option24"></input>
                        <label class="filter__checkbox-text" for="option24">от 15 до 16.4</label>
                    </div>
                    <div class="filter__checkbox">
                        <input type="checkbox" class="filter__checkbox-input" id="option25"></input>
                        <label class="filter__checkbox-text" for="option25">17 и более</label>
                    </div>
                </div>
            </div>
            <a href="#" class="filter__show">Показать товары</a>
        </div>
    )
}

export default Filter;