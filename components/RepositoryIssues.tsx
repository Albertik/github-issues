import styled from '@emotion/styled';
import React, { FC } from 'react';

import {
	Issue,
	useGet20IssuesQuery,
} from '../apollo/generated/graphql-generated';

const Repositories = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
`;

const Title = styled.h1``;

const RepositoryName = styled.span`
	color: #210707;
	background: aquamarine;
	padding: 8px;
`;

export const Card = styled.div`
	background: white;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	padding: 2px 16px;
	margin: 8px 0;
`;

const FetchMoreButton = styled.button`
	padding: 20px;
	background: #a08080;
	border: none;
	font-size: 36px;
	margin: 20px 0;
	cursor: pointer;
`;

const IssueStatus = styled.p``;

type RepositoryIssuesProps = {
	name: string;
	owner: string;
};

const RepositoryIssues: FC<RepositoryIssuesProps> = ({
	owner,
	name,
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

	return (
		<Repositories>
			<Title>
				<RepositoryName>
					{owner}/{name}
				</RepositoryName>{' '}
				repository issues
			</Title>
			{issues?.map((issue) => (
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
