import styled from '@emotion/styled';
import Link from 'next/link';
import React, { FC } from 'react';

import {
	RepositoryFragment,
	SearchResultItemEdge,
	useGetOrganizationRepositoriesQuery,
} from '../apollo/generated/graphql-generated';
import { Card } from './RepositoryIssues';

const Repositories = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
`;

type OrganizationRepositoriesProps = {
	queryString: string;
};

const OrganizationRepositories: FC<OrganizationRepositoriesProps> = ({
	queryString,
}: OrganizationRepositoriesProps) => {
	const { data, loading, error } = useGetOrganizationRepositoriesQuery({
		variables: {
			queryString,
		},
	});

	if (loading) {
		return <h2>Loading...</h2>;
	}

	if (error) {
		console.error(error);
		return null;
	}

	type RepositoryEdge = SearchResultItemEdge & { node: RepositoryFragment };

	//TODO fix casting, better use guards
	const repositories = data?.search.edges as RepositoryEdge[];

	return (
		<Repositories>
			{repositories.map((repository) => (
				<Link
					key={repository.node.id}
					href={`/issues?owner=${repository.node.owner.login}&name=${repository.node.name}`}
				>
					<a>
						<Card>
							<h3>{repository.node.name}</h3>
							<p>{repository.node.description}</p>
						</Card>
					</a>
				</Link>
			))}
		</Repositories>
	);
};

export default OrganizationRepositories;
