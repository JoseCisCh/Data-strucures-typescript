let arr = [12,45,33,22,56,1,8,3,55,32];

function selectionSort(arr: any[]) {
    for(let i =0; i< arr.length; i++) {
        let smallest: number[] = [Infinity, -1];
        for(let j=i; j<arr.length; j++) {
            if(arr[j] < smallest[0]) smallest = [arr[j], j];
        }
        const [smallestCount, smallestIndex] = smallest;
        console.log(`Smallest found for i=${i} is ${smallest}`)
        if(smallestIndex >= 0) {
            let temp = arr[i];
            arr[i] = arr[smallestIndex];
            arr[smallestIndex] = temp;

        }
    }

    return arr;
}

console.log(selectionSort(arr));