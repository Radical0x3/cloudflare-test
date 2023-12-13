export const IN_DEVELOPMENT_MODE = process.env.NODE_ENV === 'development';
export const IN_PRODUCTION_MODE = process.env.NODE_ENV === 'production';

export const GRAPHQL_API = process.env.GRAPHQL_API || '';

export const IS_SSR = typeof window === 'undefined';
export const IS_CSR = typeof window !== 'undefined';
