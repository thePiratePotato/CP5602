// const arr1 = [1, -12, 231, 123, 122, 43, 5, 657, 87876]
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j < i && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    console.log(arr); //return val
}
// insertionSort(arr1);