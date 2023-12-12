import React, { createContext, ReactElement, ReactNode, useContext } from 'react';
import { ServerData } from '../types';

const Context = createContext<ServerData>({
	GRAPHQL_API: ''
});

export const useServerSideData = (): ServerData => useContext(Context);

export const ServerSideDataProvider: React.FC<{ data: ServerData; children?: ReactNode }> = ({
	children,
	data
}): ReactElement => {
	return <Context.Provider value={data}>{children}</Context.Provider>;
};
