import React from 'react';
import {Link} from "react-router-dom";
import {Wishlist} from "./wishlist";
import './site-header.scss';

export function SiteHeader() {
	return (
		<nav className="site-header">
			<h1 className="site-header__logo"><Link to="/">Find those Pets</Link></h1>
			<div className="site-header__menu">
				<Wishlist />
			</div>
		</nav>
	)
}
