"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testData {
    constructor() {
    }
    addPlayer(player) {
        return this._players.push(player) - 1;
    }
    removePlayer(playerIndex) {
        let newPlayers = [];
        this._players.forEach((player, index) => { if (playerIndex != index) {
            newPlayers.push(player);
        } });
        this._players = newPlayers;
        return this._players.length;
    }
}
exports.testData = testData;
//# sourceMappingURL=testData.js.map