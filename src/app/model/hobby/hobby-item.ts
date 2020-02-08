export class HobbyItem {

    private _values: string[];

    private _valuesFormat: string;

    title: string;

    ellipsis: boolean;

    constructor(title: string, values: string[], ellipsis: boolean = false) {
        this.title = title;
        this.values = values;
        this.ellipsis = ellipsis;
    }

    get values(): string[] {
        return this._values;
    }

    set values(value: string[]) {
        this._values = value;
        this._valuesFormat = this._values.join(', ');
    }

    get valuesFormat(): string {
        return this._valuesFormat;
    }
}
