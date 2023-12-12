import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { DataService } from 'Services/Data';

type Message = string | undefined;

export function useFormErrorMessage(name: string): Message {
	const { formState } = useFormContext();
	const [errorMessage, setErrorMessage] = useState<Message>(undefined);
	useEffect(() => {
		const message = DataService.getIn<Message>(formState.errors, name + '.message', undefined);
		setErrorMessage(message);
	}, [formState, name]);

	return errorMessage;
}
