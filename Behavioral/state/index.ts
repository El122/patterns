class Order {
    order: OrderStatus;

    constructor() {
        this.order = new InCart();
    }

    nextStatus() {
        this.order = this.order.next();
    }
}

class OrderStatus {
    nextStatus: any;

    constructor(nextStatus) {
        this.nextStatus = nextStatus;
    }

    next() {
        return new this.nextStatus();
    }
}

class InCart extends OrderStatus {
    constructor() {
        super(OnTheWay);
    }
}
class OnTheWay extends OrderStatus {
    constructor() {
        super(Delivered);
    }
}
class Delivered extends OrderStatus {
    constructor() {
        super(Delivered);
    }
}

const myOrder = new Order();
console.log(myOrder);
myOrder.nextStatus();
console.log(myOrder);
myOrder.nextStatus();
console.log(myOrder);
myOrder.nextStatus();
console.log(myOrder);
