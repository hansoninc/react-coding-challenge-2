import React, {useEffect, useState} from "react";
import {PetsAPI} from "../api/pets";
import {AnimalsEntity} from "../api/models";
import {TypeList} from "../components/type-list";
import {useParams} from "react-router-dom";
import {ListGrid} from "../components/list-grid";
import {Card} from "../components/card";
import {WishlistToggle} from "../components/wishlist-toggle";
import {Skeleton} from "../components/skeleton";

export type ListViewParams = {
	animalType?: string
};

export function ListView() {
	const api = PetsAPI;
	const [isLoading, setIsLoading] = useState(true);
	const [animals, setAnimals] = useState<AnimalsEntity[]>([]);
	const {animalType}: ListViewParams = useParams();

	useEffect(() => {
		async function loadPets(type?: string) {
			const animals = await api.getAnimals(type);
			if (animals) {
				setAnimals(animals);
			}

			setIsLoading(false);
		}

		setIsLoading(true);
		void loadPets(animalType);
	}, [animalType, api]);

	const getPhoto = (animal: AnimalsEntity) => {
		if (animal.photos?.length && animal.photos[0].medium) {
			return animal.photos[0].medium;
		} else {
			return 'https://via.placeholder.com/300';
		}
	}

	return (
		<div>
			<TypeList></TypeList>

			<ListGrid>
				{isLoading ?
					Array.from({length: 8}).map(() => (
						<Skeleton height="25em" className="list-grid__item" />
					))
					: (
						animals?.map(animal =>
							<Card
								className="list-grid__item"
								key={animal.id}
								href={`/detail/${animal.id}`}
								image={getPhoto(animal)}
								imageAlt={`${animal.name}, ${animal.type}`}
								heading={animal.name}
								subhead={`${animal.type}, ${animal.breeds.primary}, ${animal.age}, ${animal.gender}, ${animal.size}`}
								description={`ID #${animal.id} - ${animal.status}`}
								actions={<WishlistToggle id={animal.id} item={animal} />}
							/>
						)
					)}
			</ListGrid>

		</div>
	)
}
