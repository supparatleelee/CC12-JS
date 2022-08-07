let line = ``;

for (let y = 2 ; y <= 12 ; y++) {
    for (let x = 1 ; x <= 12 ; x++) {
        line += `${y} x ${x} = ${y*x} \n`
    }
}