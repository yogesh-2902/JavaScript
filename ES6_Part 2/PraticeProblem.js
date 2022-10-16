const company = {
    _name: "SpaceX",
    _employees: [
        {
            id: 1,
            name: "Yogesh",
            role: "Front end Developer"
        },
        {
            id: 2,
            name: "Raghu",
            role: "Software Developer"
        }
    ],

    get employees() {
        let result = "";

        this._employees.forEach((element, index) => {
            result += `${index + 1}. ID: ${element.id} , Name: ${element.name}, Role: ${element.role}\n`;
        });

        return result;
    },

    set employees(value) {
        this._employees.push({
            id : this._employees.length + 1,
            name : value.name,
            role : value.role
            //...value 
        });
    }
}

console.log(company.employees);


company.employees = {
    name : "Manoj",
    role : "C# Developer"
}

console.log(company.employees);

const Obj = {
    get prop() {
        return 10;
    },

    set prop(value){
        this.prop = value;
    }
}

console.log(Obj.prop);
Obj.prop = 20;
console.log(Obj.prop);

