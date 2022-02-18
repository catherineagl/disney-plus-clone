import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';
const PUBLIC = process.env.PUBLIC_URL;

const ImgSlider = () => {
	let settings = {
		dots: true,
		infinity: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<Carousel {...settings}>
			<Wrap>
				<img src={`${PUBLIC}/images/slider-badag.jpg`} alt="" />
			</Wrap>
			<Wrap>
				<img src={`${PUBLIC}/images/slider-badging.jpg`} alt="" />
			</Wrap>
			<Wrap>
				<img src={`${PUBLIC}/images/slider-scale.jpg`} alt="" />
			</Wrap>
			<Wrap>
				<img src={`${PUBLIC}/images/slider-scales.jpg`} alt="" />
			</Wrap>
		</Carousel>
	);
};

export default ImgSlider;

const Carousel = styled(Slider)`
	margin-top: 20px;
	ul li button {
		&::before {
			font-size: 10px;
			color: rgb(150, 158, 171);
		}
	}
	li.slick-active button::before {
		color: white;
	}
	.slick-list {
		overflow: visible;
	}

	.slick-arrow {
		z-index: 1;
	}
`;
const Wrap = styled.div`
	cursor: pointer;
	img {
		border: 4px solid transparent;
		border-radius: 4px;
		width: 100%;
		height: 100%;
		box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
			rgb(0 0 0 / 73%) 0px 16px 10px -10px;
		transition-duration: 0.3s;
		&:hover {
			border: 4px solid rgba(249, 249, 249, 0.8);
		}
	}
`;
