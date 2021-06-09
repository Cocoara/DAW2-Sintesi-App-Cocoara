export class Incidencias {
    private _id_incidencia: number;
    private _id_user: number;
    private _id_Estado: number;
    private _desc_averia: string;
    private _Fecha_entrada: string;
    private _uuid: string;
    private _Marca: string;
    private _Modelo: string;
    private _Numerio_serio: string;
    private _Diagnostico_prev: string;
    private _Telf: string;
    private _tiempo_reparacion: string;
    private _id_tecnico: number;
    private _descripcion_gestor: string;
    private _canvasImage: string;
    private _rutaFicheros: string;
    private _material: string;

     get id_incidencia(): number {
        return this._id_incidencia;
    }

     set id_incidencia(id_incidencia: number) {
        this._id_incidencia = id_incidencia;
    }

     get id_user(): number {
        return this._id_user;
    }

     set id_user(id_user: number) {
        this._id_user = id_user;
    }

     get id_Estado(): number {
        return this._id_Estado;
    }

     set id_Estado(id_Estado: number) {
        this._id_Estado = id_Estado;
    }

     get desc_averia(): string {
        return this._desc_averia;
    }

     set desc_averia(desc_averia: string) {
        this._desc_averia = desc_averia;
    }

     get Fecha_entrada(): string {
        return this._Fecha_entrada;
    }

     set Fecha_entrada(Fecha_entrada: string) {
        this._Fecha_entrada = Fecha_entrada;
    }

     get uuid(): string {
        return this._uuid;
    }

     set uuid(uuid: string) {
        this._uuid = uuid;
    }

     get Marca(): string {
        return this._Marca;
    }

     set Marca(Marca: string) {
        this._Marca = Marca;
    }

     get Modelo(): string {
        return this._Modelo;
    }

     set Modelo(Modelo: string) {
        this._Modelo = Modelo;
    }

     get Numerio_serio(): string {
        return this._Numerio_serio;
    }

     set Numerio_serio(Numerio_serio: string) {
        this._Numerio_serio = Numerio_serio;
    }

     get Diagnostico_prev(): string {
        return this._Diagnostico_prev;
    }

     set Diagnostico_prev(Diagnostico_prev: string) {
        this._Diagnostico_prev = Diagnostico_prev;
    }

     get Telf(): string {
        return this._Telf;
    }

     set Telf(Telf: string) {
        this._Telf = Telf;
    }

     get tiempo_reparacion(): string {
        return this._tiempo_reparacion;
    }

     set tiempo_reparacion(tiempo_reparacion: string) {
        this._tiempo_reparacion = tiempo_reparacion;
    }

     get id_tecnico(): number {
        return this._id_tecnico;
    }

     set id_tecnico(id_tecnico: number) {
        this._id_tecnico = id_tecnico;
    }

     get descripcion_gestor(): string {
        return this._descripcion_gestor;
    }

     set descripcion_gestor(descripcion_gestor: string) {
        this._descripcion_gestor = descripcion_gestor;
    }

     get canvasImage(): string {
        return this._canvasImage;
    }

     set canvasImage(canvasImage: string) {
        this._canvasImage = canvasImage;
    }

     get rutaFicheros(): string {
        return this._rutaFicheros;
    }

     set rutaFicheros(rutaFicheros: string) {
        this._rutaFicheros = rutaFicheros;
    }

     get material(): string {
        return this._material;
    }

     set material(material: string) {
        this._material = material;
    }


    constructor() {
        this._id_incidencia = 0;
        this._id_user = 0;
        this._id_Estado = 0;
        this._desc_averia = "";
        this._Fecha_entrada = "";
        this._uuid = "";
        this._Marca = "";
        this._Modelo = "";
        this._Numerio_serio = "";
        this._Diagnostico_prev = "";
        this._Telf = "";
        this._tiempo_reparacion = "";
        this._id_tecnico = 0;
        this._descripcion_gestor = "";
        this._canvasImage = "";
        this._rutaFicheros = "";
        this._material = "";
    }


   

   
   
}
