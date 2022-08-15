abstract class Mixer {
    make() {
        this.addBase();
        this.addWater();
        this.addSugar();
        this.addMilk();
    }

    abstract addBase();
    abstract addWater();
    abstract addSugar();
    abstract addMilk();
}

class Tea extends Mixer {
    addBase() {
        console.log("Добавлена заварка");
    }

    addWater() {
        console.log("Добавлена кипяченая вода");
    }

    addSugar() {
        console.log("Добавлен сахар для чая");
    }

    addMilk() {
        console.log("Добавлено молоко");
    }
}

class Coffee extends Mixer {
    addBase() {
        console.log("Добавлен кофе");
    }

    addWater() {
        console.log("Добавлена кипяченая вода");
    }

    addSugar() {
        console.log("Добавлен сахар для кофе");
    }

    addMilk() {
        console.log("Добавлены сливки");
    }
}

const cupOfTea = new Tea();
const cupOfCoffee = new Coffee();

cupOfTea.make();
cupOfCoffee.make();
