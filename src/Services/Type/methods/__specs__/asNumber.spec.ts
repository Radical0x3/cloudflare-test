import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { asNumber } from '../asNumber';

describe('Метод должен корректно приводит значение к числу', () => {
	describe('Если значение - это число, и оно конечное', () => {
		jestFunctionSignatureTest(asNumber, [
			{ parameters: [0], expected: 0 },
			{ parameters: [999], expected: 999 },
			{ parameters: [3.14], expected: 3.14 },
			{ parameters: [0.01], expected: 0.01 },
			{ parameters: [4.545454433443224e23], expected: 4.545454433443224e23 },
			// eslint-disable-next-line no-new-wrappers
			{ parameters: [new Number(564)], expected: 564 }
		]);
	});
	describe('Если значение - это число, записанное строкой', () => {
		jestFunctionSignatureTest(asNumber, [
			{ parameters: ['0'], expected: 0 },
			{ parameters: ['999'], expected: 999 },
			{ parameters: ['3.14'], expected: 3.14 },
			{ parameters: ['-3.14'], expected: -3.14 },
			{ parameters: ['0.01'], expected: 0.01 },
			{ parameters: [' 7 '], expected: 7 },
			{ parameters: [' -7 '], expected: -7 },
			{ parameters: ['00000'], expected: 0 },
			{ parameters: ['00010'], expected: 10 },
			{ parameters: ['4.545454433443224e+23'], expected: 4.545454433443224e23 }
		]);
	});
});

describe('Метод должен возвращать значение в указанных диапазонах', () => {
	describe('Минимальный лимит если значения меньше `min` параметра', () => {
		jestFunctionSignatureTest(asNumber, [
			{ parameters: ['0', 10], expected: 10 },
			{ parameters: ['-7', -4], expected: -4 },
			{ parameters: ['999', 1500], expected: 1500 },
			{ parameters: ['3.14', 5.75], expected: 5.75 }
		]);
	});
	describe('Максимальный лимит если значение больше `max` параметра', () => {
		jestFunctionSignatureTest(asNumber, [
			{ parameters: ['10', 0, 9], expected: 9 },
			{ parameters: ['999', 0, 777], expected: 777 },
			{ parameters: ['3.14', 0, 3.1], expected: 3.1 }
		]);
	});
	describe('Само значение если оно меньше `max` и больше `min`', () => {
		jestFunctionSignatureTest(asNumber, [
			{ parameters: ['-5', -10, -1], expected: -5 },
			{ parameters: ['555', 0, 777], expected: 555 },
			{ parameters: ['2.01', 0, 3.1], expected: 2.01 }
		]);
	});
});

describe('Метод должен возвращать `null`', () => {
	class Demo extends Object {}

	Demo.prototype.valueOf = (): number => 777;
	describe('Если значение не числовое', () => {
		jestFunctionSignatureTest(asNumber, [
			{ parameters: ['A0'], expected: null },
			{ parameters: ['Lorem'], expected: null },
			{ parameters: [true], expected: null },
			{ parameters: [false], expected: null },
			{ parameters: [null], expected: null },
			{ parameters: ['2021-10-10'], expected: null },
			{ parameters: [undefined], expected: null },
			{ parameters: [/4/], expected: null },
			{ parameters: [new Date()], expected: null },
			{ parameters: [[]], expected: null },
			{ parameters: [[3333]], expected: null },
			{ parameters: [['de']], expected: null },
			{ parameters: [{}], expected: null },
			{ parameters: [new Map()], expected: null },
			{ parameters: [new Set()], expected: null },
			{ parameters: [new Demo()], expected: null }
		]);
	});
	describe('Если значение числовое, но это `NaN`, `Infinity` или `-Infinity`', () => {
		jestFunctionSignatureTest(asNumber, [
			{ parameters: [NaN], expected: null },
			{ parameters: ['NaN'], expected: null },
			{ parameters: [Infinity], expected: null },
			{ parameters: ['Infinity'], expected: null },
			{ parameters: [-Infinity], expected: null },
			{ parameters: ['-Infinity'], expected: null }
		]);
	});
});
