import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import appStyles from './app.module.css';

function App() {
    return (
        <div className={appStyles.app}>
            <AppHeader />
            <div className={appStyles.burgerConstructor}>
                <BurgerIngredients />
                <BurgerConstructor />
            </div>
        </div >
    );
}

export default App;