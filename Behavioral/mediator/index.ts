class Site {
    orders: Array<Object>;

    constructor() {
        this.orders = [];
    }

    addOrder(client: Client, product: Object) {
        const clientInfo = client.getInfo();
        this.createOrder({ client, product });
    }

    createOrder(data) {
        this.orders.push(data);
    }

    getOrders() {
        return this.orders;
    }
}

class Client {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    createOrder(onlineShop: Site, data) {
        onlineShop.addOrder(this, data);
    }

    getInfo() {
        return { name: this.name };
    }
}

const onlineShop = new Site();
const user = new Client("Ian");
const user2 = new Client("Evelin");

user.createOrder(onlineShop, { name: "Milk", count: 2 });
user2.createOrder(onlineShop, { name: "Bread", count: 1 });

console.log(onlineShop.getOrders());
