// #1. Golden Retriever problem:
 a. Ask entire room at once - person with GR responds
 - fast, no need to iterate, just a single call to something like a .find method
 -> Constant Time O(1)
 b. Ask each person in room one by one
 - slower, more like a loop. The more people the longer it could take. Time entirely depends on if lucky enough to hit answer sooner rather than later
 -> Linear Time O(n)? - due to worst case scenario
 
 // #2. Even or Odd:
 function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
}
-> I think this is Constant Time O(1), as there is only a single calculation to be solved (basic arithmetic)

// #3. Are you here?:
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

-> This algorithm includes nested loops, so it will take longer and longer with increased size arrays. I believe this would be Polynomial Time O(n^k)

// #4. Doubler:
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;   // same as array[i] = array[i]*2
    }
    return array;
}

-> I believe this is Linear Time O(n), as the same number of operations are occuring with every loop, making the time directly proportional to the input.

// #5. Naive Search:
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
-> This is similar to the golden retriever problem (b). Time will depend on best vs worst case scenario of finding the item. Not sure, but maybe Linear Time? (due to worst case scenario)

// #6. Creating Pairs:
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
-> Since this uses a nested for loop, I believe this is Polynomial Time O(n^k)

// #7. Compute The Sequence:
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

-> What does this algorithm do? What is its runtime complexity?
I think this computes the binary sequence for a number? Not entirely sure. Possibly Linear Time due to same number of operations each loop depending on input number.

// #8. An Efficient Search:

// #9. Random Element:

//#10. What Am I?:

// #11. Tower of Hanoi Puzzle:

// #12. Iterative version:
Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

// #13. Recursive Big O:
Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

// #14. Iterative Big O:
Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.
