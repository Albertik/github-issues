import styled from '@emotion/styled';
import { up } from 'styled-breakpoints';
import { ThemeProps } from './theme';
import { getColor, getSpace } from './utils/getters';

export const Container = styled.div`
	background: ${(props: ThemeProps) => getColor('primary', 1, props)};
`;

export const Main = styled.main`
	padding: ${(props: ThemeProps) => getSpace(4, props)};
	min-height: 100vh;

	${up('sm')} {
		padding: ${(props: ThemeProps) => getSpace(6, props)};
	}
`;

export const SearchInput = styled.input`
	width: 100%;
	height: ${(props: ThemeProps) => getSpace(6, props)};
	border: none;
	background: ${(props: ThemeProps) => getColor('secondary', 1, props)};
	font-size: ${(props: ThemeProps) => getSpace(4, props)};
	line-height: ${(props: ThemeProps) => getSpace(6, props)};
	padding: ${(props: ThemeProps) => getSpace(4, props)};
	border-radius: ${(props: ThemeProps) => getSpace(1, props)};
	margin-bottom: ${(props: ThemeProps) => getSpace(4, props)};

	${up('sm')} {
		font-size: ${(props: ThemeProps) => getSpace(6, props)};
		line-height: ${(props: ThemeProps) => getSpace(8, props)};
		height: ${(props: ThemeProps) => getSpace(8, props)};
	}

	&:focus {
		border: ${(props: ThemeProps) => getSpace(1, props)} solid
			${(props: ThemeProps) => getColor('primary', 9, props)};
		outline: none;
	}
`;

export const Card = styled.div`
	background: white;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	padding: 2px ${(props: ThemeProps) => getSpace(4, props)};
	margin: ${(props: ThemeProps) => getSpace(2, props)} 0;
	white-space: pre-wrap;
`;

export const FetchMoreButton = styled.button`
	padding: ${(props: ThemeProps) => getSpace(4, props)};
	background: ${(props: ThemeProps) => getColor('secondary', 8, props)};
	border: none;
	font-size: ${(props: ThemeProps) => getSpace(5, props)};
	margin: ${(props: ThemeProps) => getSpace(4, props)} 0;
	cursor: pointer;
	outline: none;
`;
