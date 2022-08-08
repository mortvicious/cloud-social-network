interface IMockUser {
    username: string
    id: string
    avatar: string
    link: string
}

export class MockUser implements IMockUser {
    username = ''
    id = ''
    avatar = ''
    link = ''
    constructor(username: string, id: string, avatar: string, link: string) {
        this.username = username
        this.id = id
        this.avatar = avatar
        this.link = link
    }
}
