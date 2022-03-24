import React from 'react';

export type TagListItem = {
	label: string,
	className: string
}

export type TagListProps = {
	items: TagListItem[]
}

export function TagList({items}: TagListProps) {
	return (
		items.length ?
			<ul className="list-inline">
				{items.map((item, index) => (
					<li className="list-inline-item" key={index}>
						<div className={`badge ${item.className}`}>{item.label}</div>
					</li>
				))}
			</ul>
		: null
	)
}
