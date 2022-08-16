class HDMI {
    displayPerfect() {
        console.log("Вывод идеальной картинки на монитор");
    }
}

class AVI {
    display() {
        console.log("Вывод изображения на монитор");
    }
}

class Display {
    connector: any;
    constructor(connector: any) {
        this.connector = connector;
    }

    on() {
        this.connector.display();
    }
}

class HDMIAdapter {
    connector: any;

    constructor(connector: any) {
        this.connector = connector;
    }

    display() {
        this.connector.displayPerfect();
    }
}

const oldDisplay = new Display(new AVI());
oldDisplay.on();

// const newDisplay = new Display(new HDMI());
// newDisplay.on();

const newDisplay = new Display(new HDMIAdapter(new HDMI()));
newDisplay.on();
