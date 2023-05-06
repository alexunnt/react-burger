import { useEffect, useState } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import api from '../../utils/api';

import appStyles from './app.module.css';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.getItems()
            .then(res => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className={appStyles.app}>
                <AppHeader />
                <div className={appStyles.burgerConstructor}>
                    <BurgerIngredients data={data} />
                    <BurgerConstructor data={data} />
                </div>
            </div >
        </>
    );
}

export default App;