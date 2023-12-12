import { arrayFilterNullable } from '@wezom/toolkit-array-cjs';
import { PlainObject } from 'Interfaces/PlainObject';
import { TypeService } from 'Services/Type';

type URLParsedGetParam = undefined | string | string[];
type URLParsedGetParams = PlainObject<URLParsedGetParam>;
type URLSerializedGetParam = { name: string; value: URLParsedGetParam };
type InitValue = string | URLSearchParams | URLParsedGetParams | URLSerializedGetParam[];

export class URLSearchService {
	protected __query: PlainObject<URLParsedGetParam> = {};

	protected __replaceQuery(init: InitValue): void {
		this.__query = {};
		if (typeof init === 'string') {
			init = new URLSearchParams(init);
		}

		const __set = (name: string, value: URLParsedGetParam): void => {
			if (value != null) {
				const prev = this.__query[name];
				if (prev === undefined) {
					this.__query[name] = value;
				} else {
					const v = Array.isArray(value) ? value : [value];
					const p = Array.isArray(prev) ? prev : [prev];
					this.__query[name] = [...p, ...v];
				}
			}
		};

		if (init instanceof URLSearchParams) {
			init.forEach((value, name): void => __set(name, value));
		} else if (Array.isArray(init)) {
			init.forEach(({ name, value }): void => __set(name, value));
		} else {
			this.__query = init;
		}
	}

	constructor(init: InitValue = {}) {
		this.__replaceQuery(init);
	}

	/**
	 * Метод приведения в строку текущего объекта параметров
	 */
	toString(): string {
		const str = [];
		let key: string;
		for (key in this.__query) {
			const value = this.__query[key];
			if (typeof value === 'string') {
				str.push(`${key}=${value}`);
			} else if (Array.isArray(value)) {
				str.push(...value.map((v) => `${key}=${v}`));
			}
		}
		return str.length ? `?${str.join('&')}` : '';
	}

	/**
	 * Метод получения строкового значения.
	 * Если значение по ключу - массив, то используем первый, подходящий, элемент массива.
	 * @param {string} name - Имя получаемого параметра
	 * @param {boolean} [ignoreEmptyString=false] - Флаг игнорирования пустых строк ("")
	 * @see getAllStrings
	 * @example
	 * interface RequestVariables {
	 *     size: string | null;
	 *     name: string | null;
	 *     category: string | null;
	 *     type: string | null;
	 * }
	 *
	 * // Текущие get-параметры: { name: 'Lorem', categories: ['bestsellers', 'top', 'hot'] ]}
	 *
	 * const request = async (query: ParsedUrlQuery): Promise<Items[]> {
	 *     const search = new URLSearchService(query);
	 *     const requestVariables: RequestVariables = {
	 *         size: search.getString('size'), // null
	 *         name: search.getString('name'), // 'Lorem'
	 *         category: search.getString('categories'), // 'bestsellers'
	 *         type: search.getString('type') ?? 'on-storage', // 'on-storage'
	 *     }
	 *     // send request...
	 * }
	 */
	getString(name: string, ignoreEmptyString = false): string | null {
		const value = this.__query[name];
		if (Array.isArray(value)) {
			const result = value.find((item): item is string => {
				return ignoreEmptyString ? TypeService.guards.isNotEmptyString(item) : item !== undefined;
			});
			return typeof result === 'string' ? result : null;
		} else {
			if (ignoreEmptyString) {
				return TypeService.guards.isNotEmptyString(value) ? value : null;
			} else {
				return typeof value === 'string' ? value : null;
			}
		}
	}

