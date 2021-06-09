export class User {
    private _id: number;
    private _user: string;
    private _pass: string;
    private _email: string;
    private _token: string;
    private _group: number;

    constructor(){ 
        this._user = "";
        this._pass = "";
        this._email = "";
        this._token = "";
        this._group = 0;
    }

    get user(): string{
        return this._user;
    }

    get id(): number{
        return this._id;
    }

    get pass(): string{
        return this._pass;
    }

    get email(): string{
        return this._email;
    }

    get token():string{
        return this._token;
    }

    get group():number{
        return this._group;
    }

    set id(id:number){
        this._id = id;
    }

    set user(user:string){
        this._user = user;
    }

    set pass(pass:string){
        this._pass = pass;
    }

    set email(email:string){
        this._email = email;
    }

    set token(token:string){
        this._token = token;
    }

    set group(group:number){
        this._group = group;
    }


}
