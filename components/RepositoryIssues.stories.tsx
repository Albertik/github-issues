import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { MockedProvider } from '@apollo/client/testing';
import RepositoryIssues, { RepositoryIssuesProps } from './RepositoryIssues';
import { Get20IssuesDocument } from '../apollo/generated/graphql-generated';
import { get20IssuesQueryResult } from './__fixtures__/get20IssuesQuery.fixture';

export default {
	title: 'Components/RepositoryIssues',
	component: RepositoryIssues,
	parameters: {
		docs: {
			description: {
				component: 'Used to fetch repository issues',
			},
		},
	},
};

const mocks = [
	{
		request: {
			query: Get20IssuesDocument,
			variables: {
				name: 'react',
				owner: 'facebook',
				cursor: null,
			},
		},
		result: {
			data: get20IssuesQueryResult,
		},
	},
];

export const Default: Story<RepositoryIssuesProps> = (args) => (
	<MockedProvider mocks={mocks}>
		<RepositoryIssues {...args} />
	</MockedProvider>
);

Default.args = {
	name: 'react',
	owner: 'facebook',
	searchTerm: '',
};
