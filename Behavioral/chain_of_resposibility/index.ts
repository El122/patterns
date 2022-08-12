class Account {
    nextAccount: Account;
    balance: number;
    name: string;

    setNext(account) {
        this.nextAccount = account;
    }

    pay(amount: number): string {
        if (this.checkBalance(amount))
            return `Оплата успешно проведена с помощью ${this.name}`;
        else if (this.nextAccount) {
            console.log(`Не удалось выполнить оплату с помощью ${this.name}`);
            return this.nextAccount.pay(amount);
        } else return "Ни на одном из счетов недостаточно денег";
    }

    checkBalance(amount): boolean {
        return this.balance > amount;
    }
}

class Visa extends Account {
    name: string;
    balance: number;

    constructor(balance) {
        super();
        this.name = "Visa";
        this.balance = balance;
    }
}

class MasterCard extends Account {
    name: string;
    balance: number;

    constructor(balance) {
        super();
        this.name = "MasterCard";
        this.balance = balance;
    }
}

class MIR extends Account {
    name: string;
    balance: number;

    constructor(balance) {
        super();
        this.name = "MIR";
        this.balance = balance;
    }
}

const visaAcc = new Visa(233);
const mastercardAcc = new MasterCard(56);
const mirAcc = new MIR(959);

visaAcc.setNext(mastercardAcc);
mastercardAcc.setNext(mirAcc);

const payResult = visaAcc.pay(455);
console.log(payResult);
