function Calculator() {
    //SHOULD PUT = 0 FIRST
    this.num1 = 0;
    this.num2 = 0;

    this.read = function() {
        this.num1 = +prompt('Enter Number')
        this.num2 = +prompt('Enter Number')
    }
    this.sum = function() {
        return this.num1 + this.num2
    }
    this.mul = function() {
        return this.num1 * this.num2
    }
}

let t = new Calculator()

console.log(t.read())
console.log(t)
console.log(t.sum())
console.log(t)
console.log(t.mul())
console.log(t)