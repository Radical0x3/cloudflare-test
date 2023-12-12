import { FC, useState, useEffect } from 'react';
import { HTMLHead } from 'Components/HTMLHead';
import Context from './context';
import { PageDataContext, Props } from './types';

export const PageDataProvider: FC<Props> = ({ children, ...props }) => {
	const [data, setData] = useState(props);

	useEffect(() => {
		setData(props);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setData, JSON.stringify(props)]);

	const update = (newData: PageDataContext): void => {
		setData((prevData) => ({
			...prevData,
			...newData
		}));
	};

	return (
		<Context.Provider value={{ ...data, update }}>
			<HTMLHead />
			{children}
		</Context.Provider>
	);
};
