import {AnimalsEntity} from "../api/models";

export const getPhoto = function(animal: AnimalsEntity, size = 'medium') {
	if (animal.photos?.length && animal.photos[0][size]) {
		return animal.photos[0][size];
	} else {
		return 'https://via.placeholder.com/300';
	}
}
