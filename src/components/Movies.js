import React from 'react';
import styled from 'styled-components';
import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Movies = () => {
	const movies = useSelector(selectMovies);
	const recommend = movies.filter((movie) => movie.type === 'recommend');
	const newDisney = movies.filter((movie) => movie.type === 'new');
	const originals = movies.filter((movie) => movie.type === 'original');
	const trending = movies.filter((movie) => movie.type === 'trending');

	return (
		<Container>
			<h4>Recomended for You</h4>
			<Content>
				{recommend &&
					recommend.map((movie) => (
						<Wrap key={movie.id}>
							<Link to={`/detail/` + movie.id}>
								<img src={movie.cardImg} alt={movie.title} />
							</Link>
						</Wrap>
					))}
			</Content>

			<h4>New to Disney+</h4>
			<Content>
				{newDisney &&
					newDisney.map((movie) => (
						<Wrap key={movie.id}>
							<Link to={`/detail/` + movie.id}>
								<img src={movie.cardImg} alt={movie.title} />
							</Link>
						</Wrap>
					))}
			</Content>

			<h4>Originals</h4>
			<Content>
				{originals &&
					originals.map((movie) => (
						<Wrap key={movie.id}>
							<Link to={`/detail/` + movie.id}>
								<img src={movie.cardImg} alt={movie.title} />
							</Link>
						</Wrap>
					))}
			</Content>

			<h4>Trending</h4>
			<Content>
				{trending &&
					trending.map((movie) => (
						<Wrap key={movie.id}>
							<Link to={`/detail/` + movie.id}>
								<img src={movie.cardImg} alt={movie.title} />
							</Link>
						</Wrap>
					))}
			</Content>
		</Container>
	);
};

export default Movies;

const Container = styled.div`
	padding: 0 26px;
`;
const Content = styled.div`
	display: grid;
	grid-gap: 25px;
	//grid-template-columns: repeat(4, minmax(0, 1fr));
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

const Wrap = styled.div`
	padding-top: 56.25%;
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	border: 3px solid rgba(249, 249, 249, 0.1);
	img {
		inset: 0px;
		display: block;
		height: 100%;
		object-fit: cover;
		opacity: 1;
		position: absolute;
		transition: opacity 500ms ease-in-out 0s;
		width: 100%;
		z-index: 1;
		top: 0;
	}
	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
	}
`;
