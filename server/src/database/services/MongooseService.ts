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
	private static determineConnection() {
		if (mongoose.connection.readyState === 0) {
			console.log(`MongoDB Status: Disconnected`)
		} else if (mongoose.connection.readyState === 2) {
			console.log(`MongoDB Status: Connecting`)
		} else if (mongoose.connection.readyState === 1) {
			console.log(`MongoDB Status: Connected`)
		} else if (mongoose.connection.readyState === 3) {
			console.log(`MongoDB Status: Disconnecting`)
		} else {
			console.log(`MongoDB Status: Wrong Credentials`)
		}
	}
}
