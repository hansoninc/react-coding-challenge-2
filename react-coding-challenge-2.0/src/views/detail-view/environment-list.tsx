import React, {useEffect, useState} from 'react';
import {Environment} from "../../api/models";
import {TagList, TagListItem} from "../../components/tag-list";
// import './environment.scss';

const EnvironmentDescriptions: {[key: string]: { positiveLabel: string, negativeLabel: string }} = {
	children: {
		positiveLabel: "✔ Children",
		negativeLabel: "❌ Children"
	},
	dogs: {
		positiveLabel: "✔ Dogs",
		negativeLabel: "❌ Dogs"
	},
	cats: {
		positiveLabel: "✔ Cats",
		negativeLabel: "❌ Cats"
	}
}

type EnvironmentProps = {
	environment: Environment
}

export function EnvironmentList({environment}: EnvironmentProps) {
	const [tagList, setTagList] = useState<TagListItem[]>([]);

	function buildTagList(): TagListItem[] {
		return Object.entries(environment).map(([key, value]) => {
			const description = EnvironmentDescriptions[key];
			const badgeClass = value ? 'bg-success' : 'bg-danger';

			return {
				label: value ? description.positiveLabel : description.negativeLabel,
				className: badgeClass
			}
		});
	}

	useEffect(() => {
		const tagList = buildTagList();
		if (tagList.length) {
			setTagList(tagList);
		}
	}, [environment]);

	return (
		<>
			<h2>Good with:</h2>
			{tagList ?
				<TagList items={tagList} />
				: null
			}
		</>
	)
}
