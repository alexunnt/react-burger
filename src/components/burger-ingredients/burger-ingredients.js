import { useState } from 'react';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { menuItemPropTypes } from '../../utils/constants';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Ingredient from '../ingredient/ingredient';

import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients({ data }) {
    const [current, setCurrent] = useState('one');
    const [ingredientInModal, setIngredientInModal] = useState(null);
    const closeIngredientModal = () => setIngredientInModal(null);

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
                                <Ingredient item={item} setIngredientInModal={setIngredientInModal} />
                            )
                        }
                    })}
                </div>

                <h2 className={`${burgerIngredientsStyles.headerTwo} mb-6`}>Соусы</h2>
                <div className={`${burgerIngredientsStyles.burgerItems} pb-10 pt-6`}>
                    {data.map((item) => {
                        if (item.type === "sauce") {
                            return (
                                <Ingredient item={item} setIngredientInModal={setIngredientInModal} />
                            )
                        }
                    })}
                </div>

                <h2 className={`${burgerIngredientsStyles.headerTwo} mb-6`}>Начинки</h2>
                <div className={`${burgerIngredientsStyles.burgerItems} pb-10 pt-6`}>
                    {data.map((item) => {
                        if (item.type === "main") {
                            return (
                                <Ingredient item={item} setIngredientInModal={setIngredientInModal} />
                            )
                        }
                    })}
                </div>
            </div>

            {ingredientInModal && (
                <Modal title='Детали ингредиента' closeModal={closeIngredientModal}>
                    <IngredientDetails ingredientData={ingredientInModal} />
                </Modal>
            )}
        </div>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired
}

export default BurgerIngredients;