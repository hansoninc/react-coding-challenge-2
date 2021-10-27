import React, {BaseSyntheticEvent, SyntheticEvent, useContext} from 'react';
import {Button} from "react-bootstrap";
import {WishlistContext, WishlistContextProps, WishlistItem} from "../WishlistContextProvider";

type WishlistToggleProps = {
	id: number,
	item: WishlistItem,
	small?: boolean
}

export function WishlistToggle({id, item, small}: WishlistToggleProps) {
	const appContext = useContext<WishlistContextProps>(WishlistContext);

	const toggle = function(e: BaseSyntheticEvent) {
		e.preventDefault();
		appContext.toggleInWishlist(item);
	}

	const getLabel = function() {
		if (small) {
			return !appContext.inWishlist(id) ? '☆' : '★';
		}
		return !appContext.inWishlist(id) ? '☆ Add to Wishlist' : '★ Remove from Wishlist';
	}

	return (
		<Button onClick={toggle} variant={appContext.inWishlist(id) ? 'success' : 'info'}>
			{getLabel()}
		</Button>
	)
}
