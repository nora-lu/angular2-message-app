export class User {
    constructor(public email: string,
                public password: string,
                public firstName?: string,  // question mark means optional
                public lastName?: string) {}
}