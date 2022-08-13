class ObjectIterator {
    object: Object;
    keys: Array<string>;
    index: number;

    constructor(object: Object) {
        this.object = object;
        this.keys = Object.keys(object);
        this.index = 0;
    }

    first() {
        return this.object[this.keys[0]];
    }

    last() {
        return this.object[this.keys[this.keys.length - 1]];
    }

    next() {
        ++this.index;
        return this.object[this.keys[this.index]];
    }

    prev() {
        --this.index;
        return this.object[this.keys[this.index]];
    }

    current() {
        return this.object[this.keys[this.index]];
    }
}

const myObject = new ObjectIterator({
    name: "Alice",
    surname: "F.",
    age: "20",
    pet: "Cat",
});

console.log("Первый элемент: " + myObject.first());
console.log("Последний элемент: " + myObject.last());
console.log("Перейти к следующему элементу: " + myObject.next());
console.log("Вернуть текущий элемента: " + myObject.current());
console.log("Перейти к предыдущему элементу: " + myObject.prev());
console.log("Вернуть текущий элемента: " + myObject.current());
