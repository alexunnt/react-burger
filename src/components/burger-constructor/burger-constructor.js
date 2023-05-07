import { useState, useEffect } from 'react';
import burgerConstructorStyles from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import { menuItemPropTypes } from '../../utils/constants';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ data }) {
    const [order, setOrder] = useState(null);
    const closeOrderModal = () => setOrder(null);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        let total = 0;
        const priceOfBuns = 2510;
        data.map((item) => {
            if (item.type !== "bun") {
                total += item.price;
            }
        });
        setAmount(priceOfBuns + total);
    }, [data, setAmount]);

    return (
        <>
            {data.length !== 0 &&
                (
                    <div className={`${burgerConstructorStyles.main} ml-10 pt-25`}>
                        <div className='ml-6'>
                            <ConstructorElement
                                type="top"
                                isLocked={true}
                                text={`${data[0].name} (верх)`}
                                price={data[0].price}
                                thumbnail={data[0].image}
                            />
                        </div>

                        <div className={`${burgerConstructorStyles.items} ${burgerConstructorStyles.scrolled}`}>
                            {data.map((item) => {
                                if (item.type !== "bun") {
                                    return (
                                        <div key={item._id} className={`${burgerConstructorStyles.element} mt-4 mr-4`}>
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

                        <div className='ml-6'>
                            <ConstructorElement
                                type="bottom"
                                isLocked={true}
                                text={`${data[0].name} (низ)`}
                                price={data[0].price}
                                thumbnail={data[0].image}
                            />
                        </div>

                        <div className={`${burgerConstructorStyles.order} mt-10`}>
                            <div className={`${burgerConstructorStyles.price} mr-10`}>
                                <p className={`${burgerConstructorStyles.amount} text text_type_digits-medium`}>{amount}</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <Button type="primary" size="large" onClick={setOrder}>
                                Оформить заказ
                            </Button>
                        </div>

                        {order && (
                            <Modal closeModal={closeOrderModal}>
                                <OrderDetails />
                            </Modal>
                        )}
                    </div>
                )
            }
        </>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired
}

export default BurgerConstructor;