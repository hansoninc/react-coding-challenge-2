import React, {useContext} from 'react';
import {Button} from "react-bootstrap";
import {AppContext, GlobalContext, WishlistItem} from "../AppContextProvider";

type WishlistToggleProps = {
	id: number,
	item: any
}

export function WishlistToggle({id, item}: WishlistToggleProps) {
	const appContext = useContext<GlobalContext>(AppContext);

	const toggle = function() {
		appContext.toggleWishlistItem(item);
	}

	return (
		<Button onClick={toggle}>
			{!appContext.inWishlist(id) ? 'Add to Wishlist' : 'Remove from Wishlist'}
		</Button>
	)
}
