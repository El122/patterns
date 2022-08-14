var Data = /** @class */ (function () {
    function Data(data) {
        this.data = data;
    }
    return Data;
}());
var Saver = /** @class */ (function () {
    function Saver() {
        this.history = [];
        this.currentVersion = 0;
    }
    Saver.prototype.saveVersion = function (data) {
        this.history.push(data);
        this.currentVersion++;
    };
    Saver.prototype.currentData = function () {
        return this.history[this.currentVersion - 1];
    };
    Saver.prototype.backVersion = function () {
        if (this.currentVersion > 0) {
            --this.currentVersion;
            return this.history.pop();
        }
        return false;
    };
    return Saver;
}());
var element = "Old data";
var versionSaver = new Saver();
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
