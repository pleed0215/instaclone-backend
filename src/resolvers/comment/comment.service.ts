import { User } from "@generated/type-graphql";
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
import { prismaClient } from "../../prisma";

export class CommentService {
  async addComment(
    { id: userId }: User,
    { photoId, comment }: AddCommentInput
  ): Promise<AddCommentOutput> {
    try {
      const newComment = await prismaClient.comment.create({
        data: {
          comment,
          photoId,
          userId,
        },
      });
      if (newComment) {
        return {
          ok: true,
        };
      } else {
        throw new Error("Failed to add comment");
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async editComment(
    { id: userId }: User,
    { id, comment }: EditCommentInput
  ): Promise<EditCommentOutput> {
    try {
      const willUpdated = await prismaClient.comment.findUnique({
        where: {
          id,
        },
      });
      if (willUpdated) {
        if (willUpdated.userId !== userId) {
          throw new Error(
            `Cannot Update: Comment id: ${id} is not created by user id: ${userId}`
          );
        }

        const updated = await prismaClient.comment.update({
          where: {
            id,
          },
          data: {
            comment,
          },
        });
        if (updated) {
          return {
            ok: true,
          };
        } else {
          throw new Error("Updating comment was failed.");
        }
      } else {
        throw new Error(
          `Cannot Update: Comment id: ${id} not found. Please check comment id again`
        );
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async deleteComment(
    { id: userId }: User,
    { id }: DeleteCommentInput
  ): Promise<DeleteCommentOutput> {
    try {
      const willDeleted = await prismaClient.comment.findUnique({
        where: {
          id,
        },
      });
      if (willDeleted) {
        if (willDeleted.userId !== userId) {
          throw new Error(
            `Cannot Delete: Comment id: ${id} is not created by user id: ${userId}`
          );
        }

        const deleted = await prismaClient.comment.delete({
          where: {
            id,
          },
        });
        console.log(deleted);
        if (deleted) {
          return {
            ok: true,
          };
        } else {
          throw new Error("Deleting comment was failed.");
        }
      } else {
        throw new Error(
          `Cannot Delete: Comment id: ${id} not found. Please check comment id again`
        );
      }
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }

  async seeComments({
    photoId,
    page,
    pageSize,
  }: SeeCommentsInput): Promise<SeeCommentsOutput> {
    try {
      const totalCount = await prismaClient.comment.count({
        where: {
          photoId,
        },
      });
      const totalPage = Math.ceil(totalCount / pageSize);
      const comments = await prismaClient.comment.findMany({
        where: {
          photoId,
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          user: true,
          photo: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      console.log(comments);
      const currentCount = comments.length;
      const currentPage = page;

      return {
        ok: true,
        totalPage,
        totalCount,
        currentPage,
        currentCount,
        pageSize,
        comments,
      };
    } catch (e) {
      return {
        ok: false,
        error: e.message,
      };
    }
  }
}
