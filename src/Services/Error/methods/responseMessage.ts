import { MessageTypeEnum } from 'Services/GQL';
import { UtilService } from 'Services/Util';
import { TypeService } from 'Services/Type';
import { I18nFn } from 'Services/I18n';

export const responseMessage = (result: any, i18n: I18nFn): void => {
	if (TypeService.guards.isResponseType(result)) {
		const message =
			result.message ||
			(result.type === MessageTypeEnum.Success ? i18n('common__success') : i18n('common__error'));
		UtilService.methods.notify(message, result.type === MessageTypeEnum.Success ? 'success' : 'error');
	}
};
