import React, {createContext, useState, ReactNode} from 'react';
import './App.scss';

export type WishlistItem = {
	id: number;
	fullDetails?: any;
}

export type WishlistContextProps = {
	wishlistItems?: WishlistItem[],
	inWishlist: Function,
	toggleInWishlist: Function
};

export const WishlistContext = createContext<WishlistContextProps>({
	wishlistItems: [],
	inWishlist: () => {},
	toggleInWishlist: () => {}
});

type WishlistContextProviderProps = {
	children: ReactNode
};

export function WishlistContextProvider({children}: WishlistContextProviderProps) {
	const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

	const inWishlist = function(id: number) {
		const found = wishlistItems.find((el: WishlistItem) => el.id === id);
		return found;
	}

	const toggleWishlistItem = function(item: WishlistItem): void {
		let tmp: WishlistItem[] = [...wishlistItems];
		const id = item.id;
		const index = tmp.findIndex((el: WishlistItem) => el.id === id);

		if (index > -1) {
			tmp.splice(index, 1);
			setWishlistItems(tmp);
		} else {
			tmp.push({
				id: id,
				fullDetails: item
			});
			setWishlistItems(tmp);
		}
	}

	return (
		<WishlistContext.Provider value={{
			wishlistItems: wishlistItems,
			inWishlist: inWishlist,
			toggleInWishlist: toggleWishlistItem
		}}>
			{children}
		</WishlistContext.Provider>
	);
}
