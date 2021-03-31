import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoomCreateOrConnectWithoutMessagesInput } from "../inputs/RoomCreateOrConnectWithoutMessagesInput";
import { RoomCreateWithoutMessagesInput } from "../inputs/RoomCreateWithoutMessagesInput";
import { RoomUpdateWithoutMessagesInput } from "../inputs/RoomUpdateWithoutMessagesInput";
import { RoomUpsertWithoutMessagesInput } from "../inputs/RoomUpsertWithoutMessagesInput";
import { RoomWhereUniqueInput } from "../inputs/RoomWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RoomUpdateOneRequiredWithoutMessagesInput {
  @TypeGraphQL.Field(_type => RoomCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: RoomCreateWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => RoomCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: RoomCreateOrConnectWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => RoomUpsertWithoutMessagesInput, {
    nullable: true
  })
  upsert?: RoomUpsertWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => RoomWhereUniqueInput, {
    nullable: true
  })
  connect?: RoomWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RoomUpdateWithoutMessagesInput, {
    nullable: true
  })
  update?: RoomUpdateWithoutMessagesInput | undefined;
}
