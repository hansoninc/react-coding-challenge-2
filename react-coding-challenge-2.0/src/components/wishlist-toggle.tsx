import React, {useContext} from 'react';
import {Button} from "react-bootstrap";
import {WishlistContext, WishlistContextProps, WishlistItem} from "../WishlistContextProvider";

type WishlistToggleProps = {
	id: number,
	item: WishlistItem
}

export function WishlistToggle({id, item}: WishlistToggleProps) {
	const appContext = useContext<WishlistContextProps>(WishlistContext);

	const toggle = function() {
		appContext.toggleInWishlist(item);
	}

	return (
		<Button onClick={toggle} variant={appContext.inWishlist(id) ? 'success' : 'info'}>
			{!appContext.inWishlist(id) ? '☆ Add to Wishlist' : '★ Remove from Wishlist'}
		</Button>
	)
}
