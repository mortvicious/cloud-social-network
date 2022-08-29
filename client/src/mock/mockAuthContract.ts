import { mockUser } from './mockUser'

import { AuthenticateContract } from '../interfaces/auth/Autanticate.contract'

export const mockAuthContract: AuthenticateContract = {
    user  : mockUser,
    token : String(),
    id    : mockUser.id
} as const