import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
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
  deleteComment(
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
}
