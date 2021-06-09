export class Opciones {
    private _id: number;
    private _username: string;
    private _lastname: string;
    private _password: string;
    private _email: string;
    private _phone: number;

    get lastname(): string {
        return this._lastname;
    }

     set lastname(lastname: string) {
        this._lastname = lastname;
    }

     get id(): number {
        return this._id;
    }

     set id(id: number) {
        this._id = id;
    }

     get username(): string {
        return this._username;
    }

     set username(username: string) {
        this._username = username;
    }

     get password(): string {
        return this._password;
    }

     set password(password: string) {
        this._password = password;
    }

     get email(): string {
        return this._email;
    }

     set email(email: string) {
        this._email = email;
    }

     get phone(): number {
        return this._phone;
    }

     set phone(phone: number) {
        this._phone = phone;
    }



}
