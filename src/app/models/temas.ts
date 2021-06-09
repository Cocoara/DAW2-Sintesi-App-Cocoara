export class Temas {

        private _id: number;
        private _tipoConsulta: string;
        
        constructor() {
            this._id = 0;
            this._tipoConsulta = "";
        }
    
        get id(): number {
            return this._id;
        }
    
        get tipoConsulta(): string {
            return this._tipoConsulta;
        }
    
       
    
        set id(id: number) {
            this._id = id;
        }
    
        set tipoConsulta(tipoConsulta: string) {
            this._tipoConsulta = tipoConsulta;
        }
    
}
