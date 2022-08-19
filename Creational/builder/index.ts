class Character {
    name: string;
    weapon: string;
    characterClass: string;
    subclass: string;

    constructor(name: string) {
        this.name = name;
        this.weapon = "Меч";
        this.characterClass = "Паладин";
        this.subclass = "Маг";
    }
}

class CharacterBuilder {
    character: Character;

    constructor(name: string) {
        this.character = new Character(name);
    }

    changeWeapon(weapon: string) {
        this.character.weapon = weapon;
        return this;
    }

    changeClass(characterClass: string) {
        this.character.characterClass = characterClass;
        return this;
    }

    changeSubclass(subclass: string) {
        this.character.subclass = subclass;
        return this;
    }

    create() {
        return this.character;
    }
}

const character = new CharacterBuilder("Альбедо")
    .changeClass("Чародей")
    .changeWeapon("Посох")
    .create();
console.log(character);

const character2 = new CharacterBuilder("Алиса")
    .changeSubclass("Целитель")
    .create();
console.log(character2);
