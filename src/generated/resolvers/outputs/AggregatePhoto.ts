import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoAvgAggregate } from "../outputs/PhotoAvgAggregate";
import { PhotoCountAggregate } from "../outputs/PhotoCountAggregate";
import { PhotoMaxAggregate } from "../outputs/PhotoMaxAggregate";
import { PhotoMinAggregate } from "../outputs/PhotoMinAggregate";
import { PhotoSumAggregate } from "../outputs/PhotoSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregatePhoto {
  @TypeGraphQL.Field(_type => PhotoCountAggregate, {
    nullable: true
  })
  count!: PhotoCountAggregate | null;

  @TypeGraphQL.Field(_type => PhotoAvgAggregate, {
    nullable: true
  })
  avg!: PhotoAvgAggregate | null;

  @TypeGraphQL.Field(_type => PhotoSumAggregate, {
    nullable: true
  })
  sum!: PhotoSumAggregate | null;

  @TypeGraphQL.Field(_type => PhotoMinAggregate, {
    nullable: true
  })
  min!: PhotoMinAggregate | null;

  @TypeGraphQL.Field(_type => PhotoMaxAggregate, {
    nullable: true
  })
  max!: PhotoMaxAggregate | null;
}
