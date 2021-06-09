export class Messages {
    private _id: number;
    private _from: string;
    private _to: number;
    private _asunto: string;
    private _mensaje: string;
    private _data: string;

     get id(): number {
        return this._id;
    }

     set id(id: number) {
        this._id = id;
    }

     get from(): string {
        return this._from;
    }

     set from(from: string) {
        this._from = from;
    }

     get to(): number {
        return this._to;
    }

     set to(to: number) {
        this._to = to;
    }

     get asunto(): string {
        return this._asunto;
    }

     set asunto(asunto: string) {
        this._asunto = asunto;
    }

     get mensaje(): string {
        return this._mensaje;
    }

     set mensaje(mensjae: string) {
        this._mensaje = mensjae;
    }

     get data(): string {
        return this._data;
    }

     set data(data: string) {
        this._data = data;
    }

}
