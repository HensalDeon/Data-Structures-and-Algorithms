const array = [8, 20, -2, 4, -6];

function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped === true);
    return array;
}
console.log(bubbleSort(array));

//Recursive bubble sort
function recursiveBubbleSort(array, length = array.length) {
    if (length === 1) {
        return array;
    }

    let swapped = false;
    for (let i = 0; i < length - 1; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            swapped = true;
        }
    }

    // If any elements were swapped, continue sorting
    if (swapped) {
        // Recursive call with a reduced length
        return recursiveBubbleSort(array, length - 1);
    } else {
        // If no elements were swapped, the array is already sorted
        return array;
    }
}
console.log(recursiveBubbleSort(array));
