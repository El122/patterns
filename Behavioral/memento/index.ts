class Data {
    data: string;

    constructor(data: string) {
        this.data = data;
    }
}

class Saver {
    history: Array<string>;
    currentVersion: number;

    constructor() {
        this.history = [];
        this.currentVersion = 0;
    }

    saveVersion(data) {
        this.history.push(data);
        this.currentVersion++;
    }

    currentData() {
        return this.history[this.currentVersion - 1];
    }

    backVersion() {
        if (this.currentVersion > 0) {
            --this.currentVersion;
            return this.history.pop();
        }
        return false;
    }
}

let element = "Old data";
const versionSaver = new Saver();

versionSaver.saveVersion(element);
element = "New data";
versionSaver.saveVersion(element);
element = "Newest data";
versionSaver.saveVersion(element);

console.log("Текущая версия: " + versionSaver.currentData());
console.log("Вернуться к предыдущей версии: " + versionSaver.backVersion());
console.log("Текущая версия: " + versionSaver.currentData());
console.log("Вернуться к предыдущей версии: " + versionSaver.backVersion());
console.log("Текущая версия: " + versionSaver.currentData());
