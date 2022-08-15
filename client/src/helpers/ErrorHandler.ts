export class ErrorHandler {
    private static errors: string[] = []

    private static setErrors(error: string) {
        this.errors.push(error)
    }
    private static resetErrors() {
        this.errors = []
    }

    public static getErrors() {
        return this.errors
    }

    public static setErrorsToWarnings(errors: number[]) {
        this.resetErrors()
        errors?.map((error) => {
            switch (error) {
                case 0:
                    this.setErrors('Please, write the correct e-mail')
                    break;
                case 1:
                    this.setErrors(`Passwords length must be longer than 8 characters`)
                    break
                case 2:
                    this.setErrors(`Passwords are not the same`)
                    break
                case 3:
                    this.setErrors('Username must be longer than 2 characters and less than 20')
                    break
                case 4:
                    this.setErrors('Link should contain only alphabetical and numeric characters')
                    break
                default:
                    break;
            }
        })
    }
}