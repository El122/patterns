let instance;

class Counter {
    count: number;

    constructor() {
        this.count = 0;
        if (!instance) instance = this;
        return instance;
    }

    increment() {
        ++this.count;
    }
}

const counterInstance = new Counter();
const counterInstance2 = new Counter();

counterInstance.increment();
counterInstance.increment();
counterInstance.increment();
counterInstance.increment();

console.log(counterInstance);
console.log(counterInstance2);
