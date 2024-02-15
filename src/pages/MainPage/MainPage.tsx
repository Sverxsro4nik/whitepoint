import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import cls from './MainPage.module.css';
import { routes } from '../../routes';

const MainPage = () => {
	return (
		<div className={cls.Container}>
			<nav className={cls.Navigation}>
				<NavLink to={routes.pages.timerPage()} className={({isActive}) => isActive ? `${cls.NavLink} ${cls.ActiveLink}`: cls.NavLink}>Таймер</NavLink>
				<NavLink to={routes.pages.colorPickerPage()} className={({isActive}) => isActive ? `${cls.NavLink} ${cls.ActiveLink}`: cls.NavLink}>Выбор цвета</NavLink>
			</nav>
			<div className={cls.Content}>
			<Outlet />
			</div>
		</div>
	)
}

export default MainPage;