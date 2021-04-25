import { Global, css } from '@emotion/react';
import React, { FC } from 'react';

const GlobalStyle: FC = () => {
	return (
		<Global
			styles={css`
				@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

				html,
				body {
					padding: 0;
					margin: 0;
					font-family: Poppins, sans-serif;
				}

				a {
					color: inherit;
					text-decoration: none;
				}

				* {
					box-sizing: border-box;
				}
			`}
		/>
	);
};

export default GlobalStyle;
