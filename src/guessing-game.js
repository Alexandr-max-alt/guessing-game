class GuessingGame {

    constructor(min,max) {
        this.values = [];
    }

    setRange(min, max) {
        while (min <= max) {
            this.values.push(min)
            min+=1
        }
        return this.values
    }

    guess() {
        let right = this.values.length - 1
        let left = 0
        let mid = Math.round((right - left) / 2) + left;
        return this.values[mid]
    }

    lower() {
        const res = this.values[Math.floor(this.values.length / 2 - 1)]
        this.values = this.values.slice(0, this.values.indexOf(res+2))
        return this.values
    }

    greater() {
        const res = this.values[Math.floor(this.values.length / 2 - 1)]
        this.values = this.values.slice(this.values.indexOf(res + 1), this.values[this.values.length])
        return this.values
    }
}

module.exports = GuessingGame;
