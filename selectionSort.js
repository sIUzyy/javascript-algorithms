// STEPS TO IMPLEMENT SELECTION SORT
// 1. DEFINE A FUNCTION
// 2. GET THE LENGTH OF ARRAY 
// 3. USE AN OUTER LOOP TO ITERATE THROUGH EACH ELEMENT
// 4. INITIALIZED A VARIABLE TO ASSUME THE CURRENT VAL IS SMALLEST VAL
// 5. USE AN INNER LOOP TO FIND THE ACTUAL SMALLEST ELEMENT
// 6. UPDATE THE SMALLEST ELEMENT INDEX IF A SMALLER ELEMENT IF FOUND
// 7. SWAP THE ELEMENTS IF NECESSARY
// 8. RETURN THE SORTED ARRAYS
// 9. TEST THE FUNCTION

// TIPS:
// 1. GET THE LENGTH OF AN ARRAY
// 2. LOOP THROUGH IT USING OUTER AND INNER LOOP
// 3. IN OUTER LOOP MAKE SURE TO INITIALIZED A VARIABLE TO TRACK THE SMALLEST VALUE IN UNSORTED PART OF ARRAY.
// 4. IN INNER LOOP IS FINDING THE REAL SMALLEST VALUE IN ARRAY
// 5. COMPARE THE LEFT AND RIGHT ELEMENTS THEN ASSIGN THE LEFT ELEMENT TO RIGHT ELEMENT.
// 6. CHECK THE IF VARIABLE WE INITIALIZED IS NOT EQUAL TO 'i'
// 7. USE DESTRUCTING ARRAY
// 8. RETURN THE ARRAY.

// pseudo code
// const arr = [0, 9, 3, 5, 15, 10, 7] smallestVal = 0
// const arr = [0, 3, 9, 5, 15, 10, 7] smallestVal = 3
// const arr = [0, 3, 5, 9, 15, 10, 7] smallestVal = 5
// const arr = [0, 3, 5, 7, 15, 10, 9] smallestVal = 7
// const arr = [0, 3, 5, 7, 9, 10, 15] smallestVal = 9


// step 1: define a function called 'selectionSort' and pass a parameter called 'arr'
const selectionSort = (arr) => {

    // step 2: initialize a variable named 'len' and get the length of arr.
    const len = arr.length

    // step 3: The purpose of this loop is to go through each element in the array and perform the selection sort process.
    for(let i = 0; i < len; i++){ // outer loop

        // step 4: used to track the index of the smallest value found in the unsorted portion of the array.
        let minIndex = i

        // step 5: i represent the current index
        // j starts at the next element after i.
        // if i = 7, then j = 9. so on...
        for(let j = i + 1; j < len; j++){ 

            // step 6: if arr[j] is less than arr[minIndex]
            // arr[j] = 9. arr[minIndex] = 7, so on..
            if(arr[j] < arr[minIndex]){

                // if arr[j] is smaller, we updated minIndex to j. meaning we found a new minimum value.
                minIndex = j

            }
        }

            // step 7: if minIndex is not equal to i meaning we found smaller element.
            // we need to swap the current element arr[i] to arr[minIndex]
            if(minIndex !== i){

                // destructing array. left to right. 
                [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
            }

    }

    // step 8: after all the passes and swaps have been completed, the array is fully sorted.
    return arr
}

// step 9: display and invoke the selectionSort function.
console.log(selectionSort([7, 9, 3, 5, 15, 10, 0])) // output: [0, 3, 5, 7, 9, 10, 15]
