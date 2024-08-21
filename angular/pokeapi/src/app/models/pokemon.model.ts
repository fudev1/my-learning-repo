export class Pokemon {
    private _name: string = "undefined";
    private _hp: number = 0;
    private _type: string = "undefined";
    private _id: number = 0;
    private _height: number = 0;
    private _weight: number = 0;
    private _attackName: string = "undefined";
    private _attackStrenght: number = 0;
    private _attackDescription: string  = "undefined";
    private _weakness: string  = "undefined";
    private _resistance: string  = "undefined";
    private _retreat: string  = "undefined";

    set name(name: string ) {
        this._name = name;
    }

    get name(): string  {
        return this._name;
    }

    set hp(hp: number ) {
        this._hp = hp;
    }

    get hp(): number {
        return this._hp;
    }

    set type(type: string ) {
        this._type = type;
    }

    get type(): string  {
        return this._type;
    }

    set id(id: number ) {
        this._id = id;
    }

    get id(): number  {
        return this._id;
    }

    set height(height: number ) {
        this._height = height;
    }

    get height(): number  {
        return this._height;
    }

    set weight(weight: number ) {
        this._weight = weight;
    }

    get weight(): number  {
        return this._weight;
    }

    set attackName(attackName: string ) {
        this._attackName = attackName;
    }

    get attackName(): string  {
        return this._attackName;
    }

    set attackStrenght(attackStrenght: number ) {
        this._attackStrenght = attackStrenght;
    }

    get attackStrenght(): number  {
        return this._attackStrenght;
    }

    set attackDescription(attackDescription: string ) {
        this._attackDescription = attackDescription;
    }

    get attackDescription(): string  {
        return this._attackDescription;
    }

    set weakness(weakness: string ) {
        this._weakness = weakness;
    }

    get weakness(): string  {
        return this._weakness;
    }

    set resistance(resistance: string ) {
        this._resistance = resistance;
    }

    get resistance(): string  {
        return this._resistance;
    }

    set retreat(retreat: string ) {
        this._retreat = retreat;
    }

    get retreat(): string  {
        return this._retreat;
    }


}