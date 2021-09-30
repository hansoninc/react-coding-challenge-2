import React, {ReactNode} from 'react';
import {NavLink} from "react-router-dom";

type CardProps = {
	className?: string,
	href?: string,
	image?: string,
	imageAlt?: string,
	heading?: string,
	subhead?: string,
	description?: string,
	actions?: ReactNode
}

export function Card({className, href, image, imageAlt, heading, subhead, description, actions}: CardProps) {
	return (
		<li className={className}>
			<NavLink className="card__link" to={href || '#'}>
				{image &&
					<div className="card__image">
						<img src={image} alt={imageAlt ?? ''} />
					</div>
				}
				<h2 className="card__heading">{heading}</h2>
				<h3>{subhead}</h3>
				<p>{description}</p>
			</NavLink>
			{actions}
		</li>
	);
}
