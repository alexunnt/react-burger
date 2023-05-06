
import orderDetailsStyles from './order-details.module.css';

import doneImage from '../../images/done_clean.png';

function OrderDetails() {
    return (
        <>
            <p className={`${orderDetailsStyles.number} text text_type_digits-large mb-8`}>034536</p>
            <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
            <img src={doneImage} alt="Успешно" />
            <p className="text text_type_main-default mb-2 mt-15">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </>
    )
}

export default OrderDetails;