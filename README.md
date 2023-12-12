# Lynq Landing

## Codebase coverage with tests

| Statements                                                                         | Branches                                                                       | Functions                                                                        | Lines                                                                    |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ![Statements](https://img.shields.io/badge/statements-15.67%25-red.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-27.41%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-10.6%25-red.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-15.41%25-red.svg?style=flat) |

---

## Start on local server

- Install Node.js v20+, PNPM v8+
- Run command `pnpm install` in root directory
- Create `.env.local` file in root directory and set NEXT_PUBLIC_APP_URL (frontend url) and GRAPHQL_API (backend url)
- Run service by command `pnpm run dev -p 3000`

## Building on server

-   Run command `pnpm install` in root directory
-   Create `.env.local` file in root directory and set NEXT_PUBLIC_APP_URL (frontend url) and GRAPHQL_API (backend url)
-   Run command `pnpm run build` for building project
-   Run service by command `pnpm run start -p 3000`

## Commands
- `dev` - run local server with watch and debug mode
- `build` - build for remote server
- `start` - run building server in local
- `pr-ready` - prepare code for pull request
- `tpl` - create a component from a predefined template
- `gen:all` - run all code generation scripts
- `gen:env` - generate environment variable types from values specified in `.env`
- `gen:routes` - generate a directory service `RoutesService`
- `gen:graphql-introspect` - run GraphQL Introspection
- `gen:graphql-codegen` - generates TS types based on the received GraphQL introspection schema
- `jest` - run tests with jest
- `jest:coverage` - run tests with coverage mode
- `ci-check` - check code in pipelines

## Documentation
- [TypeScript](https://www.typescriptlang.org/) - main language
- [React](https://react.dev/) - SPA technology
- [Next.js](https://nextjs.org/) - main framework
- [MUI](https://mui.com/) - UI framework
- [GraphQL](https://back.linq.wezom.agency/graphql-playground-backoffice) - for communications with backend
