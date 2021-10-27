import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {AnimalsEntity} from "../../api/models";
import {PetsAPI} from "../../api/pets";
import {Col, Container, Row} from "react-bootstrap";
import {DetailHeader} from "./detail-header";
import {DetailDescription} from "./detail-description";
import {AttributesList} from "./attributes-list";
import {EnvironmentList} from "./environment-list";
import {ImageCarousel} from "./image-carousel";

export type DetailViewParams = {
	id: string
}

export function DetailView() {
	const {id} = useParams<DetailViewParams>();
	const [data, setData] = useState<AnimalsEntity>();
	const history = useHistory();

	useEffect(() => {
		async function loadData() {
			const result = await PetsAPI.getAnimalById(parseInt(id));
			if (!result) {
				history.replace('/not-found');
			}

			setData(result);
		}

		void loadData();
	}, [id]);

	return (
		<div>
			{data ?
				<>
					<Container className="mb-5">
						<Row>
							<DetailHeader pet={data} />
						</Row>
						<Row>
							<Col md={6} className="mb-3">
								{data.photos?.length ?
									<ImageCarousel images={data.photos} />
									: <img src="https://via.placeholder.com/600" className="img-fluid" alt="" /> }
							</Col>
							<Col md={6}>
								<DetailDescription pet={data} />
								<AttributesList attributes={data.attributes} />
								<EnvironmentList environment={data.environment} />
							</Col>
						</Row>
					</Container>
				</>
			: null}
		</div>
	)
}
