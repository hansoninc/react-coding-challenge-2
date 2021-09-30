import React, {useState} from 'react';
import {Button} from "react-bootstrap";

type WishlistToggleProps = {
	id: number
}

export function WishlistToggle({id}: WishlistToggleProps) {
	const [inWishlist, setInWishlist] = useState(false);

	const toggle = function() {
		setInWishlist(!inWishlist);
		console.log(id);
	}

	return (
		<Button onClick={toggle}>
			{!inWishlist ? 'Add to Wishlist' : 'Remove from Wishlist'}
		</Button>
	)
}
