export class AuthResponse {
    token: string;
    expiresIn: number;
    typeUser: string;
    constructor(token: string, expiresIn: number, typeUser: string) {
        this.token = token;
        this.expiresIn = expiresIn;
        this.typeUser = typeUser;
    }
}
