import { IncomingMessage, ServerResponse } from 'http';
import { Socket } from 'net';
import { GetServerSidePropsContext } from 'next';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';

export const simulateServerSideContext = (): GetServerSidePropsContext => {
	class NextApiReq extends IncomingMessage {
		cookies: NextApiRequestCookies = {};
	}

	const req = new NextApiReq(new Socket());
	return {
		req,
		res: new ServerResponse(req),
		query: {},
		resolvedUrl: '/'
	};
};
