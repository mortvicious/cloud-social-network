enum AuthErr {
    UNDEFINED = 'Undefined error',
    CONTRACT = 'Not valid user contract',
}

export default class APIErrors {
    static Auth = AuthErr
}