class Parent{
    print(){
        console.log("Parent priniting");
    }
}

class Child extends Parent{
    //This is overiding
    print(){
        console.log("Child priniting");
    }
}

const child = new Child();
child.print();