import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { Like } from "../models/Like";
import { Message } from "../models/Message";
import { Photo } from "../models/Photo";
import { Room } from "../models/Room";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lastName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | null;

  /** @onDelete(SET_NULL) */
  followers?: User[];

  /** @onDelete(SET_NULL) */
  following?: User[];

  /** @onDelete(CASCADE) */
  photos?: Photo[];

  /** @onDelete(CASCADE) */
  likes?: Like[];

  /** @onDelete(CASCADE) */
  comments?: Comment[];

  /** @onDelete(SET_NULL) */
  rooms?: Room[];

  /** @onDelete(CASCADE) */
  messages?: Message[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
