import burgerConstructorStyles from './burger-constructor.module.css';

import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import data from '../../utils/data';

function BurgerConstructor() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className={`${burgerConstructorStyles.main} ml-10 pt-25`}>
            <div className='ml-8'>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={data[0].price}
                    thumbnail={data[0].image}
                />
            </div>

            <div className={`${burgerConstructorStyles.items} ${burgerConstructorStyles.scrolled}`}>
                {data.map((item) => {
                    if (item.type !== "bun") {
                        return (
                            <div className={`${burgerConstructorStyles.element} mt-4 mr-4`}>
                                <DragIcon type="primary" />
                                <ConstructorElement
                                    text={item.name}
                                    price={item.price}
                                    thumbnail={item.image}
                                />
                            </div>
                        )
                    }
                })}
            </div>

            <div className='ml-8'>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={data[0].price}
                    thumbnail={data[0].image}
                />
            </div>

            <div className={`${burgerConstructorStyles.order} mt-10`}>
                <div className={`${burgerConstructorStyles.price} mr-10`}>
                    <p className={`${burgerConstructorStyles.amount} text text_type_digits-medium`}>610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
}

export default BurgerConstructor;