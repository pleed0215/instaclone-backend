import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRoomArgs } from "./args/AggregateRoomArgs";
import { CreateRoomArgs } from "./args/CreateRoomArgs";
import { DeleteManyRoomArgs } from "./args/DeleteManyRoomArgs";
import { DeleteRoomArgs } from "./args/DeleteRoomArgs";
import { FindFirstRoomArgs } from "./args/FindFirstRoomArgs";
import { FindManyRoomArgs } from "./args/FindManyRoomArgs";
import { FindUniqueRoomArgs } from "./args/FindUniqueRoomArgs";
import { UpdateManyRoomArgs } from "./args/UpdateManyRoomArgs";
import { UpdateRoomArgs } from "./args/UpdateRoomArgs";
import { UpsertRoomArgs } from "./args/UpsertRoomArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Room } from "../../../models/Room";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRoom } from "../../outputs/AggregateRoom";

@TypeGraphQL.Resolver(_of => Room)
export class RoomCrudResolver {
  @TypeGraphQL.Query(_returns => Room, {
    nullable: true
  })
  async room(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueRoomArgs): Promise<Room | null> {
    return getPrismaFromContext(ctx).room.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Room, {
    nullable: true
  })
  async findFirstRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstRoomArgs): Promise<Room | null> {
    return getPrismaFromContext(ctx).room.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Room], {
    nullable: false
  })
  async rooms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRoomArgs): Promise<Room[]> {
    return getPrismaFromContext(ctx).room.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: false
  })
  async createRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRoomArgs): Promise<Room> {
    return getPrismaFromContext(ctx).room.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: true
  })
  async deleteRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRoomArgs): Promise<Room | null> {
    return getPrismaFromContext(ctx).room.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: true
  })
  async updateRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRoomArgs): Promise<Room | null> {
    return getPrismaFromContext(ctx).room.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRoomArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).room.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRoomArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).room.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Room, {
    nullable: false
  })
  async upsertRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRoomArgs): Promise<Room> {
    return getPrismaFromContext(ctx).room.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateRoom, {
    nullable: false
  })
  async aggregateRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRoomArgs): Promise<AggregateRoom> {
    return getPrismaFromContext(ctx).room.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
