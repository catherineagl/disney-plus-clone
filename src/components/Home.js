import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
/* import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending'; */

import db from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import Movies from './Movies';

const PUBLIC = process.env.PUBLIC_URL;

const Home = () => {
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);
	let recommends = [];
	let newDisneys = [];
	let originals = [];
	let trending = [];

	/* 	useEffect(() => {
		db.collection('movies').onSnapshot((snapshot) => {
			snapshot.docs.map((doc) => {
				switch (doc.data().type) {
					case 'recommend':
						recommends = [...recommends, { id: doc.id, ...doc.data() }];
						break;

					case 'new':
						newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
						break;

					case 'original':
						originals = [...originals, { id: doc.id, ...doc.data() }];
						break;

					case 'trending':
						trending = [...trending, { id: doc.id, ...doc.data() }];
						break;

					default:
						return doc;
				}
			});

			dispatch(
				setMovies({
					recommend: recommends,
					newDisney: newDisneys,
					original: originals,
					trending: trending,
				})
			);
		});
	}, [userName]); */

	useEffect(() => {
		db.collection('movies').onSnapshot((snapshot) => {
			let tempMovies = snapshot.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			});
			dispatch(setMovies(tempMovies));
		});
	}, []);

	return (
		<Container>
			<ImgSlider />
			<Viewers />
			<Movies />
			{/* 			<Recommends />
			<NewDisney />
			<Originals />
			<Trending /> */}
		</Container>
	);
};

export default Home;

const Container = styled.main`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
	overflow: hidden;
	padding-bottom: 2rem;

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
