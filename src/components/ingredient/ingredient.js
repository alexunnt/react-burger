import PropTypes from 'prop-types';
import ingredientStyles from './ingredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Ingredient({ item, setIngredientInModal }) {
    return (
        <div key={item._id} className={`${ingredientStyles.item} ml-4`} onClick={() => setIngredientInModal(item)}>
            <img src={item.image} alt={item.name} />
            <div className={`${ingredientStyles.price} mt-1 mb-1`}>
                <p className={`${ingredientStyles.digits} text text_type_digits-default`}>{item.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={ingredientStyles.name}>{item.name}</p>
        </div>
    )
}

Ingredient.propTypes = {
    item: PropTypes.object.isRequired,
    setIngredientInModal: PropTypes.func.isRequired
}

export default Ingredient;