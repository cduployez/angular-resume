export class HobbyDto {
  title: string;

  ellipsis: boolean;

  private _values: string[];

  get values(): string[] {
    return this._values;
  }

  set values(value: string[]) {
    this._values = value;
    this._valuesFormat = this._values.join(', ');
  }

  private _valuesFormat: string;

  get valuesFormat(): string {
    return this._valuesFormat;
  }
}
