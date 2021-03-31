import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoomAvgAggregate } from "../outputs/RoomAvgAggregate";
import { RoomCountAggregate } from "../outputs/RoomCountAggregate";
import { RoomMaxAggregate } from "../outputs/RoomMaxAggregate";
import { RoomMinAggregate } from "../outputs/RoomMinAggregate";
import { RoomSumAggregate } from "../outputs/RoomSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateRoom {
  @TypeGraphQL.Field(_type => RoomCountAggregate, {
    nullable: true
  })
  count!: RoomCountAggregate | null;

  @TypeGraphQL.Field(_type => RoomAvgAggregate, {
    nullable: true
  })
  avg!: RoomAvgAggregate | null;

  @TypeGraphQL.Field(_type => RoomSumAggregate, {
    nullable: true
  })
  sum!: RoomSumAggregate | null;

  @TypeGraphQL.Field(_type => RoomMinAggregate, {
    nullable: true
  })
  min!: RoomMinAggregate | null;

  @TypeGraphQL.Field(_type => RoomMaxAggregate, {
    nullable: true
  })
  max!: RoomMaxAggregate | null;
}
