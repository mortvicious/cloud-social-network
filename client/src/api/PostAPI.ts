import axios from "axios";
import { INewPost } from "../store/NewPost/NewPost.types";

enum Routes {
    ADD = '/api/post/add',
    REMOVE = '/api/post/remove',
    EDIT = '',
    LIKE = '',
    COMMENT = '',
    SHARE = '',
    FLAG_AS_INAPPROPRIATE = '',
    FETCH_POST_USER_DATA = ''
}

export class PostAPI {
    static async add(data: INewPost) {
        try {
            const res = await axios.post(Routes.ADD, {
                            data
            })
            return res
        } catch (e: any) {
            throw new Error(e)
        }
     }
    static async remove() { }
    static async edit() { }
    static async like() { }
    static async comment() { }
    static async share() { }
    static async flagAsInappropriate() { }
}