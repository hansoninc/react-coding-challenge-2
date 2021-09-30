import React, {PropsWithChildren} from 'react';

export function ListGrid({children}: PropsWithChildren<any>) {
	return (
		<ul className="list-grid">
			{children}
		</ul>
	)
}
