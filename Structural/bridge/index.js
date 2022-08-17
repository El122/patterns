var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Weapon = /** @class */ (function () {
    function Weapon(dmgType) {
        this.dmgType = dmgType;
    }
    return Weapon;
}());
var Arc = /** @class */ (function (_super) {
    __extends(Arc, _super);
    function Arc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arc.prototype.hit = function () {
        console.log("Нанесен урон луком, " + this.dmgType.type());
    };
    return Arc;
}(Weapon));
var Sword = /** @class */ (function (_super) {
    __extends(Sword, _super);
    function Sword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sword.prototype.hit = function () {
        console.log("Нанесен урон мечом, " + this.dmgType.type());
    };
    return Sword;
}(Weapon));
var DamageType = /** @class */ (function () {
    function DamageType() {
    }
    return DamageType;
}());
var Magic = /** @class */ (function (_super) {
    __extends(Magic, _super);
    function Magic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Magic.prototype.type = function () {
        return "тип урона - магический";
    };
    return Magic;
}(DamageType));
var PhysIcal = /** @class */ (function (_super) {
    __extends(PhysIcal, _super);
    function PhysIcal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhysIcal.prototype.type = function () {
        return "тип урона - физический";
    };
    return PhysIcal;
}(DamageType));
var magicSword = new Sword(new Magic());
var physicalArc = new Arc(new PhysIcal());
magicSword.hit();
physicalArc.hit();
