import React from 'react';
import styled from 'styled-components';
const PUBLIC = process.env.PUBLIC_URL;

const Viewers = () => {
	return (
		<Container>
			<Wrap>
				<img src={`${PUBLIC}/images/viewers-disney.png`} alt="viewer" />
				<video autoPlay={true} loop muted>
					<source
						src={`${PUBLIC}/videos/1564674844-disney.mp4`}
						type="video/mp4"
					/>
				</video>
			</Wrap>

			<Wrap>
				<img src={`${PUBLIC}/images/viewers-pixar.png`} alt="viewer" />
				<video autoPlay={true} loop muted>
					<source
						src={`${PUBLIC}/videos/1564676714-pixar.mp4`}
						type="video/mp4"
					/>
				</video>
			</Wrap>
			<Wrap>
				<img src={`${PUBLIC}/images/viewers-marvel.png`} alt="viewer" />
				<video autoPlay={true} loop muted>
					<source
						src={`${PUBLIC}/videos/1564676115-marvel.mp4`}
						type="video/mp4"
					/>
				</video>
			</Wrap>
			<Wrap>
				<img src={`${PUBLIC}/images/viewers-starwars.png`} alt="viewer" />
				<video autoPlay={true} loop muted>
					<source
						src={`${PUBLIC}/videos/1608229455-star-wars.mp4`}
						type="video/mp4"
					/>
				</video>
			</Wrap>
			<Wrap>
				<img src={`${PUBLIC}/images/viewers-national.png`} alt="viewer" />
				<video autoPlay={true} loop muted>
					<source
						src={`${PUBLIC}/videos/1564676296-national-geographic.mp4`}
						type="video/mp4"
					/>
				</video>
			</Wrap>
		</Container>
	);
};

export default Viewers;

const Container = styled.div`
	margin-top: 30px;
	display: grid;
	padding: 30px 0 26px;
	//grid-template-columns: repeat(5, minmax(0, 1fr));
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	grid-gap: 25px;
`;

const Wrap = styled.div`
	cursor: pointer;
	border-radius: 10px;
	border: 3px solid rgba(249, 249, 249, 0.1);
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	position: relative;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	video {
		width: 100%;
		height: 100%;
		position: absolute;
		object-fit: cover;
		transition: opacity 0.25s;
		top: 0;
		left: 0;
		opacity: 0;
		z-index: 0;
	}
	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);

		video {
			opacity: 1;
		}
	}
`;
