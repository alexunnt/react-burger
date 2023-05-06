import headerStyles from './app-header.module.css';

import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
    return (
        <header className={headerStyles.header}>
            <ul className={headerStyles.menu}>
                <li className={headerStyles.listItem}>
                    <a href="#" className={headerStyles.menuItem}>
                        <BurgerIcon type="primary" />
                        <p className={headerStyles.link}>Конструктор</p>
                    </a>
                </li>
                <li className={headerStyles.listItem}>
                    <a href="#" className={headerStyles.menuItem}>
                        <ListIcon type="secondary" />
                        <p className={`${headerStyles.link} ${headerStyles.inactive}`}>Лента заказов</p>
                    </a>
                </li>
            </ul>
            <div className={headerStyles.logo}>
                <Logo />
            </div>
            <a href="#" className={headerStyles.menuItem}>
                <ProfileIcon type="secondary" />
                <p className={`${headerStyles.link} ${headerStyles.inactive}`}>Личный кабинет</p>
            </a>

        </header>
    );
}

export default AppHeader;