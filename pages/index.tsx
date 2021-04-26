import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';
import React, { FC } from 'react';

import { ThemeProps } from '../styles/theme';
import { getSpace } from '../styles/utils/getters';

const Container = styled.div`
	min-height: 100vh;
	padding: 0 ${(props: ThemeProps) => getSpace(3, props)};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Main = styled.main`
	padding: ${(props: ThemeProps) => getSpace(2, props)} 0;
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const Title = styled.h1`
	margin: 0;
	line-height: ${(props: ThemeProps) => getSpace(7, props)};
	font-size: ${(props: ThemeProps) => getSpace(7, props)};
`;

const SearchOrganizationLink = styled.a`
	padding: ${(props: ThemeProps) => getSpace(5, props)};
	font-size: ${(props: ThemeProps) => getSpace(5, props)};
	cursor: pointer;
`;

const Home: FC = () => {
	return (
		<Container>
			<Head>
				<title>APC assignment</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Link href="/searchOrganizationRepositories">
				<Main>
					<Title>Hi, APC 👋</Title>
					<SearchOrganizationLink data-testid="linkText">
						Search organization&apos;s repositories 🕵️‍♂️
					</SearchOrganizationLink>
				</Main>
			</Link>
		</Container>
	);
};

export default Home;
