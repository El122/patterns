abstract class Weapon {
    dmgType: DamageType;
    abstract hit();

    constructor(dmgType: DamageType) {
        this.dmgType = dmgType;
    }
}
class Arc extends Weapon {
    hit() {
        console.log("Нанесен урон луком, " + this.dmgType.type());
    }
}
class Sword extends Weapon {
    hit() {
        console.log("Нанесен урон мечом, " + this.dmgType.type());
    }
}

abstract class DamageType {
    abstract type();
}
class Magic extends DamageType {
    type() {
        return "тип урона - магический";
    }
}
class PhysIcal extends DamageType {
    type() {
        return "тип урона - физический";
    }
}

const magicSword = new Sword(new Magic());
const physicalArc = new Arc(new PhysIcal());

magicSword.hit();
physicalArc.hit();
