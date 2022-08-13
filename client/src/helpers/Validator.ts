export class Validator {
	public static email(email: string) {
		const regex = /^\S+@\S+\.\S+$/
		return regex.test(email)
	}
	public static password(password: string) {
		return password.length > 8
	}
	public static repeatPassword(password: string, repeatPassword: string) {
		return password === repeatPassword
	}
	public static username(username: string) {
		return username.length < 20
	}
	public static link(link: string) {
		const regex = /^[A-Za-z0-9]*$/ 
		return regex.test(link)
	}
}