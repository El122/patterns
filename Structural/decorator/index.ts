class Tea {
    name: string;
    cost: number;

    constructor() {
        this.name = "Чай";
        this.cost = 50;
    }

    getDesc() {
        return this.name;
    }

    getCost() {
        return this.cost;
    }
}

class MilkTea {
    tea: Tea;

    constructor(tea) {
        this.tea = tea;
    }

    getDesc() {
        return this.tea.getDesc() + ", с молоком";
    }

    getCost() {
        return this.tea.getCost() + 20;
    }
}

class SugarTea {
    tea: Tea;

    constructor(tea) {
        this.tea = tea;
    }

    getDesc() {
        return this.tea.getDesc() + ", с сахаром";
    }

    getCost() {
        return this.tea.getCost() + 10;
    }
}

const simpleTea = new Tea();
const sweetTea = new SugarTea(new Tea());
const milkSweetTea = new MilkTea(sweetTea);

console.log(simpleTea.getDesc() + ", " + simpleTea.getCost());
console.log(sweetTea.getDesc() + ", " + sweetTea.getCost());
console.log(milkSweetTea.getDesc() + ", " + milkSweetTea.getCost());
