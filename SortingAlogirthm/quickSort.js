// const arr1 = [100, 23, 231, 2, 12, 1, 23, 5, 4, 67, 58]

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
// quickSort(arr1)
// console.log(arr1)