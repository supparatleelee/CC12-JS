function random(min, max) {
    let random = Math.random() * (max - min) //ผลต่างของช่วง
    return (min + random).toFixed(2)
}

random(2, 10) // exclusive the max number (i.e. 10.00)