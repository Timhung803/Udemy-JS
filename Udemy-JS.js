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


let car = {
    color: 'red',
    speed: 300,
    drive: function() {
        return 'drive';
    }
};

let shoppingList = ['Apple', 'Orange', 'Peer'
];