function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    for (let i=0; i < arr.length; i +=2)
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    for (let i=arr.length-1; i > arr.length; i -=2){
        if (i % 2 ===1) {
        console.log(arr[i])
    }
}
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    for (let i=0; i < arr.length; i++){
        if (i % 2 === 0) {
            console.log(arr[1]);
        }
    }
}

function nthPower(arr, n) {
    for (let i=0; i< arr.length; i++)
    if (i % n === 0) {
        console.log(arr[i]);
    }
    // Return an array containing all indices that are powers of n
    // Your code here
}

function firstHalf(arr) {
    for (let i=0; i < arr.length/2; i++) {
        console.log(arr[i]);
    }
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
}

function secondHalf(arr) {
    for (let i= arr.length-1; i > arr.length /2 ; i--){
        console.log(arr[i]):
    }
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
