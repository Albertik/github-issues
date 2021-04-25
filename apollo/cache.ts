import { InMemoryCache, TypePolicies } from '@apollo/client';
import graphqlGenerated from './generated/graphql-generated';

const { possibleTypes } = graphqlGenerated;

export const cache = new InMemoryCache({
	possibleTypes,
	typePolicies: {
		Repository: {
			fields: {
				issues: {
					keyArgs: false,
					merge(existing, incoming) {
						if (!incoming) return existing;
						if (!existing) return incoming;

						const { nodes, ...rest } = incoming;
						// We only need to merge the nodes array.
						// The rest of the fields (pagination) should always be overwritten by incoming
						const result = rest;
						result.nodes = [...existing.nodes, ...nodes];
						return result;
					},
				},
			},
		},
	},
});

export const addTypePolicies = (typePolicies: TypePolicies): void => {
	cache.policies.addTypePolicies(typePolicies);
};
