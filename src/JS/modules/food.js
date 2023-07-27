import {NumberUtils} from "../utils/number-utils.js";
import {ColorUtils} from "../utils/color-utils.js";

export class Food {

    context = null;
    positionsSize = null;
    positionsCount = null;
    foodRadius = null;
    foodPosition = {
        x: 1,
        y: 1
    };
    color = null;

    constructor(context, positionsCount, positionsSize) {

        this.context = context;
        this.positionsSize = positionsSize;
        this.positionsCount = positionsCount;
        this.foodRadius = this.positionsSize / 2;
    }

    setNewFoodPosition() {
        this.foodPosition = {
            x: NumberUtils.getRandomInt(1, this.positionsCount),
            y: NumberUtils.getRandomInt(1, this.positionsCount)
        };
    }


    showFood() {
        let color = new ColorUtils().generateNewColor();
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.arc(this.foodPosition.x * this.positionsSize - this.foodRadius, this.foodPosition.y * this.positionsSize - this.foodRadius, this.foodRadius, 0, 2 * Math.PI, false);
        this.context.fill();
    }
}