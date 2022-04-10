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