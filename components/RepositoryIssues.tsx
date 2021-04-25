import styled from '@emotion/styled';
import React, { FC } from 'react';

import {
	Issue,
	useGet20IssuesQuery,
} from '../apollo/generated/graphql-generated';
import { FetchMoreButton, Card } from '../styles';
import { ThemeProps } from '../styles/theme';
import { getColor, getSpace } from '../styles/utils/getters';

const Repositories = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
`;

const Title = styled.h1``;

const RepositoryName = styled.span`
	color: ${(props: ThemeProps) => getColor('primary', 6, props)};
	background: ${(props: ThemeProps) => getColor('secondary', 1, props)};
	padding: ${(props: ThemeProps) => getSpace(2, props)};
`;

const Description = styled.p``;

const IssueStatus = styled.p``;

type RepositoryIssuesProps = {
	name: string;
	owner: string;
	searchTerm: string;
};

const RepositoryIssues: FC<RepositoryIssuesProps> = ({
	owner,
	name,
	searchTerm,
}: RepositoryIssuesProps) => {
	const { data, loading, error, fetchMore } = useGet20IssuesQuery({
		variables: {
			name,
			owner,
			cursor: null,
		},
	});

	if (loading) {
		return <h2>Loading...</h2>;
	}

	if (error) {
		console.error(error);
		return null;
	}

	//TODO fix casting, better use guards
	const issues = data?.repository?.issues.nodes as Issue[];
	function escapeRegExp(string: string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
	}
	const filteredIssues = issues?.filter((issue) =>
		issue.title.match(new RegExp(escapeRegExp(searchTerm), 'igm'))
	);

	return (
		<Repositories>
			<Title>
				<RepositoryName>
					{owner}/{name}
				</RepositoryName>{' '}
				repository issues
			</Title>
			<Description>{data?.repository?.description}</Description>
			{filteredIssues?.map((issue) => (
				<Card key={issue.number}>
					<h3>{issue.title}</h3>
					<p>{issue.body}</p>
					<IssueStatus>
						Issue is {issue.state.toLowerCase()}{' '}
						{issue.state === 'CLOSED' ? '❌' : '🙌 🙏'}
					</IssueStatus>
				</Card>
			))}
			<FetchMoreButton
				onClick={() =>
					fetchMore({
						variables: { cursor: data?.repository?.issues.pageInfo.endCursor },
					})
				}
			>
				Load more...
			</FetchMoreButton>
		</Repositories>
	);
};

export default RepositoryIssues;
