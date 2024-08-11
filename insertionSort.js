// STEP TO IMPLEMENT INSERTION SORT
// 1. Function Declaration 
// 2. Start the outer loop i = 1
// 3. Store the current Element 
// 4. Set up inner loop pointer 
// 5. Inner while loop: shifting elements
// 6. Insert the current element
// 7. return the sorted array

// pseudo code
// const arr = [2, 4, 7, 9, 14, 23] valToInsert = 7

const insertionSort = (arr) =>{
    
    // get the length of an arr.
    const len = arr.length
    
    // i = 1 bcz we're gonna be going backwards
    for(let i = 1; i < len; i++){
        
        // holds the value of the element at index 'i'.
        let currElem = arr[i]
     
        // example when 'i' is at index 5. the i - 1 sets to 'j' is at index 4.
        let j = i - 1
    
        // if 'j' is greater than 0
        // if the element of arr[j] is greater than currElem
        while(j >= 0 && arr[j] > currElem){
            
            // if condition is true we do shifting
            
            // shift to the right
            // if 7 is smaller, we shift '23' to right using this:
            arr[j + 1] = arr[j]
            
            // we decrement 'j' to continue moving left in the array.
            j--
            
        }
        
        // now currElem is 7 and we want to insert it at the correct position which is index 4.
        arr[j + 1] = currElem
        
    }
    
    return arr
    
}


insertionSort([2, 4, 9, 14, 23, 7]) // output: 2, 4, 9, 14, 7, 23
