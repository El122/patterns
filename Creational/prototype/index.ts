class Stormtrooper {
    model: string;
    color: string;
    version: number;

    constructor(model: string, color: string, version: number) {
        this.model = model;
        this.color = color;
        this.version = version;
    }

    clone() {
        return new Stormtrooper(this.model, this.color, this.version);
    }
}

const stormtrooper = new Stormtrooper("Имперский десантник", "Белый", 1);
const stormtrooper2 = stormtrooper.clone();
stormtrooper2.color = "Черный";
stormtrooper2.version = 2;
const stormtrooper3 = stormtrooper.clone();
stormtrooper3.model = "Снежный штурмовик";
stormtrooper3.color = "Серый";

console.log(stormtrooper);
console.log(stormtrooper2);
console.log(stormtrooper3);
