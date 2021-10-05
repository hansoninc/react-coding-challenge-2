import React from 'react';
import './skeleton.scss';

type SkeletonProps = {
	height?: number|string,
	width?: number|string,
	className?: string
}

export function Skeleton({height = 200, width, className}: SkeletonProps) {
	const styles: any = {};
	if (width) {
		styles.width = typeof (width) === 'number' ? `${width}px` : width;
	}
	if (height) {
		styles.height = typeof(height) === 'number' ? `${height}px` : height
	}

	return (
		<div className={`${className} skeleton`} style={styles}></div>
	)
}
