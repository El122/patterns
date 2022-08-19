abstract class Developer {
    abstract info();
}

class Backender extends Developer {
    info() {
        console.log("Это бэкендер");
    }
}

class Frontender extends Developer {
    info() {
        console.log("Это фронтендер");
    }
}

abstract class Product {
    abstract info();
}

class Backend extends Product {
    info() {
        console.log("Это бэк");
    }
}

class Frontend extends Product {
    info() {
        console.log("Это фронт");
    }
}

abstract class DevelopFactory {
    abstract getProduct();
    abstract getProgrammer();
}

class BackendDevelopFactory extends DevelopFactory {
    getProduct() {
        return new Backend();
    }

    getProgrammer() {
        return new Backender();
    }
}

class FrontendDevelopFactory extends DevelopFactory {
    getProduct() {
        return new Frontend();
    }

    getProgrammer() {
        return new Frontender();
    }
}

const backFactory = new BackendDevelopFactory();
backFactory.getProgrammer().info();
backFactory.getProduct().info();

const frontFactory = new FrontendDevelopFactory();
frontFactory.getProgrammer().info();
frontFactory.getProduct().info();