	/**
	 * Метод получения массива строк.
	 * Если значение по ключу - строка, то значение будет обёрнуто в массив при возврате из метода
	 * @param {string} name - Имя получаемого параметра
	 * @param {boolean} [ignoreEmptyString=false] - Флаг игнорирования пустых строк ("")
	 * @param {boolean} [ignoreEmptyArray=false] - Флаг игнорирования пустого массива ([])
	 * @see getString
	 * @example
	 * interface RequestVariables {
	 *     ids: string[] | null;
	 *     sizes: string[] | null;
	 *     categories: string[] | null;
	 * }
	 *
	 * // Текущие get-параметры: { sizes: ['l', 'xl'], categories: 'bestsellers' ]}
	 *
	 * const request = async (query: ParsedUrlQuery): Promise<Items[]> {
	 *     const search = new URLSearchService(query);
	 *     const requestVariables: RequestVariables = {
	 *         ids: search.getAllStrings('ids'), // null
	 *         sizes: search.getAllStrings('sizes'), // ['l', 'xl']
	 *         categories: search.getAllStrings('categories') // ['bestsellers']
	 *     }
	 *     // send request...
	 * }
	 */
	getAllStrings(name: string, ignoreEmptyString = false, ignoreEmptyArray = false): string[] | null {
		const value = this.__query[name];
		const values = typeof value === 'string' ? [value] : value;
		if (Array.isArray(values)) {
			const result = ignoreEmptyString ? values.filter(TypeService.guards.isNotEmptyString) : values;
			return ignoreEmptyArray ? (result.length ? result : null) : result;
		} else {
			return null;
		}
	}

	/**
	 * Метод получения числового значения.
	 * Если значение по ключу - массив, то используем первый, не пустой, элемент массива.
	 * @param {string} name - Имя получаемого параметра
	 * @param {number} [min] - Минимальное допустимое значение
	 * @param {number} [max] - Максимальное допустимое значение
	 * @see getAllNumbers
	 * @example
	 * interface RequestVariables {
	 *     id: number | null;
	 *     size: number | null;
	 *     page: number | null;
	 *     perPage: number | null;
	 *     category: number | null;
	 * }
	 *
	 * // Текущие get-параметры: { sizes: ['1', '3'], categories: '65', page: '-44' ]}
	 *
	 * const request = async (query: ParsedUrlQuery): Promise<Items[]> {
	 *     const search = new URLSearchService(query);
	 *     const requestVariables: RequestVariables = {
	 *         id: search.getNumber('id'), // null
	 *         sizes: search.getNumber('sizes'), // 1
	 *         category: search.getNumber('categories') // 65
	 *         page: search.getNumber('page', 1), // 1
	 *         perPage: search.getNumber('per-page', 1) || 10, // 10
	 *     }
	 *     // send request...
	 * }
	 */
	getNumber(name: string, min?: number, max?: number): number | null {
		const value = this.getString(name, true);
		return TypeService.asNumber(value, min, max);
	}

	/**
	 * Метод получения массива чисел.
	 * Если значение по ключу - массив, то используем первый, не пустой, элемент массива.
	 * @param {string} name - Имя получаемого параметра
	 * @param {number} [min] - Минимальные допустимые значения
	 * @param {number} [max] - Максимальные допустимые значения
	 * @param {boolean} [ignoreEmptyArray=false] - Флаг игнорирования пустого массива ([])
	 * @see getNumber
	 * @example
	 * interface RequestVariables {
	 *     ids: number[] | null;
	 *     sizes: number[] | null;
	 *     categories: number[] | null;
	 * }
	 *
	 * // Текущие get-параметры: { sizes: ['1', '3'], categories: '65' ]}
	 *
	 * const request = async (query: ParsedUrlQuery): Promise<Items[]> {
	 *     const search = new URLSearchService(query);
	 *     const requestVariables: RequestVariables = {
	 *         ids: search.getAllNumbers('ids'), // null
	 *         sizes: search.getAllNumbers('sizes'), // [1, 3]
	 *         categories: search.getAllNumbers('categories') // [65]
	 *     }
	 *     // send request...
	 * }
	 */
	getAllNumbers(name: string, min?: number, max?: number, ignoreEmptyArray = false): number[] | null {
		const values = this.getAllStrings(name, true, ignoreEmptyArray);
		const result = Array.isArray(values)
			? arrayFilterNullable(values.map((value) => TypeService.asNumber(value, min, max)))
			: null;
		return ignoreEmptyArray && result ? (result.length === 0 ? null : result) : result;
	}

