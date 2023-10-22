const students = [
    {
        firstName: 'John',
        lastName: 'Doe',
        graduated: false,
        DOB: 2000,
        siblings: ['Alice', 'Bob'],
        age: function() {
            return year = this.DOB;
        }
    },
    {
        firstName: 'Alice',
        lastName: 'Smith',
        graduated: true,
        DOB: 1999,
        siblings: ['Charlie'],
        age: function() {
            return year = this.DOB;
        }
    },
    {
        firstName: 'Bob',
        lastName: 'Johnson',
        graduated: true,
        DOB: 2001,
        siblings: ['Eva', 'David'],
        age: function() {
            return year = this.DOB;
        }
    },
    {
        firstName: 'Eva',
        lastName: 'Brown',
        graduated: false,
        DOB: 2002,
        siblings: ['Frank', 'Grace', 'Hannah'],
        age: function() {
            return year = this.DOB;
        }
    }
];

students.forEach((student) => console.log(student.firstName));

//for each loop
//()=> arrow function
//arrow functions auto return, this key word points globals
//let nums= [1, 2, 3, 4, 5];
/*
nums.forEach(function (e1){
    console.log(e1);
});
*/
