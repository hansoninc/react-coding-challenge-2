import React from 'react';
import {WishlistContext} from "../WishlistContextProvider";
import {NavLink} from "react-router-dom";

export function Wishlist() {
	return (
		<div className="wishlist">
			Wishlist
			<WishlistContext.Consumer>
				{(context) => (
					<ul>
						{context?.wishlistItems?.map(el => (
							<li key={el.id}>
								<NavLink to={`/detail/${el.id}`}>
								<p>{el.id}</p>
								{el.fullDetails ?
									<p>{el.fullDetails.name}</p>
								: null }
								</NavLink>
							</li>
						))}
					</ul>
				)}
			</WishlistContext.Consumer>
		</div>
	)
}
