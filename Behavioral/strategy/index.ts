abstract class Weapon {}

class Sword extends Weapon {
    damage(dmg): number {
        return dmg * 100;
    }
}

class Arm extends Weapon {
    damage(dmg): number {
        return dmg * 10;
    }
}

class Axe extends Weapon {
    damage(dmg): number {
        return dmg * 150;
    }
}

class Player {
    dmg: number;
    weapon: any;

    constructor(dmg: number, weapon: any) {
        this.dmg = dmg;
        this.weapon = new weapon();
    }

    hit(): string {
        return "Нанесен урон в размере " + this.weapon.damage(this.dmg);
    }

    chageWeapon(weapon: any): void {
        this.weapon = new weapon();
    }
}

const newPlayer = new Player(20, Sword);
console.log("Sword: " + newPlayer.hit());
newPlayer.chageWeapon(Axe);
console.log("Axe: " + newPlayer.hit());
