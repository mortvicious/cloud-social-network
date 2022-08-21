export class ApiException extends Error {
    status: number
    message: string
    
    constructor(status: number, message: string) {
        super()
        this.status = status
        this.message = message
    }
    
    static InternalError(message: string) {
        return new ApiException(500, message)
    }   
    
    static BadRequest(message: string) {
        return new ApiException(404, message)
    }
    
    static Forbidden(message: string) {
        return new ApiException(403, message)
    }
    
    static Unauthorized(message: string) {
        return new ApiException(401, message)
    }
}