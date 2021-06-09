export class Consulta {

    private _id: number;
    private _nombre: string;
    private _apellido: string;
    private _telefono: number;
    private _correo: string;
    private _tema: number;
    private _mensaje: string;

    constructor() {
        this._id = 0;
        this._nombre = "";
        this._apellido= "";
        this._telefono= 0;
        this._correo= "";
        this._tema= 0;
        this._mensaje= "";
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get apellido(): string {
        return this._apellido;
    }

    set apellido(apellido: string) {
        this._apellido = apellido;
    }

    get telefono(): number {
        return this._telefono;
    }

    set telefono(telefono: number) {
        this._telefono = telefono;
    }

    
    get correo(): string {
        return this._correo;
    }

    set correo(correo: string) {
        this._correo = correo;
    }

    get tema(): number {
        return this._tema;
    }

    set tema(tema: number) {
        this._tema = tema;
    }

    get mensaje(): string {
        return this._mensaje;
    }

    set mensaje(mensaje: string) {
        this._mensaje = mensaje;
    }
  
}
