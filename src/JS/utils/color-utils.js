export class ColorUtils {

    hexCharacters = [];

    constructor() {
        this.hexCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "E", "F"];
    }

 generateNewColor() {
        let hexColorRep = "#";

        for (let i = 0; i < 6; i++) {
            const randomPosition = Math.floor(Math.random() * this.hexCharacters.length);
            hexColorRep += this.getCharacter(randomPosition);
        }
        return hexColorRep;
    }

    getCharacter(index) {
        return this.hexCharacters[index];
    }
}