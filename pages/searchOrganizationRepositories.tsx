import styled from '@emotion/styled';
import Head from 'next/head';
import React, { ChangeEvent, FC, useState } from 'react';
import { up } from 'styled-breakpoints';

import ClientOnly from '../components/ClientOnly';
import OrganizationRepositories from '../components/OrganizationRepositories';

export const Container = styled.div`
	background: #d5eced;
`;
export const Main = styled.main`
	padding: 20px;
	min-height: 100vh;

	${up('sm')} {
		padding: 50px;
	}
`;

export const SearchInput = styled.input`
	width: 100%;
	height: 76px;
	border: none;
	background: #abb8ed;
	font-size: 36px;
	line-height: 76px;
	padding: 10px;
	border-radius: 4px;
	margin-bottom: 16px;

	&:focus {
		border: 4px solid #061718;
		outline: none;
	}
`;

const SearchOrganizationRepositories: FC = () => {
	const [queryString, setQueryString] = useState<string>('');

	const onQueryStringChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();

		setQueryString(event.currentTarget.value);
	};

	return (
		<Container>
			<Head>
				<title>Search For Organization&apos;s repository</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Main>
				<SearchInput
					placeholder="Enter organization name"
					type="text"
					onChange={onQueryStringChange}
				/>

				<ClientOnly>
					<OrganizationRepositories queryString={queryString} />
				</ClientOnly>
			</Main>
		</Container>
	);
};

export default SearchOrganizationRepositories;
