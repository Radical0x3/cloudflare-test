import { DocumentNode, gql as _gql_ } from '@apollo/client';
import { getFragmentDefinitions, getQueryDefinition } from '@apollo/client/utilities';
import { print } from 'graphql';

export const mergeQueries = (query1: DocumentNode, query2: DocumentNode, name = 'MergedQueries'): DocumentNode => {
	const q1 = getQueryDefinition(query1);
	const q2 = getQueryDefinition(query2);

	const Name = q1.name ? q1.name.value : name;
	const _variables = [...(q1.variableDefinitions || []).map(print), ...(q2.variableDefinitions || []).map(print)];
	const variables = _variables.length ? `(\n\t${_variables.join('\n\t')}\n)` : '';
	const selections = [print(q1.selectionSet).slice(1, -1), print(q2.selectionSet).slice(1, -1)];
	const fragments = [...getFragmentDefinitions(query1).map(print), ...getFragmentDefinitions(query2).map(print)];

	return _gql_`
query ${Name} ${variables} {
	${selections.join('\n')}
}

${fragments.join('\n')}
	`;
};
