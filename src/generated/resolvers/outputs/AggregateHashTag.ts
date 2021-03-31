import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { HashTagAvgAggregate } from "../outputs/HashTagAvgAggregate";
import { HashTagCountAggregate } from "../outputs/HashTagCountAggregate";
import { HashTagMaxAggregate } from "../outputs/HashTagMaxAggregate";
import { HashTagMinAggregate } from "../outputs/HashTagMinAggregate";
import { HashTagSumAggregate } from "../outputs/HashTagSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateHashTag {
  @TypeGraphQL.Field(_type => HashTagCountAggregate, {
    nullable: true
  })
  count!: HashTagCountAggregate | null;

  @TypeGraphQL.Field(_type => HashTagAvgAggregate, {
    nullable: true
  })
  avg!: HashTagAvgAggregate | null;

  @TypeGraphQL.Field(_type => HashTagSumAggregate, {
    nullable: true
  })
  sum!: HashTagSumAggregate | null;

  @TypeGraphQL.Field(_type => HashTagMinAggregate, {
    nullable: true
  })
  min!: HashTagMinAggregate | null;

  @TypeGraphQL.Field(_type => HashTagMaxAggregate, {
    nullable: true
  })
  max!: HashTagMaxAggregate | null;
}
