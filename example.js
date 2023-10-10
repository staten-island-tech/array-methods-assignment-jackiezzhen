
const students = [
    {
        firstName: 'eh',
        lastName: 'eh',
        graduated: true,
        DOB:2000,
        sibings:['eh','bleh'],
        age: function(){
            return year = this.DOB;
        }
    },
    {
        firstName: 'eh',
        lastName: 'eh',
        graduated: true,
        DOB:2000,
        sibings:['eh','bleh'],
        age: function(){
            return year = this.DOB;
        }
    },
    {
        firstName: 'eh',
        lastName: 'eh',
        graduated: true,
        DOB:2000,
        sibings:['eh','bleh'],
        age: function(){
            return year = this.DOB;
        }
    },
    {
        firstName: 'eh',
        lastName: 'eh',
        graduated: true,
        DOB:2000,
        sibings:['eh','bleh'],
        age: function(){
            return year = this.DOB;
        }
    }
]

//for each loop
//()=> arrow function
//arrow functions auto return, this key word points globals
//let nums= [1, 2, 3, 4, 5];
students.forEach((students) => console.log(students.firstName));
/*
nums.forEach(function (e1){
    console.log(e1);
});
*/
