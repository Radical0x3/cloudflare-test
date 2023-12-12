export const IN_DEVELOPMENT_MODE = process.env.NODE_ENV === 'development';
export const IN_PRODUCTION_MODE = process.env.NODE_ENV === 'production';
export const IN_TEST_MODE = process.env.NODE_ENV === 'test';

export const IS_HTTPS = process.env.NEXT_PUBLIC_APP_HTTPS === '1';

export const URL = process.env.NEXT_PUBLIC_APP_URL || '';
export const GRAPHQL_API = process.env.GRAPHQL_API || '';
export const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
export const WEBSOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL || '';

export const IS_SSR = typeof window === 'undefined';
export const IS_CSR = typeof window !== 'undefined';
