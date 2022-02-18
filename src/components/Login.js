import React from 'react';
import styled from 'styled-components';
const PUBLIC = process.env.PUBLIC_URL;
//cta == call to action
const Login = () => {
	return (
		<Container>
			<CTA>
				<CTALogoOne src={`${PUBLIC}/images/cta-logo-one.svg`} />
				<SignUp>GET ALL THERE</SignUp>
				<Description>
					Get Premier Access to Raya and the Last Dragon for an additional fee
					with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
					The Disney Bundle will increase by $1.
				</Description>
				<CTALogoTwo src={`${PUBLIC}/images/cta-logo-two.png`} />
			</CTA>
		</Container>
	);
};

export default Login;

const Container = styled.div`
	position: relative;
	height: calc(100vh - 70px);
	display: flex;
	align-items: flex-start;
	justify-content: center;

	&:before {
		z-index: -1;
		position: absolute;
		content: '';
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0.8;
		background: url('${PUBLIC}/images/login-background.jpg');
		background-position: top;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}
`;

const CTA = styled.div`
	max-width: 650px;
	padding: 80px 40px;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
`;

const CTALogoOne = styled.img`
	width: 100%;
	height: 100%;
`;

const SignUp = styled.a`
	width: 100%;
	background-color: #0063e5;
	font-weight: bold;
	padding: 17px 0px;
	color: #f9f9f9;
	border-radius: 4px;
	text-align: center;
	font-size: 18px;
	cursor: pointer;
	transition: all 0.25s;
	letter-spacing: 1.5px;
	margin-top: 8px;
	margin-bottom: 12px;

	&:hover {
		background-color: #0483ee;
	}
`;

const Description = styled.p`
	font-size: 11px;
	letter-spacing: 1.5px;
	text-align: center;
	line-height: 1.5;
`;

const CTALogoTwo = styled.img`
	width: 90%;
`;
