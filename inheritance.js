class Parent{
    constructor(){
        this.fatherName = 'mosarraf hossain';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + ' ' + this.fatherName;
    }
}
const Child1 = new Child('nur');
const Child2 = new Child('sani');

console.log(Child1.getFullName());
console.log(Child2);