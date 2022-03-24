import React from 'react';
import {WishlistToggle} from "./wishlist-toggle";
import {AnimalsEntity} from "../api/models";
import {NavLink} from "react-router-dom";
import {getPhoto} from "../helpers/animal-helpers";
import './wishlist-pet.scss';

type WishlistPetProps = {
	pet: AnimalsEntity
}

export function WishlistPet({pet}: WishlistPetProps) {
	return (
		<div className="wishlist-pet">
			<NavLink to={`/detail/${pet.id}`} className="wishlist-pet__link">
				<div className="wishlist-pet__img-wrap">
					<img src={getPhoto(pet, 'small')} className="wishlist-pet__img" />
				</div>
				<span className="wishlist-pet__body">
					<span className="wishlist-pet__name">{pet.name}</span>
					<span className="wishlist-pet__description">
						{pet.type}, {pet.gender}, {pet.size}
					</span>
				</span>
				<div className="wishlist-pet__actions">
					<WishlistToggle id={pet.id} item={pet} small={true} />
				</div>
			</NavLink>
		</div>
	)
}
