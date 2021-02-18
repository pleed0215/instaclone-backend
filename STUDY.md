# Instagram cloning backend

## 1. Setting up

### 1. git & npm init

### 2. apollo-server graphql install & setting up

<code>npm install apollo-server graphql</code>

### 3. typescript set up.

[참고한글](https://velog.io/@y1andyu/TypeScript-Express-node.js-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

### 4. prisma install

<code>npm install prisma --save-dev</code>

.. 강의 대부분 익숙한 내용이라 따로 적을 필요 없음..

npx prisma studio

typegraphql과 prisma2 integration

- [TypeGraphQL](https://typegraphql.com/docs/prisma.html)
- [TypeGraphQL-Prisma](https://www.npmjs.com/package/typegraphql-prisma)
- [GraphQL-ISO-Date](https://www.npmjs.com/package/graphql-iso-date)
- [graphql-typescript.config](https://github.com/MichalLytek/type-graphql/blob/master/tsconfig.json)

## Type-Graphql

- 위 링크참고하여 tsconfig.json 설정.
- typegraphql 홈페이지 링크 참고하여 schema.prisma 수정.
- graphql-tools 설치하여 type-graphql 용 schema와 prisma에서 제공해주는 schema를 병합.
