const index = (length, sum)=> {
    const array = Array(length).fill().map(() => Math.floor(6 * Math.random())); 
    let arrSum = array.reduce((partialSum,current)=>current+partialSum,0)
    console.log({arrSum}, {array})
 
    if (arrSum === sum){
         return array
    } else {
        index(length, sum)
    }

console.log(array);
}


console.log(index(6, 24))