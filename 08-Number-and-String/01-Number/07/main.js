function randomDice() {
    let random = Math.random() * (6 - 1) //ผลต่างของช่วง
    return (1 + random).toFixed(0)
}

// see other method in _instructor

randomDice()