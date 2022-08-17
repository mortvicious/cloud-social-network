import { INewComment } from "../store/NewComment/NewComment.types";

class CommentAPI {
    static async AddComment(data: INewComment, postID: string) {}
    static async DeleteComment() { }
    static async EditComment() { }
    static async LikeComment() { }
    static async UnlikeComment() { }
    static async FlagCommentAsInappropriate() {}
}

export default CommentAPI