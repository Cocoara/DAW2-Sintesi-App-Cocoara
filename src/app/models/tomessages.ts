export class Tomessages {
    private _id: number;
    private _username: string;

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

}
