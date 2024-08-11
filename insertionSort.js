// STEP TO IMPLEMENT INSERTION SORT
// 1. Function Declaration 
// 2. Start the outer loop i = 1
// 3. Store the current Element 
// 4. Set up inner loop pointer 
// 5. Inner while loop: shifting elements
// 6. Insert the current element
// 7. return the sorted array

// TIPS
// 1. GET THE LENGTH OF AN ARRAY
// 2. LOOP THROUGH LENGTH OF ARRAY BUT START AT 1 BECAUSE WE ARE GOING BACKWARDS
// 3. INITIALIZE A VARIABLE TO HOLD THE VALUE OF 'i'
// 4. INITIALIZE A VARIABLE FOR INNER LOOP THAT WILL COMPARE TO VARIABLE IN NUMBER 3.
// 5. WHILE LOOP. CHECK IF THE LEFT VALUE IS GREATER THAN RIGHT VAL
// 6. DO SHIFTING FROM LEFT TO RIGHT
// 7. NOW FIX THE POSITION OF VARIABLE YOU INITIALIZE IN NUMBER 3
// 8. RETURN THE ASSORTED ARRAY.

// pseudo code
// const arr = [2, 4, 7, 9, 14, 23] valToInsert = 7

const insertionSort = (arr) => {
    const len = arr.length
    
    for(let i = 1; i < len; i++){
        
        // the currentVal holds the value of 'i'
        let currentVal = arr[i]
        
        // the leftIdx holds the index of 'i' minus 1
        let leftIdx = i - 1
        
        // check if lefIdx is greater than 0
        // check if the value of 'arr[leftIdx]' is greater than 'currentVal'
        while(leftIdx >= 0 && arr[leftIdx] > currentVal){
            
            // if yes, then do shifting.
            // shift the arr[leftIdx] to right
            // from index '3' to index '4'
            arr[leftIdx + 1] = arr[leftIdx]
            
            // decremment the lefIdx to move to left.
            leftIdx--
            
        }
        
        // correcting the position of currentVal
        // from index '4' to index '3'
        arr[leftIdx + 1] = currentVal
        
    }
    
    return arr
}

console.log(insertionSort([12,11,13,5,6]))
