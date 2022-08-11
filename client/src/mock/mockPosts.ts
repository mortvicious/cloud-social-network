import { IPostModel } from "../models/Post/Post.types";

export const mockPosts: IPostModel[] = [
	//mock, will be deleted after server setup
	{
		author: {
			username: 'Antonio Margaretti',
			id: '123',
			avatar: '',
			link: 'fgfg',
		},
		content: 'I am Antonio Margaretti!',
		likes: [],
		comments: [],
		shares: [],
		date: '1 hour ago',
		id: '234',
		link: 'post234',
	},
	{
		author: {
			username: 'Archibaldo Buribaldo',
			id: '54245',
			avatar: '',
			link: 'fgfgdfgdfg',
		},
		content: 'Yo guyz',
		likes: [],
		comments: [],
		shares: [],
		date: '1 hour ago',
		id: '15345',
		link: 'post234sdfg',
	},
]