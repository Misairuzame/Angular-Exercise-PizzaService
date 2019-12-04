export class Pizza {
    private _name: string;
    private _description: string;
    private _price: string;
    private _id: number;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get price(): string {
        return this._price;
    }

    set price(value: string) {
        this._price = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    constructor(name: string, description: string, price: string, id: number) {
        this._name = name;
        this._description = description;
        this._price = price;
        this._id = id;
    }
}
