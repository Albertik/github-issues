import defaultTheme, {
	ColorType,
	ColorIndex,
	ThemeProps,
	SpaceIndex,
} from '../theme';

// utility function to fallback to `defaultTheme` when necessary
function getTheme(props: ThemeProps) {
	return props.theme && props.theme.colors ? props.theme : defaultTheme;
}

// getColor("primary", 9, { theme }) === "hsl(205, 100%, 21%)"
export const getColor: (
	type: ColorType,
	index: ColorIndex,
	props: ThemeProps
) => string = (type: ColorType, index: ColorIndex, props: ThemeProps) => {
	return getTheme(props).colors[type][index];
};

// getSpace(2, { theme }) === "12px"
export const getSpace: (index: SpaceIndex, props: ThemeProps) => string = (
	index: SpaceIndex,
	props: ThemeProps
) => {
	return getTheme(props).space[index] + 'px';
};
