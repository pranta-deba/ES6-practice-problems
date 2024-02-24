const instructors = [
    {name: 'Nodi', age:28, position: 'Senior'},
    {name: 'Akil', age:26, position: 'Junior'},
    {name: 'Shobuj', age:30, position: 'Senior'}
];

const seniorPerson = instructors.filter(i => i.position === 'Senior');
console.log(seniorPerson);