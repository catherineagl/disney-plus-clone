import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
const PUBLIC = process.env.PUBLIC_URL;

const Home = () => {
	return (
		<Container>
			<ImgSlider />
			<Viewers />
			<Movies />
		</Container>
	);
};

export default Home;

const Container = styled.main`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
	overflow-x: hidden;

	&:before {
		content: '';
		z-index: -1;
		background: url('${PUBLIC}/images/home-background.png') center center
			no-repeat;
		background-size: cover;
		background-attachment: fixed;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
`;
