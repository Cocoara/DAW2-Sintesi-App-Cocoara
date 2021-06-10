export class Estado {
    private _id_Estado: number;
    private _Descrip: string;

     get id_Estado(): number {
        return this._id_Estado;
    }

     set id_Estado(id_Estado: number) {
        this._id_Estado = id_Estado;
    }

     get Descrip(): string {
        return this._Descrip;
    }

     set Descrip(Descrip: string) {
        this._Descrip = Descrip;
    }

}
