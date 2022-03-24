import React, {useState} from 'react';
import {WishlistContext} from "../WishlistContextProvider";
import {NavLink} from "react-router-dom";
import './wishlist.scss';
import {WishlistPet} from "./wishlist-pet";
import {Button} from 'react-bootstrap';

export function Wishlist() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="wishlist">
			<WishlistContext.Consumer>
				{(context) => (
					<>
						<span className="wishlist__title">Wishlist</span>
						<span className="wishlist__count">({context.wishlistItems?.length} {context.wishlistItems?.length !== 1 ? 'Items' : 'Item'})</span>
						<Button className="wishlist__toggle" onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Hide' : 'Show'}</Button>

						{isOpen ?
							<ul className="wishlist__list list-unstyled">
								{context?.wishlistItems?.map(el => (
									<li className="list-unstyled-item wishlist__item" key={el.id}>
										<WishlistPet pet={el.fullDetails} />
									</li>
								))}
							</ul>
							: null
						}
					</>
				)}
			</WishlistContext.Consumer>
		</div>
	)
}
