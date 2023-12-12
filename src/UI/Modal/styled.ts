import { styled } from 'Services/Theme';
import { HashService } from 'Services/Hash';
import { Modal } from '@mui/material';

export const classes = {
	root: HashService.className('ui-modal')
};

export const Root = styled(Modal, { label: classes.root })``;
