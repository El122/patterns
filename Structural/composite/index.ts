abstract class Unit {
    abstract getStrength();
}

class Horseman extends Unit {
    getStrength() {
        return 50;
    }
}
class Archer extends Unit {
    getStrength() {
        return 25;
    }
}
class Lancer extends Unit {
    getStrength() {
        return 35;
    }
}

class UnitComposer {
    units: Array<Unit>;

    constructor() {
        this.units = [];
    }

    addUnit(unit: Unit) {
        this.units.push(unit);
    }

    getStrength() {
        return this.units
            .map((unit) => unit.getStrength())
            .reduce((a, b) => a + b);
    }
}

const myUnits = new UnitComposer();
for (let i = 0; i < 1000; ++i) {
    const unitType = Math.floor(Math.random() * 3);
    switch (unitType) {
        case 0:
            myUnits.addUnit(new Horseman());
            break;
        case 1:
            myUnits.addUnit(new Archer());
            break;
        case 2:
            myUnits.addUnit(new Lancer());
            break;
    }
}

console.log(myUnits.getStrength());