	/**
	 * Равно ли значение часто используемым значениям get-параметров, которыми обозначают логическое TRUE
	 */
	protected __asBoolValue(value: string): boolean {
		return value === '1' || value.toLowerCase() === 'true' || value.toLowerCase() === 'on';
	}

	/**
	 * Метод получения логического значения.
	 * Если значение по ключу - массив, то используем первый, не пустой, элемент массива.
	 * @param {string} name - Имя получаемого параметра
	 * @see getAllBooleans
	 * @example
	 * interface RequestVariables {
	 *     flag: boolean | null;
	 *     active: boolean | null;
	 *     checked: boolean | null;
	 *     muted: boolean | null;
	 * }
	 *
	 * // Текущие get-параметры: { flags: ['on'], active: 'true', checked: '1' ]}
	 *
	 * const request = async (query: ParsedUrlQuery): Promise<Items[]> {
	 *     const search = new URLSearchService(query);
	 *     const requestVariables: RequestVariables = {
	 *         flags: search.getBoolean('flags'), // true
	 *         active: search.getBoolean('active'), // true
	 *         checked: search.getBoolean('checked') // true
	 *         muted: search.getBoolean('muted') // null
	 *     }
	 *     // send request...
	 * }
	 */
	getBoolean(name: string): boolean | null {
		const value = this.getString(name, true);
		return value ? this.__asBoolValue(value) : null;
	}

	/**
	 * Метод получения массива логических значений.
	 * Если значение по ключу - массив, то используем первый, не пустой, элемент массива.
	 * @param {string} name - Имя получаемого параметра
	 * @param {boolean} [ignoreEmptyArray=false] - Флаг игнорирования пустого массива ([])
	 * @see getBoolean
	 * @example
	 * interface RequestVariables {
	 *     flags: boolean[] | null;
	 *     active: boolean[] | null;
	 *     checked: boolean[] | null;
	 *     muted: boolean[] | null;
	 * }
	 *
	 * // Текущие get-параметры: { flags: ['on'], active: 'true', checked: '1' ]}
	 *
	 * const request = async (query: ParsedUrlQuery): Promise<Items[]> {
	 *     const search = new URLSearchService(query);
	 *     const requestVariables: RequestVariables = {
	 *         flags: search.getAllBooleans('flags'), // [true]
	 *         active: search.getAllBooleans('active'), // [true]
	 *         checked: search.getAllBooleans('checked') // [true]
	 *         muted: search.getAllBooleans('muted') // null
	 *     }
	 *     // send request...
	 * }
	 */
	getAllBooleans(name: string, ignoreEmptyArray = false): boolean[] | null {
		const values = this.getAllStrings(name, true, ignoreEmptyArray);
		const result = Array.isArray(values) ? values.map(this.__asBoolValue) : null;
		return ignoreEmptyArray && result ? (result.length === 0 ? null : result) : result;
	}

	/**
	 * Назначает/перезаписывает значение.
	 * Независимо от передаваемого типа - хранится будет строкой
	 * и его можно будет пере-запросить с другим типом
	 * @param name
	 * @param value
	 * @see setValues
	 * @see appendValues
	 * @example
	 * const search = new URLSearchService({ size: '2' });
	 * search.getNumber('size'); // 2
	 * search.setValue('size', 1);
	 * search.getNumber('size'); // 1
	 * search
	 *  .setValue('name', 'lorem')
	 *  .setValue('age', 20)
	 *  .setValue('checked', true)
	 */
	setValue(name: string, value: string | number | boolean): URLSearchService {
		this.__query[name] = String(value);
		return this;
	}

