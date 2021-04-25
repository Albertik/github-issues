import Head from 'next/head';
import React, { ChangeEvent, FC, useState } from 'react';

import ClientOnly from '../components/ClientOnly';
import OrganizationRepositories from '../components/OrganizationRepositories';
import { Container, Main, SearchInput } from '../styles';

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
