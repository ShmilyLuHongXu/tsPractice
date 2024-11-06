"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enemyTank = exports.playerTank = exports.Tank = void 0;
class Tank {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
exports.Tank = Tank;
class playerTank extends Tank {
    constructor() {
        super(...arguments);
        this.x = 20;
        this.y = 20;
    }
}
exports.playerTank = playerTank;
class enemyTank extends Tank {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
    }
}
exports.enemyTank = enemyTank;
let p = new playerTank();
console.log(p.x, p.y);
