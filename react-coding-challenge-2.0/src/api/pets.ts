import {Client as PetfinderClient} from '@petfinder/petfinder-js';
import {AnimalsEntity, AnimalType, GetAnimalsSearchOpts} from "./models";

/*
 * The Petfinder API_KEY and API_SECRET are not checked into Git. You can find them at:
 * https://www.petfinder.com/user/developer-settings/
 * These are then saved in an `.env.local` file
 */
const API_KEY: string = process.env.REACT_APP_API_KEY || '';
const API_SECRET: string = process.env.REACT_APP_API_SECRET || '';
const DEFAULT_LOC = '43604';

const client = new PetfinderClient({
	apiKey: API_KEY,
	secret: API_SECRET
});

export const PetsAPI = {
	getAnimals: async function(type?: string): Promise<AnimalsEntity[]> {
		try {
			const searchOpts: GetAnimalsSearchOpts = {
				limit: 50,
				location: DEFAULT_LOC
			};

			if (type) {
				searchOpts.type = type;
			}

			const results = await client.animal.search(searchOpts);

			if (results?.data?.animals) {
				return results.data.animals;
			} else {
				throw new Error();
			}
		} catch(e) {
			console.log('Error loading animals');
		}

		return [];
	},

	getAnimalById: async function(id: number): Promise<AnimalsEntity|undefined> {
		try {
			const results = await client.animal.show(id);

			if (results?.data?.animal) {
				return results.data.animal;
			} else {
				throw new Error();
			}
		} catch(e) {
			console.log('Error loading animal');
		}

		return;
	},

	getAnimalTypes: async function(): Promise<AnimalType[]> {
		try {
			const results = await client.animalData.types();

			if (results?.data?.types) {
				return results.data.types;
			} else {
				throw new Error();
			}
		} catch(e) {
			console.log('Error loading animal types');
		}

		return [];
	}
}
