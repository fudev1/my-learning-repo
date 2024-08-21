export class Pokemon {
    private _name: string | undefined = "undefined";
    private _hp: number | undefined = 0;
    private _type: string | undefined = "undefined";
    private _id: number | undefined = 0;
    private _height: number | undefined = 0;
    private _weight: number | undefined = 0;
    private _attackName: string | undefined = "undefined";
    private _attackStrenght: number | undefined = 0;
    private _attackDescription: string | undefined = "undefined";
    private _weakness: string | undefined = "undefined";
    private _resistance: string | undefined = "undefined";
    private _retreat: string | undefined = "undefined";

    set name(name: string | undefined) {
        this._name = name;
    }

    get name(): string | undefined {
        return this._name;
    }

    set hp(hp: number | undefined) {
        this._hp = hp;
    }

    get hp(): number | undefined {
        return this._hp;
    }

    set type(type: string | undefined) {
        this._type = type;
    }

    get type(): string | undefined {
        return this._type;
    }

    set id(id: number | undefined) {
        this._id = id;
    }

    get id(): number | undefined {
        return this._id;
    }

    set height(height: number | undefined) {
        this._height = height;
    }

    get height(): number | undefined {
        return this._height;
    }

    set weight(weight: number | undefined) {
        this._weight = weight;
    }

    get weight(): number | undefined {
        return this._weight;
    }

    set attackName(attackName: string | undefined) {
        this._attackName = attackName;
    }

    get attackName(): string | undefined {
        return this._attackName;
    }

    set attackStrenght(attackStrenght: number | undefined) {
        this._attackStrenght = attackStrenght;
    }

    get attackStrenght(): number | undefined {
        return this._attackStrenght;
    }

    set attackDescription(attackDescription: string | undefined) {
        this._attackDescription = attackDescription;
    }

    get attackDescription(): string | undefined {
        return this._attackDescription;
    }

    set weakness(weakness: string | undefined) {
        this._weakness = weakness;
    }

    get weakness(): string | undefined {
        return this._weakness;
    }

    set resistance(resistance: string | undefined) {
        this._resistance = resistance;
    }

    get resistance(): string | undefined {
        return this._resistance;
    }

    set retreat(retreat: string | undefined) {
        this._retreat = retreat;
    }

    get retreat(): string | undefined {
        return this._retreat;
    }


}