// #1. Golden Retriever problem:
 a. Ask entire room at once - person with GR responds
 - fast, no need to iterate, just a single call to something like a .find method
 -> Constant Time O(1)
 b. Ask each person in room one by one
 - slower, more like a loop. The more people the longer it could take. Time entirely depends on if lucky enough to hit answer sooner rather than later
 -> Linear Time O(n)? - due to worst case scenario
 -> Best case scenario - O(1) [first person you ask says yes]
 
 // #2. Even or Odd:
 function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
}
-> I think this is Constant Time O(1), as there is only a single calculation to be solved (basic arithmetic) [1 tick per function call]

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

-> This algorithm includes nested loops, so it will take longer and longer with increased size arrays. I believe this would be Polynomial Time O(n^k) --> 2 loops, so O(n^2)

// #4. Doubler:
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;   // same as array[i] = array[i]*2
    }
    return array;
}

-> I believe this is Linear Time O(n), as the same number of operations are occuring with every loop, making the time directly proportional to the input (array) length.
 -> Best case O(1) - when array.length=1

// #5. Naive Search:
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
-> This is similar to the golden retriever problem (b). Time will depend on best vs worst case scenario of finding the item.
 Linear Time (due to worst case scenario) -- similar to finding the min/max in an array
 Best case - O(1) - item=array[0]

// #6. Creating Pairs:
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
-> Since this uses a nested for loop, I believe this is Polynomial Time O(n^k) --> 2 loops, so O(n^2)

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

ex: compute(10)

/1, /2, /3, /4, /5, /6, /7, 8, 9, 10
[0, 1]

result[i-2], when i = 3
means result[1] -> position 1 in result array
([1]+ [0]) = 1
[0, 1, 1]
([1] + [1]) = 2
[0, 1, 1, 2]
([2] + [1]) = 3
[0, 1, 1, 2, 3]
([3]+ [2]) = 5
[0, 1, 1, 2, 3, 5]
([5] + [3]) = 8
...

-> What does this algorithm do? What is its runtime complexity?
FIBONACCI SEQUENCE!
One tick for each loop -> Linear Time due to same number of operations each loop depending on input size

// #8. An Efficient Search:
sorted array:

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

I think this is logarithmic time [O(log(n))]as the problem size is cut in half each time through the while loop

// #9. Random Element:

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

This is O(1) constant time - just finding a single random value doesn't involve any extra work based on size of the input

//#10. What Am I?:

What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
        // false if n is less than 2 
        // OR if the remainder of n/1 is not 0 (not a whole number)
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
       // returns false if n is divisible by any number between 2 and n
    }
    return true;
  // returns true otherwise
 // (if prime number -- if n is only divisible by 1 and n)
}

Checks if n is a prime number
O(n) - linear time? - since loop will run and check values until it either: hits a false case, or will run through the entire size of n until it can return true.


// #11. Tower of Hanoi Puzzle:

- need a way to keep track of an available rod (empty or has a larger disk on it)
- can't be original rod
*moveDisk function, *getSparePeg function

