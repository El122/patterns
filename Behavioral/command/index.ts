class User {
    command;

    constructor(command) {
        this.command = command;
    }

    execute() {
        this.command.execute();
    }
}

class TextDocument {
    isOpened: boolean;

    constructor() {
        this.isOpened = false;
    }

    open() {
        this.isOpened = true;
    }

    close() {
        this.isOpened = false;
    }
}

class OnOpenDocument {
    document: TextDocument;

    constructor(document: TextDocument) {
        this.document = document;
    }

    execute() {
        this.document.open();
    }
}
class OnCloseDocument {
    document: TextDocument;

    constructor(document: TextDocument) {
        this.document = document;
    }

    execute() {
        this.document.close();
    }
}

const doc = new TextDocument(); // Сам документ
const docOpen = new OnOpenDocument(doc); // Команда для открытия документа
const docClose = new OnCloseDocument(doc); // Команда для закрытия документа
const openWorker = new User(docOpen); // Кнопка для открытия документа
const closeWorker = new User(docClose); // Кнопка для закрытия документа

console.log(doc);
openWorker.execute();
console.log(doc);
closeWorker.execute();
console.log(doc);
