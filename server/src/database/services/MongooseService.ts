import mongoose from 'mongoose'

export class MongooseService {
	private static readonly dbUri: string = process.env.MONGO_URI
	private static db: mongoose.Connection
	public static connect(): void {
		mongoose.connect(this.dbUri, () => {
			this.db = mongoose.connection
			this.determineConnection()
			this.db.on('error', console.error.bind(console.error, 'Error MongoDB'))
		})
	}
	private static determineConnection(): void {
		switch (mongoose.connection.readyState) {
			case 0:
				console.log(`MongoDB Status: Disconnected`)
				break
			case 1:
				console.log(`MongoDB Status: Connected`)
				break
			case 2:
				console.log(`MongoDB Status: Connecting`)
				break
			case 3:
				console.log(`MongoDB Status: Disconnecting`)
				break
			default:
				console.log(`MongoDB Status: Wrong Credentials`)
				break
		}
	}
}