const moveDisk = function(fromPeg, toPeg) {
    //no moves allowed after a bad move
    if(badmove){
        return;
    }
    
    var triedFromPeg = fromPeg;
    var triedToPeg = toPeg;
    fromPeg = convertLetterToPeg(fromPeg);
    toPeg = convertLetterToPeg(toPeg);
    
    var validmove=true;
    var badMoveMessage="";
    if(fromPeg === null){
        validmove=false;
        badMoveMessage = "'"+triedFromPeg+"' is not a valid peg";    
        badMoveMessage += "\nvalid peg names are 'A','B' or 'C'";
        badmove=true;
    }
    else if(toPeg === null){
        validmove=false;
        badMoveMessage = "'"+triedToPeg+"' is not a valid peg";
        badMoveMessage += "\nvalid peg names are 'A','B' or 'C'";
        badmove=true;    
    }
    else if(fromPeg.countDisks() === 0){ 
        validmove=false;
        badMoveMessage = "You attempted to move a disk from peg "+ fromPeg.letter;
        badMoveMessage += " but that peg\nwas empty";
        badmove=true;
    }
    else if(toPeg.countDisks() > 0 && fromPeg.getTopDisk().number > toPeg.getTopDisk().number ){
        validmove=false;
        badMoveMessage = "You attempted to move disk "+fromPeg.getTopDisk().number +" from peg ";
        badMoveMessage += fromPeg.letter + " onto disk " + toPeg.getTopDisk().number + " on peg "; 
        badMoveMessage += toPeg.letter +"\nIt is against the rules to move larger disks onto smaller disks";
        badmove=true;
    }
    if(!validmove){
        badMoveMessage += "\nFurther calls to the moveDisk function will be blocked.";
        badMoveMessage += "\nPress 'Restart' to be able to call the function again.";
    }
    
    var nowFrame = objects.getWorkingFrame();
    var duration = WINDOW_SIZE * 3 / (16 * 4);
    
    var workingDisk= null;
    if(fromPeg !== null){ workingDisk = fromPeg.getTopDisk();}
    var numOnToPeg= null;
    if(toPeg !== null){ numOnToPeg = toPeg.disks.length; }

    objects.timeline.addEvent(nowFrame, duration, function() {
        
        //reject invalid moves
        if(!validmove){
            return;
        }
        
        objects.scene.draggingSprite = objects.scene.sprites.indexOf(workingDisk);
        
        var destY = toPeg.y + toPeg.h - (workingDisk.h+0.1) * (numOnToPeg + 1);
        var changeInY = destY - workingDisk.y;
        var yIncrament = changeInY / (duration - (frame - nowFrame - 4));

        var destX = toPeg.x + toPeg.w / 2 - workingDisk.w / 2;
        var changeInX = destX - workingDisk.x;
        var xIncrament = changeInX / (duration - (frame - nowFrame - 4));

        workingDisk.translate(xIncrament, yIncrament);
        
    }, function() {
        
        //reject invalid moves, and announce them
        if(!validmove){
            println(badMoveMessage);
            return;
        }
        
        println(fromPeg.letter + " -> "+toPeg.letter);
        
        //move disk to final position
        workingDisk.x = toPeg.x + toPeg.w / 2 - workingDisk.w / 2;
        var disksUnder = numOnToPeg;
        workingDisk.y = toPeg.y + toPeg.h - (workingDisk.h+0.1) * (disksUnder + 1);
        
    });
    objects.workingFrame = nowFrame + duration + 1;
    objects.updateWorkingFrame(objects.workingFrame);
    
    if(validmove){
        var workingDisk = fromPeg.getTopDisk();
        workingDisk.moveToPeg(toPeg);
    }
    
};

const getSparePeg = function(peg1, peg2) {
    peg1 = convertLetterToPeg(peg1);
    peg2 = convertLetterToPeg(peg2);
    if(peg1 === null || peg2 === null){ return null; }
    var sparePegIndex = 3 - (peg1.number - 1) - (peg2.number - 1);
    return objects.pegs[sparePegIndex].letter;
};

const solveHanoi = function(numDisks, fromPeg, toPeg) {
    // base case:  no disks to move
    if(numDisks === 0) {
        return 0;
    }
    // recursive case:
    // find empty peg
    var sparePeg = hanoi.getSparePeg(fromPeg, toPeg);
    // recursively move all disks to the sparePeg
    solveHanoi(numDisks-1, fromPeg, sparePeg);
    // move the bottom disk to the second peg
    hanoi.moveDisk(fromPeg, toPeg);
    // recursively move all the disks from the sparePeg to the second peg on top of the bottom disk
    solveHanoi(numDisks-1, sparePeg, toPeg);
};

** O(2^n) - exponential time. Recursive calls increase exponentially depending on how many disks are being moved.


// #12. Iterative version:
Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

// #13. Recursive Big O:
Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

// #14. Iterative Big O:
Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.
