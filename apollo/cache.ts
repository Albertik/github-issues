import { InMemoryCache, TypePolicies } from '@apollo/client';
import graphqlGenerated, { Issue } from './generated/graphql-generated';
import { mergeIssues } from './utils';

const { possibleTypes } = graphqlGenerated;

export const cache = new InMemoryCache({
	possibleTypes,
	typePolicies: {
		Repository: {
			fields: {
				issues: {
					keyArgs: false,
					merge: mergeIssues,
				},
			},
		},
	},
});

export const addTypePolicies = (typePolicies: TypePolicies): void => {
	cache.policies.addTypePolicies(typePolicies);
};
