import React from 'react';
import {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';
import {PhotosEntity} from "../../api/models";

import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/navigation/navigation.scss';

type ImageCarouselProps = {
	images: PhotosEntity[]
}

export function ImageCarousel({images}: ImageCarouselProps) {
	return (
		<Swiper
			modules={[Pagination, Navigation]}
			pagination={{dynamicBullets: true}}
			navigation
		>
			{images.map(image =>
				<SwiperSlide key={image.large}>
					<img src={image.large} alt="" />
				</SwiperSlide>
			)}
		</Swiper>
	)
}
