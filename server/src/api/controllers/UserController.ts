import { IGetUserAuthInfoRequest } from '../../interfaces/IGetUserAuthInfoReq'
import { Response } from 'express'
import fs from 'fs'
import {IMulterFileInfoReq} from '../../interfaces/IMulterFileInfoReq'

export class UserController {
    static async UploadAvatar(req: IMulterFileInfoReq, res: Response) {
        try {
            // const {id} = req.user
            // const email = await User.findById(id).select('email')
            const filetype = req.file.mimetype.split('/')[1]
            const newFilename = req.file.filename
            // const newFilename = `${email}.${filetype}`
            fs.rename(`./uploads`, '', () => {})
            return res.status(200).send( {message: 'Avatar has been uploaded'} )
        } catch (e) {
            return res.status(400).send( {message: 'Error uploading avatar'} )
        }
    }
	
    static async GetAvatar(req: IGetUserAuthInfoRequest, res: Response) {
        try {
            // const {id} = req.user
            return res.status(200).send( {message: 'Avatar retrieved'} )
        } catch (e) {
            return res.status(400).send( {message: 'Error retrieving avatar'} )
        }
    }
	
    static async SetUserSettings(req: IGetUserAuthInfoRequest, res: Response) {
        try {
            // const {id} = req.user
            // const {settings} = req.body
            return res.status(200).send( {message: 'User settings successfully saved'} )
        } catch (e) {
            return res.status(400).send( {message: 'Error saving user settings'} )
        }
    }
	
}