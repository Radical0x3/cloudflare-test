import { NextPage } from 'next';

// Закладка для возможных расширений интерфейса страницы
export type AppPage<P, IP = P> = NextPage<P, IP>;
