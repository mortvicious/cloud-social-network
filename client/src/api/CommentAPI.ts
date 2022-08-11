import { INewComment } from "../store/NewComment/NewComment.types";

class CommentAPI {
    static async addComment(data: INewComment) {}
    static async deleteComment() { }
    static async editComment() { }
    static async likeComment() { }
    static async unlikeComment() { }
    static async flagCommentAsInappropriate() {}
}

export default CommentAPI