import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {AnimalsEntity} from "../api/models";
import {PetsAPI} from "../api/pets";
import {WishlistToggle} from "../components/wishlist-toggle";
import {Button, Col, Container, Row} from "react-bootstrap";

export type DetailViewParams = {
	id: string
}

export function DetailView() {
	const {id} = useParams<DetailViewParams>();
	const [data, setData] = useState<AnimalsEntity>();

	useEffect(() => {
		void loadData();
	}, []);

	const loadData = async () => {
		const result = await PetsAPI.getAnimalById(parseInt(id));
		console.log(result);
		setData(result);
	}

	return (
		<div>
			{data ?
				<>

					<Container>
						<Row>
							<div className="d-flex align-items-center justify-content-between mb-4">
								<h2>{data.name}</h2>
								<div className="mx-4 ml-auto">
									<WishlistToggle id={data.id} item={data} />
								</div>
							</div>
						</Row>
						<Row>
							<Col>
								<p>
									{data.type}, {data.breeds?.primary}, {data.age}, {data.gender}, {data.size}
								</p>
								{data.colors?.primary ?
									<p>{data.colors.primary}</p>
									: null }
								<p>
									{data.status}
								</p>
								<p>
									{data.description}
								</p>
								{data.distance ?
									<p>{data.distance}</p>
									: null }
								<p>
									<Button href={data.url} target="_blank">View on Petfinder</Button>
								</p>
							</Col>
							<Col>
								{data.photos?.length ?
									data.photos.map(photo =>
										<img src={photo.large} alt="" />
									)
								: null}
							</Col>
						</Row>
					</Container>


				</>
			: null}
		</div>
	)
}
