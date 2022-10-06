function randomArrayPosition() {
    const arr = new Array(5).fill(false);
    const result = [];

    let allItemsPicked = false;
    while(!allItemsPicked){
        const random = Math.floor(Math.random() * 5);

        if(!arr[random]){
            result.push(random);
            arr[random] = true;
        }

        allItemsPicked = arr.every(item => item);
    }

        result.push(Math.floor(Math.random() * 5));

    return result;

}

console.log(randomArrayPosition());
console.log(randomArrayPosition());
console.log(randomArrayPosition());
console.log(randomArrayPosition());
console.log(randomArrayPosition());
