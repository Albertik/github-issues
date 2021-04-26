import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import App from '../../pages/index';

describe('App', () => {
	afterEach(cleanup);

	it('renders without crashing', () => {
		const { asFragment } = render(<App />);

		expect(
			screen.getByRole('heading', { name: 'Hi, APC 👋' })
		).toBeInTheDocument();

		expect(asFragment()).toMatchSnapshot();
	});

	it('should link to /searchOrganizationRepositories', () => {
		render(<App />);

		expect(screen.getByTestId('linkText').textContent).toBe(
			"Search organization's repositories 🕵️‍♂️"
		);
	});
});
