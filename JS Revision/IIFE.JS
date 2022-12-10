
//This is also a closure which has data encapsulation
const employeeSalary = (() => {
    let salary = 50000;

    function changeBy(amount){
        return salary = salary + amount;
    }

    return {
        raise : function () {
            changeBy(5000);
        },

        deduct : function() {
            changeBy(3000);
        },

        findSalary : function(){
            return salary;
        }
    }
})();

console.log(employeeSalary);

console.log(employeeSalary.raise()); //This will return undefined
console.log(employeeSalary.findSalary());
