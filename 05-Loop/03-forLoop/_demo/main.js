// for(let i = 0; i < 3; i++){
//     console.log(i)
// }

let text = ''


for(let i = 0 ; i < 10 ; i++){

    if(i % 2 === 1){
        continue;
    }
    text += i;
}

console.log(text)