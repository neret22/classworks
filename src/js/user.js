const user = {
    fName: 'Ivan',
    lName: 'Ivanov',
    age: 30,
    getFullName: function(){
        console.log(123);
        return `${this.fName} ${this.lName}`
    }
}
export const person = {
    fName: 'Frosya',
    lName: 'Burlakova',
    age: 20,
    getFullName: function(){
        console.log(123);
        return `${this.fName} ${this.lName}`
    }
}

export default user 

