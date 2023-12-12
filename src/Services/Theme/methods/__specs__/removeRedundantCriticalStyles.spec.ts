import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import { removeRedundantCriticalStyles } from '../removeRedundantCriticalStyles';

describe('Должен удалять избыточный CSS код для critical стилей', () => {
	describe('Должен удалить стили печати', () => {
		describe('Одиночные блоки', () => {
			jestFunctionSignatureTest(removeRedundantCriticalStyles, [
				{ parameters: [`@media print{a:active{color:red;}b{color:red}}`], expected: '' },
				{
					parameters: [
						`b{color:red;}@media print{a:active{color:red;}b{color:red}}@media (max-with:950px){a{color:red;}}@media print{a:active{color:red;}b{color:red}}b{color:red}`
					],
					expected: `b{color:red;}@media (max-with:950px){a{color:red;}}b{color:red}`
				}
			]);
		});

		describe('Блоки с дополнительными условиями', () => {
			jestFunctionSignatureTest(removeRedundantCriticalStyles, [
				{
					parameters: [`b{color:red}@media print and orientation(landscape){a{color:red;}}b{color:blue}`],
					expected: 'b{color:red}b{color:blue}'
				},
				{
					parameters: [
						`b{color:red}@media print and (min-height: 800px){a{color:red;}}@media (min-height: 800px){a{color:red;}}b{color:blue}`
					],
					expected: 'b{color:red}@media (min-height: 800px){a{color:red;}}b{color:blue}'
				}
			]);
		});
	});

	describe('Должен удалить `:hover` блоки стилей и селекторы из перечисления', () => {
		jestFunctionSignatureTest(removeRedundantCriticalStyles, [
			{ parameters: [`a:hover{color:red;}b{color:red}`], expected: 'b{color:red}' },
			{ parameters: [`a:hover,b{color:red;}`], expected: 'b{color:red;}' },
			{ parameters: [`b,a:hover{color:red;}`], expected: 'b{color:red;}' },
			{
				parameters: [
					`a:hover{color:red;}b{color:red}xxdd:hover{ddd}b{color:red}xx:hover{ddd}dd{xx}.demo:hover+el{x}b{color:red}.demo:hover el{x}b{color:red}.demo:hover::after{x}`
				],
				expected: 'b{color:red}b{color:red}dd{xx}b{color:red}b{color:red}'
			},
			{
				parameters: ['.demo{color:red}.demo:hover{color:yellow}.last{top:0}b:hover{color:yellow}b{top:0}'],
				expected: '.demo{color:red}.last{top:0}b{top:0}'
			},
			{
				parameters: ['.demo{color:red}.leave-me,.remove-me:hover,.no-remove{color:yellow}.last{top:0}'],
				expected: '.demo{color:red}.leave-me,.no-remove{color:yellow}.last{top:0}'
			},
			{
				parameters: [
					'.demo{color:red}.leave-me,.no-remove,.remove-me:hover{color:yellow}.last{top:0}demo:hover::after,.demo{top:0}'
				],
				expected: '.demo{color:red}.leave-me,.no-remove{color:yellow}.last{top:0}.demo{top:0}'
			},
			{
				parameters: [
					'.x-1aqec19-MuiButtonBase-root-ui-button.ui-button__variant-outlined,.x-1aqec19-MuiButtonBase-root-ui-button.ui-button__variant-text{color:var(--c);background:transparent;}.x-1aqec19-MuiButtonBase-root-ui-button.ui-button__variant-outlined:hover{background:var(--bg);}.x-1aqec19-MuiButtonBase-root-ui-button.ui-button__variant-outlined.ui-button__color-primary,.x-1aqec19-MuiButtonBase-root-ui-button.ui-button__variant-text.ui-button__color-primary{--c:#3F51B5;--bg:rgba(63, 81, 181, 0.08);}'
				],
				expected:
					'.x-1aqec19-MuiButtonBase-root-ui-button.ui-button__variant-outlined,.x-1aqec19-MuiButtonBase-root-ui-button.ui-button__variant-text{color:var(--c);background:transparent;}.x-1aqec19-MuiButtonBase-root-ui-button.ui-button__variant-outlined.ui-button__color-primary,.x-1aqec19-MuiButtonBase-root-ui-button.ui-button__variant-text.ui-button__color-primary{--c:#3F51B5;--bg:rgba(63, 81, 181, 0.08);}'
			}
		]);
	});

	describe('Должен удалить `:hover` блоки стилей и селекторы из перечисления во вложенных медиа запросах', () => {
		jestFunctionSignatureTest(removeRedundantCriticalStyles, [
			{
				parameters: ['@media (min-width: 950px){a:hover{color:red}b{color:red}}'],
				expected: '@media (min-width: 950px){b{color:red}}'
			},
			{
				parameters: [
					'@media (min-width: 950px){a:hover,b{color:red}}@media (max-width: 950px){b,a:hover{color:red}}'
				],
				expected: '@media (min-width: 950px){b{color:red}}@media (max-width: 950px){b{color:red}}'
			},
			{
				parameters: ['b{color:red;}@media (min-width: 950px){a:hover{color:red}b{color:red}}b{color:red;}'],
				expected: 'b{color:red;}@media (min-width: 950px){b{color:red}}b{color:red;}'
			}
		]);
	});

	describe('Должен удалить `:active` блоки стилей и селекторы из перечисления', () => {
		jestFunctionSignatureTest(removeRedundantCriticalStyles, [
			{ parameters: [`a:active{color:red;}b{color:red}`], expected: 'b{color:red}' },
			{ parameters: [`a:active,b{color:red;}`], expected: 'b{color:red;}' },
			{ parameters: [`b,a:active{color:red;}`], expected: 'b{color:red;}' },
			{
				parameters: [
					`a:active{color:red;}b{color:red}xxdd:active{ddd}b{color:red}xx:active{ddd}dd{xx}.demo:active+el{x}b{color:red}.demo:active el{x}b{color:red}.demo:active::after{x}`
				],
				expected: 'b{color:red}b{color:red}dd{xx}b{color:red}b{color:red}'
			},
			{
				parameters: ['.demo{color:red}.demo:active{color:yellow}.last{top:0}b:active{color:yellow}b{top:0}'],
				expected: '.demo{color:red}.last{top:0}b{top:0}'
			},
			{
				parameters: ['.demo{color:red}.leave-me,.remove-me:active,.no-remove{color:yellow}.last{top:0}'],
				expected: '.demo{color:red}.leave-me,.no-remove{color:yellow}.last{top:0}'
			},
			{
				parameters: [
					'.demo{color:red}.leave-me,.no-remove,.remove-me:active{color:yellow}.last{top:0}demo:active::after,.demo{top:0}'
				],
				expected: '.demo{color:red}.leave-me,.no-remove{color:yellow}.last{top:0}.demo{top:0}'
			}
		]);
	});
});
