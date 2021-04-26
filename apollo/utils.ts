// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mergeIssues = <T extends { nodes: any }>(
	existing: T,
	incoming: T
): T => {
	if (!incoming) return existing;
	if (!existing) return incoming;

	const { nodes, ...rest } = incoming;
	// We only need to merge the nodes array.
	// The rest of the fields (pagination) should always be overwritten by incoming
	const result = rest as T;
	result.nodes = [...existing.nodes, ...nodes];
	return result;
};
