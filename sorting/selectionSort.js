//selection sort
function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array
}
console.log(selectionSort(array));

//recursive selection sort
function recursiveSelectionSort(array, i) {
    if (i > array.length - 1) {
        return array;
    }

    let j = i + 1;
    while (j < array.length) {
        if (array[i] > array[j]) {
            [array[i], array[j]] = [array[j], array[i]];
        }
        j++;
    }

    return recursiveSelectionSort(array, i + 1);
}
console.log(recursiveSelectionSort(array, (i = 0)));
