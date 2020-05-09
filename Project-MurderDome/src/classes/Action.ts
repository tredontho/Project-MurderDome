

import { action } from '../types/types.js'

export class Action {

    static readonly _playerActions: string[] = ["attack", "defend", "move", "follow", "rest", "wait"];

    private priority: number;
    private action: string;

    constructor(action: action) {

    }

    private setPriorityFromAction(action: action) {

        switch (action) {
            case("attack"):
                break;
            case("defend"):
                break;
            case("move"):
                break;
            case("follow"):
                break;
            case("rest"):
                break;
            case("wait"):
                break;
            default:
                this.priority = 1000;
                break;
        }
    }


}





