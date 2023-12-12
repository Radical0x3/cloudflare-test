import { endOfDay, startOfDay, subDays } from 'date-fns';
import { formatDateToServer, formatDateToServerTz } from 'Services/Util/methods';
import { CLIENT_DATE, SERVER_DATE } from 'Services/Util/constants';

export const getRangeStrTz = (startDate: Date | undefined, endDate: Date | undefined): string => {
	if (startDate && endDate) {
		return `${formatDateToServerTz(startOfDay(startDate))} - ${formatDateToServerTz(endOfDay(endDate))}`;
	} else {
		return '';
	}
};

export const getRangeStr = (
	startDate: Date | undefined,
	endDate: Date | undefined,
	formatFrom: string = CLIENT_DATE,
	formatTo: string = SERVER_DATE
): string => {
	if (startDate && endDate) {
		return `${formatDateToServer(startDate, formatFrom, formatTo)} - ${formatDateToServer(
			endDate,
			formatFrom,
			formatTo
		)}`;
	} else {
		return '';
	}
};

export const getInitRange = (val: string): { start: Date; end: Date } => {
	const [start, end] = val.replaceAll(' UTC', '').split(' - ');

	// для Safari
	const startDate = start.replace(' ', 'T');
	const endDate = end.replace(' ', 'T');

	return {
		start: new Date(startDate),
		end: subDays(new Date(endDate), 1)
	};
};
