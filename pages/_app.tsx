import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo/client';

import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import GlobalStyle from '../styles/globalStyles';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={theme}>
			<ApolloProvider client={client}>
				<div>
					<GlobalStyle />
					<Component {...pageProps} />
				</div>
			</ApolloProvider>
		</ThemeProvider>
	);
};

export default MyApp;
