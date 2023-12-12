import { format, isBefore, isAfter, parse, isToday, isThisWeek, isThisYear } from 'date-fns';
import { formatInTimeZone, utcToZonedTime, format as formatTz } from 'date-fns-tz';
import { ru } from 'date-fns/locale';
import {
	SERVER_DATE_TIME,
	CLIENT_DATE,
	CLIENT_TIME,
	CLIENT_WEEK,
	CLIENT_SHORT_DATE,
	CLIENT_DATE_TIME,
	SERVER_TIMEZONE
} from '../constants';

export const getTimeZone = (): string => {
	return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export const formatDateToClient = (
	date: Date | string,
	formatFrom: string = SERVER_DATE_TIME,
	formatTo: string = CLIENT_DATE
): string => {
	return format(typeof date === 'string' ? parse(date, formatFrom, new Date()) : date, formatTo, { locale: ru });
};

export const formatDateToServer = (
	date: Date | string,
	formatFrom: string = CLIENT_DATE,
	formatTo: string = SERVER_DATE_TIME
): string => {
	return format(typeof date === 'string' ? parse(date, formatFrom, new Date()) : date, formatTo, { locale: ru });
};

export const formatDateToClientTz = (date: Date | string, formatTo: string = CLIENT_DATE_TIME): string => {
	const utcDate = utcToZonedTime(date, getTimeZone());
	return formatTz(utcDate, formatTo, { locale: ru });
};

export const formatDateToServerTz = (date: Date | string, formatTo: string = SERVER_DATE_TIME): string => {
	return formatInTimeZone(date, SERVER_TIMEZONE, formatTo, { locale: ru });
};

export const isBeforeDate = (date1: Date, date2: Date): boolean => {
	return isBefore(
		parse(format(date1, CLIENT_DATE, { locale: ru }), CLIENT_DATE, new Date()),
		parse(format(date2, CLIENT_DATE, { locale: ru }), CLIENT_DATE, new Date())
	);
};

export const isAfterDate = (date1: Date, date2: Date): boolean => {
	return isAfter(
		parse(format(date1, CLIENT_DATE, { locale: ru }), CLIENT_DATE, new Date()),
		parse(format(date2, CLIENT_DATE, { locale: ru }), CLIENT_DATE, new Date())
	);
};

export const formatLastMessageDate = (date: Date | string): string => {
	const dateTz = utcToZonedTime(date, getTimeZone());

	if (isToday(dateTz)) {
		return format(dateTz, CLIENT_TIME, { locale: ru });
	}
	if (isThisWeek(dateTz, { weekStartsOn: 1 })) {
		return format(dateTz, CLIENT_WEEK, { locale: ru });
	}
	if (isThisYear(dateTz)) {
		return format(dateTz, CLIENT_SHORT_DATE, { locale: ru });
	}
	return format(dateTz, CLIENT_DATE, { locale: ru });
};
