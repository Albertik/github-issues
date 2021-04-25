import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo/client';

import '../styles/globals.css';
import { ThemeProvider } from '@emotion/react';

const theme = {
	breakpoints: {
		sm: '576px',
		md: '768px',
		lg: '992px',
		xl: '1200px',
	},
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</ThemeProvider>
	);
}

export default MyApp;
