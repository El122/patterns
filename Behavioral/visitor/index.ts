abstract class Developer {
    abstract workWithAPI();
    abstract workWithData();
}

class FrontendDeveloper extends Developer {
    workWithAPI() {
        console.log("Отправка запросов на бэк");
    }

    workWithData() {
        console.log("Красивый вывод данных");
    }
}
class BackendDeveloper extends Developer {
    workWithAPI() {
        console.log("Отправка данных на фронт");
    }

    workWithData() {
        console.log("Получение данных из БД");
    }
}

abstract class SiteFunctional {
    abstract useFunctional(developer: Developer);
}

class DataSite extends SiteFunctional {
    useFunctional(developer: Developer) {
        developer.workWithData();
    }
}
class APISite extends SiteFunctional {
    useFunctional(developer: Developer) {
        developer.workWithAPI();
    }
}

class Site {
    siteFunctions: Array<SiteFunctional>;

    constructor() {
        this.siteFunctions = [new DataSite(), new APISite()];
    }

    useFunctional(developer: Developer) {
        for (let element of this.siteFunctions) {
            element.useFunctional(developer);
        }
    }
}

const frontDev = new FrontendDeveloper();
const backDev = new BackendDeveloper();

const newSite = new Site();

newSite.useFunctional(backDev);
newSite.useFunctional(frontDev);
