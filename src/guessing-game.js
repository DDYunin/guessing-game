class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minNumber = min;
        this.maxNumber = max;
        this.currentResult = Math.round((max + min) / 2) ;
    }

    guess() {
        return this.currentResult;
    }

    lower() {
        this.maxNumber = this.currentResult;
        this.currentResult = Math.round((this.maxNumber + this.minNumber) / 2) ;
    }

    greater() {
        this.minNumber = this.currentResult;
        this.currentResult = Math.round((this.maxNumber + this.minNumber) / 2);
    }
}

module.exports = GuessingGame;
