var arr = [12, 45, 33, 22, 56, 1, 8, 3, 55, 32];
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var smallest = [Infinity, -1];
        for (var j = i; j < arr.length; j++) {
            if (arr[j] < smallest[0])
                smallest = [arr[j], j];
        }
        var smallestCount = smallest[0], smallestIndex = smallest[1];
        console.log("Smallest found for i=".concat(i, " is ").concat(smallest));
        if (smallestIndex >= 0) {
            var temp = arr[i];
            arr[i] = arr[smallestIndex];
            arr[smallestIndex] = temp;
        }
    }
    return arr;
}
console.log(selectionSort(arr));
