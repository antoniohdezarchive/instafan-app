import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <section className="header">
                <nav className="header__left-menu"></nav>
                <div className="header__title">Inicio</div>
                <nav className="header__right-menu">
                    <ul className="header-menu">
                    	<li className="header-menu__item">
                    		<i className="fa fa-fw fa-home"></i>
                            <span> Inicio</span>
                    	</li>
                        <li className="header-menu__item header-menu__item--thumbnail">
                            <img src="https://pbs.twimg.com/profile_images/721920865189781504/AlUaeaVh_normal.jpg" />
                            <span> Antonio</span>
                            <i className="fa fa-fw fa-caret-down"></i>
                            <ul className="sub-menu sub-menu--left-of-parent">
                                <li className="sub-menu__item">
                                    <i className="fa fa-user"></i>
                                    <span>&nbsp;Perfil</span>
                                </li>
                                <li className="sub-menu__item">
                                    <i className="fa fa-question-circle"></i>
                                    <span>&nbsp;Ayuda</span>
                                </li>
                                <div className="sub-menu__divider"></div>
                                <li className="sub-menu__item">
                                    <i className="fa fa-sign-out"></i>
                                    <span>&nbsp;Cerrar Sesión</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </section>
        );
    }
}

export default Header;