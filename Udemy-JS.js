// function
function makeCoffee(suger, milk) {
    var instructions = 'Boil water,';
    instructions += ' pour into cup,';
    instructions += ' add coffee granules,';
    instructions += ' add ' + suger + ' spoons of suger,';
    instructions += ' add ' + milk + '% milk.';
    return instructions;
}
console.log(makeCoffee(0, 20));

// Object & Array
let car = {
    color: 'red',
    speed: 300,
    drive: function() {
        return 'drive';
    }
};

let shoppingList = ['Apple', 'Orange', 'Peer'
];

// Embedding Objects & Arrays

var car1 = {
    make: 'Volvo',
    speed: 130,
    engine: {
        size: 2.0,
        make: 'BMW',
        fuel: 'petrol',
        pistons: [{maker: 'bmw'}, {maker: 'bmw2'}]
    },
    drive: function() {return 'drive';}
}; 

var array = [
    'string',
    100,
    ['embed', 200],
    {car: 'ford'},
    function() {return 'drive';}
];

// Exercise
let washingMachine = {
    maker: 'Panasonic',
    capacity: 9.5,
    spinSpeed: 1400,
    waterRate: 4,
    control: function() {return '3Di-Inverter';},
    buttonsMakers: ['Sony', 'LG', 'Panasonic']
};
console.log(washingMachine);
console.log(washingMachine.control());

// Member Access

var car2 = {
    make: 'volvo',
    speed: 160,
    engine: {
        size: 2.0,
        make: 'BMW',
        fuel: 'petrol',
        pistons: [{maker: 'bmw'}, {maker: 'bmw2'}
        ]},
    drive1: function(){return 'drive';}
};

console.log(car2.make);
console.log(car2.speed);
console.log(car2.engine.size, car2.engine.pistons[1].maker);
console.log(car2.drive1());

// Computed Member Access

var car3 = {
    make: 'volvo',
    speed: 160,
    engine: {
        size: 2.0,
        make: 'BMW',
        fuel: 'petrol',
        pistons: [{maker: 'bmw'}, {maker: 'bmw2'}
        ]},
    drive1: function(){return 'drive';}
};

var array = [
    'string',
    120,
    ['embed', 200],
    {car4: 'ford'},
    function(){return 'drive';}
];

console.log(car3.engine.pistons[0]);
console.log(car3.engine.pistons[1].maker);
console.log(array[2 + 2 - 1 - 1][0]);

let h = 88;
var pointer = 'make'
console.log(array[h / 11 - 8]);
console.log(car3['engine']['fuel']);
console.log(car3['engine']['pistons'][1]['maker']);
console.log(car3['drive1']());
console.log(car3['en'+'gine']);
console.log(car3[pointer]);

// Member creation, Assignment & Deletion
let car5 = {
    make: 'volvo',
    speed: 160,
    engine: {
        size: 2.0,
        make:'bmw',
        fuel: 'petrol',
        pistons:[
            {maker: 'bmw'},
            {maker: 'bmw1'}
        ]
    },
    drive:function(){return 'drive';}
    };

let array1 = [
    'string',
    100,
    ['embed', 200],
    {car: 'ford'},
    function(){return 'drive';}
];

console.log(car5.make);
// car5 = 'string1';
// console.log(car5);
car5.make += 300;
console.log(car5.make);

car5['speed'] *= 2;
console.log(car5.speed);

car5.engine = {newEngine: 'new'};
console.log(car5.engine.newEngine);

car5.model = 'V88';
console.log(car5.model);

car5.stop = function(){return 'stop'};
console.log(car5.stop());

car5.color = 'red';
console.log(car5.color);
let deleted = delete car5.color;
console.log(deleted);
let deleted1 = delete car5.stop;
console.log(deleted1);
console.log(car5);

// Array Modification

let array2 = [
    'string',
    120,
    ['embed', 230],
    {car: 'ford'},
    function(){return 'drive';}
];

console.log(array2[0]);
console.log(array2[1] = 'string');
console.log(array2[0] += 400);
console.log(array2[5] = 'newString');
console.log(array2);
console.log(array2.length);
console.log(array2.shift());
console.log(array2.pop());
console.log(array2.unshift('test', 888, {}, []));
console.log(array2);
array2.push(8888,88888,'testing');
console.log(array2.length);
array2.splice(7, 2);
console.log(array2);
array2.splice(1, 0, 'spliceTesting');
console.log(array2);

// Callable Object
function name1() {
    let fullname = 'Tim';
    function concat(name1){
        return 'MR.' + name1;
    }
    return concat(fullname);
}
console.log(name1());

