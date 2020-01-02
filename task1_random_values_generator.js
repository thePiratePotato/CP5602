const fs = require('fs');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
let results = [];
var foo = new Array(60000);

const { performance } = require('perf_hooks');

var t0 = performance.now();

for (var i = 0; i < foo.length; i++) {
    getRandomness = getRandomInt(-35000, 33600);
    // while (results.includes(getRandomness)) {
    //     getRandomness = getRandomInt(-35000, 33600);
    // }
    // results.push(getRandomness);
}
let data = results;
fs.writeFile('Output.txt', data, err => {
    // In case of a error throw err.
    if (err) throw err;
});

var t1 = performance.now();
console.log(results);
console.log('Generate 60000 values takes ' + (t1 - t0) + ' milliseconds.');