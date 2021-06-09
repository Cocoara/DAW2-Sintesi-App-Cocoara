export class HomeInfo {

    private _id: number;
    private _title: string;
    private _content: string;
    private _image: string;

    constructor() {
        this._id = 0;
        this._title = "";
        this._image = "";
        this._content = "";
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get content(): string {
        return this._content;
    }

    get image(): string {
        return this._image;
    }


    set id(id: number) {
        this._id = id;
    }

    set title(title: string) {
        this._title = title;
    }

    set content(content: string) {
        this._content = content;
    }

    set image(image: string) {
        this._image = image;
    }
}