function name2(fullname) {
    return fullname.firstName + fullname.lastName;
}

// console.log(name2({firstName: 'Tim', lastName:'H'}));
function name3(fullname) {
    return fullname();
}

console.log(
    name3(function(){return 'embed';})
);

// Memory Hoisting
// console.log(myName1, printName1());

let myName1 = 'tim';

function printName1() {
    return 'HK'
}

// Scope & Closures
// scope = access
let engine = {
    maker: 'ford',
    headGasket:{
        pots:[
            'piston1',
            'piston2'
        ]
    }
};

// function runExpression(){
//     let a = 10;
//     function add(){
//         return a + 90;
//     }
//     return add();
// }
console.log(engine.headGasket.pots[1]);

// console.log(a); - not working as this is out of the function scope

function runExpression(){
    let a = 10;
    function add(b){
        return a + b;
    }
    console.log(
        add(20),
        add(90)
    );
}
runExpression();

// Inferred Global & Scope

let engine2 = {
    maker: 'Ford',
    headGasket:{
        maker:'golf',
        pots:[
            'piston1',
            'piston2'
        ]
    }
};

function runExpression1()
{
    let a = 10;
    function add()
    {
        console.log(engine2);
        console.log(a);
    }
    add();
}

runExpression1();

// This context

console.log(this);

let object = {
    prop: this,
    method: function() {return this;}
};

let array6 = [
    this, 
    function(){
        return this;
    }
];

function global(){
    return this;
}

global.call (object);

// Constructors
function User(email, name1, color, score){
    this.email = email;
    this.name1 = name1;
    this.color = color;
    this.score = score;
}
let user1 = new User(10, 20, 'red', 200);
let user2 = new User(1, 2, 'green', 20);
let user3 = new User(56, 3, 'pink', 40);
let user4 = new User(7, 28, 'blue', 300);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

// Prototype & constructions
function Apple(color, weight){
    this.color = color;
    this.weight = weight;

}

Apple.prototype = {
    eat: function(){return this},
    throw: function(){return 'throw the apple';}
};

let apple1 = new Apple('red', 99);
let apple2 = new Apple('green', 109);
let apple3 = new Apple('yellow', 299);

console.log(Apple.prototype.eat());
console.log(apple1.eat());
console.log(apple2.eat());
console.log(apple3.eat());

console.log(Apple.prototype.throw());
console.log(apple1.throw());
console.log(apple2.throw());
console.log(apple3.throw());

// comparison Operation
console.log(10 == 10);
console.log(null == undefined);
console.log(10 === '10');
console.log(null === undefined);
// != = not equal
console.log(10 !== '10');
console.log(null !== undefined);
console.log(10 > 100);
console.log(10 > 1);
console.log('helloooo' > 'hello');
console.log(10 >= 10); // >= greater than and equal to

// If Statements

let carsLeft = 1,
    carsRight = 0,
    greenLight = 'no';

if(greenLight === 'yes') 
{
    console.log('Cross the r0ad');
}
else if (greenLight === 'yes' && carsLeft === 0 || carsRight === 0) 
{
    console.log('All clear! Cross the road');
}
else
{
    console.log('Say where you are');
}
// '&&' = AND & '||' = one or another

// For & For in Loop's

// let classRegister = ['Tim', 'Vivi', 'Wendy', 'GG Master'];

// for( let i = 0; i < classRegister.length; i++)
// {
//     console.log(classRegister[i]);
// }

let classRegister = ['Tim', 'Vivi', 'Wendy', 'GG Master'];

for( let i = classRegister.length - 1; i >= 0; i--)
{
    console.log(classRegister[i]);
}

for(let index in classRegister)
{
    console.log(classRegister[index]);
}

// Let ES6

// var symbolName = 'valy=ue refernce in memory';
// let letSymbol = 'scoprd value';
// const symName = 'constant value in memory';

// if(true)
// {
//     var symbolName = 'value refernce in memory';// changing the global object as well
//     let letSymbol = 'scoprd value'; // only within the object (block{})
//     const symName = 'constant value in memory';// can't change
// }

// for(var i = 0; i < 5; i++)
// {
//     var symbolName = 'value refernce in memory';
//     let letSymbol = 'scoprd value';
//     const symName = 'constant value in memory';
// }

function check()
{
    var symbolName = 'value refernce in memory';
    let letSymbol = 'scoprd value';
    const symName = 'constant value in memory';
}
// var is still applied within function scope.

console.log(symbolName);