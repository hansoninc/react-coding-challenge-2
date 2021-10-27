import React from 'react';
import {AnimalsEntity} from "../../api/models";
import {Button} from "react-bootstrap";
// import './detail-description.scss';

type DetailDescriptionProps = {
	pet: AnimalsEntity
}

export function DetailDescription({pet}: DetailDescriptionProps) {
	return (
		<>
			<h2>About {pet.name}</h2>
			<ul className="list-unstyled">
				<li className="list-unstyled-item"><strong>Age:</strong> {pet.age}</li>
				{pet.colors?.primary ?
					<li className="list-unstyled-item"><strong>Color:</strong> {pet.colors.primary}</li>
					: null }
			</ul>

			<p>
				{pet.description}
			</p>

			<p>{pet.name} is <strong>{pet.status}</strong>!</p>

			{pet.distance ?
				<p>{pet.distance}</p>
				: null }
			<p>
				<Button href={pet.url} target="_blank">View {pet.name} on Petfinder</Button>
			</p>
		</>
	)
}

