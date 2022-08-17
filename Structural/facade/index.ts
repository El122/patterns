class Database {
    connect() {
        console.log("БД успешно подключена");
    }

    getData() {
        return [{ name: "Имя", surname: "Фамилия" }];
    }

    checkConnect() {
        return true;
    }

    disconnect() {
        console.log("БД успешно отключена");
    }
}

class DatabaseFacade {
    database: Database;

    constructor() {
        this.database = new Database();
    }

    connectDatabase() {
        if (this.database.checkConnect()) console.log("БД успешно подключена");
        else console.log("Не удалось подключить БД");
    }

    getData() {
        if (this.database.checkConnect()) return this.database.getData();
        else return "Не удалось подключить БД";
    }

    disconnectDatabase() {
        if (this.database.checkConnect()) this.database.disconnect();
    }
}

const db = new DatabaseFacade();
db.connectDatabase();
console.log(db.getData());
db.disconnectDatabase();
