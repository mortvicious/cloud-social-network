// import { User } from '../../database/models/UserModel'
import makeDir from 'make-dir'

export class FileService {
    static async createInitialDir(email: string) {
        try {
		    await makeDir(`assets/users/${email}`)
		    await makeDir(`assets/users/${email}/avatar`)
            await makeDir(`assets/users/${email}/photos`)
            return {message: 'Folders created'}
        } catch (e) {
            return {message: 'Error creating initial folders'}
        }
    }
    static async addPhotoToUser(id: string) {
        try {
            return {message: 'Photo successfully added'}
        } catch (e) {
            return {message: 'Error adding photo'}
        }
    }
}
