import React, {PropsWithChildren} from 'react';
import './list-grid.scss';

export function ListGrid({children}: PropsWithChildren<any>) {
	return (
		<ul className="list-grid">
			{children}
		</ul>
	)
}
