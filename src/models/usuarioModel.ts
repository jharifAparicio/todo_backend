export class Usuario {
    id?: number;
    name: string;
    email: string;
    avatar: string;
    password: string;
    constructor(
        name: string,
        email: string,
        password: string,
        avatar: string,
        id?: number
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.password = password;
    }
}