import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { cache } from './cache';

export interface Context {
	cache: InMemoryCache;
	client: ApolloClient<InMemoryCache>;
}

const uri = 'https://api.github.com/graphql';
const link = new HttpLink({
	uri,
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`,
	},
});

const client = new ApolloClient({
	link,
	cache,
	defaultOptions: {
		query: {
			errorPolicy: 'all',
		},
		watchQuery: {
			errorPolicy: 'all',
		},
	},
});

export default client;
