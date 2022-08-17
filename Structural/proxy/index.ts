class Database {
    storage: Array<object>;

    constructor() {
        this.storage = [];
    }

    addData(data: object) {
        this.storage.push(data);
    }

    getData() {
        return this.storage;
    }
}

class DatabaseProxy {
    db: Database;

    constructor() {
        this.db = new Database();
    }

    addData(password: string, data: object) {
        if (password === "root") {
            this.db.addData(data);
            return "Success";
        } else {
            return "Access denied";
        }
    }

    getData(password: string) {
        if (password === "root") {
            return this.db.getData();
        } else {
            return "Access denied";
        }
    }
}

const db = new DatabaseProxy();
console.log(db.addData("root", { name: "user", pet: "Cat" }));
console.log(db.addData("root", { name: "new user", pet: "Dog" }));
console.log(db.addData("test", { name: "some user", pet: "Horse" }));

console.log(db.getData("test"));
console.log(db.getData("root"));
