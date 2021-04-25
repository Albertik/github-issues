import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FC, useState } from 'react';

import ClientOnly from '../components/ClientOnly';
import RepositoryIssues from '../components/RepositoryIssues';
import { Container, Main, SearchInput } from '../styles';

const Issues: FC = () => {
	const router = useRouter();
	const { owner, name } = router.query as { owner: string; name: string };
	const [searchTerm, setSearchTerm] = useState<string>('');

	const onQueryStringChange = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.currentTarget.value);
		setSearchTerm(event.currentTarget.value);
	};

	return (
		<Container>
			<Head>
				<title>Find an Issue</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Main>
				<SearchInput
					placeholder="Find issue by title"
					type="text"
					onChange={onQueryStringChange}
				/>

				<ClientOnly>
					<RepositoryIssues searchTerm={searchTerm} owner={owner} name={name} />
				</ClientOnly>
			</Main>
		</Container>
	);
};

export default Issues;
