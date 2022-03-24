import React, {useEffect, useState} from 'react';
import {Attributes} from "../../api/models";
import {TagList, TagListItem} from "../../components/tag-list";

type AttributesProps = {
	attributes: Attributes
}

const AttributesDescriptions: {[key: string]: { reverse: boolean, positiveLabel: string, negativeLabel: string }} = {
	spayed_neutered: {
		reverse: false,
		positiveLabel: "✔ Spayed/Neutered",
		negativeLabel: "❌ Not Spayed/Neutered"
	},
	house_trained: {
		reverse: false,
		positiveLabel: "✔ House-trained",
		negativeLabel: "❌ Not House-trained"
	},
	declawed: {
		reverse: false,
		positiveLabel: "✔ Declawed",
		negativeLabel: "❌ Not Declawed"
	},
	special_needs: {
		reverse: true,
		positiveLabel: "Special Needs",
		negativeLabel: "✔ No Special Needs"
	},
	shots_current: {
		reverse: false,
		positiveLabel: "✔ Shots Current",
		negativeLabel: "❌ Shots Not Current"
	},
}

export function AttributesList({attributes}: AttributesProps) {
	const [tagList, setTagList] = useState<TagListItem[]>([]);

	function buildTagList(): TagListItem[] {
		return Object.entries(attributes).map(([key, value]) => {
			const description = AttributesDescriptions[key];
			const badgeClass = value || (!value && description.reverse) ? 'bg-dark' : 'bg-secondary';

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
	}, [attributes]);

	return (
		<>
			<h2>Attributes</h2>
			{tagList ?
				<TagList items={tagList} />
				: null
			}
		</>
	)
}
