export class ErrorHandler {
    private static errors: string[] = []

    private static SetErrors(error: string) {
        this.errors.push(error)
    }
    private static ResetErrors() {
        this.errors = []
    }

    public static GetErrors() {
        return this.errors
    }

    public static SetErrorsToWarnings(errors: number[]) {
        this.ResetErrors()
        errors?.map((error: number) => {
            switch (error) {
                case 0:
                    this.SetErrors('Please, write the correct e-mail')
                    break;
                case 1:
                    this.SetErrors(`Passwords length must be longer than 8 characters`)
                    break
                case 2:
                    this.SetErrors(`Passwords are not the same`)
                    break
                case 3:
                    this.SetErrors('Username must be longer than 2 characters and less than 20')
                    break
                case 4:
                    this.SetErrors('Link should contain only alphabetical and numeric characters')
                    break
                default:
                    break;
            }
        })
    }
}