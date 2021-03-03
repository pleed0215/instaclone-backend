import {
  Arg,
  Authorized,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { AuthUser } from "../../auth/auth.decorator";
import {
  AddCommentInput,
  AddCommentOutput,
  DeleteCommentInput,
  DeleteCommentOutput,
  EditCommentInput,
  EditCommentOutput,
  SeeCommentsInput,
  SeeCommentsOutput,
} from "../../dtos/comment.dto";
import { CommentService } from "./comment.service";
import { User, Comment } from "@generated/type-graphql";

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(private readonly commentService) {
    this.commentService = new CommentService();
  }

  @Mutation((returns) => AddCommentOutput)
  @Authorized()
  addComment(
    @AuthUser() authUser,
    @Arg("input") input: AddCommentInput
  ): Promise<AddCommentOutput> {
    return this.commentService.addComment(authUser, input);
  }

  @Mutation((returns) => DeleteCommentOutput)
  @Authorized()
  removeComment(
    @AuthUser() authUser,
    @Arg("input") input: DeleteCommentInput
  ): Promise<DeleteCommentOutput> {
    return this.commentService.deleteComment(authUser, input);
  }

  @Mutation((returns) => EditCommentOutput)
  @Authorized()
  editComment(
    @AuthUser() authUser,
    @Arg("input") input: EditCommentInput
  ): Promise<EditCommentOutput> {
    return this.commentService.editComment(authUser, input);
  }

  @Query((returns) => SeeCommentsOutput)
  seeComments(
    @Arg("input") input: SeeCommentsInput
  ): Promise<SeeCommentsOutput> {
    return this.commentService.seeComments(input);
  }

  @FieldResolver((returns) => Boolean)
  @Authorized()
  isMine(
    @AuthUser() authUser: User,
    @Root() comment: Comment
  ): Promise<boolean> {
    return this.commentService.isMine(authUser, comment);
  }
}
