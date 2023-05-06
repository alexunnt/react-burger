import ingredientDetailsStyles from './ingredient-details.module.css';

import { menuItemPropTypes } from '../../utils/constants';

function IngredientDetails({ ingredientData }) {
    const { image_large, name, calories, fat, proteins, carbohydrates } = ingredientData;

    return (
        <>
            <img src={image_large} alt={name} />
            <p className='mt-4 mb-8 text text_type_main-medium'>{name}</p>
            <div className={`${ingredientDetailsStyles.description} text_color_inactive`}>
                <div className='mr-5'>
                    <p className="text text_type_main-default mb-2">Калории,ккал</p>
                    <p className="text text_type_digits-default">{calories}</p>
                </div>
                <div className='mr-5'>
                    <p className="text text_type_main-default mb-2">Белки, г</p>
                    <p className="text text_type_digits-default">{fat}</p>
                </div>
                <div className='mr-5'>
                    <p className="text text_type_main-default mb-2">Жиры, г</p>
                    <p className="text text_type_digits-default">{proteins}</p>
                </div>
                <div>
                    <p className="text text_type_main-default mb-2">Углеводы, г</p>
                    <p className="text text_type_digits-default">{carbohydrates}</p>
                </div>
            </div>
        </>
    )
}

IngredientDetails.propTypes = {
    ingredientData: menuItemPropTypes.isRequired
}

export default IngredientDetails;