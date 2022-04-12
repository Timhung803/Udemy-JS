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