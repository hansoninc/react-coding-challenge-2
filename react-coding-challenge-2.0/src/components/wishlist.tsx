import React from 'react';
import {AppContext} from "../AppContextProvider";
import {NavLink} from "react-router-dom";

export function Wishlist() {
	return (
		<div className="wishlist">
			Wishlist
			<AppContext.Consumer>
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
			</AppContext.Consumer>
		</div>
	)
}
