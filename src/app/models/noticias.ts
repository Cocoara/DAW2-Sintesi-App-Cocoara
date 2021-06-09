export class Noticias {

    private _id: number;
    private _titulo: string;
    private _contenido: string;
    private _id_grupo: string;
    private _data: string;
    private _file_url: string;

     get id(): number {
        return this._id;
    }

     set id(id: number) {
        this._id = id;
    }

     get titulo(): string {
        return this._titulo;
    }

     set titulo(titulo: string) {
        this._titulo = titulo;
    }

     get contenido(): string {
        return this._contenido;
    }

     set contenido(contenido: string) {
        this._contenido = contenido;
    }

     get id_grupo(): string {
        return this._id_grupo;
    }

     set id_grupo(id_grupo: string) {
        this._id_grupo = id_grupo;
    }

     get data(): string {
        return this._data;
    }

     set data(data: string) {
        this._data = data;
    }

     get file_url(): string {
        return this._file_url;
    }

     set file_url(file_url: string) {
        this._file_url = file_url;
    }


    
}
