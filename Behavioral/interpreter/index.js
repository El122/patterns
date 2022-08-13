class Expression {
    interpret(context) {
        if (context == this.data)
            return true;
        return false;
    }
}
class AndExpression extends Expression {
    constructor(expression1, expression2) {
        super();
        this.expression1 = expression1;
        this.expression2 = expression2;
    }
    interpret(context) {
        return (this.expression1.interpret(context) &&
            this.expression2.interpret(context));
    }
}
class OrExpression extends Expression {
    constructor(expression1, expression2) {
        super();
        this.expression1 = expression1;
        this.expression2 = expression2;
    }
    interpret(context) {
        return (this.expression1.interpret(context) ||
            this.expression2.interpret(context));
    }
}
class XorExpression extends Expression {
    constructor(expression1, expression2) {
        super();
        this.expression1 = expression1;
        this.expression2 = expression2;
    }
    interpret(context) {
        return ((this.expression1.interpret(context) &&
            !this.expression2.interpret(context)) ||
            (!this.expression1.interpret(context) &&
                this.expression2.interpret(context)));
    }
}
class TerminalExpression extends Expression {
    constructor(data) {
        super();
        this.data = data;
    }
    interpret(context) {
        if (context.includes(this.data))
            return true;
        return false;
    }
}
const back = new TerminalExpression("NodeJS");
const front = new TerminalExpression("ReactJS");
const isFullstack = new AndExpression(back, front);
const isWebdev = new OrExpression(back, front);
const isFrontXorBack = new XorExpression(back, front);
console.log("Фулстек (NodeJS ReactJS): " + isFullstack.interpret("NodeJS ReactJS"));
console.log("Фулстек (ReactJS): " + isFullstack.interpret("ReactJS"));
console.log("Веб-разработчи (NodeJS): " + isWebdev.interpret("NodeJS"));
console.log("Или фронт, или бэк (NodeJS ReactJS): " +
    isFrontXorBack.interpret("NodeJS ReactJS"));
console.log("Или фронт, или бэк (NodeJS): " + isFrontXorBack.interpret("NodeJS"));
