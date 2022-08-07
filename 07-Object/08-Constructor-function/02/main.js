function Accumulator(StartingValue) {
    // S1 this = {}
    // S2 midify this
    // S3 return this => instance
    this.currentValue = StartingValue
    
    this.read = function() {
        this.currentValue += +prompt('Enter Value')
    }

    this.show = function() {
        alert(this.currentValue)
    }
}

let t = new Accumulator(3)


t.read()
t.show()
console.log(t)