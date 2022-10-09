function boilMilk(milk) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${milk} Litres of milk has been boiled.`);
            resolve();
        }, 3000);
    });

    return promise;
}