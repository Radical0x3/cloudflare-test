import type { GetServerSidePropsContext } from 'next';

export type NextReqResContext = { req: GetServerSidePropsContext['req']; res: GetServerSidePropsContext['res'] };
