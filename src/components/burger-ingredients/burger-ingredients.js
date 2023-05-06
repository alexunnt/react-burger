import React from 'react';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { menuItemPropTypes } from '../../utils/constants';

import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients({ data, setIngredientInModal }) {
    const [current, setCurrent] = React.useState('one');

    return (
        <div className={burgerIngredientsStyles.main}>
            <h1 className={`${burgerIngredientsStyles.headerOne} mt-10 mb-5`}>Соберите бургер</h1>
            <div style={{ display: 'flex' }} className='mb-10'>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>

            <div className={burgerIngredientsStyles.scrolled}>
                <h2 className={`${burgerIngredientsStyles.headerTwo} mb-6`}>Булки</h2>
                <div className={`${burgerIngredientsStyles.burgerItems} pb-10 pl-4 pt-6`}>
                    {data.map((item) => {
                        if (item.type === "bun") {
                            return (
                                <div key={item._id} className={`${burgerIngredientsStyles.item} ml-4`} onClick={() => setIngredientInModal(item)}>
                                    <img src={item.image} alt={item.name} />
                                    <div className={`${burgerIngredientsStyles.price} mt-1 mb-1`}>
                                        <p className={`${burgerIngredientsStyles.digits} text text_type_digits-default`}>{item.price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    <p className={burgerIngredientsStyles.name}>{item.name}</p>
                                </div>
                            )
                        }
                    })}
                </div>

                <h2 className={`${burgerIngredientsStyles.headerTwo} mb-6`}>Соусы</h2>
                <div className={`${burgerIngredientsStyles.burgerItems} pb-10 pt-6`}>
                    {data.map((item) => {
                        if (item.type === "sauce") {
                            return (
                                <div key={item._id} className={`${burgerIngredientsStyles.item} ml-4`} onClick={() => setIngredientInModal(item)}>
                                    <img src={item.image} alt={item.name} className={burgerIngredientsStyles.image} />
                                    <div className={`${burgerIngredientsStyles.price} mt-1 mb-1`}>
                                        <p className={`${burgerIngredientsStyles.digits} text text_type_digits-default`}>{item.price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    <p className={burgerIngredientsStyles.name}>{item.name}</p>
                                </div>
                            )
                        }
                    })}
                </div>

                <h2 className={`${burgerIngredientsStyles.headerTwo} mb-6`}>Начинки</h2>
                <div className={`${burgerIngredientsStyles.burgerItems} pb-10 pt-6`}>
                    {data.map((item) => {
                        if (item.type === "main") {
                            return (
                                <div key={item._id} className={`${burgerIngredientsStyles.item} ml-4`} onClick={() => setIngredientInModal(item)}>
                                    <img src={item.image} alt={item.name} className={burgerIngredientsStyles.image} />
                                    <div className={`${burgerIngredientsStyles.price} mt-1 mb-1`}>
                                        <p className={`${burgerIngredientsStyles.digits} text text_type_digits-default`}>{item.price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    <p className={burgerIngredientsStyles.name}>{item.name}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired,
    setIngredientInModal: PropTypes.func.isRequired
}

export default BurgerIngredients;