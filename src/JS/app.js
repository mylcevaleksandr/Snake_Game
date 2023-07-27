import {Game} from "./modules/game.js";

class App {

    settings = {
        positionsCount: 30, positionsSize: 17
    };

    constructor() {
        this.adaptive();
        const canvas = document.createElement("canvas");
        canvas.setAttribute("width", (this.settings.positionsCount * this.settings.positionsSize).toString());
        canvas.setAttribute("height", (this.settings.positionsCount * this.settings.positionsSize).toString());
        document.getElementById("canvas_container").appendChild(canvas);
        const context = canvas.getContext('2d');
        new Game(context, this.settings);
    }

    adaptive() {

        if (window.innerWidth <= 545) {
            this.settings.positionsCount = 27;
            this.settings.positionsSize = 12;
            console.log(this.settings.positionsCount);
        }
    }
}

(new App());