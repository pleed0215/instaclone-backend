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

## GraphQL upload 관련 이슈

이거 node 버그 때문임.
그래서 file에서 받아온 createReadStream이 작동을 안함.

"resolutions": {
"fs-capacitor":"^6.2.0",
"graphql-upload":"^11.0.0"
}
추가
그리고 npx npm-force-resolutions 실행

갑자기 npx npm-force-resolutions가 안 먹는데..
npm i npm-force-resolutions를 해보자.
npx npm-force-resolutions@0.0.3
현재 버전 버그 있음.
https://github.com/rogeriochaves/npm-force-resolutions/issues/22

ReadStream을 s3 upload 하려면... 방법은 잘 못 찾았는데 패키지는 찾음.
https://www.npmjs.com/package/s3-upload-stream

prisma는 follower/following relation 만들기가 쉽다.
