// STEPS TO IMPLEMENT BUBBLE SORT
// 1. Define a function 
// 2. Get the array length
// 3. Outer Loop
// 4. Inner Loop 
// 5. Compare and Swap
// 6. Return the sorted Array.

// pseudo iteration
// first iteration - [3, 2, 6, 1, 11]
// second iteration - [2, 3, 1, 6, 11]
// third iteration - [2, 1, 3, 6, 11]
// fourth iteration - [1, 2, 3, 6, 11]

// defines a function named 'bubbleSort'
const bubbleSort = (arr) => {

    // initialize 'len' variable with the length of 'arr'.
    const len = arr.length;

    // the loop starts with i = 0 and continues until i reaches 'len', where len is the total number of elements in the array.
    for(let i = 0; i < len; i++){ // outer loop

        // The len - i - 1 ensures that you don’t compare elements that are already in their right places.
        for(let j = 0; j < len - i - 1; j++){ // inner loop
            
            // if left 'arr[j]' is greater than right 'arr[j+1]'. then swap.
            // arr[j] = is the current element at the current index 'j'. 
            // arr[j + 1] = is the element right next to it at the index j + 1.
            // example arr[j] = '3' which is index 0.
            // example arr[j+1] = '6' which is index 1.
            if(arr[j] > arr[j + 1]){

                // array destructing. swapping elements in an array.
                // arr[j] = 'left'.
                // arr[j+1] = 'right'.
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    // after all the passes and swaps have been completed, the array is fully sorted.
    return arr
}

// invoke the function bubbleSort and pass an argument.
console.log(bubbleSort([3, 6, 2, 11, 1])); // output: [ 1, 2, 3, 6, 11 ]


