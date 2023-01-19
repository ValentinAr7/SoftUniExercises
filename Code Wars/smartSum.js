const smartSum = (...args) => args.reduce
((s, a) => s + (Number.isInteger(a) ? a : smartSum(...a)), 0);

//This function uses (...) to gather all the arguments into an array. It uses Array.reduce() method to iterate through the array of arguments (arga) and add the sum of the elements in the array.

// The function checks if the current element a is an integer using Number.isInteger(a) method. If it is an integer, it adds the element to the accumulated sum, s.


smartSum(1,2,3,[4,5],6)