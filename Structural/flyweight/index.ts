class Item {
    name: string;
    count: number;

    constructor(name: string) {
        this.name = name;
        this.count = 1;
    }
}

class ItemFactory {
    items: Array<Item>;

    constructor() {
        this.items = [];
    }

    addItem(name: string) {
        const item = this.findItem(name);
        if (item) {
            item.count++;
            return item;
        }
        this.items.push(new Item(name));
    }

    findItem(name: string) {
        return this.items.find((item) => item.name === name);
    }

    getAll() {
        return this.items;
    }
}

const bag = new ItemFactory();
bag.addItem("Яблоко");
bag.addItem("Груша");
bag.addItem("Яблоко");
bag.addItem("Апельсин");

console.log(bag.getAll());
