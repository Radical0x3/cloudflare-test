import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { UiButton } from 'UI/Button';

export const classes = {
	root: HashService.className('app-store-button')
};

export const Root = styled(UiButton, { label: classes.root })``;
