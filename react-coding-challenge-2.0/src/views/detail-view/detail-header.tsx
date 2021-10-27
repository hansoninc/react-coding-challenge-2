import React from 'react';
import { AnimalsEntity } from '../../api/models';
import {WishlistToggle} from "../../components/wishlist-toggle";
// import './detail-header.scss';

type DetailHeaderProps = {
	pet: AnimalsEntity
}

export function DetailHeader({pet}: DetailHeaderProps) {
	return (
		<div className="d-flex align-items-center justify-content-between mb-4">
			<div>
				<h1>{pet.name}</h1>
				<p>
					{pet.type}, {pet.breeds?.primary}, {pet.gender}, {pet.size}
				</p>
			</div>
			<div className="mx-4 ml-auto">
				<WishlistToggle id={pet.id} item={pet} />
			</div>
		</div>
	)
}

