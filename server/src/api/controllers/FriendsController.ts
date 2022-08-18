import { IGetUserAuthInfoRequest } from 'src/interfaces/IGetUserAuthInfoReq';
import { Response } from 'express'
import { User } from '../../database/models/UserModel'
import {FriendsService} from "../services/FriendsService";

export class FriendsController {
	static async SendFriendRequest(req: IGetUserAuthInfoRequest, res: Response) {
		try {
			const {id} = req.user
			const {candidate} = req.params
			await FriendsService.AddToFriendsRequests(id, candidate)
			return res.status(200).send( {message: 'Friend request sent'} )
		} catch (e) {
			return res.status(400).send({ message: 'Error sending friend request' })
		}
		
	}
	
	static async AcceptFriendRequest(req: IGetUserAuthInfoRequest, res: Response) {
		try {
			const {id} = req.user
			const {candidate} = req.params
			await FriendsService.RemoveFromFriendsRequests(id, candidate)
			await FriendsService.AddToFriendsList(id, candidate)
			return res.status(200).send({ message: 'Friend request accepted'})
		} catch (e) {
			return res.status(400).send({ message: 'Error accepting friend request' })
		}
	}
	
	static async DeclineFriendRequest(req: IGetUserAuthInfoRequest, res: Response) {
		try {
			const {id} = req.user
			const {candidate} = req.params
			await FriendsService.RemoveFromFriendsRequests(id, candidate)
			return res.status(200).send({ message: 'Friends request declined' })
		} catch (e) {
			return res.status(400).send({ message: 'Error declining friend request' })
		}
	}
	
	static async GetFriendRequestsList(req: IGetUserAuthInfoRequest, res: Response) {
		try {
			const {id} = req.user
			const requests = User.findById(id).select('friendRequests')
			return res.status(200).send(requests)
		} catch (e) {
			return res.status(400).send({ message: 'Could not retrieve friend requests list' })
		}
	}

	static async DeleteFromFriends(req: IGetUserAuthInfoRequest, res: Response ) {
		try {
			const {id} = req.user
			const {candidate} = req.body
			await FriendsService.RemoveFromFriendsList(id, candidate)
			return res.status(200).send( {message: 'Friend deleted'} )
		} catch (e) {
			return res.status(400).send( {message: 'Error deleting friend'} )
		}
	}
}