import Head from 'next/head';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import Link from 'next/link';

const Container = styled.div`
	min-height: 100vh;
	padding: 0 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Main = styled.main`
	padding: 5rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Title = styled.h1`
	margin: 0;
	line-height: 1.15;
	font-size: 4rem;
`;
const SearchOrganizationLink = styled.a`
	padding: 20px;
	font-size: 20px;
	cursor: pointer;
`;

const Home: FC = () => {
	return (
		<Container>
			<Head>
				<title>APC assignment</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Main>
				<Title>APC assignement 👋</Title>
				<Link href="/searchOrganizationRepositories">
					<SearchOrganizationLink>
						Search organization&apos;s repositories 🕵️‍♂️
					</SearchOrganizationLink>
				</Link>
			</Main>
		</Container>
	);
};

export default Home;
