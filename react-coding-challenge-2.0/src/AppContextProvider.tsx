import React, {createContext, useState, ReactNode} from 'react';
import './App.scss';

export type WishlistItem = {
	id: number;
	fullDetails?: any;
}

export type GlobalContext = {
	wishlistItems?: WishlistItem[],
	inWishlist: Function,
	toggleWishlistItem: Function
};

export const AppContext = createContext<GlobalContext>({
	wishlistItems: [],
	inWishlist: new Function(),
	toggleWishlistItem: new Function()
});

type AppContextProviderProps = {
	children: ReactNode
};

export function AppContextProvider({children}: AppContextProviderProps) {
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
			// console.log(`Removing ${id}`);
			tmp.splice(index, 1);
			setWishlistItems(tmp);
		} else {
			// console.log(`Adding ${id}`);
			tmp.push({
				id: id,
				fullDetails: item
			});
			setWishlistItems(tmp);
		}

		// console.log(tmp.map(el => el.id).join(','));
	}

	return (
		<AppContext.Provider value={{
			wishlistItems: wishlistItems,
			inWishlist: inWishlist,
			toggleWishlistItem: toggleWishlistItem
		}}>
			{children}
		</AppContext.Provider>
	);
}
