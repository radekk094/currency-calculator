import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const list = [
    { name: "Waluty - aktualne", icon: "fas fa-coins", path: "/", exact: true },
    { name: "Waluty - archiwum", icon: "far fa-calendar-alt", path: "/archive" },
    { name: "Waluty - historia", icon: "fas fa-chart-line", path: "/history" }
]

const Navigation = () => {
    const menu = list.map((item) => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}><i className={item.icon}></i><span>{item.name}</span></NavLink>
        </li>
    ));

    return (
        <nav>
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;