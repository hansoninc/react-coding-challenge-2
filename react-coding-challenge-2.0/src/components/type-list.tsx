import React, {useEffect, useState, Fragment} from 'react';
import {PetsAPI} from "../api/pets";
import {AnimalType} from "../api/models";
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export function TypeList() {
	const [types, setTypes] = useState<AnimalType[]>([]);

	useEffect(() => {
		void loadTypes();
	}, []);

	const loadTypes = async () => {
		const types = await PetsAPI.getAnimalTypes();
		setTypes(types);
	}

	const getTypeSlug = (type: AnimalType) => {
		const typeSegments = type?._links?.self?.href?.split('/');
		if (typeSegments) {
			return typeSegments[typeSegments.length - 1];
		}
		return '';
	}

	return (
		<Fragment>
			{types.length ?
				<Navbar>
					<Nav>
						<Nav.Item>
							<NavLink to="/list">All</NavLink>
						</Nav.Item>
						{types.map(type =>
							<Nav.Item
								key={type.name}>
								<NavLink activeClassName="active" to={`/list/${getTypeSlug(type)}`}>{type.name}</NavLink>
							</Nav.Item>
						)}
					</Nav>
				</Navbar>
			: null }
		</Fragment>
	)
}
