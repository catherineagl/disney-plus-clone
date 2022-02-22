import React from 'react';
import styled from 'styled-components';
const PUBLIC = process.env.PUBLIC_URL;

const Header = () => {
	return (
		<Nav>
			<Logo src={`${PUBLIC}/images/logo.svg`} alt="logo" />
			<NavMenu>
				<a href="#">
					<img src={`${PUBLIC}/images/home-icon.svg`} alt="icon" />
					<span>HOME</span>
				</a>

				<a href="#">
					<img src={`${PUBLIC}/images/search-icon.svg`} alt="icon" />
					<span>SEARCH</span>
				</a>

				<a href="#">
					<img src={`${PUBLIC}/images/watchlist-icon.svg`} alt="icon" />
					<span>WATCHLIST</span>
				</a>
				<a href="#">
					<img src={`${PUBLIC}/images/original-icon.svg`} alt="icon" />
					<span>ORGINALS</span>
				</a>

				<a href="#">
					<img src={`${PUBLIC}/images/movie-icon.svg`} alt="icon" />
					<span>MOVIES </span>
				</a>
				<a href="#">
					<img src={`${PUBLIC}/images/series-icon.svg`} alt="icon" />
					<span>SERIES</span>
				</a>
			</NavMenu>

			<UserImg src={`${PUBLIC}/images/photo6.png`} alt="user" />
		</Nav>
	);
};

export default Header;

const Nav = styled.nav`
	height: 70px;
	background: #090b13;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 36px;
	overflow-x: hidden;

	@media screen and (max-width: 480px) {
		padding: 0 16px;
	}
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	display: flex;

	a {
		text-decoration: none;
		color: #fff;
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;
		img {
			height: 20px;
		}

		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			position: relative;

			&::after {
				content: '';
				height: 2px;
				background: white;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform-origin: left center;
				transition: all 0.25s cubic-bezier(0.25, 0.43, 0.45, 0.94) 0s;
				transform: scaleX(0);
			}
		}

		&:hover {
			span:after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}

	@media screen and (max-width: 480px) {
		display: none;
	}
`;

const UserImg = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	cursor: pointer;
`;
