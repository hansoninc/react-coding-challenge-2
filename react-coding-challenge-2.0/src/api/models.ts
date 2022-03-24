// Search options for "Get Animals"
export type GetAnimalsSearchOpts = {
	type?: string; // Possible values may be looked up via Get Animal Types.
	breed?: string //	Accepts multiple values, e.g. breed=pug,samoyed. Possible values may be looked up via Get Animal Breeds below.
	size?: string; //	small, medium, large, xlarge Accepts multiple values, e.g. size=large,xlarge.
	gender?: string; //	male, female, unknown Accepts multiple values, e.g. gender=male,female.
	age?: string; //	baby, young, adult, senior Accepts multiple values, e.g. age=baby,senior.
	color?: string; //	Possible values may be looked up via Get Animal Types.
	coat?: string; //	short, medium, long, wire, hairless, curly Accepts multiple values, e.g. coat=wire,curly.
	status?: string; //	adoptable, adopted, found Accepts multiple values (default: adoptable)
	name?: string; //includes partial matches; e.g. "Fred" will return "Alfredo" and "Frederick")
	organization?: string; // Accepts multiple values, e.g. organization=[ID1],[ID2].
	good_with_children?: boolean|string; // Can be true, false, 1, or 0
	good_with_dogs?: boolean|string; // Can be true, false, 1, or 0
	good_with_cats?: boolean|string; // Can be true, false, 1, or 0
	house_trained?: boolean|string; // Can be true or 1 only
	declawed?: boolean|string; // Can be true or 1 only
	special_needs?: boolean|string; // boolean	Can be true or 1 only
	location? : string; // city, state; latitude,longitude; or postal code.
	distance?: number; // integer	Requires location to be set (default: 100, max: 500)
	before?: string; //	Must be a valid ISO8601 date-time string (e.g. 2019-10-07T19:13:01+00:00)
	after?: string; //	Must be a valid ISO8601 date-time string (e.g. 2019-10-07T19:13:01+00:00)
	sort?: string // recent, -recent, distance, -distance, random (default: recent). leading dash requests a reverse-order sort
	page?: number; // integer (default: 1)
	limit?: number; // integer (default: 20, max: 100)
}

// Animals
export interface AnimalsEntity {
	id: number;
	organization_id: string;
	url: string;
	type: string;
	species: string;
	breeds: Breeds;
	colors: Colors;
	age: string;
	gender: string;
	size: string;
	coat: string;
	name: string;
	description: string;
	photos?: (PhotosEntity)[] | null;
	videos?: (VideosEntity)[] | null;
	status: string;
	attributes: Attributes;
	environment: Environment;
	tags?: (string)[] | null;
	contact: Contact;
	published_at: string;
	distance: number;
	_links: AnimalsEntityLinks;
}
export interface Breeds {
	primary: string;
	secondary?: null;
	mixed: boolean;
	unknown: boolean;
}
export interface Colors {
	primary: string;
	secondary?: null;
	tertiary?: null;
}
export interface PhotosEntity {
	[key: string]: string;
	small: string;
	medium: string;
	large: string;
	full: string;
}
export interface VideosEntity {
	embed: string;
}
export interface Attributes {
	spayed_neutered: boolean;
	house_trained: boolean;
	declawed: boolean;
	special_needs: boolean;
	shots_current: boolean;
}
export interface Environment {
	children: boolean;
	dogs: boolean;
	cats: boolean;
}
export interface Contact {
	email: string;
	phone: string;
	address: Address;
}
export interface Address {
	address1?: null;
	address2?: null;
	city: string;
	state: string;
	postcode: string;
	country: string;
}
export interface AnimalsEntityLinks {
	self: SelfOrTypeOrOrganization;
	type: SelfOrTypeOrOrganization;
	organization: SelfOrTypeOrOrganization;
}
export interface SelfOrTypeOrOrganization {
	href: string;
}

// Animal Types
export interface AnimalType {
	name: string;
	coats?: (string | null)[] | null;
	colors?: (string)[] | null;
	genders?: (string)[] | null;
	_links: AnimalsEntityLinks;
}
export interface AnimalTypesLinks {
	self: SelfOrBreeds;
	breeds: SelfOrBreeds;
}
export interface SelfOrBreeds {
	href: string;
}