	/**
	 * Назначает/перезаписывает массив значений.
	 * Независимо от передаваемого типа - хранится будет массивом строк
	 * и его можно будет пере-запросить с другим типом
	 * @param name
	 * @param values
	 * @see setValue
	 * @see appendValues
	 * @example
	 * const search = new URLSearchService({ sizes: ['2', '4'] });
	 * search.getAllNumbers('sizes'); // [2, 4]
	 * search.setValues('size', [7, 9]);
	 * search.getAllNumbers('size'); // [7, 9]
	 * search
	 *  .setValues('names', ['lorem', 'ipsum'])
	 *  .setValues('pages', [20, 88, 106])
	 *  .setValues('flags', [true, false, false])
	 */
	setValues(name: string, values: (string | number | boolean)[]): URLSearchService {
		this.__query[name] = values.map(String);
		return this;
	}

	/**
	 * Добавляет новые значения. Если значений ранее не было - создает пустой массив и наполняет его
	 * @param name
	 * @param values
	 * @see setValue
	 * @see setValues
	 * @example
	 * const search = new URLSearchService({ sizes: ['2', '4'] });
	 * search.getAllNumbers('sizes'); // [2, 4]
	 * search.appendValues('size', [7, 9]);
	 * search.getAllNumbers('size'); // [2, 4, 7, 9]
	 * search
	 *  .appendValues('names', ['lorem', 'ipsum'])
	 *  .appendValues('pages', [20, 88, 106])
	 *  .appendValues('flags', [true, false, false])
	 */
	appendValues(name: string, values: (string | number | boolean)[]): URLSearchService {
		this.__query[name] = [...(this.getAllStrings(name) ?? []), ...values.map(String)];
		return this;
	}

	/**
	 * Удаляет значение GET параметра
	 * @param name
	 * @see filter
	 * @example
	 * const search = new URLSearchService({ sizes: ['2', '4'] });
	 * search.getAllNumbers('sizes'); // [2, 4]
	 * search.remove('size');
	 * search.getAllNumbers('size'); // null
	 *
	 * const search = new URLSearchService( ... );
	 * search
	 *  .remove('__name')
	 *  .remove('page')
	 *  .remove('active')
	 *  .toString();
	 */
	remove(name: string): URLSearchService {
		delete this.__query[name];
		return this;
	}

	/**
	 * Если метод `remove` удаляет точечно один параметр,
	 * то при помощи фильтра можно пройтись по все параметрам и откинуть не желательные.
	 * Или наоборот вы не знаете сколько и каких параметров может быть - поэтому можете оставить только те о которые нужны
	 * @param predicate Функция фильтровки, принимает объект сериализованного get-параметра `{ name, value }`
	 * @see remove
	 * @example
	 * const search = new URLSearchService( ... );
	 *
	 * // Откидываем по специфичным условиям
	 * search.filter((item) => item.value === '1' ? false : true);
	 * // или
	 * search.filter(({ name, value }) => name === 'type' && value === 'sold' ? false : true);
	 *
	 * // Оставляем только нужные
	 * const publicValues = ['name', 'sort', 'page']
	 * search
	 *  .filter((item) => publicValues.includes(item.name));
	 *  .toString();
	 */
	filter(
		predicate: (param: { name: string; value: undefined | string | string[] }, i: number) => boolean
	): URLSearchService {
		this.__replaceQuery(
			Object.entries(this.__query)
				.map(([name, value]): URLSerializedGetParam => ({ name, value }))
				.filter(predicate)
		);
		return this;
	}

	// Вычисляемые значения
	// -----------------------------------------------------------------------------

	/**
	 * Вычисляемое значение сортировки.
	 * Сортировка должна иметь значение `'*-asc' | '*-desc' | null`
	 * @example
	 * const search = new URLSearchService({ sort: 'name' });
	 * search.getString('sort'); // 'name'
	 * search.computedSort; // null
	 *
	 * const search = new URLSearchService({ sort: 'name-asc' });
	 * search.getString('sort'); // 'name-asc'
	 * search.computedSort; // 'name-asc'
	 */
	get computedSort(): string | null {
		const sort = this.getString('sort', true);
		return sort && (sort.endsWith('-asc') || sort.endsWith('-desc')) ? sort : null;
	}

	get computedPage(): number | null {
		return this.getNumber('page', 1);
	}

	get computedPerPage(): number | null {
		return this.getNumber('perPage', 1);
	}
}
