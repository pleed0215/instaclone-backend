import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoomOrderByInput } from "../../../inputs/RoomOrderByInput";
import { RoomWhereInput } from "../../../inputs/RoomWhereInput";
import { RoomWhereUniqueInput } from "../../../inputs/RoomWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRoomArgs {
  @TypeGraphQL.Field(_type => RoomWhereInput, {
    nullable: true
  })
  where?: RoomWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RoomOrderByInput], {
    nullable: true
  })
  orderBy?: RoomOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => RoomWhereUniqueInput, {
    nullable: true
  })
  cursor?: RoomWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
