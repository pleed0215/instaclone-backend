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

include/select의 차이

- include는 select + relations개념.

# pubsub

일단은 그냥 apollo server의 pubsub을 사용토록 하자.

subscription 셋팅은 apollo server 공식홈에서 참고해서 따라하면 된다.
httpServer를 따로 만들어야 한다. 기존의 express app server를 이용하는 것이 아니라.

## graphql의 subscription은 언제 사용하는가?

- Small, incremental changes to large objects
  : 큰 오브젝트를 계속해서 fetching하는 건 비효율적임. 거기다가 대부분의 필드가 거의 안 바뀌는 경우에 큰 덩어리를 다시 읽는 것은 매우 비효율적임. 대신에 초반에 초기 데이터만 query하고, 각 필드가 업데이트는 될 때에만 서버가 작동하는 것이.. 효율적.
- Low, latency, real-time updates. 짧은 지연시간. 실시간 업데이트. 채팅.


# Prisma2 cascade delete
- 현재 prisma2에서 가장 문제가 되는 부분 중 하나.
- 아직 prisma migrate가 완성된 것이 아니라서 그런 것 같기도 하고..

https://kosaf04pyh.tistory.com/337

이 블로그 참고하였음..
