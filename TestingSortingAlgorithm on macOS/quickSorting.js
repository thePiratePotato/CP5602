const fs = require('fs');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
let results = [];
var foo = new Array(60000);

const {
    performance
} = require('perf_hooks');

var t0 = performance.now();

for (var i = 0; i < foo.length; i++) {
    getRandomness = getRandomInt(-35000, 33600);
    while (results.includes(getRandomness)) {
        getRandomness = getRandomInt(-35000, 33600);
    }
    results.push(getRandomness);
}
// Sorting function starts
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    };
    var pivot = arr[start];
    var swapIndex = start;
    for (var i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    // console.log(swapIdx)
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
            //on the left side
        quickSort(arr, left, pivotIndex - 1)
            //on the right side
        quickSort(arr, pivotIndex + 1, right)
    }
    // console.log(arr);
    return arr;
}
quickSort(results)
    // writing data
let data = results;
fs.writeFile('Output1.txt', data, err => {
    // In case of a error throw err.
    if (err) throw err;
});
var t1 = performance.now();
console.log(results);
console.log('Generate 60000 values takes ' + (t1 - t0) + ' milliseconds.');