//Callback method of handling async tasks
function boilMilk(milk, callback) {
    setTimeout(() => {
        console.log(`${milk} litres of milk has been boiled`);

        callback(milk);
    }, 3000)

}

boilMilk(5, (milk) => {
    console.log(`Ready to make coffee with ${milk} litres of milk`)
});


//Promise version of the same problem
function boilMilk(milk) {
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log(`${milk} litres of milk has been boiled`);
            resolve()
        }, 3000);
    });

    return promise;
}

boilMilk(10).then(() => {
    console.log("Ready to make coffee!!!");
});

